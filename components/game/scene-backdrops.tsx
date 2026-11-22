/* Hand-painted-style backdrops, one for each story. Rendered behind the chapter banner. */

type Props = { className?: string };

const ink = '#2b1d16';
const red = '#e63946';
const green = '#006a4e';
const gold = '#f4c542';
const teal = '#2a9d8f';
const wood = '#8b5a2b';

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 800 200" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      {children}
    </svg>
  );
}

/* I — cha stall / tong */
export function ChaStallScene({ className = '' }: Props) {
  return (
    <div className={className}>
      <Frame>
        <rect width="800" height="200" fill="#3a2418" />
        <rect y="150" width="800" height="50" fill="#5a3a22" />
        {/* corrugated roof */}
        <g stroke="#7a5230" strokeWidth="3" opacity="0.7">
          {Array.from({ length: 16 }, (_, i) => <line key={i} x1={i * 55} y1="0" x2={i * 55 - 20} y2="46" />)}
        </g>
        <rect y="40" width="800" height="8" fill={wood} />
        {/* hanging cups */}
        <g fill="#f3e7c8" stroke={ink} strokeWidth="1.5">
          {[80, 140, 200, 660, 720].map((x) => (
            <g key={x}>
              <path d={`M${x - 12} 90 L${x - 9} 116 L${x + 9} 116 L${x + 12} 90 Z`} />
              <path d={`M${x + 12} 98 a7 7 0 0 1 0 12`} fill="none" />
            </g>
          ))}
        </g>
        {/* clay kettle on stove */}
        <g stroke={ink} strokeWidth="2">
          <rect x="310" y="150" width="190" height="26" fill="#3a3a3a" />
          <path d="M330 150 Q340 108 405 108 Q470 108 480 150 Z" fill="#a9612e" />
          <path d="M480 128 Q510 122 505 150" fill="none" strokeWidth="6" />
          <path d="M330 128 Q300 124 305 148" fill="none" strokeWidth="6" />
          <ellipse cx="405" cy="108" rx="42" ry="9" fill="#7a4520" />
        </g>
        <g stroke="#e8d9b5" strokeWidth="3" fill="none" opacity="0.6">
          <path d="M380 96 q-14 -18 0 -36 q14 -18 0 -34" />
          <path d="M420 96 q14 -18 0 -36 q-14 -18 0 -34" />
        </g>
        {/* glasses /(charpoy) */}
        <g stroke={ink} strokeWidth="2">
          <rect x="560" y="150" width="150" height="14" fill={wood} />
          <path d="M570 164 v26 M700 164 v26" strokeWidth="5" />
          <rect x="90" y="150" width="120" height="12" fill={wood} />
        </g>
        {/* radio */}
        <g stroke={ink} strokeWidth="2">
          <rect x="100" y="112" width="62" height="38" rx="4" fill="#2f4f4f" />
          <circle cx="120" cy="131" r="11" fill={gold} />
          <path d="M145 120 h12 M145 128 h12 M145 136 h12" />
        </g>
        {/* mango leaves border */}
        <g fill={green} opacity="0.85">
          <path d="M0 0 Q40 20 70 0 Q40 34 0 28Z" />
          <path d="M800 0 Q760 20 730 0 Q760 34 800 28Z" />
        </g>
      </Frame>
    </div>
  );
}

