import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bd: {
          green: '#006a4e',
          red: '#d90429',
          dark: '#0b1021',
          card: '#141b2d',
          border: '#25304a',
        },
        // shadcn/ui color palette (matches CSS variables in globals.css)
        primary: '#006a4e',
        'primary-foreground': '#ffffff',
        secondary: '#1a1c2f',
        'secondary-foreground': '#e8eaf6',
        destructive: '#d90429',
        'destructive-foreground': '#ffffff',
        accent: '#0ea5e9',
        'accent-foreground': '#ffffff',
        muted: '#1e2337',
        'muted-foreground': '#94a3b8',
        border: '#25304a',
        input: '#25304a',
        ring: '#0ea5e9',
        background: '#0b1021',
        foreground: '#e8eaf6',
        card: '#141b2d',
        'card-foreground': '#e8eaf6',
        popover: '#141b2d',
        'popover-foreground': '#e8eaf6',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        bengali: ['var(--font-bengali)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
