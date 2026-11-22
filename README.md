# SQL চুদুরবুদুর

A gloriously filmy, browser-based SQL **adventure** inspired by **[SQL Island](https://sql-island.informatik.uni-kl.de/)** (University of Kaiserslautern), themed around Bangladesh.

Built for **complete beginners** — no SQL knowledge needed. **Sixty-one** small dispatches across eight connected stories, narrated by viral Bangladeshi movie characters: **Chachchu, Golapi, Bouma, Jamai Babu, Doctor Babu, Rani, Hena, Mama, Hero Alam** and **Raja Saheb**. Dialogue is delivered in dramatic Bangla-film style — *“Hena kothay?!”*, *“Step na, kick na — ORDER BY diye descent koro!”*, *“Shashthi, amar hisab kotha bolchhi!”*. The interface opens in **বাংলা** by default; switch to English any time.

- **Chapter I — The First Notebook** 📓 (1–8): SELECT \*, picking columns, WHERE with numbers and text, ORDER BY, DESC, LIMIT — Chachchu's **cha-stall ledger** (`cha_stall` table).
- **Chapter II — Hena Kothay?** 🎬 (9–18): the viral cinema mystery — ten short, funny, beginner-friendly missions.
- **Chapter III — Priyotoma** 💔 (19–25): a ridiculous romantic blockbuster with Tomal and Priya.
- **Chapter IV — Rajkumar er Raj** 🕶️ (26–32): action, ego and one-liners with the Rajkumar and his exhausted sidekick.
- **Chapter V — Leader: Amie Bangladesh** 🗳️ (33–39): election satire where everybody claims to be the leader.
- **Chapter VI — Threads of Dhaka** 🧵 (40–47): COUNT, SUM, AVG, MIN/MAX, GROUP BY, JOIN, HAVING — Golapi and Bouma in the garment mills.
- **Chapter VII — Money Across Borders** 💸 (48–54): IN, aggregates, ranking, LAG, COUNT+SUM — Jamai Babu, Doctor Babu, Rani.
- **Chapter VIII — Monsoon & the Nation** 🌧️ (55–61): comparisons, LIKE, BETWEEN, displacement, AVG+HAVING, final CTE briefing — Hena, Mama, Hero Alam, Raja Saheb.

Every dispatch works like SQL Island: you first study a **worked example with its real output**, then the local character asks you to apply the idea yourself. The first eight steps use only a small cha-stall ledger, then ten cinema missions build confidence before the advanced concepts arrive (JOIN at dispatch 18).

The dialogue is deliberately **local and spoken** — Banglish chatter like *“Beta, shuno…”*, *“Bazar-e ek nazar-ei…”* and informal Bengali with *tumi / koro / dekho*. The **schema browser** in the sidebar lists every table and its columns; the **"কোন টেবিল ব্যবহার করবে"** chips above each editor show which tables the current mission uses. Click any table name (or "দেখো ▸") to instantly preview five rows.

Animated Chacha/Chachi characters wave and blink beside their speech bubbles, a rickshaw sways in the sidebar, sparkles twinkle around the scene, and a confetti burst celebrates each cleared dispatch. Bengali dialogue uses a proper Bengali font with a correctly drawn speech-bubble pointer.

The artwork is inspired by **Bangladeshi rickshaw painting and hand-painted cinema posters**: a striped rickshaw canopy header, bold ink outlines, lotus dividers, mango-leaf corners, palm trees and a rickshaw illustration in the sidebar.

Learn SQL by investigating real-world Bangladesh issues:

- Garment factory wages & exports
- Remittance inflows (Saudi Arabia, UAE, Malaysia…)
- Food vs non-food inflation
- Climate displacement (IDPs)
- Power outages / load shedding
- E-government services (data.gov.bd)

## Tech stack

- **Next.js 16.4.6** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **lucide-react** icons
- **sql.js** — real SQLite running entirely in the browser, using the **inline WASM build** (no network fetch, no separate `.wasm` file to serve)

## Getting started

```bash
cd bangladesh-sql-quest
npm install
npm run dev
# open http://localhost:3000
```

## Project structure

```
app/
  layout.tsx            # Root layout, fonts, metadata
  page.tsx              # Game UI (editor, results, navigation)
  globals.css           # Tailwind + base styles
components/
  ui/                    # shadcn/ui primitives
  game/certificate.tsx   # Printable Certificate of Completion
lib/
  data.ts               # Synthetic Bangladesh dataset (single source of truth)
  db.ts                 # sql.js engine: schema, seed, query execution
  levels.ts             # 61 levels with strict validators
  utils.ts              # cn() helper
```

## How it works

1. Click a region on the **journey map** to travel there.
2. Talk to the local character and read their mission (English / Bengali toggle).
3. Write a SQL query in the editor (`Ctrl/Cmd + Enter` to run).
4. The query runs against real SQLite in your browser.
5. A strict validator checks the **actual result values**, so guessing or `LIMIT` tricks won't pass.
6. Clear a mission to unlock the next stop. Complete all 61 to claim a printable **Certificate of Completion**.

## Example solution

> **Garment Workers by District** — Which districts employ the most garment workers?

```sql
SELECT d.name_en AS district, SUM(f.workers) AS total_workers
FROM garment_factories f
JOIN districts d ON f.district_id = d.district_id
GROUP BY d.district_id, d.name_en
ORDER BY total_workers DESC
LIMIT 5;
```

## Notes

- The dataset is **synthetic** and inspired by real trends from BBS, Bangladesh Bank, IOM DTM, and data.gov.bd. Swap in real CSVs for production use.
- Progress is saved to `localStorage`.
- Only read-only `SELECT` / `WITH` queries are allowed in the sandbox.
- The certificate has a **Print / Save PDF** button.

## Inspiration

Inspired by SQL Island — https://sql-island.informatik.uni-kl.de/ (University of Kaiserslautern, Germany).
