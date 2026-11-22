/* Extra cinema energy: animated villains, heroes and scrolling one-liners. */

export function VillainCharacter({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} aria-hidden="true">
      <g className="origin-[60px_60px] animate-[bob_3.2s_ease-in-out_infinite]">
        <path d="M32 138 L34 82 Q60 66 86 82 L88 138 Z" fill="#2b1d16" stroke="#5b2c1a" strokeWidth="2.5" />
        <path d="M60 78 L60 138" stroke="#e63946" strokeWidth="3" />
        <circle cx="60" cy="42" r="26" fill="#b87b4f" stroke="#5b2c1a" strokeWidth="2" />
        {/* sunglasses */}
        <rect x="36" y="34" width="22" height="12" rx="4" fill="#1a1a1a" stroke="#000" strokeWidth="1.5" />
        <rect x="62" y="34" width="22" height="12" rx="4" fill="#1a1a1a" stroke="#000" strokeWidth="1.5" />
        <path d="M58 39h4" stroke="#000" strokeWidth="3" />
        <path d="M39 37l6 5M66 37l6 5" stroke="#f4c542" strokeWidth="1" opacity="0.8" />
        {/* smirk */}
        <path d="M50 58 Q60 65 72 55" fill="none" stroke="#5b2c1a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M60 50 L64 55 L60 56" fill="none" stroke="#7a4a2a" strokeWidth="1.5" />
      </g>
      <g className="origin-[92px_70px] animate-[wave_1.8s_ease-in-out_infinite]">
        <path d="M84 92 Q100 82 104 68" fill="none" stroke="#b87b4f" strokeWidth="8" strokeLinecap="round" />
        <circle cx="105" cy="65" r="7" fill="#b87b4f" stroke="#5b2c1a" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function HeroDancer({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} aria-hidden="true">
      <g className="origin-[60px_90px] animate-[sway_1.6s_ease-in-out_infinite]">
        <path d="M40 138 L44 86 Q60 72 76 86 L80 138 Z" fill="#e63946" stroke="#5b2c1a" strokeWidth="2.5" />
        <circle cx="60" cy="44" r="22" fill="#c68642" stroke="#5b2c1a" strokeWidth="2" />
        <path d="M38 38 Q60 12 82 38 Q60 28 38 38Z" fill="#2b1d16" />
        <circle cx="52" cy="44" r="2.4" fill="#2b1d16" />
        <circle cx="68" cy="44" r="2.4" fill="#2b1d16" />
        <path d="M52 55 Q60 62 68 55" fill="none" stroke="#7a3b2e" strokeWidth="2.2" strokeLinecap="round" />
        <g className="origin-[28px_78px] animate-[wave_1.1s_ease-in-out_infinite]">
          <path d="M44 88 Q26 80 18 64" fill="none" stroke="#c68642" strokeWidth="8" strokeLinecap="round" />
          <circle cx="17" cy="61" r="7" fill="#c68642" stroke="#5b2c1a" strokeWidth="1.5" />
        </g>
        <g className="origin-[92px_78px] animate-[wave_1.1s_ease-in-out_infinite_reverse]">
          <path d="M76 88 Q94 80 102 64" fill="none" stroke="#c68642" strokeWidth="8" strokeLinecap="round" />
          <circle cx="103" cy="61" r="7" fill="#c68642" stroke="#5b2c1a" strokeWidth="1.5" />
        </g>
      </g>
    </svg>
  );
}

const QUOTES = [
  '“Hena kothay?!”',
  '“Step na, kick na — ORDER BY!”',
  '“Amar hisab kotha bolchhi!”',
  '“47 rejection, still devastating.”',
  '“Live mane cholchhe, Pilot mane brochure.”',
  '“Sab kichu ek query-te. Cinema shuru!”',
  '“Ego? Database-er cheye boro.”',
  '“Cha thanda hoye jacchhe, beta.”',
];

export function MovieTicker({ className = '' }: { className?: string }) {
  const doubled = [...QUOTES, ...QUOTES];
  return (
    <div className={`relative overflow-hidden border-y-2 border-[#2b1d16] bg-[#f4c542] ${className}`}>
      <div className="flex w-max animate-[ticker_28s_linear_infinite]">
        {doubled.map((q, i) => (
          <span key={i} className="whitespace-nowrap px-5 py-1.5 font-display text-[11px] font-bold text-[#2b1d16]">
            {q} <span className="text-[#e63946]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SarcasmBadge({ level = 3 }: { level?: number }) {
  const n = Math.max(1, Math.min(5, level));
  const label = n >= 5 ? 'SASTIK' : n >= 4 ? 'TEEN' : n >= 3 ? 'MIXED' : n === 2 ? 'MILD' : 'SWEET';
  return (
    <div
      key={n}
      title={`Sarcasm level ${n} of 5`}
      className="inline-flex animate-[popIn_.5s_ease-out] items-center gap-1.5 rounded-full border-2 border-[#e63946] bg-[#fff3cf] px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-[#e63946]"
    >
      <span className="flex gap-0.5">
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className={`h-1.5 w-1.5 rounded-full ${i < n ? 'bg-[#e63946]' : 'bg-[#e63946]/20'}`}
          />
        ))}
      </span>
      <span>{label} · {n}/5</span>
    </div>
  );
}
