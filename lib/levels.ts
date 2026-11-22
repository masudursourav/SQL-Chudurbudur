import type { QueryResult } from "./db";

export interface LearningExample {
  sql: string;
  note: string;
}

export interface Level {
  id: number;
  arcId: string;
  division: string;
  concept: string;
  title: string;
  titleBn: string;
  story: string;
  storyBn: string;
  guide: string;
  guideBn: string;
  guideRole: string;
  guideRoleBn: string;
  guideEmoji: string;
  scene: string;
  sceneBn: string;
  example: LearningExample;
  hint: string;
  solution: string;
  tables: string[];
  validate: (result: QueryResult, sql: string) => boolean;
}

export interface StoryArc {
  id: string;
  number: string;
  title: string;
  titleBn: string;
  tagline: string;
  narrative: string;
  narrativeBn: string;
  icon: string;
  levelIds: number[];
}

export const STORY_ARCS: StoryArc[] = [
  {
    id: "notebook",
    number: "I",
    title: "The First Notebook",
    titleBn: "প্রথম খাতা",
    tagline: "Tea, banter & Chachchu's old ledger",
    narrative:
      "A sticky Dhaka morning. Tea is boiling, buses are honking, and Chachchu has kept the neighbourhood's accounts for thirty years. He slides you a cup. “আগে খাতাটা বুঝে নে, বেটা। দেশ উদ্ধার পরে করিস। আটটা ছোট SQL mission—তারপর ডাটাবেস তোর হাতের মুঠোয়।”",
    narrativeBn:
      "ঢাকার গরম সকাল। চায়ের কেটলি ফুটছে, বাস হর্ন দিচ্ছে, আর চাচ্চু ত্রিশ বছর ধরে পাড়ার হিসাব রাখছেন। চায়ের কাপ এগিয়ে দিয়ে বললেন, “আগে খাতাটা বুঝে নে, বেটা। দেশ উদ্ধার পরে করিস। আটটা ছোট SQL mission—তারপর ডাটাবেস তোর হাতের মুঠোয়।”",
    icon: "📓",
    levelIds: [1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    id: "cinema",
    number: "II",
    title: "Hena Kothay?",
    titleBn: "হেনা কোথায়?",
    tagline: "One missing Hena. A whole lot of drama.",
    narrative:
      "Lights, camera, action! The whole neighbourhood has one question: “Hena kothay?” The answer is hiding in a database. Chachchu runs the cinema, Golapi handles tickets, Jamai Babu counts the cash, and Hero Alam is waiting for his close-up. Ten quick missions. More twists than the film.",
    narrativeBn:
      "লাইট, ক্যামেরা, অ্যাকশন! পাড়ার সবার এক প্রশ্ন—“হেনা কোথায়?” উত্তরটা লুকিয়ে আছে ডাটাবেসে। চাচ্চু সিনেমা হল সামলান, গোলাপী টিকিট কাটেন, জামাই বাবু টাকা গোনেন, আর হিরো আলম নিজের close-up-এর অপেক্ষায়। দশটা ছোট mission—সিনেমার চেয়েও বেশি twist!",
    icon: "🎬",
    levelIds: [9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
  },
  {
    id: "priyotoma",
    number: "III",
    title: "Priyotoma",
    titleBn: "প্রিয়তমা",
    tagline: "Love hurts. Bad SQL hurts more.",
    narrative:
      "The hero has been rejected 47 times and still thinks he's a heartthrob. The heroine has a spreadsheet documenting every failure. Welcome to Priyotoma: romance is messy, JOINs are trickier, and the sarcasm is complimentary.",
    narrativeBn:
      "নায়ক ৪৭ বার রিজেক্ট হয়েও নিজেকে heartthrob ভাবেন। নায়িকার কাছে সব ব্যর্থতার spreadsheet আছে। স্বাগতম প্রিয়তমায়—প্রেম জটিল, JOIN আরও জটিল, আর sarcasm একদম ফ্রি।",
    icon: "💔",
    levelIds: [19, 20, 21, 22, 23, 24, 25],
  },
  {
    id: "rajkumar",
    number: "IV",
    title: "Rajkumar er Raj",
    titleBn: "রাজকুমারের রাজ",
    tagline: "Big ego. Bigger sunglasses. One-liner SQL.",
    narrative:
      "Here comes Rajkumar: slow-motion walk, sunglasses indoors, and an ego with no LIMIT. He solves problems with dramatic one-liners—and occasionally with SQL. His sidekick is the only sensible person around. Poor guy has seen too much.",
    narrativeBn:
      "রাজকুমারের এন্ট্রি! স্লো-মোশন হাঁটা, ঘরের ভেতরেও সানগ্লাস, আর ego-র কোনো LIMIT নেই। সব সমস্যার সমাধান করেন dramatic one-liner-এ—মাঝে মাঝে SQL দিয়েও। পাশে একমাত্র বিবেকবান মানুষটা তাঁর sidekick। বেচারা অনেক কিছু সহ্য করেছে।",
    icon: "🕶️",
    levelIds: [26, 27, 28, 29, 30, 31, 32],
  },
  {
    id: "leader",
    number: "V",
    title: "Leader: Amie Bangladesh",
    titleBn: "লিডার: আমিই বাংলাদেশ",
    tagline: "Big promises. Tiny facts. One SQL query.",
    narrative:
      "Election season. Suddenly, everyone is a leader and every promise is historic. The ledger looks suspiciously clean. Good thing numbers don't clap for speeches. Run the query and see what the data actually says.",
    narrativeBn:
      "নির্বাচনের মৌসুম। হঠাৎ সবাই নেতা, সবার প্রতিশ্রুতিই ঐতিহাসিক! খাতাটাও অস্বাভাবিক পরিষ্কার। ভালোই হয়েছে—সংখ্যা বক্তৃতা শুনে হাততালি দেয় না। Query চালাও, ডেটা আসলে কী বলে দেখে নাও।",
    icon: "🗳️",
    levelIds: [33, 34, 35, 36, 37, 38, 39],
  },
  {
    id: "threads",
    number: "VI",
    title: "Threads of Dhaka",
    titleBn: "ঢাকার সুতো",
    tagline: "Behind every shirt is a story—and a shift.",
    narrative:
      "The cameras are gone, but the factory floor is still running. Golapi starts her shift in Gazipur at six while Bouma checks the records. Step inside the garment industry and learn to count, sum, average and group the numbers. Every figure represents real people at work.",
    narrativeBn:
      "ক্যামেরা চলে গেছে, কিন্তু কারখানার কাজ থামেনি। গাজীপুরে সকাল ছয়টায় শিফট শুরু করেন গোলাপী, আর বৌমা খতিয়ে দেখেন হিসাব। পোশাকশিল্পের ভেতরে ঢুকে COUNT, SUM, AVG আর GROUP BY শিখে নাও—প্রতিটা সংখ্যার পেছনে আছেন বাস্তব মানুষ।",
    icon: "🧵",
    levelIds: [40, 41, 42, 43, 44, 45, 46, 47],
  },
  {
    id: "remittance",
    number: "VII",
    title: "Money Across Borders",
    titleBn: "সীমান্ত পারের অর্থ",
    tagline: "Follow the money. Mind the prices.",
    narrative:
      "The bus to Chittagong rattles along as Jamai Babu opens his ledger on a tea crate. Remittance keeps millions of families going. Doctor Babu brings the inflation figures, Rani brings the digital-service data, and the numbers start telling a much bigger story.",
    narrativeBn:
      "চট্টগ্রামগামী বাস ঝাঁকুনি খেতে খেতে চলছে। জামাই বাবু চায়ের বাক্সের ওপর খাতা খুলেছেন। রেমিট্যান্সে চলে লাখো পরিবারের সংসার। ডাক্তার বাবু এনেছেন মূল্যস্ফীতির হিসাব, রানী এনেছেন ডিজিটাল সেবার ডেটা। এবার সংখ্যাগুলো বড় গল্প বলবে।",
    icon: "💸",
    levelIds: [48, 49, 50, 51, 52, 53, 54],
  },
  {
    id: "monsoon",
    number: "VIII",
    title: "Monsoon & the Nation",
    titleBn: "বর্ষা ও জাতি",
    tagline: "Rain, reality & one final query.",
    narrative:
      "The monsoon is here. Rivers rise, roads disappear and the lights go out. Travel inland with Hena, Mama and Hero Alam. Every SQL skill comes back into play. At the national desk, Raja Saheb wants one thing: an answer backed by data.",
    narrativeBn:
      "বর্ষা নেমেছে। নদীর পানি বাড়ছে, রাস্তা ডুবছে, বিদ্যুৎও যাচ্ছে। হেনা, মামা আর হিরো আলমের সঙ্গে দেশের ভেতরে এগিয়ে চলো। শেখা সব SQL কৌশল এবার কাজে লাগবে। জাতীয় ডেস্কে রাজা সাহেবের একটাই চাওয়া—অনুমান নয়, ডেটা দিয়ে উত্তর দাও।",
    icon: "🌧️",
    levelIds: [55, 56, 57, 58, 59, 60, 61],
  },
];

type Cell = string | number | null;
const col = (r: QueryResult, ...n: string[]) =>
  r.columns.findIndex((c) => n.some((x) => c.toLowerCase().includes(x)));
const txt = (v: Cell) => (v === null ? "" : String(v).toLowerCase());
const num = (v: Cell) => (typeof v === "number" ? v : Number(v));
const names = (r: QueryResult, i = 0) => r.values.map((row) => txt(row[i]));
const has = (r: QueryResult, t: string) =>
  r.values.some((row) => row.some((c) => txt(c).includes(t)));

export const LEVELS: Level[] = [
  /* ═══ Chapter I — The First Notebook (1–8) ═══ */
  {
    id: 1,
    arcId: "notebook",
    division: "Dhaka",
    concept: "SELECT *",
    title: "Open the Cha Ledger",
    titleBn: "চায়ের খাতা খুলুন",
    story: "Open the whole cha-stall ledger — every column, every row.",
    storyBn: "চায়ের দোকানের পুরো খাতাটা দেখে দে — সব কলাম, সব সারি।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cha stall owner · Dhaka",
    guideRoleBn: "চায়ের দোকানের মালিক",
    guideEmoji: "👴",
    scene:
      "Chachchu wiped the counter. “Beta, people can hide plenty around this neighbourhood. The ledger? Not so easy. `SELECT *` brings back everything. Add `FROM` and the table name. See? Even a tea stall can keep proper accounts.”",
    sceneBn:
      "চাচ্চু কাউন্টার মুছতে মুছতে বললেন, “বেটা, এই পাড়ায় মানুষ অনেক কিছুই লুকায়। কিন্তু খাতার হিসাব? ওটা লুকানো মুশকিল। `SELECT *` দিলে সব চলে আসবে। সঙ্গে `FROM` আর টেবিলের নাম। ব্যস—চায়ের দোকানের হিসাবও একদম পরিষ্কার!”",
    example: {
      sql: "SELECT * FROM cha_stall LIMIT 3;",
      note: "The * means every column. LIMIT 3 keeps only three rows so the page does not overflow.",
    },
    hint: "SELECT * FROM cha_stall;",
    solution: "SELECT * FROM cha_stall;",
    tables: ["cha_stall"],
    validate: (r, s) =>
      /SELECT\s+\*\s+FROM\s+cha_stall/i.test(s) &&
      r.values.length === 14 &&
      r.columns.length === 10,
  },
  {
    id: 2,
    arcId: "notebook",
    division: "Dhaka",
    concept: "SELECT columns",
    title: "What Did We Sell?",
    titleBn: "কী বেচলাম?",
    story: "Show the item and the cups for every sale.",
    storyBn: "প্রতিটা বিক্রির পণ্যের নাম আর কাপের সংখ্যা দেখিয়ে দে।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cha stall owner · Dhaka",
    guideRoleBn: "চায়ের দোকানের মালিক",
    guideEmoji: "👴",
    scene:
      "“A customer once asked to see the whole counter,” Chachchu said. “Showed him everything. Then he complained it was too much. People are complicated. Just name the columns you need: `item`, `cups`, separated by a comma.”",
    sceneBn:
      "“এক কাস্টমার একবার পুরো কাউন্টার দেখতে চাইল,” চাচ্চু বললেন। “সব দেখানোর পর বলে, এত কিছু দেখতে চাইনি! মানুষকে খুশি করা কঠিন। যা দরকার শুধু সেই column-এর নাম লেখো—`item`, `cups`; মাঝখানে comma।”",
    example: {
      sql: "SELECT item, price_per_cup FROM cha_stall LIMIT 4;",
      note: "The comma separates columns. The result has exactly two columns, in the order you wrote them.",
    },
    hint: "SELECT item, cups FROM cha_stall;",
    solution: "SELECT item, cups FROM cha_stall;",
    tables: ["cha_stall"],
    validate: (r, s) =>
      !/SELECT\s+\*/i.test(s) &&
      r.values.length === 14 &&
      r.columns.length === 2 &&
      col(r, "item") >= 0 &&
      col(r, "cups") >= 0,
  },
  {
    id: 3,
    arcId: "notebook",
    division: "Dhaka",
    concept: "WHERE · numbers",
    title: "The Busy Cups",
    titleBn: "ব্যস্ত কাপ",
    story: "Find the sales with more than ten cups.",
    storyBn: "দশ কাপের বেশি যেসব বিক্রি হয়েছে, সেগুলো বের কর।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cha stall owner · Dhaka",
    guideRoleBn: "চায়ের দোকানের মালিক",
    guideEmoji: "👴",
    scene:
      "“I can hear the rush before it reaches the stall,” Chachchu said. “But I don't run the accounts by guessing. `WHERE cups > 10` shows sales above ten cups. The quiet mornings can stay quiet.”",
    sceneBn:
      "“ভিড় আসার আগেই টের পাই, বেটা। কিন্তু হিসাব আন্দাজে রাখি না। `WHERE cups > 10` দিলে দশ কাপের বেশি বিক্রিগুলো আসবে। বাকি শান্ত সকালগুলো থাক—ওগুলো এমনিতেই চুপচাপ।”",
    example: {
      sql: "SELECT item, cups FROM cha_stall WHERE cups > 8;",
      note: "Only rows where cups is greater than 8 survive. Change the number and watch the list move.",
    },
    hint: "WHERE cups > 10",
    solution: "SELECT item, cups FROM cha_stall WHERE cups > 10;",
    tables: ["cha_stall"],
    validate: (r, s) => />\s*10/.test(s) && r.values.length === 5,
  },
  {
    id: 4,
    arcId: "notebook",
    division: "Dhaka",
    concept: "WHERE · text",
    title: "Only Cha",
    titleBn: "শুধু চা",
    story: "Show only the Cha sales — skip samocha and singara.",
    storyBn: "শুধু চায়ের বিক্রিগুলো দেখাও — সমোচা আর সিঙাড়া বাদ দে।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cha stall owner · Dhaka",
    guideRoleBn: "চায়ের দোকানের মালিক",
    guideEmoji: "👴",
    scene:
      "“Everyone orders tea: less sugar, more milk, extra ginger…” Chachchu sighed. “In SQL, text needs single quotes. `WHERE item = 'Cha'`. At least the database follows instructions.”",
    sceneBn:
      "“সবাই চা চায়—চিনি কম, দুধ বেশি, আদা একটু…” চাচ্চু দীর্ঘশ্বাস ফেললেন। “SQL-এ text-এর জন্য single quote লাগে। `WHERE item = 'Cha'`। অন্তত ডাটাবেস কথা শোনে!”",
    example: {
      sql: "SELECT customer, cups FROM cha_stall WHERE item = 'Singara';",
      note: "Text values need single quotes; numbers do not. Swap Singara for Cha in your answer.",
    },
    hint: "WHERE item = 'Cha'",
    solution: "SELECT customer, cups FROM cha_stall WHERE item = 'Cha';",
    tables: ["cha_stall"],
    validate: (r, s) => /=\s*'cha'/i.test(s) && r.values.length === 6,
  },
  {
    id: 5,
    arcId: "notebook",
    division: "Dhaka",
    concept: "ORDER BY",
    title: "Slowest Seller",
    titleBn: "সবচেয়ে কম বেচা",
    story: "Sort the sales by revenue, smallest first.",
    storyBn: "বিক্রিগুলো আয় অনুযায়ী সাজিয়ে দে — কম থেকে বেশি।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cha stall owner · Dhaka",
    guideRoleBn: "চায়ের দোকানের মালিক",
    guideEmoji: "👴",
    scene:
      "“Not every sale is a bestseller,” Chachchu said. “`ORDER BY revenue` puts the smallest first. No `DESC` this time. সব সময় বড়লোকদের আগে রাখলে চলবে?”",
    sceneBn:
      "“সব বিক্রি তো আর হিট হয় না, বেটা,” চাচ্চু বললেন। “`ORDER BY revenue` দিলে কম আয় আগে আসবে। এবার `DESC` দিও না। সব সময় বড়লোকদেরই আগে রাখবে নাকি?”",
    example: {
      sql: "SELECT item, revenue FROM cha_stall ORDER BY revenue LIMIT 5;",
      note: "Without DESC, ORDER BY sorts ascending — smallest value first.",
    },
    hint: "ORDER BY revenue ASC",
    solution: "SELECT item, revenue FROM cha_stall ORDER BY revenue ASC;",
    tables: ["cha_stall"],
    validate: (r, s) =>
      /ORDER BY/i.test(s) &&
      r.values.length === 14 &&
      num(r.values[0][col(r, "revenue")]) === 60,
  },
  {
    id: 6,
    arcId: "notebook",
    division: "Dhaka",
    concept: "ORDER BY DESC · LIMIT",
    title: "The Star Customer",
    titleBn: "স্টার গ্রাহক",
    story: "Show the three biggest sales by revenue, highest first.",
    storyBn: "আয়ের সবচেয়ে বড় তিনটা বিক্রি দেখাও — বড় থেকে ছোট।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cha stall owner · Dhaka",
    guideRoleBn: "চায়ের দোকানের মালিক",
    guideEmoji: "👴",
    scene:
      "“When a regular orders twenty cups, the whole stall turns around,” Chachchu said. “Use `DESC`, then `LIMIT 3`. The top three sales. Life's memorable moments? Maybe three, if you're lucky.”",
    sceneBn:
      "“নিয়মিত কাস্টমার একসাথে বিশ কাপ চাইলে পুরো দোকান তাকায়,” চাচ্চু বললেন। “`DESC`, তারপর `LIMIT 3`—সেরা তিনটা বিক্রি। জীবনের মনে রাখার মতো মুহূর্তও বড়জোর তিনটা, ভাগ্য ভালো হলে।”",
    example: {
      sql: "SELECT customer, revenue FROM cha_stall ORDER BY revenue DESC LIMIT 5;",
      note: "DESC puts the biggest first. LIMIT always comes at the very end.",
    },
    hint: "ORDER BY revenue DESC LIMIT 3",
    solution:
      "SELECT customer, revenue FROM cha_stall ORDER BY revenue DESC LIMIT 3;",
    tables: ["cha_stall"],
    validate: (r, s) =>
      /DESC/i.test(s) &&
      /LIMIT/i.test(s) &&
      r.values.length === 3 &&
      num(r.values[0][col(r, "revenue")]) === 200,
  },
  {
    id: 7,
    arcId: "notebook",
    division: "Dhaka",
    concept: "WHERE · another column",
    title: "Cheap Sells Fast",
    titleBn: "সস্তা বেশি বেচা",
    story: "Find the sales where a cup costs less than 20 taka.",
    storyBn: "যেসব বিক্রিতে প্রতি কাপের দাম ২০ টাকার কম, সেগুলো বের কর।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cha stall owner · Dhaka",
    guideRoleBn: "চায়ের দোকানের মালিক",
    guideEmoji: "👴",
    scene:
      "“Tea keeps this stall alive. But cheap deals bring people back,” Chachchu said. “Use `WHERE price_per_cup < 20`. Less than twenty taka. Simple.”",
    sceneBn:
      "“চা দোকানটা চালায়, আর সস্তা দাম কাস্টমার ফেরত আনে,” চাচ্চু বললেন। “`WHERE price_per_cup < 20` দাও—বিশ টাকার কম দামের বিক্রিগুলো পেয়ে যাবে। সোজা হিসাব।”",
    example: {
      sql: "SELECT item, price_per_cup FROM cha_stall WHERE cups > 5;",
      note: "The < sign finds values below a number. It works on any numeric column.",
    },
    hint: "WHERE price_per_cup < 20",
    solution:
      "SELECT item, price_per_cup FROM cha_stall WHERE price_per_cup < 20;",
    tables: ["cha_stall"],
    validate: (r, s) => /<\s*20/.test(s) && r.values.length === 9,
  },
  {
    id: 8,
    arcId: "notebook",
    division: "Dhaka",
    concept: "Combining moves",
    title: "The Evening Rush",
    titleBn: "সন্ধ্যার ভিড়",
    story:
      "Keep the sales where a cup costs under 20 taka, then show the top three by revenue.",
    storyBn:
      "প্রতি কাপ ২০ টাকার কম এমন বিক্রিগুলো রাখ, তারপর আয় অনুযায়ী টপ তিনটা দেখাও।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cha stall owner · Dhaka",
    guideRoleBn: "চায়ের দোকানের মালিক",
    guideEmoji: "👴",
    scene:
      "“Filter, sort, limit,” Chachchu said. “That's how I manage the stall. If only life came with a `WHERE` clause. Would save me a lot of trouble.”",
    sceneBn:
      "“আগে বাছো, তারপর সাজাও, শেষে কমাও,” চাচ্চু বললেন। “দোকান এভাবেই চালাই। ইশ, জীবনেও যদি একটা `WHERE` clause থাকত! কত ঝামেলা বাঁচত।”",
    example: {
      sql: "SELECT customer, revenue FROM cha_stall WHERE item = 'Cha' ORDER BY revenue DESC LIMIT 2;",
      note: "Read left to right: filter, then sort, then limit. SQL follows the order you write.",
    },
    hint: "WHERE price_per_cup < 20 ORDER BY revenue DESC LIMIT 3",
    solution:
      "SELECT customer, revenue FROM cha_stall WHERE price_per_cup < 20 ORDER BY revenue DESC LIMIT 3;",
    tables: ["cha_stall"],
    validate: (r, s) =>
      /<\s*20/.test(s) &&
      /ORDER BY/i.test(s) &&
      /LIMIT/i.test(s) &&
      r.values.length === 3 &&
      num(r.values[0][col(r, "revenue")]) === 200,
  },
  {
    id: 9,
    arcId: "cinema",
    division: "Dhaka",
    concept: "WHERE · number",
    title: "Hena Kothay?",
    titleBn: "হেনা কোথায়?",
    story: "List the factories in district 2 — Hena was last seen there.",
    storyBn:
      "২ নম্বর জেলার সব কারখানা বের কর — হেনাকে শেষবার সেখানেই দেখা গেছিল।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cinema hall owner · Dhaka",
    guideRoleBn: "সিনেমা হলের মালিক",
    guideEmoji: "🎬",
    scene:
      "The cinema hall kept shouting, “Hena kothay?” Chachchu shook his head. “Everyone's shouting; nobody's checking the records. Find the factories in district 2 with one `WHERE`. Mystery solved. Next!”",
    sceneBn:
      "হলজুড়ে চিৎকার—“হেনা কোথায়?” চাচ্চু মাথা নেড়ে বললেন, “সবাই চেঁচাচ্ছে, খাতাটা কেউ দেখছে না। `WHERE` দিয়ে ২ নম্বর জেলার কারখানাগুলো বের করো। রহস্য শেষ। পরের কেস!”",
    example: {
      sql: "SELECT * FROM districts WHERE division_id = 2;",
      note: "WHERE with a number keeps only the rows you want. Here division_id = 2 is just a number — no quotes needed.",
    },
    hint: "WHERE district_id = 2",
    solution: "SELECT name FROM garment_factories WHERE district_id = 2;",
    tables: ["garment_factories"],
    validate: (r, s) => /=\s*2/.test(s) && r.values.length === 3,
  },
  {
    id: 10,
    arcId: "cinema",
    division: "Dhaka",
    concept: "ORDER BY · LIMIT",
    title: "Hero Alam er Entry",
    titleBn: "হিরো আলমের এন্ট্রি",
    story: "Show the three factories with the most workers, largest first.",
    storyBn: "সবচেয়ে বেশি শ্রমিক আছে এমন তিনটা কারখানা দেখাও — বড় থেকে ছোট।",
    guide: "Hero Alam",
    guideBn: "হিরো আলম",
    guideRole: "Dance superstar · Dhaka",
    guideRoleBn: "নাচের তারকা",
    guideEmoji: "💃",
    scene:
      "Hero Alam fixed his collar. “I don't walk onto a stage. I make an entrance! `ORDER BY workers DESC`, then `LIMIT 3`. The three biggest factories. Naturally, I would rank first.”",
    sceneBn:
      "হিরো আলম কলার ঠিক করে বললেন, “আমি স্টেজে উঠি না, এন্ট্রি দিই! `ORDER BY workers DESC`, তারপর `LIMIT 3`। সবচেয়ে বড় তিনটা কারখানা। তালিকায় আমার নাম থাকলে অবাক হবেন না!”",
    example: {
      sql: "SELECT name, workers FROM garment_factories ORDER BY workers DESC LIMIT 5;",
      note: "DESC puts the biggest first. LIMIT then keeps only the top rows — just like a dance finale.",
    },
    hint: "ORDER BY workers DESC LIMIT 3",
    solution:
      "SELECT name, workers FROM garment_factories ORDER BY workers DESC LIMIT 3;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /DESC/i.test(s) &&
      /LIMIT/i.test(s) &&
      r.values.length === 3 &&
      txt(r.values[0][0]).includes("dhaka apparel"),
  },
  {
    id: 11,
    arcId: "cinema",
    division: "Dhaka",
    concept: "COUNT · WHERE",
    title: "Golapi Ekgon? Na, Panch!",
    titleBn: "গোলাপী একজন? না, পাঁচ!",
    story: "Count the Miniket rice-price records.",
    storyBn: "মিনিকেট চালের দামের রেকর্ডগুলো গুণে বল।",
    guide: "Golapi",
    guideBn: "গোলাপী",
    guideRole: "Ticket seller · Golapi Ekgon",
    guideRoleBn: "টিকিট বিক্রেতা",
    guideEmoji: "🌹",
    scene:
      "Golapi counted the tickets. “One Miniket customer can create more drama than five BRRI customers. Filter the variety, then `COUNT(*)`. At least my ticket count doesn't argue back.”",
    sceneBn:
      "গোলাপী টিকিট গুনতে গুনতে বলল, “এক Miniket কাস্টমার পাঁচ BRRI কাস্টমারের চেয়েও বেশি নাটক করে! আগে variety বাছো, তারপর `COUNT(*)`। আমার টিকিটের হিসাব অন্তত তর্ক করে না।”",
    example: {
      sql: "SELECT COUNT(*) AS total FROM rice_prices WHERE variety = 'BRRI dhan';",
      note: "You can filter first, then count. The WHERE narrows the rows; COUNT(*) counts what is left.",
    },
    hint: "WHERE variety = 'Miniket' + COUNT(*)",
    solution:
      "SELECT COUNT(*) AS total FROM rice_prices WHERE variety = 'Miniket';",
    tables: ["rice_prices"],
    validate: (r, s) =>
      /COUNT\s*\(/i.test(s) &&
      /miniket/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][0]) === 5,
  },
  {
    id: 12,
    arcId: "cinema",
    division: "Chittagong",
    concept: "SUM",
    title: "Jamai Babu er Hisab",
    titleBn: "জামাই বাবুর হিসাব",
    story: "Add up all remittances in USD — one total.",
    storyBn: "সব রেমিটেন্স ডলারে যোগ কর — একটাই সংখ্যা।",
    guide: "Jamai Babu",
    guideBn: "জামাই বাবু",
    guideRole: "The son-in-law · Chittagong",
    guideRoleBn: "জামাই বাবু",
    guideEmoji: "💰",
    scene:
      "Jamai Babu cleared his throat. “My mother-in-law doesn't ask how hard I worked. She asks for the total. `SUM(usd_amount)`. One number. And yes, she'll ask you to check it twice.”",
    sceneBn:
      "জামাই বাবু গলা খাঁকারি দিয়ে বললেন, “শাশুড়ি কখনো জিজ্ঞেস করেন না কত কষ্ট করেছি। সোজা প্রশ্ন—মোট কত? `SUM(usd_amount)`। একটাই সংখ্যা। তারপরও দুবার মিলিয়ে দেখতে বলবেন!”",
    example: {
      sql: "SELECT SUM(workers) AS total FROM garment_factories;",
      note: "SUM adds one numeric column from every row into a single total.",
    },
    hint: "SELECT SUM(usd_amount) FROM remittance_2026;",
    solution: "SELECT SUM(usd_amount) AS total_usd FROM remittance_2026;",
    tables: ["remittance_2026"],
    validate: (r, s) =>
      /SUM\s*\(/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][0]) === 736_000_000,
  },
  {
    id: 13,
    arcId: "cinema",
    division: "Dhaka",
    concept: "LIKE",
    title: "Bouma Ekgon… Wait, Duto!",
    titleBn: "বৌমা একজন… আসলে দুই!",
    story: "Find the factories with ‘Garments’ anywhere in the name.",
    storyBn: "যেসব কারখানার নামে ‘Garments’ আছে, সেগুলো খুঁজে বের কর।",
    guide: "Bouma",
    guideBn: "বৌমা",
    guideRole: "The daughter-in-law · Dhaka",
    guideRoleBn: "বৌমা",
    guideEmoji: "👰",
    scene:
      "Bouma raised an eyebrow. “Two factories with the same word in the name? How original. Use `LIKE` with `%` on both sides and find ‘Garments’ wherever it appears.”",
    sceneBn:
      "বৌমা ভ্রু তুলে বললেন, “দুই কারখানার নামেই একই শব্দ? বাহ, কী কাকতালীয়! `LIKE`-এর দুই পাশে `%` দাও—নামের যেখানেই ‘Garments’ থাকুক, খুঁজে পাবে।”",
    example: {
      sql: "SELECT name FROM garment_factories WHERE name LIKE '%Textile%';",
      note: "The % on both sides means the word can appear anywhere inside the name.",
    },
    hint: "WHERE name LIKE '%Garments%'",
    solution:
      "SELECT name FROM garment_factories WHERE name LIKE '%Garments%';",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /LIKE/i.test(s) &&
      r.values.length === 2 &&
      has(r, "port city") &&
      has(r, "royal"),
  },
  {
    id: 14,
    arcId: "cinema",
    division: "Khulna",
    concept: "AVG",
    title: "Doctor Babu er Diagnosis",
    titleBn: "ডাক্তার বাবুর ডায়াগনোসিস",
    story: "Find the average maximum wage across all factories.",
    storyBn: "সব কারখানার গড় সর্বোচ্চ মজুরি বের কর।",
    guide: "Doctor Babu",
    guideBn: "ডাক্তার বাবু",
    guideRole: "The doctor · Khulna",
    guideRoleBn: "ডাক্তার বাবু",
    guideEmoji: "🩺",
    scene:
      "Doctor Babu took off his glasses. “I check blood pressure; you check `max_wage`. `AVG(max_wage)` gives you the average. Different patients, same idea: don't jump to conclusions.”",
    sceneBn:
      "ডাক্তার বাবু চশমা খুলে বললেন, “আমি ব্লাড প্রেসার দেখি, তুমি `max_wage` দেখো। `AVG(max_wage)` গড়টা বের করবে। রোগী আলাদা, নিয়ম এক—রিপোর্ট না দেখে সিদ্ধান্ত নিও না।”",
    example: {
      sql: "SELECT AVG(min_wage) AS average FROM garment_factories;",
      note: "AVG adds all values and divides by the row count — the usual “typical” value.",
    },
    hint: "SELECT AVG(max_wage) FROM garment_factories;",
    solution:
      "SELECT AVG(max_wage) AS average_max_wage FROM garment_factories;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /AVG\s*\(/i.test(s) &&
      r.values.length === 1 &&
      Math.abs(num(r.values[0][0]) - 11340) < 1,
  },
  {
    id: 15,
    arcId: "cinema",
    division: "Dhaka",
    concept: "MIN · MAX",
    title: "Mama er Bazar",
    titleBn: "মামার বাজার",
    story: "Show the cheapest and highest rice price per kg in one row.",
    storyBn:
      "প্রতি কেজি চালের সবচেয়ে কম আর সবচেয়ে বেশি দাম এক সারিতে দেখিয়ে দে।",
    guide: "Mama",
    guideBn: "মামা",
    guideRole: "The uncle · Dhaka",
    guideRoleBn: "মামা",
    guideEmoji: "🛒",
    scene:
      "Mama slapped the market table. “I bargain until the shopkeeper gives up. `MIN` and `MAX` show both ends in one row—the cheapest and the most expensive. Basically, my entire shopping strategy.”",
    sceneBn:
      "মামা বাজারের টেবিলে হাত দিয়ে বললেন, “দোকানদার হার না মানা পর্যন্ত দরাদরি করি। `MIN` আর `MAX` এক সারিতে সবচেয়ে কম আর সবচেয়ে বেশি দাম দেখায়। আমার বাজার করার পুরো কৌশল!”",
    example: {
      sql: "SELECT MIN(min_wage) AS low, MAX(max_wage) AS high FROM garment_factories;",
      note: "Two aggregates in one SELECT become two columns in one row.",
    },
    hint: "MIN(price_per_kg), MAX(price_per_kg)",
    solution:
      "SELECT MIN(price_per_kg) AS cheapest, MAX(price_per_kg) AS dearest FROM rice_prices;",
    tables: ["rice_prices"],
    validate: (r, s) =>
      /MIN\s*\(/i.test(s) &&
      /MAX\s*\(/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][col(r, "cheap", "min")]) === 46 &&
      num(r.values[0][col(r, "dear", "max")]) === 66,
  },
  {
    id: 16,
    arcId: "cinema",
    division: "Rajshahi",
    concept: "WHERE · AND",
    title: "Chachchu er Cha Stall",
    titleBn: "চাচ্চুর চায়ের দোকান",
    story: "List the factories paying a minimum wage below 8,000 taka.",
    storyBn: "যেসব কারখানায় ন্যূনতম মজুরি ৮০০০ টাকার কম, সেগুলোর লিস্ট দে।",
    guide: "Chachchu",
    guideBn: "চাচ্চু",
    guideRole: "Cinema hall & cha stall · Dhaka",
    guideRoleBn: "সিনেমা হলের মালিক",
    guideEmoji: "☕",
    scene:
      "Chachchu stirred his tea. “Everyone can walk into my stall. Doesn't mean everyone gets served. `min_wage < 8000` is your filter. A filter-free stall is just a crowd.”",
    sceneBn:
      "চাচ্চু চায়ে চুমুক দিয়ে বললেন, “দোকানে সবাই ঢুকতে পারে, তাই বলে সবাইকে তো আর সার্ভ করি না। `min_wage < 8000` দিয়ে বাছাই করো। ফিল্টার ছাড়া দোকান মানে শুধু জটলা।”",
    example: {
      sql: "SELECT name, min_wage FROM garment_factories WHERE min_wage < 9000;",
      note: "A single WHERE condition is enough. Lower the number to 8000 for the real mission.",
    },
    hint: "WHERE min_wage < 8000",
    solution:
      "SELECT name, min_wage FROM garment_factories WHERE min_wage < 8000;",
    tables: ["garment_factories"],
    validate: (r, s) => /<\s*8000/.test(s) && r.values.length === 6,
  },
  {
    id: 17,
    arcId: "cinema",
    division: "Mymensingh",
    concept: "GROUP BY",
    title: "Rani er Digital Raj",
    titleBn: "রানীর ডিজিটাল রাজ্য",
    story: "Count the e-services by digital status.",
    storyBn: "ডিজিটাল স্ট্যাটাস অনুযায়ী ই-সার্ভিসগুলো গুণে দেখ।",
    guide: "Rani",
    guideBn: "রানী",
    guideRole: "The queen · Mymensingh",
    guideRoleBn: "রানী",
    guideEmoji: "👑",
    scene:
      "Rani tapped her pen. “I don't rule. I `GROUP BY`. Live, Pilot, Beta—three different buckets. Each has its own numbers and its own excuses.”",
    sceneBn:
      "রানী কলম টোকা দিয়ে বললেন, “আমি রাজত্ব করি না, `GROUP BY` করি। Live, Pilot, Beta—তিনটা আলাদা গ্রুপ। প্রত্যেকের হিসাব আলাদা, অজুহাতও আলাদা।”",
    example: {
      sql: "SELECT ministry, COUNT(*) AS services FROM e_services GROUP BY ministry;",
      note: "GROUP BY collapses rows by a category. Swap ministry for digital_status here.",
    },
    hint: "GROUP BY digital_status, COUNT(*)",
    solution:
      "SELECT digital_status, COUNT(*) AS services FROM e_services GROUP BY digital_status;",
    tables: ["e_services"],
    validate: (r, s) =>
      /GROUP BY/i.test(s) &&
      /COUNT\s*\(/i.test(s) &&
      r.values.length === 3 &&
      has(r, "live") &&
      has(r, "pilot") &&
      has(r, "beta"),
  },
  {
    id: 18,
    arcId: "cinema",
    division: "Dhaka",
    concept: "JOIN · GROUP · finale",
    title: "Final Showdown: Raja er Juddho",
    titleBn: "চূড়ান্ত যুদ্ধ: রাজার যুদ্ধ",
    story: "Find the one district with the most garment workers.",
    storyBn: "কোন জেলায় পোশাক শ্রমিক সবচেয়ে বেশি? শুধু সেই জেলাটা বের কর।",
    guide: "Raja Saheb",
    guideBn: "রাজা সাহেব",
    guideRole: "The big boss · Dhaka",
    guideRoleBn: "রাজা সাহেব",
    guideEmoji: "⚔️",
    scene:
      "Raja Saheb kept his eyes on the screen. “Final round. Chachchu's tea, Golapi's tickets, Jamai Babu's accounts—all in one query. One district, one answer. The whole hall is waiting. No pressure.”",
    sceneBn:
      "রাজা সাহেব স্ক্রিন থেকে চোখ না তুলেই বললেন, “শেষ লড়াই। চাচ্চুর চা, গোলাপীর টিকিট, জামাই বাবুর হিসাব—সব এক query-তে। এক জেলা, এক উত্তর। পুরো হল অপেক্ষায়। চাপ নিও না… খুব বেশি।”",
    example: {
      sql: "SELECT d.name_en, SUM(f.workers) AS total FROM garment_factories f JOIN districts d ON f.district_id = d.district_id GROUP BY d.name_en ORDER BY total DESC LIMIT 3;",
      note: "You have seen this full pattern before: JOIN for names, GROUP for totals, ORDER to rank, LIMIT to pick the winner.",
    },
    hint: "JOIN districts, GROUP BY district, ORDER BY total DESC, LIMIT 1.",
    solution: `SELECT d.name_en AS district, SUM(f.workers) AS total_workers
FROM garment_factories f
JOIN districts d ON f.district_id = d.district_id
GROUP BY d.district_id, d.name_en
ORDER BY total_workers DESC
LIMIT 1;`,
    tables: ["garment_factories", "districts"],
    validate: (r, s) =>
      /JOIN/i.test(s) &&
      /GROUP BY/i.test(s) &&
      /SUM\s*\(/i.test(s) &&
      r.values.length === 1 &&
      txt(r.values[0][0]).includes("gazipur"),
  },
  {
    id: 19,
    arcId: "priyotoma",
    division: "Dhaka",
    concept: "WHERE · text",
    title: "Rejected Again",
    titleBn: "আবার রিজেক্ট",
    story: "Find the factory named ‘Bay Exports’.",
    storyBn: "‘Bay Exports’ নামের কারখানাটা খুঁজে বের কর।",
    guide: "Tomal",
    guideBn: "তমাল",
    guideRole: "The hopeless romantic · Priyotoma",
    guideRoleBn: "নায়ক · প্রিয়তমা",
    guideEmoji: "😏",
    scene:
      "Tomal adjusted his collar for the eleventh time. “Forty-seven rejections, and I still look this good. Priya wants one exact company name. Find Bay Exports before she blocks me. Again.”",
    sceneBn:
      "তমাল এগারোবারের মতো কলার ঠিক করলেন। “৪৭ বার রিজেক্ট হয়েছি, তবু look তো কমেনি! প্রিয়া একটা নির্দিষ্ট কোম্পানির নাম চেয়েছেন। Bay Exports খুঁজে দাও, উনি আমাকে আবার block করার আগেই।”",
    example: {
      sql: "SELECT * FROM districts WHERE name_en = 'Dhaka';",
      note: "Text goes in single quotes. Exact match with = gives just the row you want.",
    },
    hint: "WHERE name = 'Bay Exports'",
    solution: "SELECT * FROM garment_factories WHERE name = 'Bay Exports';",
    tables: ["garment_factories"],
    validate: (r, s) => /=\s*'bay exports'/i.test(s) && r.values.length === 1,
  },
  {
    id: 20,
    arcId: "priyotoma",
    division: "Dhaka",
    concept: "COUNT(*)",
    title: "The Rejection Ledger",
    titleBn: "রিজেকশনের খাতা",
    story: "Count the rice-price records.",
    storyBn: "চালের দামের রেকর্ডগুলো গুণে বল।",
    guide: "Priya",
    guideBn: "প্রিয়া",
    guideRole: "The unimpressed heroine · Priyotoma",
    guideRoleBn: "নায়িকা · প্রিয়তমা",
    guideEmoji: "💅",
    scene:
      "Priya didn't look up from her spreadsheet. “I keep records of bad decisions. `COUNT(*)` is my favourite—it doesn't lie. Unlike certain people. Just count the rows.”",
    sceneBn:
      "প্রিয়া স্প্রেডশিট থেকে চোখ না তুলেই বললেন, “ভুল সিদ্ধান্তেরও হিসাব রাখি। `COUNT(*)` আমার favourite—অন্তত মিথ্যা বলে না। কিছু মানুষের মতো না। এবার সারিগুলো গুনো।”",
    example: {
      sql: "SELECT COUNT(*) AS total FROM districts;",
      note: "COUNT(*) returns one number — the number of rows, no matter what is inside them.",
    },
    hint: "SELECT COUNT(*) FROM rice_prices;",
    solution: "SELECT COUNT(*) AS total FROM rice_prices;",
    tables: ["rice_prices"],
    validate: (r, s) =>
      /COUNT\s*\(/i.test(s) &&
      /rice_prices/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][0]) === 10,
  },
  {
    id: 21,
    arcId: "priyotoma",
    division: "Dhaka",
    concept: "WHERE · number",
    title: "Her Standards",
    titleBn: "তার মানদণ্ড",
    story: "Find the districts with literacy above 75 percent.",
    storyBn: "যেসব জেলার সাক্ষরতা ৭৫ শতাংশের বেশি, সেগুলো বের কর।",
    guide: "Priya",
    guideBn: "প্রিয়া",
    guideRole: "The unimpressed heroine · Priyotoma",
    guideRoleBn: "নায়িকা · প্রিয়তমা",
    guideEmoji: "💅",
    scene:
      "Priya finally looked up. “Seventy-five. Not 74.9, not ‘almost’. If one comparison sign is too much, don't text me at midnight. I have a sleep schedule.”",
    sceneBn:
      "প্রিয়া অবশেষে তাকালেন। “৭৫। ৭৪.৯ না, ‘প্রায় ৭৫’ও না। একটা comparison sign-ই সামলাতে না পারলে মাঝরাতে মেসেজ দিও না। আমার ঘুমেরও একটা routine আছে।”",
    example: {
      sql: "SELECT name_en, literacy_rate FROM districts WHERE literacy_rate > 70;",
      note: "The > sign keeps rows above a number. Raise it to 75 for the real list.",
    },
    hint: "WHERE literacy_rate > 75",
    solution:
      "SELECT name_en, literacy_rate FROM districts WHERE literacy_rate > 75;",
    tables: ["districts"],
    validate: (r, s) => />\s*75/.test(s) && r.values.length === 4,
  },
  {
    id: 22,
    arcId: "priyotoma",
    division: "Dhaka",
    concept: "ORDER BY · LIMIT",
    title: "Most Expensive Gift",
    titleBn: "সবচেয়ে দামি উপহার",
    story: "Show the three most expensive rice records, highest first.",
    storyBn: "সবচেয়ে দামি তিনটা চালের রেকর্ড দেখাও — বড় থেকে ছোট।",
    guide: "Tomal",
    guideBn: "তমাল",
    guideRole: "The hopeless romantic · Priyotoma",
    guideRoleBn: "নায়ক · প্রিয়তমা",
    guideEmoji: "😏",
    scene:
      "Tomal sighed. “Flowers are overrated. Rice is romance. `ORDER BY price DESC`, `LIMIT 3`. Just don't faint when you see the prices. I nearly did.”",
    sceneBn:
      "তমাল দীর্ঘশ্বাস ফেললেন। “ফুলের এত কদর কেন বুঝি না। চালই আসল romance। `ORDER BY price DESC`, `LIMIT 3`। দাম দেখে অজ্ঞান হয়ো না—আমি প্রায় হয়েই গিয়েছিলাম।”",
    example: {
      sql: "SELECT district, price_per_kg FROM rice_prices ORDER BY price_per_kg DESC LIMIT 5;",
      note: "DESC = biggest first. LIMIT trims the list to a few rows.",
    },
    hint: "ORDER BY price_per_kg DESC LIMIT 3",
    solution:
      "SELECT district, price_per_kg FROM rice_prices ORDER BY price_per_kg DESC LIMIT 3;",
    tables: ["rice_prices"],
    validate: (r, s) => {
      if (!/DESC/i.test(s) || !/LIMIT/i.test(s) || r.values.length !== 3)
        return false;
      return num(r.values[0][col(r, "price")]) === 66;
    },
  },
  {
    id: 23,
    arcId: "priyotoma",
    division: "Dhaka",
    concept: "SUM",
    title: "The Ring Budget",
    titleBn: "রিংয়ের বাজেট",
    story: "Total the export value of all factories in USD.",
    storyBn: "সব কারখানার রপ্তানি মূল্য ডলারে যোগ কর।",
    guide: "Tomal",
    guideBn: "তমাল",
    guideRole: "The hopeless romantic · Priyotoma",
    guideRoleBn: "নায়ক · প্রিয়তমা",
    guideEmoji: "😏",
    scene:
      "Tomal whispered, “I'm not broke. I'm temporarily cash-light. `SUM(export_usd)`. If the total is impressive enough, Priya might finally notice me. Or the number. I'll take either.”",
    sceneBn:
      "তমাল ফিসফিস করে বললেন, “আমি গরিব না, আপাতত cash flow একটু দুর্বল। `SUM(export_usd)` বের করো। সংখ্যাটা বড় হলে প্রিয়া হয়তো আমাকে notice করবেন। না করলেও সংখ্যাটার তো দাম আছে!”",
    example: {
      sql: "SELECT SUM(workers) AS total FROM garment_factories;",
      note: "SUM adds one numeric column from all rows into one total.",
    },
    hint: "SELECT SUM(export_usd) FROM garment_factories;",
    solution: "SELECT SUM(export_usd) AS total_export FROM garment_factories;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /SUM\s*\(/i.test(s) &&
      r.values.length === 1 &&
      Math.abs(num(r.values[0][0]) - 22_450_000) < 1,
  },
  {
    id: 24,
    arcId: "priyotoma",
    division: "Dhaka",
    concept: "LIKE",
    title: "Knit Pick",
    titleBn: "নিট পিক",
    story: "Find the factories with ‘Knit’ in the name.",
    storyBn: "নামে ‘Knit’ আছে এমন কারখানা বের কর।",
    guide: "Priya",
    guideBn: "প্রিয়া",
    guideRole: "The unimpressed heroine · Priyotoma",
    guideRoleBn: "নায়িকা · প্রিয়তমা",
    guideEmoji: "💅",
    scene:
      "Priya blinked. “A knit joke? Truly groundbreaking. Use `LIKE` with `%` on both sides. Let's see if you can find one useful thing today. Just one.”",
    sceneBn:
      "প্রিয়া চোখ পিটপিট করলেন। “Knit নিয়ে joke? বাহ, একদম নতুন! `LIKE`-এর দুই পাশে `%` দাও। দেখি আজ অন্তত একটা কাজের জিনিস খুঁজে বের করতে পারো কি না।”",
    example: {
      sql: "SELECT name FROM garment_factories WHERE name LIKE '%Tex%';",
      note: "% means any characters. Put it on both sides to search anywhere in the text.",
    },
    hint: "WHERE name LIKE '%Knit%'",
    solution: "SELECT name FROM garment_factories WHERE name LIKE '%Knit%';",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /LIKE/i.test(s) && r.values.length === 1 && has(r, "eastern knitters"),
  },
  {
    id: 25,
    arcId: "priyotoma",
    division: "Dhaka",
    concept: "AVG",
    title: "Average Love",
    titleBn: "গড় ভালোবাসা",
    story: "Find the average rice price per kg.",
    storyBn: "চালের প্রতি কেজির গড় দাম বের কর।",
    guide: "Tomal",
    guideBn: "তমাল",
    guideRole: "The hopeless romantic · Priyotoma",
    guideRoleBn: "নায়ক · প্রিয়তমা",
    guideEmoji: "😏",
    scene:
      "Tomal stared at the ceiling. “Statistically, my love life is average. `AVG(price_per_kg)` should at least give us one number that makes sense.”",
    sceneBn:
      "তমাল ছাদের দিকে তাকিয়ে বললেন, “পরিসংখ্যান অনুযায়ী আমার প্রেমজীবন average। `AVG(price_per_kg)` অন্তত একটা হিসাব দেবে, যেটার কোনো মানে আছে।”",
    example: {
      sql: "SELECT AVG(literacy_rate) AS average FROM districts;",
      note: "AVG adds all values and divides by the count — the typical value.",
    },
    hint: "SELECT AVG(price_per_kg) FROM rice_prices;",
    solution: "SELECT AVG(price_per_kg) AS average_price FROM rice_prices;",
    tables: ["rice_prices"],
    validate: (r, s) =>
      /AVG\s*\(/i.test(s) &&
      r.values.length === 1 &&
      Math.abs(num(r.values[0][0]) - 56) < 0.5,
  },
  /* ═══ Chapter IV — Rajkumar er Raj (26–32) ═══ */
  {
    id: 26,
    arcId: "rajkumar",
    division: "Dhaka",
    concept: "ORDER BY ASC · LIMIT",
    title: "Slow-Motion Entry",
    titleBn: "স্লো-মোশন এন্ট্রি",
    story: "Show the three lowest minimum wages, smallest first.",
    storyBn: "সবচেয়ে কম তিনটা ন্যূনতম মজুরি দেখাও — ছোট থেকে বড়।",
    guide: "Raja Saheb",
    guideBn: "রাজা সাহেব",
    guideRole: "The Rajkumar · sunglasses indoors",
    guideRoleBn: "রাজকুমার",
    guideEmoji: "🕶️",
    scene:
      "Raja Saheb entered in slow motion. “`ORDER BY min_wage ASC`, `LIMIT 3`. Camera ready? Hero pose? Dramatic pause? Good. The trainees will be copying this all week.”",
    sceneBn:
      "রাজা সাহেব স্লো-মোশনে ঢুকলেন। “`ORDER BY min_wage ASC`, `LIMIT 3`। ক্যামেরা রেডি? হিরো পোজ? নাটকীয় বিরতি? ঠিক আছে। শিক্ষানবিশরা এবার সপ্তাহজুড়ে এটাই নকল করবে।”",
    example: {
      sql: "SELECT name, min_wage FROM garment_factories ORDER BY min_wage ASC LIMIT 5;",
      note: "Without DESC, ORDER BY goes ascending — smallest first.",
    },
    hint: "ORDER BY min_wage ASC LIMIT 3",
    solution:
      "SELECT name, min_wage FROM garment_factories ORDER BY min_wage ASC LIMIT 3;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /ORDER BY/i.test(s) &&
      /LIMIT/i.test(s) &&
      r.values.length === 3 &&
      has(r, "northern mills"),
  },
  {
    id: 27,
    arcId: "rajkumar",
    division: "Dhaka",
    concept: "COUNT · WHERE",
    title: "Body Count",
    titleBn: "বডি কাউন্ট",
    story: "Count the factories with more than five safety incidents.",
    storyBn:
      "যেসব কারখানায় পাঁচটার বেশি নিরাপত্তা দুর্ঘটনা ঘটেছে, সেগুলো গুণে দেখ।",
    guide: "Sidekick",
    guideBn: "সাইডকিক",
    guideRole: "The exhausted sidekick · Rajkumar",
    guideRoleBn: "রাজকুমার",
    guideEmoji: "😮‍💨",
    scene:
      "The sidekick rubbed his temples. “He says ‘body count’ when he means safety incidents. I've explained this eleven times. `WHERE incidents > 5`, then `COUNT(*)`. Please, let's finish this.”",
    sceneBn:
      "সাইডকিক কপাল চেপে ধরলেন। “উনি ‘body count’ বলেন, আসলে safety incident বোঝান। এগারোবার বুঝিয়েছি! `WHERE incidents > 5`, তারপর `COUNT(*)`। প্লিজ, এবার কাজটা শেষ করি।”",
    example: {
      sql: "SELECT COUNT(*) AS total FROM garment_factories WHERE workers > 3000;",
      note: "Filter first with WHERE, then count whatever rows survive.",
    },
    hint: "WHERE incidents > 5 + COUNT(*)",
    solution:
      "SELECT COUNT(*) AS total FROM garment_factories WHERE incidents > 5;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /COUNT\s*\(/i.test(s) &&
      /incidents\s*>\s*5/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][0]) === 5,
  },
  {
    id: 28,
    arcId: "rajkumar",
    division: "Dhaka",
    concept: "MIN · MAX",
    title: "Hero Stats",
    titleBn: "হিরো স্ট্যাটস",
    story: "Show the smallest and largest workforce in one row.",
    storyBn: "সবচেয়ে কম আর সবচেয়ে বেশি শ্রমিক এক সারিতে দেখিয়ে দে।",
    guide: "Raja Saheb",
    guideBn: "রাজা সাহেব",
    guideRole: "The Rajkumar · sunglasses indoors",
    guideRoleBn: "রাজকুমার",
    guideEmoji: "🕶️",
    scene:
      "Raja Saheb adjusted his indoor sunglasses. “Every hero needs stats. `MIN(workers)`, `MAX(workers)`. One row, two numbers, absolutely no modesty. That's the brand.”",
    sceneBn:
      "রাজা সাহেব ঘরের ভেতরেই সানগ্লাস ঠিক করলেন। “হিরোরও stats লাগে। `MIN(workers)`, `MAX(workers)`। এক সারি, দুই সংখ্যা, বিনয়ের বালাই নেই। এটাই আমার brand।”",
    example: {
      sql: "SELECT MIN(min_wage) AS low, MAX(max_wage) AS high FROM garment_factories;",
      note: "Two aggregates in one SELECT become two columns in a single row.",
    },
    hint: "MIN(workers), MAX(workers)",
    solution:
      "SELECT MIN(workers) AS fewest, MAX(workers) AS most FROM garment_factories;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /MIN\s*\(/i.test(s) &&
      /MAX\s*\(/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][col(r, "few", "min")]) === 1200 &&
      num(r.values[0][col(r, "most", "max")]) === 6000,
  },
  {
    id: 29,
    arcId: "rajkumar",
    division: "Dhaka",
    concept: "GROUP BY",
    title: "The Fan Club",
    titleBn: "ফ্যান ক্লাব",
    story: "Count the factories in each district.",
    storyBn: "প্রতিটা জেলায় কতগুলো কারখানা আছে, গুণে বল।",
    guide: "Sidekick",
    guideBn: "সাইডকিক",
    guideRole: "The exhausted sidekick · Rajkumar",
    guideRoleBn: "রাজকুমার",
    guideEmoji: "😮‍💨",
    scene:
      "The sidekick sighed. “`GROUP BY district_id`, then `COUNT(*)`. He'll claim he knew this already. He didn't. I taught him over tea. Twice. He still forgets.”",
    sceneBn:
      "সাইডকিক দীর্ঘশ্বাস ফেললেন। “`GROUP BY district_id`, তারপর `COUNT(*)`। উনি বলবেন আগে থেকেই জানতেন। জানতেন না। চায়ের দোকানে দুবার শিখিয়েছি। তবু ভুলে যান।”",
    example: {
      sql: "SELECT ministry, COUNT(*) AS n FROM e_services GROUP BY ministry;",
      note: "GROUP BY produces one row per distinct value of the grouped column.",
    },
    hint: "GROUP BY district_id, COUNT(*)",
    solution:
      "SELECT district_id, COUNT(*) AS factories FROM garment_factories GROUP BY district_id;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /GROUP BY/i.test(s) && /COUNT\s*\(/i.test(s) && r.values.length === 6,
  },
  {
    id: 30,
    arcId: "rajkumar",
    division: "Chittagong",
    concept: "WHERE · text",
    title: "Villain Entry",
    titleBn: "খলনায়কের এন্ট্রি",
    story: "List every remittance from the UAE.",
    storyBn: "ইউএই থেকে আসা সব রেমিটেন্স দেখাও।",
    guide: "Raja Saheb",
    guideBn: "রাজা সাহেব",
    guideRole: "The Rajkumar · sunglasses indoors",
    guideRoleBn: "রাজকুমার",
    guideEmoji: "🕶️",
    scene:
      "Raja Saheb pointed at the poster. “The villain is from the UAE? Fine. `WHERE country = 'UAE'`. Three rows. I'll add the dramatic sigh myself.”",
    sceneBn:
      "রাজা সাহেব পোস্টারের দিকে আঙুল তুলে বললেন, “খলনায়ক UAE থেকে? বেশ। `WHERE country = 'UAE'`। তিনটা row আসবে। নাটকীয় দীর্ঘশ্বাসটা আমি নিজেই দিয়ে দিচ্ছি।”",
    example: {
      sql: "SELECT month, country FROM remittance_2026 WHERE country = 'Saudi Arabia';",
      note: "Swap the text in the quotes to filter for a different country.",
    },
    hint: "WHERE country = 'UAE'",
    solution:
      "SELECT month, country, usd_amount FROM remittance_2026 WHERE country = 'UAE';",
    tables: ["remittance_2026"],
    validate: (r, s) => /=\s*'uae'/i.test(s) && r.values.length === 3,
  },
  {
    id: 31,
    arcId: "rajkumar",
    division: "Dhaka",
    concept: "DISTINCT",
    title: "No Duplicates",
    titleBn: "কোনো ডুপ্লিকেট নেই",
    story: "List each rice variety once.",
    storyBn: "চালের প্রতিটা জাত একবার করে দেখাও।",
    guide: "Sidekick",
    guideBn: "সাইডকিক",
    guideRole: "The exhausted sidekick · Rajkumar",
    guideRoleBn: "রাজকুমার",
    guideEmoji: "😮‍💨",
    scene:
      "The sidekick whispered, “`DISTINCT` removes duplicates. He once used that word at a family dinner. Nobody invited him to explain anything after that.”",
    sceneBn:
      "সাইডকিক ফিসফিস করে বললেন, “`DISTINCT` duplicate বাদ দেয়। উনি একবার পারিবারিক ডিনারেও এই কথাটা বলেছিলেন। তারপর থেকে কেউ তাঁকে কিছু explain করতে বলে না।”",
    example: {
      sql: "SELECT DISTINCT variety FROM rice_prices;",
      note: "DISTINCT removes duplicate values, leaving one row per unique variety.",
    },
    hint: "SELECT DISTINCT variety FROM rice_prices;",
    solution: "SELECT DISTINCT variety FROM rice_prices;",
    tables: ["rice_prices"],
    validate: (r, s) => /DISTINCT/i.test(s) && r.values.length === 2,
  },
  {
    id: 32,
    arcId: "rajkumar",
    division: "Rangpur",
    concept: "BETWEEN",
    title: "Five-Day Spotlight",
    titleBn: "পাঁচ দিনের স্পটলাইট",
    story: "Show the power outages from 2026-10-01 to 2026-10-05.",
    storyBn:
      "২০২৬-১০-০১ থেকে ২০২৬-১০-০৫ পর্যন্ত বিদ্যুৎ বিভ্রাটের রেকর্ডগুলো দেখাও।",
    guide: "Raja Saheb",
    guideBn: "রাজা সাহেব",
    guideRole: "The Rajkumar · sunglasses indoors",
    guideRoleBn: "রাজকুমার",
    guideEmoji: "🕶️",
    scene:
      "Raja Saheb counted on his fingers. “Five days, one range. `BETWEEN` includes both ends. Unlike his apology—it never really started, and definitely never ended.”",
    sceneBn:
      "রাজা সাহেব আঙুল গুনলেন। “পাঁচ দিন, এক range। `BETWEEN` দুই প্রান্তই ধরে। উনার apology-র মতো না—শুরু কবে হয়েছে বোঝা যায়নি, শেষও হয়নি।”",
    example: {
      sql: "SELECT district, hours FROM power_outages WHERE outage_date BETWEEN '2026-10-01' AND '2026-10-03';",
      note: "BETWEEN includes both start and end dates.",
    },
    hint: "BETWEEN '2026-10-01' AND '2026-10-05'",
    solution:
      "SELECT district, hours FROM power_outages WHERE outage_date BETWEEN '2026-10-01' AND '2026-10-05';",
    tables: ["power_outages"],
    validate: (r, s) =>
      /BETWEEN/i.test(s) && /2026-10-01/.test(s) && r.values.length === 5,
  },
  /* ═══ Chapter V — Leader: Amie Bangladesh (33–39) ═══ */
  {
    id: 33,
    arcId: "leader",
    division: "Dhaka",
    concept: "COUNT(*)",
    title: "Everybody Is Leader",
    titleBn: "সবাই লিডার",
    story: "Count the e-services.",
    storyBn: "মোট কতগুলো ই-সার্ভিস আছে, গুণে বল।",
    guide: "Candidate No. 1",
    guideBn: "প্রার্থী নম্বর ১",
    guideRole: "“Amie Bangladesh” · election season",
    guideRoleBn: "নির্বাচনী প্রার্থী",
    guideEmoji: "🗳️",
    scene:
      "Candidate No. 1 adjusted his microphone. “I am the leader! No, he is! Actually, we're all leaders. Just `COUNT(*)` the services and let the data decide. Data doesn't need a campaign team.”",
    sceneBn:
      "প্রার্থী নম্বর ১ মাইক ঠিক করলেন। “নেতা আমি! না, উনি! আসলে আমরা সবাই নেতা। সার্ভিসগুলো `COUNT(*)` করো, ডেটাই ঠিক করুক। ডেটার আবার প্রচার টিম লাগে না।”",
    example: {
      sql: "SELECT COUNT(*) AS total FROM districts;",
      note: "COUNT(*) gives one number: how many rows the table has.",
    },
    hint: "SELECT COUNT(*) FROM e_services;",
    solution: "SELECT COUNT(*) AS total FROM e_services;",
    tables: ["e_services"],
    validate: (r, s) =>
      /COUNT\s*\(/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][0]) === 8,
  },
  {
    id: 34,
    arcId: "leader",
    division: "Dhaka",
    concept: "WHERE · text",
    title: "The Promises",
    titleBn: "প্রতিশ্রুতি",
    story: "Show only the services with status Live.",
    storyBn: "শুধু Live স্ট্যাটাসের সার্ভিসগুলো দেখাও।",
    guide: "The Opponent",
    guideBn: "প্রতিদ্বন্দ্বী",
    guideRole: "Professional disagree-er · Leader",
    guideRoleBn: "প্রতিদ্বন্দ্বী",
    guideEmoji: "😏",
    scene:
      "The Opponent scoffed. “Live means it actually works. Pilot means someone printed a brochure and called it progress. Use `WHERE`, beta. Brochures don't count as users.”",
    sceneBn:
      "প্রতিদ্বন্দ্বী হেসে বললেন, “Live মানে সত্যিই চলছে। Pilot মানে ব্রোশিওর ছাপিয়ে উন্নয়ন ঘোষণা। `WHERE` দিয়ে আসলটা বাছো, বেটা। ব্রোশিওরকে user ধরা যায় না।”",
    example: {
      sql: "SELECT service_name, digital_status FROM e_services WHERE digital_status = 'Pilot';",
      note: "Change the quoted value to Live to see the services that are actually running.",
    },
    hint: "WHERE digital_status = 'Live'",
    solution:
      "SELECT service_name, ministry FROM e_services WHERE digital_status = 'Live';",
    tables: ["e_services"],
    validate: (r, s) => /=\s*'live'/i.test(s) && r.values.length === 5,
  },
  {
    id: 35,
    arcId: "leader",
    division: "Dhaka",
    concept: "SUM · WHERE",
    title: "The Real Vote",
    titleBn: "আসল ভোট",
    story: "Add up the users of Live services.",
    storyBn: "Live সার্ভিসগুলোর ব্যবহারকারী যোগ কর।",
    guide: "Candidate No. 1",
    guideBn: "প্রার্থী নম্বর ১",
    guideRole: "“Amie Bangladesh” · election season",
    guideRoleBn: "নির্বাচনী প্রার্থী",
    guideEmoji: "🗳️",
    scene:
      "Candidate No. 1 whispered, “Votes come and go; users stay. `SUM(users)` with a `WHERE` for Live. If the total looks small, obviously the previous government is responsible.”",
    sceneBn:
      "প্রার্থী নম্বর ১ ফিসফিস করলেন, “ভোট আসে যায়, user থেকে যায়। Live সার্ভিসের জন্য `WHERE`, তারপর `SUM(users)`। সংখ্যা কম হলে দোষটা আগের সরকারের—এটাই নিয়ম!”",
    example: {
      sql: "SELECT SUM(users) AS total FROM e_services WHERE digital_status = 'Live';",
      note: "Filter first, then sum — the aggregate only sees the filtered rows.",
    },
    hint: "WHERE digital_status = 'Live' + SUM(users)",
    solution:
      "SELECT SUM(users) AS total_users FROM e_services WHERE digital_status = 'Live';",
    tables: ["e_services"],
    validate: (r, s) =>
      /SUM\s*\(/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][0]) === 6_650_000,
  },
  {
    id: 36,
    arcId: "leader",
    division: "Mymensingh",
    concept: "GROUP BY",
    title: "The Cabinet",
    titleBn: "মন্ত্রিসভা",
    story: "Count the e-services in each ministry.",
    storyBn: "প্রতিটা মন্ত্রণালয়ের ই-সার্ভিস গুণে দেখ।",
    guide: "The Opponent",
    guideBn: "প্রতিদ্বন্দ্বী",
    guideRole: "Professional disagree-er · Leader",
    guideRoleBn: "প্রতিদ্বন্দ্বী",
    guideEmoji: "😏",
    scene:
      "The Opponent lowered his voice. “`GROUP BY ministry`. Seven ministries, seven egos. Count them carefully. Politics is sensitive, especially when the numbers are public.”",
    sceneBn:
      "প্রতিদ্বন্দ্বী গলা নামিয়ে বললেন, “`GROUP BY ministry`। সাত মন্ত্রণালয়, সাত রকম ego। সাবধানে গুনো। রাজনীতি sensitive বিষয়—বিশেষ করে হিসাবটা public হলে।”",
    example: {
      sql: "SELECT digital_status, COUNT(*) AS n FROM e_services GROUP BY digital_status;",
      note: "Swap digital_status for ministry to group by a different column.",
    },
    hint: "GROUP BY ministry, COUNT(*)",
    solution:
      "SELECT ministry, COUNT(*) AS services FROM e_services GROUP BY ministry;",
    tables: ["e_services"],
    validate: (r, s) =>
      /GROUP BY/i.test(s) && /COUNT\s*\(/i.test(s) && r.values.length === 7,
  },
  {
    id: 37,
    arcId: "leader",
    division: "Dhaka",
    concept: "ORDER BY · LIMIT",
    title: "The Biggest Constituency",
    titleBn: "বৃহত্তম আসন",
    story: "List the top three districts by population, largest first.",
    storyBn: "জনসংখ্যায় টপ তিনটা জেলা দেখাও — বড় থেকে ছোট।",
    guide: "Candidate No. 1",
    guideBn: "প্রার্থী নম্বর ১",
    guideRole: "“Amie Bangladesh” · election season",
    guideRoleBn: "নির্বাচনী প্রার্থী",
    guideEmoji: "🗳️",
    scene:
      "Candidate No. 1 beamed. “`ORDER BY population DESC`, `LIMIT 3`. I represent all three districts. And the other eight. And the sea. Have I mentioned the sea?”",
    sceneBn:
      "প্রার্থী নম্বর ১ হাসলেন। “`ORDER BY population DESC`, `LIMIT 3`। এই তিন জেলারও আমি, বাকি আটটারও। সমুদ্রেরও। সমুদ্রের কথা বলেছি তো?”",
    example: {
      sql: "SELECT name_en, population FROM districts ORDER BY population DESC LIMIT 5;",
      note: "DESC sorts biggest first; LIMIT keeps only the top few.",
    },
    hint: "ORDER BY population DESC LIMIT 3",
    solution:
      "SELECT name_en, population FROM districts ORDER BY population DESC LIMIT 3;",
    tables: ["districts"],
    validate: (r, s) =>
      /population/i.test(s) &&
      /DESC/i.test(s) &&
      /LIMIT/i.test(s) &&
      r.values.length === 3 &&
      has(r, "dhaka"),
  },
  {
    id: 38,
    arcId: "leader",
    division: "Rajshahi",
    concept: "WHERE · comparison",
    title: "The Uncomfortable Truth",
    titleBn: "অস্বস্তিকর সত্য",
    story: "Find the districts with literacy below 70 percent.",
    storyBn: "যেসব জেলার সাক্ষরতা ৭০ শতাংশের নিচে, সেগুলো বের কর।",
    guide: "The Opponent",
    guideBn: "প্রতিদ্বন্দ্বী",
    guideRole: "Professional disagree-er · Leader",
    guideRoleBn: "প্রতিদ্বন্দ্বী",
    guideEmoji: "😏",
    scene:
      "The Opponent said quietly, “Below seventy. There, it's on the record. Filter those districts before someone edits the presentation and calls it a formatting issue.”",
    sceneBn:
      "প্রতিদ্বন্দ্বী নিচু গলায় বললেন, “৭০-এর নিচে। কথাটা রেকর্ডে থাকল। কেউ presentation edit করে এটাকে formatting issue বলার আগেই জেলাগুলো filter করো।”",
    example: {
      sql: "SELECT name_en, literacy_rate FROM districts WHERE literacy_rate < 73;",
      note: "Lower the threshold to 70 to find the districts in the uncomfortable slide.",
    },
    hint: "WHERE literacy_rate < 70",
    solution:
      "SELECT name_en, literacy_rate FROM districts WHERE literacy_rate < 70;",
    tables: ["districts"],
    validate: (r, s) => /<\s*70/.test(s) && r.values.length === 3,
  },
  {
    id: 39,
    arcId: "leader",
    division: "Dhaka",
    concept: "LIKE",
    title: "The Slogan",
    titleBn: "স্লোগান",
    story: "Find the e-services with ‘Service’ in the name.",
    storyBn: "নামে ‘Service’ আছে এমন ই-সার্ভিস বের কর।",
    guide: "Candidate No. 1",
    guideBn: "প্রার্থী নম্বর ১",
    guideRole: "“Amie Bangladesh” · election season",
    guideRoleBn: "নির্বাচনী প্রার্থী",
    guideEmoji: "🗳️",
    scene:
      "Candidate No. 1 started chanting, “Service, service, service! Say it often enough and it becomes a policy. `LIKE` with `%` on both sides. Advanced election strategy, beta.”",
    sceneBn:
      "প্রার্থী নম্বর ১ স্লোগান ধরলেন, “Service, service, service! বারবার বললেই নাকি policy হয়ে যায়। `LIKE`-এর দুই পাশে `%` দাও। নির্বাচনী কৌশল, বেটা—একদম advanced!”",
    example: {
      sql: "SELECT service_name FROM e_services WHERE service_name LIKE '%Portal%';",
      note: "The % on both sides finds the word anywhere inside the name.",
    },
    hint: "WHERE service_name LIKE '%Service%'",
    solution:
      "SELECT service_name FROM e_services WHERE service_name LIKE '%Service%';",
    tables: ["e_services"],
    validate: (r, s) => /LIKE/i.test(s) && r.values.length === 2,
  },
  /* ═══ Chapter VI — Threads of Dhaka (40–47) ═══ */
  {
    id: 40,
    arcId: "threads",
    division: "Dhaka",
    concept: "COUNT(*)",
    title: "How Many Factories?",
    titleBn: "কতটি কারখানা?",
    story: "Count the factories.",
    storyBn: "মোট কতগুলো কারখানা আছে, গুণে বল।",
    guide: "Golapi",
    guideBn: "গোলাপী",
    guideRole: "Garment worker · Gazipur",
    guideRoleBn: "পোশাক শ্রমিক",
    guideEmoji: "👩‍🏭",
    scene:
      "Golapi looked up from her sewing machine. “Chachchu says you're ready. `COUNT(*)` counts rows—not workers, not wages, just rows. Don't mix those up. A small count can still tell a big story.”",
    sceneBn:
      "গোলাপী সেলাই মেশিন থেকে মুখ তুলে বলল, “চাচ্চু বলেছেন তুমি ready। মনে রেখো, `COUNT(*)` row গোনে—শ্রমিক বা মজুরি না। গুলিয়ে ফেলো না। ছোট একটা সংখ্যার পেছনেও বড় গল্প থাকে।”",
    example: {
      sql: "SELECT COUNT(*) AS total FROM districts;",
      note: "COUNT(*) gives one number. AS total names the output column so the result is easy to read.",
    },
    hint: "SELECT COUNT(*) FROM garment_factories;",
    solution: "SELECT COUNT(*) AS total_factories FROM garment_factories;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /COUNT\s*\(/i.test(s) &&
      /garment_factories/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][0]) === 10,
  },
  {
    id: 41,
    arcId: "threads",
    division: "Dhaka",
    concept: "SUM()",
    title: "How Many Hands?",
    titleBn: "কত জন হাত?",
    story: "Total the workers across all factories.",
    storyBn: "সব কারখানার মোট শ্রমিক যোগ কর।",
    guide: "Golapi",
    guideBn: "গোলাপী",
    guideRole: "Garment worker · Gazipur",
    guideRoleBn: "পোশাক শ্রমিক",
    guideEmoji: "👩‍🏭",
    scene:
      "Golapi wiped her forehead. “Counting factories is easy. Counting the people behind them is another matter. `SUM(workers)`—32,600 workers. I think about them every morning at six.”",
    sceneBn:
      "গোলাপী কপালের ঘাম মুছে বলল, “কারখানা গোনা সহজ। এর ভেতরের মানুষগুলোর কথা ভাবা কঠিন। `SUM(workers)`—মোট ৩২,৬০০ জন। সকাল ছয়টায় কাজে বসলে ওদের কথাই মনে পড়ে।”",
    example: {
      sql: "SELECT SUM(population) AS total FROM districts;",
      note: "SUM collapses every row into a single total. It only works on numeric columns.",
    },
    hint: "SELECT SUM(workers) FROM garment_factories;",
    solution: "SELECT SUM(workers) AS total_workers FROM garment_factories;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /SUM\s*\(/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][0]) === 32600,
  },
  {
    id: 42,
    arcId: "threads",
    division: "Dhaka",
    concept: "AVG()",
    title: "The Typical Wage",
    titleBn: "সাধারণ মজুরি",
    story: "Find the average minimum wage across factories.",
    storyBn: "কারখানাগুলোর গড় ন্যূনতম মজুরি বের কর।",
    guide: "Bouma",
    guideBn: "বৌমা",
    guideRole: "Labour inspector · Rajshahi",
    guideRoleBn: "শ্রম পরিদর্শক",
    guideEmoji: "📋",
    scene:
      "Bouma closed her report. “I put these figures in reports that barely anyone reads. `AVG` gives us the average factory wage. At least your query is paying attention.”",
    sceneBn:
      "বৌমা রিপোর্ট বন্ধ করে বললেন, “এই হিসাবগুলো রিপোর্টে লিখি, পড়ার মানুষ কম। `AVG` কারখানাগুলোর গড় মজুরি দেখাবে। অন্তত তোমার query-টা মন দিয়ে দেখছে!”",
    example: {
      sql: "SELECT AVG(literacy_rate) AS average FROM districts;",
      note: "AVG adds all values and divides by the count. Like SUM, it works only on numbers.",
    },
    hint: "SELECT AVG(min_wage) FROM garment_factories;",
    solution:
      "SELECT AVG(min_wage) AS average_min_wage FROM garment_factories;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /AVG\s*\(/i.test(s) &&
      r.values.length === 1 &&
      Math.abs(num(r.values[0][0]) - 8020) < 1,
  },
  {
    id: 43,
    arcId: "threads",
    division: "Dhaka",
    concept: "MIN · MAX",
    title: "Best and Worst",
    titleBn: "সেরা ও খারাপ",
    story:
      "Show the lowest minimum wage and the highest maximum wage in one row.",
    storyBn:
      "সবচেয়ে কম ন্যূনতম মজুরি আর সবচেয়ে বেশি সর্বোচ্চ মজুরি — দুটোই এক সারিতে দেখিয়ে দে।",
    guide: "Bouma",
    guideBn: "বৌমা",
    guideRole: "Labour inspector · Rajshahi",
    guideRoleBn: "শ্রম পরিদর্শক",
    guideEmoji: "📋",
    scene:
      "Bouma straightened the file. “The report needs both ends—the lowest minimum wage and the highest maximum wage. `MIN` and `MAX`, one `SELECT`, comma in between. Very official.”",
    sceneBn:
      "বৌমা ফাইলটা গুছিয়ে বললেন, “রিপোর্টে দুই প্রান্তই দরকার—সবচেয়ে কম minimum wage আর সবচেয়ে বেশি maximum wage। `MIN` আর `MAX`, এক `SELECT`-এ, মাঝে comma। বেশ সরকারি কাজের মতো!”",
    example: {
      sql: "SELECT MIN(price_per_kg) AS cheapest, MAX(price_per_kg) AS dearest FROM rice_prices;",
      note: "You can put several aggregates in one SELECT. Each becomes its own output column.",
    },
    hint: "SELECT MIN(min_wage), MAX(max_wage) FROM garment_factories;",
    solution:
      "SELECT MIN(min_wage) AS lowest_min, MAX(max_wage) AS highest_max FROM garment_factories;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /MIN\s*\(/i.test(s) &&
      /MAX\s*\(/i.test(s) &&
      r.values.length === 1 &&
      num(r.values[0][0]) === 7000 &&
      num(r.values[0][1]) === 14000,
  },
  {
    id: 44,
    arcId: "threads",
    division: "Dhaka",
    concept: "GROUP BY · SUM",
    title: "Workers per District",
    titleBn: "জেলাভিত্তিক শ্রমিক",
    story: "Total the workers in each district.",
    storyBn: "প্রতিটা জেলার মোট শ্রমিক বের কর।",
    guide: "Golapi",
    guideBn: "গোলাপী",
    guideRole: "Garment worker · Gazipur",
    guideRoleBn: "পোশাক শ্রমিক",
    guideEmoji: "👩‍🏭",
    scene:
      "Golapi said, “We don't need one grand total. We need a total for each district. `GROUP BY` makes the groups; `SUM` adds the workers in each one. No district gets lost.”",
    sceneBn:
      "গোলাপী বলল, “একটা মোট সংখ্যা হলেই হবে না, জেলা অনুযায়ী হিসাব চাই। `GROUP BY` ভাগ করবে, `SUM` প্রতিটা ভাগের শ্রমিক যোগ করবে। কোনো জেলা বাদ যাবে না।”",
    example: {
      sql: "SELECT ministry, COUNT(*) AS services FROM e_services GROUP BY ministry;",
      note: "GROUP BY gives one row per distinct value. Every selected column must be grouped or aggregated.",
    },
    hint: "GROUP BY district_id with SUM(workers).",
    solution:
      "SELECT district_id, SUM(workers) AS total_workers FROM garment_factories GROUP BY district_id ORDER BY total_workers DESC;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /GROUP BY/i.test(s) &&
      /SUM\s*\(/i.test(s) &&
      r.values.length === 6 &&
      r.values.some((row) => num(row[0]) === 2 && num(row[1]) === 11600),
  },
  {
    id: 45,
    arcId: "threads",
    division: "Dhaka",
    concept: "JOIN",
    title: "Putting a Name to It",
    titleBn: "নাম যুক্ত করা",
    story: "List every factory with its district name, not the ID.",
    storyBn: "প্রতিটা কারখানার সাথে জেলার নাম দেখাও — আইডি না।",
    guide: "Golapi",
    guideBn: "গোলাপী",
    guideRole: "Garment worker · Gazipur",
    guideRoleBn: "পোশাক শ্রমিক",
    guideEmoji: "👩‍🏭",
    scene:
      "Golapi smiled. “An ID doesn't tell you much on its own. `JOIN` the factory records with the district table using `district_id`. And yes, `f` and `d` are just aliases. Short names save typing.”",
    sceneBn:
      "গোলাপী মুচকি হেসে বলল, “শুধু ID দেখে তো জেলা চেনা যায় না। `district_id` দিয়ে factory আর district table-এ `JOIN` করো। আর `f`, `d` শুধু alias—ছোট নাম, কম টাইপিং!”",
    example: {
      sql: "SELECT f.name, d.name_en AS district FROM garment_factories f JOIN districts d ON f.district_id = d.district_id LIMIT 4;",
      note: "ON says which columns match. Aliases (f, d) keep the query short and readable.",
    },
    hint: "JOIN districts d ON f.district_id = d.district_id",
    solution:
      "SELECT f.name, d.name_en AS district FROM garment_factories f JOIN districts d ON f.district_id = d.district_id;",
    tables: ["garment_factories", "districts"],
    validate: (r, s) =>
      /JOIN/i.test(s) &&
      r.values.length === 10 &&
      has(r, "gazipur") &&
      has(r, "chittagong"),
  },
  {
    id: 46,
    arcId: "threads",
    division: "Dhaka",
    concept: "JOIN · GROUP · ORDER · LIMIT",
    title: "The Five Biggest",
    titleBn: "শীর্ষ পাঁচটি",
    story: "Show the top five districts by garment workforce, with names.",
    storyBn: "মোট পোশাক শ্রমিকের টপ পাঁচ জেলা নামসহ দেখাও।",
    guide: "Bouma",
    guideBn: "বৌমা",
    guideRole: "Labour inspector · Rajshahi",
    guideRoleBn: "শ্রম পরিদর্শক",
    guideEmoji: "📋",
    scene:
      "Bouma said, “An inspector needs names, totals and a ranking. You've learned every piece since the tea stall. Now put them together. No rush—though the report is due today.”",
    sceneBn:
      "বৌমা বললেন, “ইন্সপেক্টরের দরকার জেলার নাম, মোট শ্রমিক আর ranking। চায়ের দোকান থেকে যা যা শিখেছ, সব এবার একসাথে লাগাও। তাড়া নেই—রিপোর্টটা অবশ্য আজই জমা দিতে হবে!”",
    example: {
      sql: "SELECT d.name_en, SUM(f.workers) AS total FROM garment_factories f JOIN districts d ON f.district_id = d.district_id GROUP BY d.name_en ORDER BY total DESC LIMIT 3;",
      note: "The full pattern: JOIN to get names, GROUP to total, ORDER to rank, LIMIT to trim.",
    },
    hint: "JOIN districts, GROUP BY district, ORDER BY total DESC, LIMIT 5.",
    solution: `SELECT d.name_en AS district, SUM(f.workers) AS total_workers
FROM garment_factories f
JOIN districts d ON f.district_id = d.district_id
GROUP BY d.district_id, d.name_en
ORDER BY total_workers DESC
LIMIT 5;`,
    tables: ["garment_factories", "districts"],
    validate: (r, s) =>
      /JOIN/i.test(s) &&
      /SUM\s*\(/i.test(s) &&
      r.values.length === 5 &&
      txt(r.values[0][0]).includes("gazipur"),
  },
  {
    id: 47,
    arcId: "threads",
    division: "Rajshahi",
    concept: "HAVING",
    title: "The Heavyweight Districts",
    titleBn: "ভারী জেলাগুলো",
    story: "Find the districts with more than 5,000 garment workers in total.",
    storyBn: "যেসব জেলায় মোট পোশাক শ্রমিক ৫০০০-এর বেশি, সেগুলো বের কর।",
    guide: "Bouma",
    guideBn: "বৌমা",
    guideRole: "Labour inspector · Rajshahi",
    guideRoleBn: "শ্রম পরিদর্শক",
    guideEmoji: "📋",
    scene:
      "Bouma tapped her pen. “`WHERE` filters rows before grouping. `HAVING` filters groups after. If your condition uses a total, use `HAVING`. Learned that in a three-hour meeting. Could've been an email.”",
    sceneBn:
      "বৌমা কলম টোকা দিয়ে বললেন, “`WHERE` grouping-এর আগে row filter করে, `HAVING` grouping-এর পরে group filter করে। শর্ত যদি total নিয়ে হয়, `HAVING` ব্যবহার করো। তিন ঘণ্টার মিটিংয়ে শিখেছি—ইমেইল করলেও হতো!”",
    example: {
      sql: "SELECT district_id, SUM(workers) AS total FROM garment_factories GROUP BY district_id HAVING SUM(workers) > 2000;",
      note: "HAVING sits after GROUP BY and can test aggregates like SUM(...) — which WHERE cannot.",
    },
    hint: "GROUP BY district_id ... HAVING SUM(workers) > 5000",
    solution:
      "SELECT district_id, SUM(workers) AS total_workers FROM garment_factories GROUP BY district_id HAVING SUM(workers) > 5000 ORDER BY total_workers DESC;",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /HAVING/i.test(s) &&
      />\s*5000/.test(s) &&
      r.values.length === 2 &&
      [1, 2].every((id) => r.values.some((row) => num(row[0]) === id)),
  },
  /* ═══ Chapter VII — Money Across Borders (48–54) ═══ */
  {
    id: 48,
    arcId: "remittance",
    division: "Chittagong",
    concept: "IN",
    title: "Two Countries, One Ledger",
    titleBn: "দুই দেশ, এক খাতা",
    story: "List all remittances from Saudi Arabia and the UAE.",
    storyBn: "সৌদি আরব আর ইউএই থেকে আসা সব রেমিটেন্স দেখাও।",
    guide: "Jamai Babu",
    guideBn: "জামাই বাবু",
    guideRole: "Port clerk · Chittagong",
    guideRoleBn: "বন্দর কেরাণী",
    guideEmoji: "⚓",
    scene:
      "Jamai Babu leaned over the ledger. “Every row has a country and a month. `IN` is cleaner than writing two `OR` conditions. `country IN ('Saudi Arabia', 'UAE')` means either country. Even my mother-in-law likes a tidy list.”",
    sceneBn:
      "জামাই বাবু খাতার ওপর ঝুঁকে বললেন, “প্রতি row-তে দেশ আর মাসের হিসাব আছে। দুইটা `OR` লেখার চেয়ে `IN` অনেক গোছানো। `country IN ('Saudi Arabia', 'UAE')` মানে এই দুই দেশের যেকোনো একটা। শাশুড়িও গোছানো হিসাব পছন্দ করেন।”",
    example: {
      sql: "SELECT district, variety FROM rice_prices WHERE variety IN ('BRRI dhan', 'Miniket') LIMIT 4;",
      note: "IN is shorthand for several OR conditions on the same column. Text values still need quotes.",
    },
    hint: "WHERE country IN ('Saudi Arabia','UAE')",
    solution:
      "SELECT month, country, usd_amount FROM remittance_2026 WHERE country IN ('Saudi Arabia', 'UAE') ORDER BY month, country;",
    tables: ["remittance_2026"],
    validate: (r, s) =>
      /IN\s*\(/i.test(s) &&
      r.values.length === 6 &&
      r.values.every((row) =>
        ["saudi arabia", "uae"].includes(txt(row[col(r, "country")])),
      ),
  },
  {
    id: 49,
    arcId: "remittance",
    division: "Chittagong",
    concept: "WHERE + IN",
    title: "November Only",
    titleBn: "শুধু নভেম্বর",
    story:
      "Show only the November 2026 transfers from Saudi Arabia and the UAE.",
    storyBn: "শুধু নভেম্বর ২০২৬-এ সৌদি আরব আর ইউএই থেকে আসা রেমিটেন্স দেখাও।",
    guide: "Jamai Babu",
    guideBn: "জামাই বাবু",
    guideRole: "Port clerk · Chittagong",
    guideRoleBn: "বন্দর কেরাণী",
    guideEmoji: "⚓",
    scene:
      "Jamai Babu said, “Now narrow it to one month. Combine the month condition and `IN` with `AND`. Two conditions, one query. ঠিক শাশুড়ির checklist-এর মতো—একটাও বাদ দেওয়া যাবে না।”",
    sceneBn:
      "জামাই বাবু বললেন, “এবার শুধু একটা মাস রাখো। মাসের condition আর `IN`-কে `AND` দিয়ে জুড়ো। দুইটা শর্ত, এক query। শাশুড়ির checklist-এর মতো—একটাও বাদ দেওয়া যাবে না!”",
    example: {
      sql: "SELECT country, usd_amount FROM remittance_2026 WHERE month = '2026-10';",
      note: "Add AND country IN (...) to keep only the two countries in that single month.",
    },
    hint: "WHERE month = '2026-11' AND country IN (...)",
    solution:
      "SELECT country, usd_amount FROM remittance_2026 WHERE month = '2026-11' AND country IN ('Saudi Arabia', 'UAE');",
    tables: ["remittance_2026"],
    validate: (r, s) =>
      /IN\s*\(/i.test(s) && /2026-11/.test(s) && r.values.length === 2,
  },
  {
    id: 50,
    arcId: "remittance",
    division: "Chittagong",
    concept: "SUM · GROUP BY",
    title: "The Gulf Lifeline",
    titleBn: "উপসাগরের জীবনরেখা",
    story:
      "Total the November remittances from Saudi Arabia and the UAE, per country.",
    storyBn: "নভেম্বরে সৌদি আরব আর ইউএই থেকে দেশভিত্তিক মোট রেমিটেন্স বের কর।",
    guide: "Jamai Babu",
    guideBn: "জামাই বাবু",
    guideRole: "Port clerk · Chittagong",
    guideRoleBn: "বন্দর কেরাণী",
    guideEmoji: "⚓",
    scene:
      "Jamai Babu lowered his voice. “Filter the month, filter the countries, group by country, then sum the dollars. Saudi Arabia alone sent 125 million. That's a lot of families depending on one number.”",
    sceneBn:
      "জামাই বাবুর গলা একটু নরম হলো। “আগে মাস বাছো, তারপর দেশ। দেশ অনুযায়ী group করে ডলার যোগ করো। শুধু সৌদি আরব থেকেই ১২৫ মিলিয়ন। এই এক সংখ্যার ওপর কত পরিবারের সংসার চলে, জানো?”",
    example: {
      sql: "SELECT country, SUM(usd_amount) AS total FROM remittance_2026 GROUP BY country;",
      note: "Grouping by country gives one row per country; SUM adds all of its transfers.",
    },
    hint: "WHERE month = '2026-11' AND country IN (...), GROUP BY country, SUM.",
    solution: `SELECT country, SUM(usd_amount) AS total_usd
FROM remittance_2026
WHERE month = '2026-11' AND country IN ('Saudi Arabia', 'UAE')
GROUP BY country
ORDER BY total_usd DESC;`,
    tables: ["remittance_2026"],
    validate: (r, s) =>
      /SUM\s*\(/i.test(s) &&
      r.values.length === 2 &&
      r.values.some(
        (row) =>
          txt(row[col(r, "country")]) === "saudi arabia" &&
          num(row[col(r, "usd", "total")]) === 125_000_000,
      ),
  },
  {
    id: 51,
    arcId: "remittance",
    division: "Chittagong",
    concept: "Aggregate ranking",
    title: "Who Sends the Most?",
    titleBn: "কে সবচেয়ে বেশি পাঠায়?",
    story: "Rank the countries by total remittances across all months.",
    storyBn: "সব মাস মিলিয়ে দেশগুলোকে মোট রেমিটেন্স অনুযায়ী সাজিয়ে দে।",
    guide: "Jamai Babu",
    guideBn: "জামাই বাবু",
    guideRole: "Port clerk · Chittagong",
    guideRoleBn: "বন্দর কেরাণী",
    guideEmoji: "⚓",
    scene:
      "Jamai Babu said, “No filter this time. Group every transfer by country and sort the totals. Saudi Arabia comes first. `ORDER BY` can sort an aggregate alias too. নামেরও তো একটা সম্মান আছে!”",
    sceneBn:
      "জামাই বাবু বললেন, “এবার কোনো filter নেই। সব transfer দেশ অনুযায়ী group করে total সাজাও। সৌদি আরব সবার ওপরে। `ORDER BY` aggregate alias দিয়েও sort করতে পারে। নামেরও তো সম্মান আছে!”",
    example: {
      sql: "SELECT country, SUM(usd_amount) AS total FROM remittance_2026 GROUP BY country ORDER BY total DESC;",
      note: "You can ORDER BY the alias you just created (total). That saves repeating the SUM expression.",
    },
    hint: "GROUP BY country, SUM(usd_amount), ORDER BY total DESC.",
    solution:
      "SELECT country, SUM(usd_amount) AS total_usd FROM remittance_2026 GROUP BY country ORDER BY total_usd DESC;",
    tables: ["remittance_2026"],
    validate: (r, s) =>
      /SUM\s*\(/i.test(s) &&
      /ORDER BY/i.test(s) &&
      r.values.length === 5 &&
      txt(r.values[0][0]) === "saudi arabia" &&
      num(r.values[0][1]) === 340_000_000,
  },
  {
    id: 52,
    arcId: "remittance",
    division: "Khulna",
    concept: "Window · LAG",
    title: "The Rising Cost of Rice",
    titleBn: "চালের ক্রমবর্ধমান দাম",
    story: "Show each month’s food inflation beside the previous month’s.",
    storyBn: "প্রতি মাসের খাদ্য স্ফীতির পাশে আগের মাসের স্ফীতি দেখিয়ে দে।",
    guide: "Doctor Babu",
    guideBn: "ডাক্তার বাবু",
    guideRole: "Economist · Khulna",
    guideRoleBn: "অর্থনীতিবিদ",
    guideEmoji: "📈",
    scene:
      "Doctor Babu adjusted his glasses. “Headlines tell you the number, not where it's heading. `LAG` brings the previous month's value beside this one. The first row has no previous month, so `NULL` is perfectly normal.”",
    sceneBn:
      "ডাক্তার বাবু চশমা ঠিক করে বললেন, “খবরে শুধু সংখ্যা শোনায়, বাড়ছে না কমছে সেটা সব সময় বোঝায় না। `LAG` আগের মাসের মানটা পাশে এনে দেয়। প্রথম মাসের আগের মাস নেই, তাই `NULL` আসবে—এটাই স্বাভাবিক।”",
    example: {
      sql: "SELECT month, food_inflation FROM inflation_2026 ORDER BY month LIMIT 5;",
      note: "Rows are already in month order. Add LAG(food_inflation) OVER (ORDER BY month) AS previous_rate.",
    },
    hint: "LAG(food_inflation) OVER (ORDER BY month) AS previous_rate",
    solution: `SELECT month, food_inflation,
LAG(food_inflation) OVER (ORDER BY month) AS previous_rate
FROM inflation_2026
ORDER BY month;`,
    tables: ["inflation_2026"],
    validate: (r, s) => {
      if (!/LAG\s*\(/i.test(s) || r.values.length !== 11) return false;
      const c = col(r, "prev", "lag", "previous");
      return c >= 0 && r.values[0][c] === null && num(r.values[1][c]) === 9.1;
    },
  },
  {
    id: 53,
    arcId: "remittance",
    division: "Mymensingh",
    concept: "COUNT + SUM",
    title: "The Digital Frontier",
    titleBn: "ডিজিটাল সীমান্ত",
    story:
      "Find the ministry with the most digital services, plus its total users.",
    storyBn:
      "যে মন্ত্রণালয়ে সবচেয়ে বেশি ই-সার্ভিস, সেটার মোট ব্যবহারকারীও দেখাও।",
    guide: "Rani",
    guideBn: "রানী",
    guideRole: "e-Gov officer · Mymensingh",
    guideRoleBn: "ই-গভর্নমেন্ট কর্মকর্তা",
    guideEmoji: "💻",
    scene:
      "Rani said, “Some ministries move fast; others are still finding the power button. `COUNT` the services, `SUM` the users, and group by ministry. Finance has the most services; Home has more users. Numbers love causing arguments.”",
    sceneBn:
      "রানী বললেন, “কিছু মন্ত্রণালয় দ্রুত এগোচ্ছে, কিছু এখনো power button খুঁজছে! সার্ভিস `COUNT` করো, user `SUM` করো, ministry অনুযায়ী group করো। সার্ভিসে অর্থ মন্ত্রণালয় এগিয়ে, user-এ স্বরাষ্ট্র। সংখ্যাও দেখি বিতর্ক পছন্দ করে!”",
    example: {
      sql: "SELECT ministry, COUNT(*) AS services FROM e_services GROUP BY ministry ORDER BY services DESC;",
      note: "Now add SUM(users) AS total_users to the same SELECT list to get both numbers in one row.",
    },
    hint: "GROUP BY ministry, COUNT(*), SUM(users), ORDER BY services DESC, LIMIT 1.",
    solution: `SELECT ministry, COUNT(*) AS services, SUM(users) AS total_users
FROM e_services
GROUP BY ministry
ORDER BY services DESC, total_users DESC
LIMIT 1;`,
    tables: ["e_services"],
    validate: (r, s) => {
      if (
        !/COUNT\s*\(/i.test(s) ||
        !/SUM\s*\(/i.test(s) ||
        r.values.length !== 1
      )
        return false;
      return (
        txt(r.values[0][col(r, "ministry")]).includes("finance") &&
        num(r.values[0][col(r, "services", "count")]) === 2 &&
        num(r.values[0][col(r, "users", "total")]) === 1050000
      );
    },
  },
  {
    id: 54,
    arcId: "remittance",
    division: "Mymensingh",
    concept: "Aggregate ordering",
    title: "The People’s Choice",
    titleBn: "মানুষের পছন্দ",
    story: "Rank the ministries by total users, most used first.",
    storyBn:
      "মোট ব্যবহারকারী অনুযায়ী মন্ত্রণালয়গুলো সাজিয়ে দে — বেশি থেকে কম।",
    guide: "Rani",
    guideBn: "রানী",
    guideRole: "e-Gov officer · Mymensingh",
    guideRoleBn: "ই-গভর্নমেন্ট কর্মকর্তা",
    guideEmoji: "💻",
    scene:
      "Rani added, “This time rank ministries by total users, not number of services. Change the column and the winner changes. Picking the right metric is half the work. Explaining it in a meeting is the other half.”",
    sceneBn:
      "রানী যোগ করলেন, “এবার সার্ভিসের সংখ্যা নয়, মোট user দিয়ে মন্ত্রণালয় সাজাও। Column বদলালেই winner বদলে যাবে। সঠিক metric বাছা অর্ধেক কাজ; মিটিংয়ে সেটা বোঝানো বাকি অর্ধেক!”",
    example: {
      sql: "SELECT ministry, SUM(users) AS total_users FROM e_services GROUP BY ministry ORDER BY total_users DESC LIMIT 3;",
      note: "Sorting by the summed users gives a different ranking than sorting by service count.",
    },
    hint: "GROUP BY ministry, SUM(users), ORDER BY total_users DESC.",
    solution:
      "SELECT ministry, SUM(users) AS total_users FROM e_services GROUP BY ministry ORDER BY total_users DESC;",
    tables: ["e_services"],
    validate: (r, s) =>
      /SUM\s*\(/i.test(s) &&
      /ORDER BY/i.test(s) &&
      r.values.length === 7 &&
      txt(r.values[0][col(r, "ministry")]).includes("home") &&
      num(r.values[0][col(r, "users", "total")]) === 3200000,
  },
  /* ═══ Chapter VIII — Monsoon & the Nation (55–61) ═══ */
  {
    id: 55,
    arcId: "monsoon",
    division: "Barishal",
    concept: "Comparison",
    title: "Classrooms We Still Need",
    titleBn: "যে শ্রেণীকক্ষ দরকার",
    story: "Find the districts with literacy below 73 percent.",
    storyBn: "যেসব জেলার সাক্ষরতা ৭৩ শতাংশের নিচে, সেগুলো বের কর।",
    guide: "Hena",
    guideBn: "হেনা",
    guideRole: "School teacher · Barishal",
    guideRoleBn: "স্কুল শিক্ষক",
    guideEmoji: "👩‍🏫",
    scene:
      "Hena looked out the window. “My students walk miles to a school with one teacher. The national literacy average is 73%. Show me the districts below that. Maybe the next classroom can reach them sooner.”",
    sceneBn:
      "হেনা জানালার বাইরে তাকিয়ে বললেন, “আমার ছাত্রছাত্রীরা মাইলের পর মাইল হেঁটে এক শিক্ষকের স্কুলে যায়। জাতীয় সাক্ষরতার গড় ৭৩%। এর নিচে থাকা জেলাগুলো দেখাও। হয়তো পরের স্কুলটা ওদের একটু কাছে হবে।”",
    example: {
      sql: "SELECT name_en, literacy_rate FROM districts WHERE literacy_rate > 75;",
      note: "You used this in Chapter I. Flip the sign to < 73 to find the districts that need help.",
    },
    hint: "WHERE literacy_rate < 73",
    solution:
      "SELECT name_en, literacy_rate FROM districts WHERE literacy_rate < 73 ORDER BY literacy_rate ASC;",
    tables: ["districts"],
    validate: (r, s) => /<\s*73/.test(s) && r.values.length === 5,
  },
  {
    id: 56,
    arcId: "monsoon",
    division: "Dhaka",
    concept: "LIKE",
    title: "Finding Names in the Dark",
    titleBn: "নাম খোঁজা",
    story: "Find the factories with ‘Garments’ in the name.",
    storyBn: "নামে ‘Garments’ আছে এমন কারখানা বের কর।",
    guide: "Bouma",
    guideBn: "বৌমা",
    guideRole: "Labour inspector · Rajshahi",
    guideRoleBn: "শ্রম পরিদর্শক",
    guideEmoji: "📋",
    scene:
      "Bouma said, “Sometimes an inspector remembers only half a factory name. That's what `LIKE` is for. `%Garments%` finds the word wherever it appears. Half a name, full investigation.”",
    sceneBn:
      "বৌমা বললেন, “ইন্সপেক্টরের অনেক সময় কারখানার নামের অর্ধেক মনে থাকে। তখনই `LIKE` কাজে লাগে। `%Garments%` দিলে নামের যেখানেই শব্দটা থাকুক, খুঁজে পাবে। অর্ধেক নাম, পুরো তদন্ত!”",
    example: {
      sql: "SELECT name FROM garment_factories WHERE name LIKE '%Textile%';",
      note: "The pattern goes in single quotes. % on both sides means the word can appear anywhere.",
    },
    hint: "WHERE name LIKE '%Garments%'",
    solution:
      "SELECT name FROM garment_factories WHERE name LIKE '%Garments%';",
    tables: ["garment_factories"],
    validate: (r, s) =>
      /LIKE/i.test(s) &&
      r.values.length === 2 &&
      ["port city", "royal"].every((n) => has(r, n)),
  },
  {
    id: 57,
    arcId: "monsoon",
    division: "Rangpur",
    concept: "BETWEEN",
    title: "The Month of Outages",
    titleBn: "বিভ্রাটের মাস",
    story: "Show every power outage in October 2026.",
    storyBn: "অক্টোবর ২০২৬-এর সব বিদ্যুৎ বিভ্রাট দেখে দে।",
    guide: "Hero Alam",
    guideBn: "হিরো আলম",
    guideRole: "Farmer · Rangpur",
    guideRoleBn: "কৃষক",
    guideEmoji: "🌾",
    scene:
      "Hero Alam sat in the dark. “Every evening the pump stopped, and I counted the hours. `BETWEEN` keeps dates inside a range, including both ends. October's first and last days—আমি দুটোই মনে রেখেছি!”",
    sceneBn:
      "হিরো আলম অন্ধকারে বসে বললেন, “প্রতিদিন সন্ধ্যায় পাম্প বন্ধ হয়ে যেত, আর আমি ঘণ্টা গুনতাম। `BETWEEN` দুই প্রান্তসহ তারিখের range ধরে। অক্টোবরের প্রথম আর শেষ দিন—দুটোই আমার মনে আছে!”",
    example: {
      sql: "SELECT district, hours FROM power_outages WHERE outage_date BETWEEN '2026-10-01' AND '2026-10-07' LIMIT 5;",
      note: "BETWEEN includes both endpoints. Widen the end date to cover the whole month.",
    },
    hint: "BETWEEN '2026-10-01' AND '2026-10-31'",
    solution:
      "SELECT district, hours FROM power_outages WHERE outage_date BETWEEN '2026-10-01' AND '2026-10-31';",
    tables: ["power_outages"],
    validate: (r, s) =>
      /BETWEEN/i.test(s) &&
      /2026-10-01/.test(s) &&
      /2026-10-31/.test(s) &&
      r.values.length === 14,
  },
  {
    id: 58,
    arcId: "monsoon",
    division: "Sylhet",
    concept: "GROUP BY · SUM",
    title: "Counting the Displaced",
    titleBn: "বাস্তুচ্যুত গণনা",
    story: "Total the displaced people by cause in Barishal and Khulna.",
    storyBn: "বরিশাল আর খুলনায় কারণ অনুযায়ী মোট বাস্তুচ্যুত মানুষ বের কর।",
    guide: "Mama",
    guideBn: "মামা",
    guideRole: "Relief volunteer · Sylhet",
    guideRoleBn: "ত্রাণ স্বেচ্ছাসেবক",
    guideEmoji: "🌊",
    scene:
      "Mama spoke softly. “Floods, cyclones, salt water—families had to leave for different reasons. Group by cause and sum the people. Our relief boats need to know where to go first. These aren't just numbers.”",
    sceneBn:
      "মামা শান্ত গলায় বললেন, “বন্যা, ঘূর্ণিঝড়, লবণাক্ত পানি—কত কারণে মানুষ ঘর ছেড়েছে। কারণ অনুযায়ী group করে মানুষের সংখ্যা যোগ করো। ত্রাণের নৌকা আগে কোথায় যাবে, সেটা জানতে হবে। এগুলো শুধু সংখ্যা না।”",
    example: {
      sql: "SELECT cause, COUNT(*) AS reports FROM idp_2026 GROUP BY cause;",
      note: "Swap COUNT(*) for SUM(persons) to count people instead of reports. Add WHERE for the two divisions.",
    },
    hint: "WHERE division IN ('Barishal','Khulna'), GROUP BY cause, SUM(persons).",
    solution: `SELECT cause, SUM(persons) AS total_persons
FROM idp_2026
WHERE division IN ('Barishal', 'Khulna')
GROUP BY cause
ORDER BY total_persons DESC;`,
    tables: ["idp_2026"],
    validate: (r, s) =>
      /SUM\s*\(/i.test(s) &&
      r.values.length === 4 &&
      r.values.some(
        (row) => txt(row[0]).includes("salinity") && num(row[1]) === 2400,
      ),
  },
  {
    id: 59,
    arcId: "monsoon",
    division: "Rangpur",
    concept: "AVG · GROUP BY",
    title: "Hours in the Dark",
    titleBn: "অন্ধকারের ঘণ্টা",
    story: "Find the average outage hours for each district in October.",
    storyBn:
      "অক্টোবরে প্রতিটা জেলায় গড়ে কত ঘণ্টা বিদ্যুৎ বিভ্রাট হয়েছে, বের কর।",
    guide: "Hero Alam",
    guideBn: "হিরো আলম",
    guideRole: "Farmer · Rangpur",
    guideRoleBn: "কৃষক",
    guideEmoji: "🌾",
    scene:
      "Hero Alam said, “Some days the power is gone for two hours; some days, sixteen. Filter October, group by district and calculate `AVG(hours)`. You learned this in the factory chapter. See? My lessons have a sequel.”",
    sceneBn:
      "হিরো আলম বললেন, “কোনো দিন দুই ঘণ্টা, কোনো দিন ষোলো! অক্টোবর filter করো, জেলা অনুযায়ী group করে `AVG(hours)` বের করো। কারখানার অধ্যায়ে শিখেছিলে। দেখলে? আমার lesson-এর sequel আছে!”",
    example: {
      sql: "SELECT district, AVG(hours) AS avg_hours FROM power_outages WHERE outage_date BETWEEN '2026-10-01' AND '2026-10-31' GROUP BY district;",
      note: "This gives one average per district. The next step will be to filter these averages.",
    },
    hint: "BETWEEN October dates, GROUP BY district, AVG(hours).",
    solution: `SELECT district, ROUND(AVG(hours), 2) AS avg_hours
FROM power_outages
WHERE outage_date BETWEEN '2026-10-01' AND '2026-10-31'
GROUP BY district
ORDER BY avg_hours DESC;`,
    tables: ["power_outages"],
    validate: (r, s) =>
      /AVG\s*\(\s*hours/i.test(s) &&
      /GROUP BY/i.test(s) &&
      r.values.length === 7,
  },
  {
    id: 60,
    arcId: "monsoon",
    division: "Rangpur",
    concept: "HAVING · AVG",
    title: "When the Lights Went Out",
    titleBn: "যখন আলো নিভে গেল",
    story: "Keep only the districts averaging more than 10 outage hours.",
    storyBn:
      "যেসব জেলায় গড়ে ১০ ঘণ্টার বেশি বিদ্যুৎ বিভ্রাট, শুধু সেগুলো রাখ।",
    guide: "Hero Alam",
    guideBn: "হিরো আলম",
    guideRole: "Farmer · Rangpur",
    guideRoleBn: "কৃষক",
    guideEmoji: "🌾",
    scene:
      "Hero Alam whispered, “`HAVING AVG(hours) > 10` filters groups after they're built. Barishal tops the list. Those farmers have had a rough season. Even my dramatic monologues can't fix that.”",
    sceneBn:
      "হিরো আলম ফিসফিস করে বললেন, “`HAVING AVG(hours) > 10` group তৈরি হওয়ার পর সেগুলো filter করে। তালিকার শীর্ষে বরিশাল। কৃষকদের মৌসুমটা ভালো যায়নি। আমার dramatic dialogue দিয়েও এটা ঠিক হবে না।”",
    example: {
      sql: "SELECT district, AVG(hours) AS avg_hours FROM power_outages GROUP BY district HAVING AVG(hours) > 8;",
      note: "HAVING tests the aggregated value. Raise the threshold to 10 to keep only the worst.",
    },
    hint: "HAVING AVG(hours) > 10",
    solution: `SELECT district, ROUND(AVG(hours), 2) AS avg_hours
FROM power_outages
WHERE outage_date BETWEEN '2026-10-01' AND '2026-10-31'
GROUP BY district
HAVING AVG(hours) > 10
ORDER BY avg_hours DESC;`,
    tables: ["power_outages"],
    validate: (r, s) =>
      /HAVING/i.test(s) &&
      r.values.length === 3 &&
      has(r, "barishal") &&
      has(r, "gazipur") &&
      has(r, "khulna"),
  },
  {
    id: 61,
    arcId: "monsoon",
    division: "Dhaka",
    concept: "CTE · Final briefing",
    title: "The National Briefing",
    titleBn: "জাতীয় ব্রিফিং",
    story:
      "Find the districts with low wages and long outages — the national briefing.",
    storyBn:
      "যেসব জেলায় মজুরি কম আর বিদ্যুৎ বিভ্রাটও লম্বা — সেগুলো খুঁজে বের কর।",
    guide: "Raja Saheb",
    guideBn: "রাজা সাহেব",
    guideRole: "National policy desk · Dhaka",
    guideRoleBn: "জাতীয় নীতি ডেস্ক",
    guideEmoji: "🎯",
    scene:
      "Raja Saheb finally looked up. “You started with a cup of tea and a notebook. Now the country needs an answer. Put wages in one CTE, October outages in another, join them by district and apply both conditions. One query. Make it count.”",
    sceneBn:
      "রাজা সাহেব অবশেষে মুখ তুললেন। “এক কাপ চা আর একটা খাতা দিয়ে শুরু করেছিলে। এখন দেশের একটা উত্তর দরকার। এক CTE-তে মজুরি, আরেকটায় অক্টোবরের বিদ্যুৎ বিভ্রাট রাখো; district দিয়ে JOIN করে দুই শর্তই দাও। একটাই query—কাজের উত্তর দিও।”",
    example: {
      sql: `WITH wage AS (
  SELECT district_id, AVG(max_wage) AS avg_wage
  FROM garment_factories
  GROUP BY district_id
)
SELECT * FROM wage LIMIT 5;`,
      note: "A CTE names a reusable result with WITH ... AS (...). Build a second CTE for outage averages, then JOIN both to districts and filter the two conditions.",
    },
    hint: "Two CTEs (wage, outage), JOIN districts, WHERE avg_wage < 12000 AND avg_hrs > 10.",
    solution: `WITH wage AS (
  SELECT d.district_id, AVG(f.max_wage) AS avg_wage
  FROM garment_factories f
  JOIN districts d ON f.district_id = d.district_id
  GROUP BY d.district_id
),
outage AS (
  SELECT district, AVG(hours) AS avg_hrs
  FROM power_outages
  WHERE outage_date BETWEEN '2026-10-01' AND '2026-10-31'
  GROUP BY district
)
SELECT d.name_en AS district,
ROUND(w.avg_wage, 2) AS avg_max_wage,
ROUND(o.avg_hrs, 2) AS avg_outage_hrs
FROM districts d
JOIN wage w ON d.district_id = w.district_id
JOIN outage o ON d.name_en = o.district
WHERE w.avg_wage < 12000 AND o.avg_hrs > 10;`,
    tables: ["districts", "garment_factories", "power_outages"],
    validate: (r, s) =>
      /WITH\s+/i.test(s) &&
      r.values.length === 2 &&
      has(r, "gazipur") &&
      has(r, "barishal"),
  },
];
