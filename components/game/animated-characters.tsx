/* Small animated characters drawn in a rickshaw-poster style. */

export function ChachaCharacter({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} aria-hidden="true">
      <defs>
        <clipPath id="chacha-head"><circle cx="60" cy="42" r="26" /></clipPath>
      </defs>
      {/* waving hand */}
      <g className="origin-[88px_62px] animate-[wave_2.2s_ease-in-out_infinite]">
        <path d="M84 66 Q96 58 98 44" fill="none" stroke="#8d5524" strokeWidth="9" strokeLinecap="round" />
        <circle cx="99" cy="41" r="8" fill="#c68642" stroke="#5b2c1a" strokeWidth="1.5" />
        <path d="M95 36v10M99 34v12M103 36v10" stroke="#8d5524" strokeWidth="1.6" strokeLinecap="round" />
      </g>
      {/* body / panjabi */}
      <path d="M34 138 L34 82 Q60 68 86 82 L86 138 Z" fill="#f4c542" stroke="#5b2c1a" strokeWidth="2.5" />
      <path d="M60 76 L60 138" stroke="#b8860b" strokeWidth="2" />
      <path d="M48 82 Q60 94 72 82" fill="none" stroke="#e63946" strokeWidth="3" />
      <circle cx="60" cy="104" r="3" fill="#e63946" />
      <circle cx="60" cy="118" r="3" fill="#006a4e" />
      {/* head */}
      <g className="origin-[60px_60px] animate-[bob_3s_ease-in-out_infinite]">
        <circle cx="60" cy="42" r="26" fill="#c68642" stroke="#5b2c1a" strokeWidth="2" />
        {/* eyes blink */}
        <g className="origin-[48px_40px] animate-[blink_4.5s_ease-in-out_infinite]">
          <ellipse cx="49" cy="40" rx="2.6" ry="3.4" fill="#2b1d16" />
        </g>
        <g className="origin-[72px_40px] animate-[blink_4.5s_ease-in-out_infinite]">
          <ellipse cx="71" cy="40" rx="2.6" ry="3.4" fill="#2b1d16" />
        </g>
        {/* mustache */}
        <path d="M60 52 Q50 46 42 52 Q50 58 60 54 Q70 58 78 52 Q70 46 60 52Z" fill="#3b2a20" />
        <path d="M54 61 Q60 66 66 61" fill="none" stroke="#5b2c1a" strokeWidth="2" strokeLinecap="round" />
        {/* skull cap */}
        <path d="M36 34 Q60 8 84 34 L84 36 Q60 26 36 36Z" fill="#006a4e" stroke="#5b2c1a" strokeWidth="1.5" />
        <circle cx="60" cy="14" r="3" fill="#e63946" />
      </g>
    </svg>
  );
}

export function ChachiCharacter({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 140" className={className} aria-hidden="true">
      <g className="origin-[60px_62px] animate-[bob_3.4s_ease-in-out_infinite]">
        {/* hair bun */}
        <circle cx="84" cy="26" r="11" fill="#3b2a20" />
        <circle cx="60" cy="42" r="26" fill="#d49a6a" stroke="#5b2c1a" strokeWidth="2" />
        <path d="M34 38 Q60 4 86 38 Q60 24 34 38Z" fill="#3b2a20" />
        <g className="origin-[49px_40px] animate-[blink_5s_ease-in-out_infinite]">
          <ellipse cx="49" cy="41" rx="2.6" ry="3.4" fill="#2b1d16" />
        </g>
        <g className="origin-[71px_40px] animate-[blink_5s_ease-in-out_infinite]">
          <ellipse cx="71" cy="41" rx="2.6" ry="3.4" fill="#2b1d16" />
        </g>
        <path d="M53 55 Q60 61 67 55" fill="none" stroke="#8b3a3a" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx="42" cy="49" r="3" fill="#e63946" opacity="0.5" />
        <circle cx="78" cy="49" r="3" fill="#e63946" opacity="0.5" />
        {/* red-white sari */}
      </g>
      <path d="M32 138 L36 84 Q60 70 84 84 L88 138 Z" fill="#e63946" stroke="#5b2c1a" strokeWidth="2.5" />
      <path d="M36 90 Q60 104 84 90" fill="none" stroke="#f4c542" strokeWidth="4" />
      <path d="M60 84 L54 138" stroke="#fff7e6" strokeWidth="7" />
      <g className="origin-[90px_70px] animate-[wave_2.6s_ease-in-out_infinite]">
        <path d="M84 92 Q98 84 102 72" fill="none" stroke="#d49a6a" strokeWidth="8" strokeLinecap="round" />
        <circle cx="103" cy="69" r="7" fill="#d49a6a" stroke="#5b2c1a" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function DancingRickshaw({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 130" className={`animate-[sway_3.5s_ease-in-out_infinite] ${className}`} aria-hidden="true">
      <g stroke="#5b2c1a" strokeWidth="2.5" strokeLinejoin="round">
        <path d="M62 40 Q100 4 138 40 Z" fill="#e63946" />
        <path d="M62 40 Q100 4 138 40" fill="none" stroke="#f4c542" strokeWidth="3" />
        <g fill="#f4c542" stroke="none">
          <circle cx="86" cy="30" r="4" /><circle cx="100" cy="22" r="4" /><circle cx="114" cy="30" r="4" />
        </g>
        <path d="M62 40 L138 40 L138 52 L62 52 Z" fill="#006a4e" />
        <path d="M62 52 L138 52 L128 84 L72 84 Z" fill="#2a9d8f" />
        <path d="M72 84 L128 84 L128 92 L72 92 Z" fill="#f4c542" />
        <circle cx="100" cy="98" r="28" fill="#fff6e2" />
        <circle cx="100" cy="98" r="23" fill="none" stroke="#e63946" strokeWidth="3" />
        <g stroke="#5b2c1a" strokeWidth="1.5">
          <path d="M100 75V121M77 98H123M84 82L116 114M116 82L84 114M90 77L110 119M110 77L90 119" />
        </g>
        <circle cx="100" cy="98" r="5" fill="#e63946" />
        <path d="M62 78 L30 92M138 78 L170 92" fill="none" />
      </g>
    </svg>
  );
}

export function SparkleTrail({ className = '' }: { className?: string }) {
  return (
    <span className={`pointer-events-none absolute ${className}`} aria-hidden="true">
      {[
        { left: '8%', top: '18%', delay: '0s', color: 'text-[#f4c542]' },
        { left: '78%', top: '12%', delay: '.7s', color: 'text-[#e63946]' },
        { left: '88%', top: '68%', delay: '1.3s', color: 'text-[#006a4e]' },
        { left: '20%', top: '82%', delay: '1.9s', color: 'text-[#e63946]' },
      ].map((s, i) => (
        <span
          key={i}
          className={`absolute animate-[twinkle_2.6s_ease-in-out_infinite] ${s.color}`}
          style={{ left: s.left, top: s.top, animationDelay: s.delay }}
        >
          ✦
        </span>
      ))}
    </span>
  );
}