/* Ornate rickshaw-poster border — mango leaves, flowers and a double gold frame. */
function RickshawBorder() {
  return (
    <g pointerEvents="none">
      <rect x="4" y="4" width="792" height="192" fill="none" stroke="#f4c542" strokeWidth="4" />
      <rect x="10" y="10" width="780" height="180" fill="none" stroke="#f4c542" strokeWidth="1.5" strokeDasharray="6 5" opacity="0.8" />
      {[40, 200, 400, 600, 760].map((x) => (
        <g key={x} fill="#f4c542" opacity="0.5">
          <path d={`M${x - 12} 8 Q${x} -4 ${x + 12} 8 Q${x} 18 ${x - 12} 8Z`} />
          <circle cx={x} cy="8" r="3" fill="#e63946" />
        </g>
      ))}
      {[40, 200, 400, 600, 760].map((x) => (
        <g key={'b' + x} fill="#f4c542" opacity="0.5">
          <path d={`M${x - 12} 192 Q${x} 204 ${x + 12} 192 Q${x} 182 ${x - 12} 192Z`} />
          <circle cx={x} cy="192" r="3" fill="#e63946" />
        </g>
      ))}
      <g fill="#006a4e" opacity="0.65">
        <path d="M0 0 Q46 6 70 34 Q34 20 0 44Z" />
        <path d="M800 0 Q754 6 730 34 Q766 20 800 44Z" />
        <path d="M0 200 Q46 194 70 166 Q34 180 0 156Z" />
        <path d="M800 200 Q754 194 730 166 Q766 180 800 156Z" />
      </g>
    </g>
  );
}

/* II — rickshaw-painted Bangla cinema poster wall */
export function CinemaScene({ className = '' }: Props) {
  return (
    <div className={className}>
      <Frame>
        <defs>
          <radialGradient id="cin_glow"><stop offset="0%" stopColor="#f08a24" /><stop offset="60%" stopColor="#c81e2e" /><stop offset="100%" stopColor="#6d0f1c" /></radialGradient>
        </defs>
        <rect width="800" height="200" fill="url(#cin_glow)" />
        {/* hand-painted sunburst */}
        <g stroke="#f4c542" strokeWidth="5" opacity="0.22">
          {Array.from({ length: 24 }, (_, i) => {
            const a = (i * Math.PI) / 12;
            return <line key={i} x1="400" y1="96" x2={400 + Math.cos(a) * 500} y2={96 + Math.sin(a) * 300} />;
          })}
        </g>
        {/* large stylized hero face with rickshaw-art eyes */}
        <g transform="translate(400,96)">
          <circle r="54" fill="#e8a866" stroke="#2b1d16" strokeWidth="3" />
          <path d="M-54 -12 Q0 -74 54 -12 Q40 -52 0 -54 Q-40 -52 -54 -12Z" fill="#2b1d16" />
          <path d="M-56 -16 Q0 -86 56 -16" fill="none" stroke="#f4c542" strokeWidth="4" />
          {/* big eyes */}
          <g>
            <ellipse cx="-21" cy="-2" rx="15" ry="11" fill="#fff8e7" stroke="#2b1d16" strokeWidth="2.5" />
            <ellipse cx="21" cy="-2" rx="15" ry="11" fill="#fff8e7" stroke="#2b1d16" strokeWidth="2.5" />
            <circle cx="-19" cy="-1" r="6" fill="#0f766e" stroke="#2b1d16" strokeWidth="1.5" />
            <circle cx="23" cy="-1" r="6" fill="#0f766e" stroke="#2b1d16" strokeWidth="1.5" />
            <circle cx="-19" cy="-1" r="2.5" fill="#2b1d16" />
            <circle cx="23" cy="-1" r="2.5" fill="#2b1d16" />
            <path d="M-38 -18 Q-21 -30 -4 -18 M4 -18 Q21 -30 38 -18" fill="none" stroke="#2b1d16" strokeWidth="4" strokeLinecap="round" />
          </g>
          {/* curled mustache */}
          <path d="M0 22 Q-16 10 -32 22 Q-16 32 0 26 Q16 32 32 22 Q16 10 0 22Z" fill="#2b1d16" />
          <path d="M-9 38 Q0 46 9 38" fill="none" stroke="#7a3b2e" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        {/* poster panels left & right */}
        {[
          { x: 46, c: '#0f766e', t: 'HENA', f: '#e8a866' },
          { x: 654, c: '#b45309', t: 'RAJA', f: '#f3c58f' },
        ].map((p) => (
          <g key={p.x} stroke="#2b1d16" strokeWidth="3">
            <rect x={p.x} y="34" width="100" height="132" fill={p.c} />
            <rect x={p.x + 5} y="39" width="90" height="122" fill="none" stroke="#f4c542" strokeWidth="2" />
            <circle cx={p.x + 50} cy="82" r="23" fill={p.f} />
            <path d={`M${p.x + 27} 82 Q${p.x + 50} 50 ${p.x + 73} 82 Q${p.x + 50} 108 ${p.x + 27} 82Z`} fill="#2b1d16" opacity="0.5" />
            <text x={p.x + 50} y="146" textAnchor="middle" fill="#f4c542" fontSize="16" fontWeight="900" fontFamily="Georgia">{p.t}</text>
          </g>
        ))}
        {/* bulb string & film reel */}
        <path d="M0 6 Q200 30 400 6 T800 6" fill="none" stroke="#2b1d16" strokeWidth="2" />
        {[140, 280, 520, 660].map((x) => <circle key={x} cx={x} cy="20" r="5" fill="#f4c542" />)}
        <g transform="translate(60,168)" opacity="0.9">
          <circle r="18" fill="#2b1d16" stroke="#f4c542" strokeWidth="2" />
          {[0, 72, 144, 216, 288].map((a) => <circle key={a} cx={Math.cos(a * Math.PI / 180) * 9} cy={Math.sin(a * Math.PI / 180) * 9} r="3.5" fill="#f4c542" />)}
        </g>
        <text x="400" y="34" textAnchor="middle" fill={gold} stroke="#2b1d16" strokeWidth="2" paintOrder="stroke" fontSize="22" fontWeight="900" fontFamily="Georgia" letterSpacing="3">HENA KOTHAY?</text>
        <RickshawBorder />
      </Frame>
    </div>
  );
}

