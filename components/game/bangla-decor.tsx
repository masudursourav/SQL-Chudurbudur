/* Decorative motifs inspired by Bangladeshi rickshaw painting,
   nakshi kantha embroidery and hand-painted cinema posters. */

export function LotusDivider({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 34" className={className} aria-hidden="true">
      <g fill="none" stroke="#b45309" strokeWidth="1.5" opacity="0.55">
        <path d="M0 17h78M162 17h78" />
        <path d="M78 17c8 0 12-5 18-5s10 5 12 5M162 17c-8 0-12-5-18-5s-10 5-12 5" />
      </g>
      <g transform="translate(120 17)">
        <g fill="#e63946" stroke="#7f1d1d" strokeWidth="1">
          <path d="M0 -14C-6 -6 -6 0 0 2 6 0 6 -6 0 -14Z" />
          <path d="M0 -14C-13 -10 -16 -2 -10 3 -4 1 -1 -4 0 -14Z" />
          <path d="M0 -14C13 -10 16 -2 10 3 4 1 1 -4 0 -14Z" />
          <path d="M0 -12C-20 -8 -22 4 -12 8 -5 5 -1 -2 0 -12Z" fill="#f4845f" />
          <path d="M0 -12C20 -8 22 4 12 8 5 5 1 -2 0 -12Z" fill="#f4845f" />
        </g>
        <ellipse cy="4" rx="12" ry="5" fill="#f4c542" stroke="#7f1d1d" strokeWidth="1" />
        <circle cy="3" r="2.5" fill="#0f766e" />
      </g>
      <g fill="#0f766e" opacity="0.7">
        <circle cx="92" cy="17" r="2" />
        <circle cx="148" cy="17" r="2" />
      </g>
    </svg>
  );
}

export function MangoCorner({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 90" className={className} aria-hidden="true">
      <g stroke="#0f766e" strokeWidth="1.5" fill="#f4c542" opacity="0.5">
        <path d="M4 86C4 44 22 18 86 4" fill="none" />
        <path d="M14 78C18 56 28 36 50 22C46 44 36 62 14 78Z" />
        <path d="M28 84C34 64 48 48 70 38C64 58 50 74 28 84Z" fill="#e63946" />
        <path d="M50 22C62 18 74 20 82 28C70 32 58 30 50 22Z" fill="#0f766e" />
        <circle cx="8" cy="66" r="3" fill="#e63946" />
        <circle cx="20" cy="86" r="2.5" fill="#0f766e" />
      </g>
    </svg>
  );
}

export function RickshawArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 130" className={className} aria-hidden="true">
      <g stroke="#5b2c1a" strokeWidth="2.5" strokeLinejoin="round">
        {/* canopy */}
        <path d="M62 40 Q100 4 138 40 Z" fill="#e63946" />
        <path d="M62 40 Q100 4 138 40" fill="none" stroke="#f4c542" strokeWidth="3" />
        <g fill="#f4c542" stroke="none">
          <circle cx="86" cy="30" r="4" /><circle cx="100" cy="22" r="4" /><circle cx="114" cy="30" r="4" />
        </g>
        <path d="M62 40 L138 40 L138 52 L62 52 Z" fill="#0f766e" />
        {/* seat / body */}
        <path d="M62 52 L138 52 L128 84 L72 84 Z" fill="#2a9d8f" />
        <path d="M72 84 L128 84 L128 92 L72 92 Z" fill="#f4c542" />
        {/* wheel */}
        <circle cx="100" cy="98" r="28" fill="#fff6e2" />
        <circle cx="100" cy="98" r="23" fill="none" stroke="#e63946" strokeWidth="3" />
        <g stroke="#5b2c1a" strokeWidth="1.5">
          <path d="M100 75V121M77 98H123M84 82L116 114M116 82L84 114M90 77L110 119M110 77L90 119" />
        </g>
        <circle cx="100" cy="98" r="5" fill="#e63946" />
        {/* shafts */}
        <path d="M62 78 L30 92M138 78 L170 92" fill="none" />
      </g>
      <g fill="#0f766e">
        <circle cx="28" cy="92" r="3" /><circle cx="172" cy="92" r="3" />
      </g>
    </svg>
  );
}

export function BoatMotif({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 80" className={className} aria-hidden="true">
      <g stroke="#5b2c1a" strokeWidth="2" strokeLinejoin="round">
        <path d="M20 52 Q80 74 140 52 L126 64 Q80 76 34 64 Z" fill="#e63946" />
        <path d="M78 12 L78 52" strokeWidth="3" />
        <path d="M80 14 Q112 24 124 50 L80 50 Z" fill="#f4c542" />
        <path d="M74 20 Q48 30 40 50 L74 50 Z" fill="#2a9d8f" />
      </g>
      <g fill="none" stroke="#0f766e" strokeWidth="1.5" opacity="0.6">
        <path d="M10 72q10-5 20 0t20 0M70 74q10-5 20 0t20 0" />
      </g>
    </svg>
  );
}

export function PalmMotif({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 110" className={className} aria-hidden="true">
      <g stroke="#5b2c1a" strokeWidth="2" fill="none">
        <path d="M45 108 Q42 70 48 38" strokeWidth="4" />
        <g fill="#0f766e" stroke="#0a554e">
          <path d="M48 38 Q20 16 6 34 Q26 28 48 38Z" />
          <path d="M48 38 Q34 6 18 10 Q36 18 48 38Z" />
          <path d="M48 38 Q70 8 84 16 Q62 22 48 38Z" />
          <path d="M48 38 Q82 28 88 46 Q66 36 48 38Z" />
          <path d="M48 38 Q28 44 18 62 Q38 50 48 38Z" />
          <path d="M48 38 Q62 52 66 68 Q52 54 48 38Z" />
        </g>
        <circle cx="44" cy="44" r="3" fill="#e63946" />
        <circle cx="52" cy="46" r="3" fill="#f4c542" />
      </g>
    </svg>
  );
}

export function PosterBurst({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="#f4c542" opacity="0.85">
        {Array.from({ length: 16 }, (_, i) => {
          const a = (i * Math.PI) / 8;
          const r = (n: number) => n.toFixed(3);
          const x1 = r(50 + Math.cos(a) * 26);
          const y1 = r(50 + Math.sin(a) * 26);
          const x2 = r(50 + Math.cos(a) * 46);
          const y2 = r(50 + Math.sin(a) * 46);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f4c542" strokeWidth="3" />;
        })}
      </g>
      <circle cx="50" cy="50" r="24" fill="#e63946" stroke="#7f1d1d" strokeWidth="2" />
    </svg>
  );
}
