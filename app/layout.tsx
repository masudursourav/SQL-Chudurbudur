import type { Metadata } from 'next';
import { DM_Sans, Fraunces, JetBrains_Mono, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
const bengali = Noto_Sans_Bengali({ subsets: ['bengali'], variable: '--font-bengali', display: 'swap' });

export const metadata: Metadata = {
  title: 'SQL চুদুরবুদুর — A SQL Adventure in Bangladesh',
  applicationName: 'SQL চুদুরবুদুর',
  description:
    'SQL চুদুরবুদুর — learn SQL through eight Bangladeshi stories, from a cha stall to the cinema and beyond. Worked examples, local characters and real SQLite in your browser.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${fraunces.variable} ${mono.variable} ${bengali.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