/* III — Priyotoma romance, painted like a rickshaw love poster */
export function RomanceScene({ className = '' }: Props) {
  return (
    <div className={className}>
      <Frame>
        <defs>
          <radialGradient id="rglow"><stop offset="0%" stopColor="#e85a7a" /><stop offset="100%" stopColor="#8a1538" /></radialGradient>
        </defs>
        <rect width="800" height="200" fill="url(#rglow)" />
        <g stroke={gold} strokeWidth="4" opacity="0.25">
          {Array.from({ length: 18 }, (_, i) => {
            const a = (i * Math.PI) / 9;
            return <line key={i} x1="400" y1="96" x2={400 + Math.cos(a) * 460} y2={96 + Math.sin(a) * 260} />;
          })}
        </g>
        {/* floral garlands */}
        {[[120, 40], [680, 44], [200, 150], [620, 152]].map(([x, y], i) => (
          <g key={i} fill={gold} opacity="0.6">
            <circle cx={x} cy={y} r="8" />
            <circle cx={x - 8} cy={y + 6} r="5" fill={red} />
            <circle cx={x + 8} cy={y + 6} r="5" fill={red} />
            <circle cx={x} cy={y - 9} r="5" fill={red} />
          </g>
        ))}
        {/* hero & heroine with big rickshaw eyes */}
        {[
          { x: 350, f: '#e8a866', hair: '#2b1d16' },
          { x: 450, f: '#f0b98a', hair: '#3b2a20' },
        ].map((p) => (
          <g key={p.x} transform={`translate(${p.x},100)`} stroke="#2b1d16" strokeWidth="2.5">
            <circle r="28" fill={p.f} />
            <path d="M-28 -8 Q0 -46 28 -8 Q18 -34 0 -34 Q-18 -34 -28 -8Z" fill={p.hair} />
            <ellipse cx="-11" cy="0" rx="7" ry="6" fill="#fff8e7" />
            <ellipse cx="11" cy="0" rx="7" ry="6" fill="#fff8e7" />
            <circle cx="-10" cy="0" r="3.5" fill="#0f766e" />
            <circle cx="12" cy="0" r="3.5" fill="#0f766e" />
            <path d="M-7 15 Q0 21 7 15" fill="none" stroke="#b45309" />
          </g>
        ))}
        <path d="M386 140 Q400 154 414 140" fill="none" stroke={gold} strokeWidth="4" />
        <text x="400" y="34" textAnchor="middle" fill="#fff3cf" stroke="#7a1538" strokeWidth="2" paintOrder="stroke" fontSize="24" fontWeight="900" fontFamily="Georgia" letterSpacing="3">PRIYOTOMA</text>
        <RickshawBorder />
      </Frame>
    </div>
  );
}

