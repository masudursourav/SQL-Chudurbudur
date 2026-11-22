"use client";

import { useEffect } from 'react';
import { Award, Printer, X } from 'lucide-react';
import { LotusDivider, RickshawArt } from './bangla-decor';

interface CertificateProps {
  name: string;
  completedAt: string;
  onClose: () => void;
  onNameChange: (name: string) => void;
}

export function CertificateCard({ name, completedAt, onClose, onNameChange }: CertificateProps) {
  const date = new Date(completedAt).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#006a4e]/90 p-4 backdrop-blur-sm print:static print:bg-white print:p-0"
      onClick={onClose}
    >
      <div className="w-full max-w-3xl animate-[fadeUp_.35s_ease-out] print:max-w-none" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between print:hidden">
          <div className="poster-title text-lg font-extrabold uppercase text-[#f4c542]">✦ All eight stories complete</div>
          <button onClick={onClose} className="rounded-full border-2 border-white/50 bg-white/10 p-2 text-white hover:bg-white/20" aria-label="Close">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative rounded-md border-[6px] border-[#f4c542] bg-[#fffaf0] p-1 shadow-[10px_10px_0_0_#2b1d16] print:rounded-none print:border-2 print:border-[#e63946] print:shadow-none">
          <div className="canopy-stripes h-2 w-full" />
          <div className="relative border-4 border-double border-[#006a4e] px-6 py-8 text-center sm:px-14 sm:py-10 print:border-2">
            <RickshawArt className="absolute right-3 top-3 h-20 w-28 opacity-20" />

            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#e63946] bg-[#f4c542]">
              <Award className="h-7 w-7 text-[#2b1d16]" />
            </div>

            <div className="font-bengali text-[10px] font-extrabold tracking-[0.2em] text-[#e63946]">SQL চুদুরবুদুর</div>
            <h2 className="poster-title mt-2 text-3xl font-extrabold uppercase leading-tight text-[#006a4e] sm:text-4xl">
              Certificate of Completion
            </h2>
            <LotusDivider className="mx-auto mt-3 w-56" />

            <p className="mt-5 text-sm font-medium text-[#5c4436]">This certificate is proudly presented to</p>
            <input
              value={name || 'SQL Explorer'}
              onChange={(e) => onNameChange(e.target.value)}
              className="mx-auto mt-2 block w-full max-w-md border-b-[3px] border-dashed border-[#e63946] bg-transparent py-2 text-center font-display text-3xl font-bold text-[#2b1d16] outline-none focus:border-[#006a4e] print:border-solid"
              placeholder="Your name"
              aria-label="Learner name"
            />

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#4a372c]">
              for completing <strong className="text-[#e63946]">all eight stories and sixty-one dispatches</strong> —
              from a first notebook at Chachchu’s cha stall, through the garment mills and remittance trails,
              to the monsoon challenges of the nation — proving real SQL skill along the way.
            </p>

            <div className="mx-auto mt-8 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#8a7c60]">Issued</div>
                <div className="mt-1 font-display text-sm font-bold text-[#2b1d16]">{date}</div>
              </div>
              <div>
                <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#8a7c60]">Dispatches</div>
                <div className="mt-1 font-display text-sm font-bold text-[#2b1d16]">61 / 61</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-[9px] font-extrabold uppercase tracking-widest text-[#8a7c60]">Inspired by</div>
                <div className="mt-1 font-display text-sm font-bold text-[#e63946]">SQL Island · Uni KL</div>
              </div>
            </div>

            <div className="mt-8 flex items-end justify-between border-t-[3px] border-[#2b1d16] pt-5">
              <div className="text-left">
                <div className="poster-title font-bengali text-lg font-extrabold text-[#006a4e]">SQL চুদুরবুদুর</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-[#8a7c60]">Field journal & learning platform</div>
              </div>
              <div className="stamp px-2 py-1 text-[10px] font-extrabold uppercase text-[#e63946]">Bangladesh · 2026</div>
            </div>
          </div>
          <div className="canopy-stripes h-2 w-full" />
        </div>

        <div className="mt-4 flex justify-center gap-3 print:hidden">
          <button onClick={() => window.print()} className="flex items-center gap-2 rounded-md border-[3px] border-[#2b1d16] bg-[#f4c542] px-5 py-2.5 text-sm font-extrabold text-[#2b1d16] shadow-[3px_3px_0_0_#2b1d16] hover:bg-yellow-300">
            <Printer className="h-4 w-4" /> Print / Save as PDF
          </button>
          <button onClick={onClose} className="rounded-md border-2 border-white/50 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CertificateCard;
