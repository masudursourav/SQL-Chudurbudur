"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Compass,
  Database,
  Flag,
  Lightbulb,
  Loader2,
  MapPin,
  MessageCircle,
  Play,
  RotateCcw,
  Sparkles,
  Table2,
  Terminal,
  Trophy,
  X,
} from 'lucide-react';
import { CertificateCard } from '@/components/game/certificate';
import {
  ChachaCharacter,
  ChachiCharacter,
  DancingRickshaw,
  SparkleTrail,
} from '@/components/game/animated-characters';
import {
  HeroDancer,
  SarcasmBadge,
  VillainCharacter,
} from '@/components/game/cinema-extras';
import {
  SceneBackdrop,
  SCENE_LABELS,
  TraditionalWatermark,
} from '@/components/game/scene-backdrops';
import {
  BoatMotif,
  LotusDivider,
  MangoCorner,
  PalmMotif,
  PosterBurst,
} from '@/components/game/bangla-decor';
import { executeQuery, stripLiterals, type QueryErrorCode, type QueryResult } from '@/lib/db';
import { playFailedAudio, playSuccessAudio, playWriteQueryAudio } from '@/lib/audio';
import { LEVELS, STORY_ARCS, type StoryArc } from '@/lib/levels';
import { TABLES_INFO } from '@/lib/schema';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'ddq-progress-v2';
const ERROR_LABELS: Record<QueryErrorCode, string> = {
  empty: 'Empty query',
  'multiple-statements': 'Multiple statements',
  'non-select': 'SELECT only',
  'write-operation': 'Read-only sandbox',
  syntax: 'Syntax error',
  engine: 'Database error',
};
type Verdict = 'idle' | 'correct' | 'incorrect';

interface Progress { done: number[]; name: string }
interface Region {
  key: string;
  points: string;
  label: [number, number];
  levels: number[];
}

const SARCASM_BY_GUIDE: Record<string, number> = {
  Chachchu: 4,
  Golapi: 3,
  Bouma: 5,
  'Jamai Babu': 4,
  'Doctor Babu': 3,
  Rani: 4,
  Hena: 2,
  Mama: 3,
  'Hero Alam': 5,
  'Raja Saheb': 5,
  Tomal: 5,
  Priya: 5,
  Sidekick: 5,
  'Candidate No. 1': 5,
  'The Opponent': 5,
};

const sarcasmFor = (guide: string) => SARCASM_BY_GUIDE[guide] ?? 3;

const REGION_SHAPES = [
  { key: 'Rangpur', points: '90,40 190,52 180,118 85,106', label: [137, 80] as [number, number] },
  { key: 'Mymensingh', points: '195,57 292,72 282,142 188,122', label: [240, 100] as [number, number] },
  { key: 'Sylhet', points: '298,78 382,98 372,168 288,148', label: [335, 122] as [number, number] },
  { key: 'Rajshahi', points: '74,116 176,128 166,212 68,197', label: [121, 166] as [number, number] },
  { key: 'Dhaka', points: '182,132 278,146 268,228 173,218', label: [225, 181] as [number, number] },
  { key: 'Khulna', points: '78,207 164,222 154,308 72,293', label: [118, 258] as [number, number] },
  { key: 'Barishal', points: '174,228 262,240 252,326 166,314', label: [212, 279] as [number, number] },
  { key: 'Chittagong', points: '274,174 368,180 358,326 264,314', label: [312, 250] as [number, number] },
];

// Region → levels is derived from each level's division, so new levels map automatically.
const REGIONS: Region[] = REGION_SHAPES.map((r) => ({
  ...r,
  levels: LEVELS.filter((l) => l.division === r.key).map((l) => l.id),
}));