/* IV — Rajkumar action */
export function ActionScene({ className = '' }: Props) {
  return (
    <div className={className}>
      <Frame>
        <defs>
          <linearGradient id="asky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7c2d12" /><stop offset="100%" stopColor="#1c1917" /></linearGradient>
        </defs>
        <rect width="800" height="200" fill="url(#asky)" />
        {/* sunburst */}
        <g stroke={gold} strokeWidth="6" opacity="0.25">
          {Array.from({ length: 20 }, (_, i) => {
            const a = i * Math.PI / 10;
            return <line key={i} x1="400" y1="70" x2={400 + Math.cos(a) * 420} y2={70 + Math.sin(a) * 420} />;
          })}
        </g>
        <circle cx="400" cy="70" r="40" fill={gold} opacity="0.35" />
        {/* city skyline */}
        <g fill="#0c0a09" opacity="0.9">
          {[40, 110, 180, 250, 540, 610, 690, 760].map((x, i) => (
            <rect key={x} x={x} y={120 - (i % 3) * 22} width="56" height="80" />
          ))}
        </g>
        {/* hero silhouette with sunglasses */}
        <g transform="translate(400,120)" fill="#0c0a09">
          <circle cy="-28" r="18" />
          <rect x="-15" y="-34" width="30" height="8" rx="2" fill="#111" stroke={gold} strokeWidth="1" />
          <path d="M-34 80 Q-30 4 0 -4 Q30 4 34 80Z" />
        </g>
        {/* dust */}
        <g fill={gold} opacity="0.5">
          <circle cx="330" cy="184" r="5" /><circle cx="470" cy="188" r="7" /><circle cx="300" cy="190" r="3" />
        </g>
        {/* bold hand-painted title */}
        <text x="400" y="52" textAnchor="middle" fill={gold} stroke="#2b1d16" strokeWidth="2" paintOrder="stroke" fontSize="30" fontWeight="900" fontFamily="Georgia" letterSpacing="4">RAJKUMAR</text>
        <RickshawBorder />
      </Frame>
    </div>
  );
}

/* V — election satire */
export function ElectionScene({ className = '' }: Props) {
  return (
    <div className={className}>
      <Frame>
        <rect width="800" height="200" fill="#12322a" />
        {/* Bangladesh flags */}
        {[90, 260, 540, 710].map((x) => (
          <g key={x} stroke={ink} strokeWidth="2">
            <line x1={x} y1="0" x2={x} y2="120" stroke="#cbb89a" />
            <rect x={x} y="6" width="56" height="36" fill={green} />
            <circle cx={x + 28} cy="24" r="11" fill={red} />
          </g>
        ))}
        {/* campaign posters */}
        {[160, 360, 600].map((x, i) => (
          <g key={x} stroke={ink} strokeWidth="2">
            <rect x={x} y="60" width="110" height="80" fill={i === 1 ? gold : '#f1e6c8'} />
            <circle cx={x + 55} cy="94" r="16" fill="#d9a066" />
            <path d={`M${x + 28} 132 Q${x + 55} 106 ${x + 82} 132Z`} fill={green} />
          </g>
        ))}
        {/* ballot box */}
        <g transform="translate(400,150)" stroke={ink} strokeWidth="2">
          <rect x="-46" y="-34" width="92" height="52" fill="#e7dcc0" />
          <rect x="-24" y="-46" width="48" height="12" fill={wood} />
          <path d="M-14 -8 h28" strokeWidth="4" />
        </g>
        {/* crowd */}
        <g fill="#0b1f1a" opacity="0.9">
          {Array.from({ length: 13 }, (_, i) => (
            <g key={i}><circle cx={30 + i * 62} cy="168" r="9" /><path d={`M${18 + i * 62} 200 Q${30 + i * 62} 180 ${42 + i * 62} 200Z`} /></g>
          ))}
        </g>
      </Frame>
    </div>
  );
}

/* VI — garment mills */
export function GarmentScene({ className = '' }: Props) {
  return (
    <div className={className}>
      <Frame>
        <rect width="800" height="200" fill="#20303a" />
        {/* fabric rolls */}
        {[60, 180, 300, 500, 620, 740].map((x, i) => (
          <g key={x} stroke={ink} strokeWidth="2">
            <rect x={x} y="120" width="70" height="60" rx="6" fill={[red, teal, gold, green, '#7c3aed', '#0891b2'][i]} />
            <ellipse cx={x + 35} cy="120" rx="35" ry="10" fill="#e8dcc0" />
          </g>
        ))}
        {/* sewing machines */}
        {[[250, 150], [600, 150]].map(([x, y], i) => (
          <g key={i} transform={`translate(${x},${y})`} stroke={ink} strokeWidth="2" fill={i ? '#cbd5e1' : '#e2b05a'}>
            <rect x="-46" y="-16" width="92" height="14" rx="3" />
            <path d="M-30 -16 v-24 h50 v10 h-30" fill="none" />
            <circle cx="34" cy="-36" r="12" fill="none" />
            <path d="M-10 -40 l6 24" strokeWidth="3" />
          </g>
        ))}
        {/* hanging threads */}
        <g stroke={gold} strokeWidth="1.5" fill="none" opacity="0.6">
          {[140, 370, 430, 690].map((x) => <path key={x} d={`M${x} 0 q12 30 0 60 q-12 30 0 60`} />)}
        </g>
      </Frame>
    </div>
  );
}

/* VII — port & remittance */
export function PortScene({ className = '' }: Props) {
  return (
    <div className={className}>
      <Frame>
        <defs><linearGradient id="psea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e5f74" /><stop offset="100%" stopColor="#0d3548" /></linearGradient></defs>
        <rect width="800" height="200" fill="url(#psea)" />
        <circle cx="660" cy="46" r="30" fill={gold} opacity="0.5" />
        {/* cranes */}
        <g stroke={ink} strokeWidth="4" fill="none" opacity="0.85">
          {[150, 480].map((x) => (
            <g key={x}>
              <path d={`M${x} 160 V40 h70`} />
              <path d={`M${x} 40 L${x + 70} 90`} />
              <line x1={x + 70} y1="40" x2={x + 70} y2="110" />
            </g>
          ))}
        </g>
        {/* cargo ship */}
        <g transform="translate(400,150)" stroke={ink} strokeWidth="2">
          <path d="M-150 0 h300 l-30 34 h-240Z" fill="#7f1d1d" />
          <rect x="-90" y="-30" width="60" height="30" fill="#ddd6c4" />
          <rect x="-20" y="-44" width="50" height="44" fill="#ddd6c4" />
          <rect x="60" y="-24" width="70" height="24" fill="#ddd6c4" />
        </g>
        {/* waves */}
        <g stroke="#8ed0cf" strokeWidth="2" fill="none" opacity="0.7">
          {[172, 184, 196].map((y) => <path key={y} d={`M0 ${y} q25 -8 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0`} />)}
        </g>
        {/* money notes */}
        <g fill={green} stroke={gold} strokeWidth="1.5" opacity="0.85">
          <rect x="60" y="30" width="46" height="24" rx="2" transform="rotate(-12 60 30)" />
          <rect x="700" y="70" width="46" height="24" rx="2" transform="rotate(14 700 70)" />
        </g>
      </Frame>
    </div>
  );
}