export default function Home() {
  const [levelId, setLevelId] = useState(1);
  const [completed, setCompleted] = useState<number[]>([]);
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<QueryResult | null>(null);
  const [previewName, setPreviewName] = useState<string | null>(null);
  const [exampleResult, setExampleResult] = useState<QueryResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [errorCode, setErrorCode] = useState<QueryErrorCode | null>(null);
  const [verdict, setVerdict] = useState<Verdict>('idle');
  const [lang, setLang] = useState<'en' | 'bn'>('bn');
  const [showCert, setShowCert] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSchema, setShowSchema] = useState(false);
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [bootError, setBootError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const editorRef = useRef<HTMLTextAreaElement>(null);

  const level = useMemo(() => LEVELS.find((l) => l.id === levelId) ?? LEVELS[0], [levelId]);
  const arc: StoryArc = useMemo(
    () => STORY_ARCS.find((a) => a.id === level.arcId) ?? STORY_ARCS[0],
    [level],
  );
  const isFirstOfArc = arc.levelIds[0] === level.id;
  const isDone = (id: number) => completed.includes(id);
  const allDone = completed.length === LEVELS.length;
  const progress = Math.round((completed.length / LEVELS.length) * 100);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved: Progress = JSON.parse(raw);
        const valid = new Set(LEVELS.map((l) => l.id));
        if (Array.isArray(saved.done)) {
          setCompleted([...new Set(saved.done.filter((n) => typeof n === 'number' && valid.has(n)))]);
        }
        if (typeof saved.name === 'string') setName(saved.name);
      }
    } catch { /* ignore */ }
    setLoaded(true);
    executeQuery('SELECT 1 AS ok').then((out) => {
      if (out.ok) setReady(true); else setBootError(out.error);
    });
  }, []);

  useEffect(() => {
    if (!loaded) return; // don't overwrite saved progress before it has loaded
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ done: completed, name }));
  }, [completed, name, loaded]);

  useEffect(() => {
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
  }, [lang]);

  useEffect(() => {
    let cancelled = false;
    setExampleResult(null);
    executeQuery(level.example.sql).then((out) => {
      if (!cancelled && out.ok) setExampleResult(out.result);
    });
    return () => { cancelled = true; };
  }, [level]);

  const run = useCallback(async () => {
    setVerdict('idle');
    setShowHint(false);
    setError(null);
    setErrorCode(null);
    setPreviewName(null);
    const out = await executeQuery(query);
    if (!out.ok) {
      setResult(null);
      setError(out.error);
      setErrorCode(out.code);
      if (out.code === 'write-operation') playWriteQueryAudio();
      else playFailedAudio();
      return;
    }
    setResult(out.result);
    const pass = out.result.columns.length > 0 && level.validate(out.result, stripLiterals(query));
    setVerdict(pass ? 'correct' : 'incorrect');
    if (pass) {
      playSuccessAudio();
      setCompleted((prev) => (prev.includes(level.id) ? prev : [...prev, level.id]));
    } else {
      playFailedAudio();
    }
  }, [query, level]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        void run();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [run]);

  const goto = (id: number) => {
    setLevelId(id);
    setQuery('');
    setResult(null);
    setPreviewName(null);
    setError(null);
    setErrorCode(null);
    setVerdict('idle');
    setShowHint(false);
  };

  const visitRegion = (region: Region) => {
    goto(region.levels.find((id) => !isDone(id)) ?? region.levels[0]);
  };

  // Show a table's data ONLY in the evidence board. The answer editor is never touched,
  // so learners still have to write the SQL themselves.
  const previewTable = async (table: string) => {
    const q = `SELECT * FROM ${table} LIMIT 5;`;
    setVerdict('idle');
    setError(null);
    setErrorCode(null);
    const out = await executeQuery(q);
    if (out.ok) {
      setResult(out.result);
      setPreviewName(table);
    } else {
      setError(out.error);
      setErrorCode(out.code);
    }
  };

  const resetAll = () => {
    if (!window.confirm('Reset all progress and start the journey over?')) return;
    setCompleted([]);
    setName('');
    setQuery('');
    setResult(null);
    setPreviewName(null);
    setError(null);
    setErrorCode(null);
    setVerdict('idle');
    setLevelId(1);
    setShowCert(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  const next = () => {
    const i = LEVELS.findIndex((l) => l.id === level.id);
    if (i < LEVELS.length - 1) goto(LEVELS[i + 1].id);
  };

  const regionStatus = (region: Region) => {
    if (region.levels.every((id) => isDone(id))) return 'done' as const;
    if (region.levels.includes(level.id)) return 'current' as const;
    return 'open' as const;
  };

  const lineCount = query.split('\n').length;

  if (showCert && allDone) {
    return (
      <CertificateCard
        name={name}
        completedAt={new Date().toISOString()}
        onClose={() => setShowCert(false)}
        onNameChange={setName}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* ── Poster header ──────────────────────────────────── */}
      <header className="sticky top-0 z-30 bg-[#006a4e] text-white shadow-[0_6px_0_0_#e63946]">
        <div className="canopy-stripes h-2 w-full" />
        <div className="mx-auto flex h-[72px] max-w-[1700px] items-center gap-4 px-4 sm:px-6">
          <div className="relative flex items-center gap-3">
            <div className="relative h-8 w-12 overflow-hidden rounded-[3px] border-2 border-white/70 shadow">
              <div className="absolute inset-0 bg-[#006a4e]" />
              <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e63946]" />
            </div>
            <div>
              <div className={cn('poster-title max-w-[230px] truncate text-base font-extrabold uppercase leading-tight tracking-tight sm:max-w-none sm:text-xl', lang === 'bn' && 'font-bengali')}>
                {lang === 'bn' ? 'SQL চুদুরবুদুর' : 'SQL Chudurbudur'}
              </div>
              <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#f4c542]">
                {lang === 'bn' ? 'হেনা পাইলাম না, SQL শিখলাম' : 'FOUND NO HENA, LEARNED SOME SQL'}
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border-2 border-white/40 bg-black/15 px-3 py-1.5 text-[11px] font-semibold sm:flex">
              <span className={cn('h-2 w-2 rounded-full', ready ? 'bg-[#f4c542]' : bootError ? 'bg-rose-400' : 'bg-white animate-pulse')} />
              {ready ? 'SQLite ready' : bootError ? 'Engine error' : 'Starting…'}
            </div>
            <div className="flex items-center gap-2 rounded-full border-2 border-[#f4c542] bg-[#f4c542] px-3 py-1.5 text-[#2b1d16]">
              <Trophy className="h-3.5 w-3.5" />
              <span className="text-[11px] font-extrabold">{completed.length}/{LEVELS.length}</span>
              <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#2b1d16]/20">
                <div className="h-full rounded-full bg-[#e63946] transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'en' | 'bn')}
              className="rounded-md border-2 border-white/50 bg-white px-2 py-1.5 text-xs font-semibold text-[#2b1d16] outline-none"
              aria-label="Language"
            >
              <option value="en">English</option>
              <option value="bn">বাংলা</option>
            </select>
            <button onClick={resetAll} className="rounded-md border-2 border-white/40 p-2 transition hover:bg-white/15" title="Reset journey" aria-label="Reset journey">
              <RotateCcw className="h-4 w-4" />
            </button>
            {allDone && (
              <button onClick={() => setShowCert(true)} className="hidden items-center gap-1.5 rounded-md border-2 border-[#f4c542] bg-[#f4c542] px-3 py-1.5 text-xs font-extrabold text-[#2b1d16] transition hover:bg-yellow-300 sm:flex">
                <Award className="h-3.5 w-3.5" /> Certificate
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1700px] flex-1 flex-col lg:h-[calc(100vh-76px)] lg:min-h-0 lg:flex-none lg:flex-row">
        {/* ── Sidebar ──────────────────────────────────────── */}
        <aside className="thin-scrollbar w-full shrink-0 overflow-y-auto border-b-[3px] border-[#2b1d16] bg-[#f6e2b3]/70 p-4 lg:h-full lg:w-[345px] lg:border-b-0 lg:border-r">
          <div className="relative poster-card-sm mb-3 overflow-hidden rounded-md p-3">
            <PalmMotif className="absolute -right-2 -top-3 h-20 w-16 opacity-80" />
            <div className="relative flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#e63946]">
              <Compass className="h-3.5 w-3.5" /> Field map
            </div>
            <p className="relative mt-1 max-w-[200px] text-[11px] leading-snug text-[#5c4436]">
              Click a region to travel. Green = story complete.
            </p>
          </div>

          <div className="overflow-hidden rounded-md border-2 border-[#2b1d16] bg-[#dbead9] shadow-[3px_3px_0_0_#2b1d16]">
            <svg viewBox="0 0 420 430" className="w-full" role="img" aria-label="Map of Bangladesh divisions">
              <defs>
                <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a9d6cf" />
                  <stop offset="100%" stopColor="#79b8ae" />
                </linearGradient>
                <filter id="hl" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3.5" result="b" />
                  <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>
              <rect x="0" y="330" width="420" height="100" fill="url(#sea)" />
              <text x="210" y="396" textAnchor="middle" className="fill-[#0b5f56]" fontSize="12" fontStyle="italic" fontFamily="Georgia">Bay of Bengal</text>

              {REGIONS.map((region) => {
                const status = regionStatus(region);
                return (
                  <g key={region.key} onClick={() => visitRegion(region)} className="cursor-pointer">
                    <polygon
                      points={region.points}
                      fill={status === 'done' ? '#2a9d8f' : status === 'current' ? '#e63946' : '#d9cfae'}
                      stroke={status === 'current' ? '#2b1d16' : status === 'done' ? '#006a4e' : '#8a7c60'}
                      strokeWidth={status === 'current' ? 3.5 : 1.5}
                      strokeLinejoin="round"
                      filter={status === 'current' ? 'url(#hl)' : undefined}
                      className="transition-all duration-300 hover:brightness-105"
                    />
                    <text
                      x={region.label[0]} y={region.label[1]} textAnchor="middle"
                      fontSize="9" fontWeight="800"
                      fill={status === 'current' ? '#fff' : status === 'done' ? '#fff' : '#5c4436'}
                      className="pointer-events-none select-none"
                    >
                      {region.key}
                    </text>
                  </g>
                );
              })}
              <g transform="translate(40,300)" opacity="0.75">
                <circle r="13" fill="#fff8e7" stroke="#2b1d16" strokeWidth="1.5" />
                <path d="M0 -10 L2 -2 L10 0 L2 2 L0 10 L-2 2 L-10 0 L-2 -2 Z" fill="#e63946" />
                <text y="-16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#2b1d16">N</text>
              </g>
            </svg>
          </div>

          <div className="mt-4 flex items-center justify-around">
            <DancingRickshaw className="h-20 w-32" />
            <BoatMotif className="h-14 w-24 animate-[sway_4s_ease-in-out_infinite]" />
          </div>

          <div className="mt-4">
            <LotusDivider className="mb-3 w-full" />
            <div className="mb-2 text-center text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#e63946]">
              {STORY_ARCS.length} stories
            </div>
            <div className="space-y-2">
              {STORY_ARCS.map((a) => {
                const done = a.levelIds.filter((id) => isDone(id)).length;
                const active = a.id === arc.id;
                return (
                  <div
                    key={a.id}
                    className={cn(
                      'rounded-md border-2 p-2.5 shadow-[2px_2px_0_0_#2b1d16]',
                      active ? 'border-[#e63946] bg-[#fff3cf]' : 'border-[#2b1d16] bg-white',
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{a.icon}</span>
                      <div className="min-w-0 flex-1">
                        <div className={cn('truncate font-display text-sm font-bold', lang === 'bn' && 'font-bengali', active ? 'text-[#e63946]' : 'text-[#2b1d16]')}>
                          {lang === 'en' ? a.title : a.titleBn}
                        </div>
                        <div className="text-[9px] font-semibold uppercase tracking-wider text-[#8a7c60]">{a.tagline}</div>
                      </div>
                      <span className="text-[10px] font-extrabold text-[#006a4e]">{done}/{a.levelIds.length}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {a.levelIds.map((id) => (
                        <button
                          key={id}
                          onClick={() => goto(id)}
                          className={cn(
                            'h-6 min-w-6 rounded px-1 text-[10px] font-extrabold transition',
                            isDone(id) ? 'bg-[#006a4e] text-white' : id === level.id ? 'bg-[#e63946] text-white' : 'bg-[#2b1d16]/10 text-[#5c4436] hover:bg-[#2b1d16]/20',
                          )}
                          title={LEVELS.find((l) => l.id === id)?.title}
                        >
                          {id}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
            <MangoCorner className="mx-auto mt-4 h-16 w-16" />

            {/* DATABASE SCHEMA — learners need to know which tables exist */}
            <div className="mt-4 rounded-md border-2 border-[#2b1d16] bg-white shadow-[2px_2px_0_0_#2b1d16]">
              <button
                onClick={() => setShowSchema((v) => !v)}
                className="flex w-full items-center gap-2 border-b-2 border-[#2b1d16] bg-[#f4c542] px-3 py-2 text-left"
              >
                <Database className="h-4 w-4 text-[#2b1d16]" />
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2b1d16]">
                  ডাটাবেস · Database tables
                </span>
                <span className="ml-auto text-[10px] font-bold text-[#5c4436]">{TABLES_INFO.length} টি</span>
                <ChevronRight className={cn('h-4 w-4 text-[#2b1d16] transition-transform', showSchema && 'rotate-90')} />
              </button>
              {showSchema && (
                <div className="max-h-72 space-y-2 overflow-auto p-2 thin-scrollbar">
                  {TABLES_INFO.map((t) => (
                    <div key={t.name} className="rounded border border-[#2b1d16]/20 bg-[#fffaf0] p-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-mono text-[11px] font-bold text-[#006a4e]">{t.name}</div>
                          <div className="text-[9px] text-[#8a7c60]">{t.label} · {t.note}</div>
                        </div>
                        <button
                          onClick={() => void previewTable(t.name)}
                          className="shrink-0 rounded border border-[#2b1d16] bg-[#f4c542] px-1.5 py-0.5 text-[9px] font-extrabold text-[#2b1d16] hover:bg-yellow-300"
                          title={`${t.name} টেবিলের ৫টি সারি দেখো — ক্যোয়ারি এডিটর বদলাবে না`}
                        >
                          দেখো ▸
                        </button>
                      </div>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {t.columns.map((c) => (
                          <span key={c} className="rounded bg-[#006a4e]/10 px-1 py-0.5 font-mono text-[9px] text-[#006a4e]">{c}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </aside>

        {/* ── Main story panel ─────────────────────────────── */}
        <main className="thin-scrollbar relative min-h-0 min-w-0 flex-1 overflow-y-auto px-4 py-6 sm:px-10 sm:py-9">
          <div className="relative min-h-full">
            {['cinema', 'priyotoma', 'rajkumar', 'leader'].includes(arc.id) && (
              <img
                src="/cinema-poster.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.14]"
              />
            )}
            <TraditionalWatermark arcId={arc.id} className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
            <div className="relative mx-auto max-w-4xl">
            {/* chapter movie-poster banner */}
            <div key={arc.id + level.id} className="relative mb-6 animate-[popIn_.4s_ease-out] overflow-hidden rounded-md border-[3px] border-[#2b1d16] bg-[#7a1f28] p-5 text-white shadow-[6px_6px_0_0_#2b1d16] sm:p-6">
              {/* chapter-specific hand-painted backdrop */}
              {['cinema', 'priyotoma', 'rajkumar', 'leader'].includes(arc.id) ? (
                <img src="/cinema-poster.svg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-45" />
              ) : (
                <SceneBackdrop arcId={arc.id} className="pointer-events-none absolute inset-0 opacity-40" />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#5a1620] via-[#5a1620]/85 to-transparent" />
              <div className="absolute -right-6 -top-8 opacity-20"><PosterBurst className="h-40 w-40" /></div>
              <div className="canopy-stripes absolute inset-x-0 bottom-0 h-1.5" />
              <div className="relative flex items-start gap-4">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-4 border-[#f4c542] bg-[#fff3cf] text-3xl shadow-lg">
                  {arc.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#f4c542]">
                    Chapter {arc.number} · {arc.levelIds.length} dispatches
                    <span className={cn('rounded-full border border-[#f4c542]/50 bg-black/25 px-2 py-0.5 text-[9px] normal-case tracking-normal text-[#fff3d8]', lang === 'bn' && 'font-bengali')}>
                      📍 {lang === 'bn' ? SCENE_LABELS[arc.id]?.bn : SCENE_LABELS[arc.id]?.en}
                    </span>
                  </div>
                  <h2 className={cn('poster-title mt-1 text-2xl font-extrabold uppercase leading-tight sm:text-4xl', lang === 'bn' && 'font-bengali')}>
                    {lang === 'en' ? arc.title : arc.titleBn}
                  </h2>
                  {isFirstOfArc && (
                    <p className={cn('mt-3 max-w-2xl text-sm leading-relaxed text-[#fff3d8]', lang === 'bn' && 'font-bengali')}>
                      {lang === 'en' ? arc.narrative : arc.narrativeBn}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* NPC scene */}
            <section key={level.id} className="relative mb-6 flex items-start gap-4 animate-[fadeUp_.4s_ease-out]">
              <SparkleTrail className="-inset-4" />
              <div className="relative flex h-[84px] w-[84px] shrink-0 items-end justify-center overflow-hidden rounded-full border-[4px] border-[#e63946] bg-[#fff3cf] shadow-[4px_4px_0_0_#2b1d16]">
                {/Raja Saheb|Opponent|Villain/.test(level.guide) ? (
                  <VillainCharacter className="h-[78px] w-[78px]" />
                ) : /Hero Alam|Tomal|Candidate|Dancer/.test(level.guide) ? (
                  <HeroDancer className="h-[78px] w-[78px]" />
                ) : /Chachi|Apa|Bouma|Priya|Golapi|Hena|Rani/.test(level.guide) ? (
                  <ChachiCharacter className="h-[78px] w-[78px]" />
                ) : (
                  <ChachaCharacter className="h-[78px] w-[78px]" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={cn('font-display text-xl font-bold text-[#2b1d16]', lang === 'bn' && 'font-bengali')}>
                    {lang === 'bn' ? level.guideBn : level.guide}
                  </span>
                  <span className={cn('rounded-full bg-[#006a4e] px-2 py-0.5 text-[10px] font-bold tracking-wide text-white', lang === 'bn' && 'font-bengali')}>
                    {lang === 'bn' ? level.guideRoleBn : level.guideRole}
                  </span>
                  <SarcasmBadge level={sarcasmFor(level.guide)} />
                </div>
                <div className="relative mt-2 rounded-md rounded-tl-none border-2 border-[#2b1d16] bg-white p-4 shadow-[3px_3px_0_0_#2b1d16]">
                  {/* speech tail: dark outline then white fill, pointing left at the character */}
                  <span className="absolute -left-[11px] top-6 h-0 w-0 border-y-[10px] border-r-[12px] border-y-transparent border-r-[#2b1d16]" />
                  <span className="absolute -left-[8px] top-6 h-0 w-0 border-y-[9px] border-r-[10px] border-y-transparent border-r-white" />
                  <MessageCircle className="mb-1 h-3.5 w-3.5 text-[#e63946]" />
                  <p className={cn('text-sm leading-relaxed text-[#3b2a20]', lang === 'bn' && 'font-bengali')}>
                    {lang === 'en' ? level.scene : level.sceneBn}
                  </p>
                </div>
              </div>
            </section>

            {/* worked example */}
            <section className="poster-card mb-6 overflow-hidden rounded-md">
              <div className="flex flex-wrap items-center gap-2 border-b-2 border-[#2b1d16] bg-[#f4c542] px-4 py-2.5">
                <BookOpen className="h-4 w-4 text-[#2b1d16]" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2b1d16]">
                  Field note · study this first
                </span>
                <span className="ml-auto rounded bg-[#2b1d16] px-2 py-0.5 font-mono text-[10px] text-[#f4c542]">{level.concept}</span>
              </div>
              <div className="grid gap-0 md:grid-cols-2">
                <div className="ink-panel p-5">
                  <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[12px] leading-6">{level.example.sql}</pre>
                </div>
                <div className="ruled border-t-2 border-[#2b1d16] p-5 md:border-l-2 md:border-t-0">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#e63946]">
                    <Lightbulb className="h-3.5 w-3.5" /> What to notice
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#4a372c]">{level.example.note}</p>
                  {exampleResult && exampleResult.values.length > 0 && (
                    <div className="mt-4 overflow-hidden rounded border-2 border-[#2b1d16] bg-white">
                      <div className="border-b-2 border-[#2b1d16] bg-[#dbead9] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#006a4e]">
                        Example output · {exampleResult.values.length} rows
                      </div>
                      <div className="max-h-32 overflow-auto thin-scrollbar">
                        <table className="w-full text-left text-[10px]">
                          <thead>
                            <tr>{exampleResult.columns.map((c, i) => <th key={`${c}-${i}`} className="border-b border-[#2b1d16]/20 px-2 py-1 font-bold text-[#006a4e]">{c}</th>)}</tr>
                          </thead>
                          <tbody>
                            {exampleResult.values.slice(0, 6).map((row, ri) => (
                              <tr key={ri} className="odd:bg-[#fdf3d8]/60">
                                {row.map((cell, ci) => <td key={ci} className="border-b border-[#2b1d16]/10 px-2 py-1 font-mono text-[#3b2a20]">{cell === null ? <em className="text-[#8a7c60]">NULL</em> : String(cell)}</td>)}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* your turn */}
            <section className="poster-card relative mb-5 overflow-hidden rounded-md">
              <div className="absolute right-3 top-3 opacity-30"><Sparkles className="h-8 w-8 text-[#e63946]" /></div>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#2b1d16] bg-[#006a4e] px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-[#f4c542]" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.16em]">
                    Your turn · dispatch {String(level.id).padStart(2, '0')}
                  </span>
                </div>
                <span className="rounded-full border-2 border-[#f4c542] bg-[#f4c542] px-3 py-1 font-display text-sm font-bold text-[#2b1d16]">
                  {lang === 'en' ? level.title : level.titleBn}
                </span>
              </div>
              <div className="p-5">
                <p className={cn('mb-4 text-sm font-medium leading-relaxed text-[#3b2a20]', lang === 'bn' && 'font-bengali')}>
                  {lang === 'en' ? level.story : level.storyBn}
                </p>

                {/* which tables to use — click one to preview its data */}
                <div className="mb-4 flex flex-wrap items-center gap-2 rounded border-2 border-dashed border-[#006a4e]/50 bg-[#f2fbf4] px-3 py-2">
                  <span className={cn('text-[10px] font-extrabold uppercase tracking-wider text-[#006a4e]', lang === 'bn' && 'font-bengali')}>
                    {lang === 'bn' ? 'কোন টেবিল ব্যবহার করবে:' : 'Use these tables:'}
                  </span>
                  {level.tables.map((t) => (
                    <button
                      key={t}
                      onClick={() => void previewTable(t)}
                      className="rounded border border-[#006a4e] bg-white px-2 py-1 font-mono text-[10px] font-bold text-[#006a4e] transition hover:bg-[#006a4e] hover:text-white"
                      title={`${t} টেবিলের ৫টি সারি দেখো — ক্যোয়ারি এডিটর বদলাবে না`}
                    >
                      {t} ▸
                    </button>
                  ))}
                  <span className="ml-auto text-[9px] text-[#5c8060]">{lang === 'bn' ? 'চাপ দিলে শুধু ডেটা দেখা যাবে — ক্যোয়ারি নিজে লিখতে হবে' : 'previews data only — you still write the SQL'}</span>
                </div>

                <div className="overflow-hidden rounded-md border-2 border-[#2b1d16]">
                  <div className="flex items-center justify-between border-b-2 border-[#2b1d16] bg-[#f6e2b3] px-3 py-2">
                    <div className="flex items-center gap-2 font-mono text-[11px] font-bold text-[#5c4436]">
                      <Terminal className="h-3.5 w-3.5" /> query.sql
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => setShowHint((v) => !v)} className="flex items-center gap-1 rounded border-2 border-[#2b1d16] bg-white px-2 py-1 text-[11px] font-bold text-[#2b1d16] hover:bg-[#f4c542]">
                        <Lightbulb className="h-3.5 w-3.5" /> Hint
                      </button>
                      <button
                        onClick={() => void run()}
                        disabled={!ready || verdict === 'correct'}
                        className="flex items-center gap-1.5 rounded border-2 border-[#2b1d16] bg-[#e63946] px-3 py-1.5 text-[11px] font-extrabold text-white shadow-[2px_2px_0_0_#2b1d16] transition hover:bg-[#c92d39] disabled:opacity-50"
                      >
                        <Play className="h-3 w-3 fill-current" /> Run query
                      </button>
                    </div>
                  </div>
                  <div className="flex ink-panel">
                    <div className="select-none border-r border-white/10 px-3 py-3 text-right font-mono text-[12px] leading-6 text-[#6b9b86]">
                      {Array.from({ length: Math.max(lineCount, 4) }, (_, i) => <div key={i}>{i + 1}</div>)}
                    </div>
                    <textarea
                      ref={editorRef}
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        if (verdict !== 'idle') setVerdict('idle');
                        if (error) {
                          setError(null);
                          setErrorCode(null);
                        }
                      }}
                      spellCheck={false}
                      placeholder={'-- Write your SQL here\nSELECT * FROM garment_factories;'}
                      className="min-h-[150px] w-full resize-y bg-transparent px-4 py-3 font-mono text-[12px] leading-6 outline-none placeholder:text-[#5e8a77]"
                      aria-label="SQL query editor"
                    />
                  </div>
                </div>

                {showHint && (
                  <div className="mt-3 rounded border-2 border-[#b45309] bg-[#fff3cf] px-3 py-2 text-xs font-medium text-[#7c4a12]">
                    <strong>Hint: </strong>{level.hint}
                  </div>
                )}
                <div className="mt-2 text-right text-[9px] font-bold uppercase tracking-wider text-[#8a7c60]">⌘ / Ctrl + Enter to run</div>
              </div>
            </section>

            {/* feedback */}
            {error && (
              <div className="mb-4 flex items-start gap-2 rounded border-2 border-[#e63946] bg-rose-50 px-4 py-3 text-xs font-medium text-[#8b1e28]">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <div className="min-w-0">
                  <div className="mb-1 text-[9px] font-bold uppercase tracking-wider">
                    {errorCode ? ERROR_LABELS[errorCode] : 'Query error'}
                  </div>
                  <span className="font-mono">{error}</span>
                </div>
              </div>
            )}
            {verdict === 'incorrect' && (
              <div className="mb-4 flex items-start gap-2 rounded border-2 border-[#b45309] bg-[#fff3cf] px-4 py-3 text-xs font-medium text-[#7c4a12]">
                <CircleHelp className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                The query ran, but the evidence doesn’t answer the mission yet. Compare with the field note above.
              </div>
            )}
            {verdict === 'correct' && (
              <div className="relative mb-5 flex flex-wrap items-center gap-3 overflow-hidden rounded-md border-[3px] border-[#006a4e] bg-[#dbead9] px-4 py-3 shadow-[4px_4px_0_0_#006a4e]">
                {['#e63946', '#f4c542', '#006a4e', '#2a9d8f', '#e63946', '#f4c542'].map((c, i) => (
                  <span
                    key={i}
                    className="animate-confetti absolute top-0 h-2 w-2 rounded-sm"
                    style={{ left: `${8 + i * 15}%`, backgroundColor: c, animationDelay: `${i * 0.12}s` }}
                  />
                ))}
                <CheckCircle2 className="relative h-6 w-6 text-[#006a4e]" />
                <span className="relative font-display text-base font-bold text-[#006a4e]">
                  {level.id === LEVELS.length ? 'The nation has its answer. Journey complete!' : 'Dispatch delivered. The trail continues.'}
                </span>
                <div className="relative ml-auto">
                  {level.id === LEVELS.length && allDone ? (
                    <button onClick={() => setShowCert(true)} className="flex items-center gap-1.5 rounded border-2 border-[#2b1d16] bg-[#e63946] px-3 py-1.5 text-xs font-extrabold text-white shadow-[2px_2px_0_0_#2b1d16]">
                      <Award className="h-3.5 w-3.5" /> Claim certificate
                    </button>
                  ) : (
                    <button onClick={next} className="flex items-center gap-1.5 rounded border-2 border-[#2b1d16] bg-[#006a4e] px-3 py-1.5 text-xs font-extrabold text-white shadow-[2px_2px_0_0_#2b1d16]">
                      Next dispatch <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* evidence board */}
            <section className="poster-card overflow-hidden rounded-md">
              <div className="flex items-center justify-between border-b-2 border-[#2b1d16] bg-[#2b1d16] px-4 py-2.5 text-white">
                <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider">
                  <Table2 className="h-4 w-4 text-[#f4c542]" /> Evidence board
                  {previewName && (
                    <span className="ml-1 rounded border border-[#f4c542] px-1.5 py-0.5 font-mono text-[9px] normal-case tracking-normal text-[#f4c542]">
                      preview · {previewName}
                    </span>
                  )}
                </div>
                <span className="text-[10px] text-[#f4c542]">
                  {previewName ? (
                    <button onClick={() => { setResult(null); setPreviewName(null); }} className="underline hover:text-white">
                      clear preview ✕
                    </button>
                  ) : result ? (
                    `${result.values.length} rows`
                  ) : (
                    'Awaiting your query'
                  )}
                </span>
              </div>
              <div className="max-h-[380px] min-h-[140px] overflow-auto thin-scrollbar">
                {result && result.columns.length > 0 ? (
                  <table className="w-full border-collapse text-left text-xs">
                    <thead className="sticky top-0 bg-[#f4c542]">
                      <tr>{result.columns.map((c, i) => <th key={`${c}-${i}`} className="border-b-2 border-[#2b1d16] px-4 py-2 font-extrabold text-[#2b1d16]">{c}</th>)}</tr>
                    </thead>
                    <tbody>
                      {result.values.map((row, ri) => (
                        <tr key={ri} className="odd:bg-[#fdf3d8]/60 hover:bg-[#dbead9]/60">
                          {row.map((cell, ci) => <td key={ci} className="border-b border-[#2b1d16]/15 px-4 py-2 font-mono text-[#3b2a20]">{cell === null ? <em className="text-[#8a7c60]">NULL</em> : String(cell)}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="flex h-[140px] items-center justify-center gap-2 text-xs font-semibold text-[#8a7c60]">
                    <Database className="h-4 w-4" /> Run your query to reveal the evidence
                  </div>
                )}
              </div>
            </section>

            <div className="mt-8 flex justify-center"><LotusDivider className="w-64" /></div>
            </div>
          </div>
        </main>
      </div>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="shrink-0 border-t-[6px] border-[#f4c542] bg-[#006a4e] px-4 py-5 text-white">
        <div className="canopy-stripes mb-4 h-1.5 w-full" />
        <div className="mx-auto flex max-w-[1700px] flex-col items-center justify-between gap-2 text-[11px] sm:flex-row">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-[#f4c542]" />
            Inspired by{' '}
            <a href="https://sql-island.informatik.uni-kl.de/" target="_blank" rel="noreferrer" className="font-bold text-[#f4c542] hover:underline">
              SQL Island · University of Kaiserslautern
            </a>
          </span>
          <span className="flex items-center gap-1.5">
            <Loader2 className="h-3 w-3 text-[#f4c542]" />
            Data inspired by BBS, Bangladesh Bank, IOM DTM &{' '}
            <a href="https://data.gov.bd" target="_blank" rel="noreferrer" className="font-bold text-[#f4c542] hover:underline">data.gov.bd</a>
          </span>
        </div>
      </footer>
    </div>
  );
}