/* VIII — monsoon */
export function MonsoonScene({ className = '' }: Props) {
  return (
    <div className={className}>
      <Frame>
        <defs><linearGradient id="msky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#334155" /><stop offset="100%" stopColor="#0f2a3d" /></linearGradient></defs>
        <rect width="800" height="200" fill="url(#msky)" />
        {/* clouds */}
        <g fill="#64748b" opacity="0.7">
          <ellipse cx="180" cy="40" rx="90" ry="26" /><ellipse cx="520" cy="30" rx="110" ry="30" /><ellipse cx="700" cy="52" rx="80" ry="22" />
        </g>
        {/* lightning */}
        <path d="M390 36 l-18 40 h20 l-14 34 40 -50 h-22 l16 -24Z" fill={gold} opacity="0.85" />
        {/* rain */}
        <g stroke="#a5d8e6" strokeWidth="1.5" opacity="0.55">
          {Array.from({ length: 44 }, (_, i) => {
            const x = (i * 47) % 800;
            const y = (i * 31) % 90;
            return <line key={i} x1={x} y1={y} x2={x - 8} y2={y + 22} />;
          })}
        </g>
        {/* flooded field */}
        <rect y="158" width="800" height="42" fill="#1e5a66" />
        <g stroke="#7dd3d8" strokeWidth="1.5" fill="none" opacity="0.6">
          <path d="M0 170 q30 -6 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0" />
        </g>
        {/* boat */}
        <g transform="translate(360,164)" stroke={ink} strokeWidth="2">
          <path d="M-60 0 Q0 30 60 0Z" fill={red} />
          <path d="M0 -2 v-46" />
          <path d="M2 -46 Q40 -34 52 -8 L2 -8Z" fill={gold} />
        </g>
        {/* palm tree */}
        <g transform="translate(100,160)" stroke={ink} strokeWidth="2" fill="none">
          <path d="M0 0 Q-6 -50 4 -90" strokeWidth="5" />
          <g fill={green}>
            <path d="M4 -90 Q-30 -112 -54 -88 Q-24 -96 4 -90Z" />
            <path d="M4 -90 Q34 -116 58 -92 Q28 -98 4 -90Z" />
            <path d="M4 -90 Q-10 -126 -34 -128 Q-8 -112 4 -90Z" />
          </g>
        </g>
      </Frame>
    </div>
  );
}

const MAP: Record<string, (p: Props) => React.ReactElement> = {
  notebook: ChaStallScene,
  cinema: CinemaScene,
  priyotoma: RomanceScene,
  rajkumar: ActionScene,
  leader: ElectionScene,
  threads: GarmentScene,
  remittance: PortScene,
  monsoon: MonsoonScene,
};

export const SCENE_LABELS: Record<string, { en: string; bn: string }> = {
  notebook: { en: 'Chachchu’s cha stall · Dhaka', bn: 'চাচ্চুর চায়ের দোকান · ঢাকা' },
  cinema: { en: 'The cinema hall · Dhaka', bn: 'সিনেমা হল · ঢাকা' },
  priyotoma: { en: 'Priyotoma · the romantic blockbuster', bn: 'প্রিয়তমা · রোমান্টিক ব্লকবাস্টার' },
  rajkumar: { en: 'Rajkumar · the action set', bn: 'রাজকুমার · অ্যাকশন সেট' },
  leader: { en: 'Election season · Dhaka', bn: 'নির্বাচনের মৌসুম · ঢাকা' },
  threads: { en: 'The garment mills · Gazipur', bn: 'পোশাক কারখানা · গাজীপুর' },
  remittance: { en: 'Chittagong port · the money trail', bn: 'চট্টগ্রাম বন্দর · অর্থের পথ' },
  monsoon: { en: 'Monsoon country · Bangladesh', bn: 'বর্ষার দেশ · বাংলাদেশ' },
};

export function SceneBackdrop({ arcId, className = '' }: { arcId: string; className?: string }) {
  const Scene = MAP[arcId] ?? ChaStallScene;
  return <Scene className={className} />;
}

/* A faint, repeating traditional motif across the main panel — changes per story. */
export function TraditionalWatermark({ arcId, className = '' }: { arcId: string; className?: string }) {
  const id = 'pat-' + arcId;
  let motif: React.ReactNode = null;

  switch (arcId) {
    case 'notebook': // cha stall — cups & mango leaves
      motif = (
        <g fill="none" stroke="#8b5a2b" strokeWidth="1.4">
          <path d="M6 14 L8 26 L20 26 L22 14Z" />
          <path d="M22 18 a5 5 0 0 1 0 8" />
          <path d="M34 8 Q46 2 56 10 Q44 10 34 18Z" fill="#006a4e" fillOpacity="0.25" />
          <path d="M34 8 Q28 20 36 30 Q34 18 44 12Z" fill="#006a4e" fillOpacity="0.18" />
        </g>
      );
      break;
    case 'cinema': // film perforations & stars
      motif = (
        <g fill="#7a1f28" fillOpacity="0.2">
          <rect x="2" y="2" width="8" height="8" rx="2" />
          <rect x="2" y="22" width="8" height="8" rx="2" />
          <path d="M28 8 l2 5 5 0 -4 4 1 5 -4 -3 -4 3 1 -5 -4 -4 5 0Z" />
        </g>
      );
      break;
    case 'priyotoma': // hearts & roses
      motif = (
        <g>
          <path d="M18 26 C4 16 10 6 18 12 C26 6 32 16 18 26Z" fill="#e63946" fillOpacity="0.16" />
          <circle cx="40" cy="18" r="8" fill="none" stroke="#b45309" strokeOpacity="0.25" strokeWidth="1.4" />
          <circle cx="40" cy="18" r="3" fill="#b45309" fillOpacity="0.2" />
        </g>
      );
      break;
    case 'rajkumar': // sunburst
      motif = (
        <g stroke="#b45309" strokeOpacity="0.22" strokeWidth="1.6">
          <circle cx="20" cy="20" r="7" fill="none" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
            <line key={a} x1={20 + Math.cos(a * Math.PI / 180) * 11} y1={20 + Math.sin(a * Math.PI / 180) * 11}
              x2={20 + Math.cos(a * Math.PI / 180) * 18} y2={20 + Math.sin(a * Math.PI / 180) * 18} />
          ))}
        </g>
      );
      break;
    case 'leader': // lotus & flags
      motif = (
        <g>
          <path d="M20 30 Q8 22 12 14 Q20 18 20 26 Q20 18 28 14 Q32 22 20 30Z" fill="#006a4e" fillOpacity="0.2" />
          <circle cx="20" cy="12" r="2.5" fill="#d90429" fillOpacity="0.3" />
          <rect x="34" y="6" width="1.5" height="24" fill="#8b5a2b" fillOpacity="0.3" />
          <path d="M35 8 h14 v9 h-14Z" fill="#006a4e" fillOpacity="0.2" />
        </g>
      );
      break;
    case 'threads': // thread spools & stitches
      motif = (
        <g stroke="#0f766e" strokeOpacity="0.25" fill="none" strokeWidth="1.4">
          <path d="M6 10 h20 M6 18 h20 M6 26 h20" strokeDasharray="3 3" />
          <circle cx="36" cy="18" r="9" />
          <circle cx="36" cy="18" r="4" />
        </g>
      );
      break;
    case 'remittance': // waves & boats
      motif = (
        <g fill="none" stroke="#0e7490" strokeOpacity="0.25" strokeWidth="1.4">
          <path d="M2 16 q7 -5 14 0 t14 0 t14 0" />
          <path d="M2 26 q7 -5 14 0 t14 0 t14 0" />
          <path d="M28 8 l8 0 -2 5 -5 0Z" fill="#0e7490" fillOpacity="0.15" />
        </g>
      );
      break;
    case 'monsoon': // rain & lotus
      motif = (
        <g stroke="#0e7490" strokeOpacity="0.25" strokeWidth="1.4" fill="none">
          <path d="M8 4 l-3 8 M20 12 l-3 8 M32 4 l-3 8 M42 16 l-3 8" />
          <path d="M14 30 Q8 24 14 19 Q20 24 14 30Z" fill="#006a4e" fillOpacity="0.18" />
          <path d="M14 30 Q20 24 14 19 Q8 24 14 30Z" fill="#006a4e" fillOpacity="0.18" />
        </g>
      );
      break;
    default:
      motif = null;
  }

  return (
    <svg className={className} aria-hidden="true" preserveAspectRatio="none">
      <defs>
        <pattern id={id} width="56" height="40" patternUnits="userSpaceOnUse">
          {motif}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
