import type { Database, SqlJsStatic } from 'sql.js';
// Inline build embeds the WASM as base64 — no network fetch, no locateFile.
import initSqlJsInline from 'sql.js/dist/sql-wasm-inline';

const initSql = initSqlJsInline as unknown as () => Promise<SqlJsStatic>;
import {
  CHA_SALES,
  DIVISIONS,
  DISTRICTS,
  FACTORIES,
  REMITTANCE,
  INFLATION,
  IDP,
  OUTAGES,
  ESERVICES,
  RICE,
} from './data';

export interface QueryResult {
  columns: string[];
  values: (string | number | null)[][];
}

export type QueryErrorCode =
  | 'empty'
  | 'multiple-statements'
  | 'non-select'
  | 'write-operation'
  | 'syntax'
  | 'engine';

export type QueryOutcome =
  | { ok: true; result: QueryResult }
  | { ok: false; code: QueryErrorCode; error: string };

/** SQLite reports grammar problems with these well-known message shapes. */
function classifySqlError(message: string): QueryErrorCode {
  if (
    /\bsyntax error\b/i.test(message) ||
    /\bincomplete input\b/i.test(message) ||
    /\bunrecognized token\b/i.test(message)
  ) {
    return 'syntax';
  }
  return 'engine';
}

const SCHEMA = `
CREATE TABLE cha_stall (
  id INTEGER PRIMARY KEY, sale_date TEXT, day_name TEXT, shift TEXT,
  item TEXT, cups INTEGER, price_per_cup INTEGER, revenue INTEGER,
  customer TEXT, sugar_level TEXT
);
CREATE TABLE divisions (
  division_id INTEGER PRIMARY KEY, name_en TEXT, name_bn TEXT,
  area_km2 REAL, population INTEGER
);
CREATE TABLE districts (
  district_id INTEGER PRIMARY KEY, division_id INTEGER,
  name_en TEXT, name_bn TEXT, population INTEGER, literacy_rate REAL
);
CREATE TABLE garment_factories (
  factory_id INTEGER PRIMARY KEY, name TEXT, district_id INTEGER,
  workers INTEGER, min_wage INTEGER, max_wage INTEGER,
  export_usd REAL, compliance_score INTEGER, incidents INTEGER
);
CREATE TABLE remittance_2026 (
  id INTEGER PRIMARY KEY, month TEXT, country TEXT,
  usd_amount REAL, workers_count INTEGER
);
CREATE TABLE inflation_2026 (
  id INTEGER PRIMARY KEY, month TEXT, cpi REAL,
  food_inflation REAL, non_food_inflation REAL
);
CREATE TABLE idp_2026 (
  id INTEGER PRIMARY KEY, division TEXT, district TEXT, cause TEXT,
  households INTEGER, persons INTEGER, date TEXT
);
CREATE TABLE power_outages (
  id INTEGER PRIMARY KEY, outage_date TEXT, district TEXT,
  hours REAL, affected_customers INTEGER
);
CREATE TABLE e_services (
  service_id INTEGER PRIMARY KEY, service_name TEXT, ministry TEXT,
  digital_status TEXT, users INTEGER, district_coverage TEXT
);
CREATE TABLE rice_prices (
  id INTEGER PRIMARY KEY, price_date TEXT, district TEXT,
  variety TEXT, price_per_kg REAL
);
`;

function sqlValue(v: string | number | null): string {
  if (v === null) return 'NULL';
  if (typeof v === 'number') return String(v);
  return `'${v.replace(/'/g, "''")}'`;
}

function insertStmt(
  table: string,
  columns: string[],
  rows: readonly (readonly (string | number)[])[],
): string {
  const values = rows
    .map((row) => `(${row.map(sqlValue).join(', ')})`)
    .join(',\n');
  return `INSERT INTO ${table} (${columns.join(', ')}) VALUES\n${values};`;
}

const SEED = [
  insertStmt(
    'cha_stall',
    ['id', 'sale_date', 'day_name', 'shift', 'item', 'cups', 'price_per_cup', 'revenue', 'customer', 'sugar_level'],
    CHA_SALES.map((s) => [s.id, s.date, s.day, s.shift, s.item, s.cups, s.price, s.revenue, s.customer, s.sugar]),
  ),
  insertStmt(
    'divisions',
    ['division_id', 'name_en', 'name_bn', 'area_km2', 'population'],
    DIVISIONS.map((d) => [d.id, d.nameEn, d.nameBn, d.area, d.population]),
  ),
  insertStmt(
    'districts',
    ['district_id', 'division_id', 'name_en', 'name_bn', 'population', 'literacy_rate'],
    DISTRICTS.map((d) => [d.id, d.divisionId, d.nameEn, d.nameBn, d.population, d.literacy]),
  ),
  insertStmt(
    'garment_factories',
    ['factory_id', 'name', 'district_id', 'workers', 'min_wage', 'max_wage', 'export_usd', 'compliance_score', 'incidents'],
    FACTORIES.map((f) => [f.id, f.name, f.districtId, f.workers, f.minWage, f.maxWage, f.exportUsd, f.compliance, f.incidents]),
  ),
  insertStmt(
    'remittance_2026',
    ['id', 'month', 'country', 'usd_amount', 'workers_count'],
    REMITTANCE.map((r) => [r.id, r.month, r.country, r.usd, r.workers]),
  ),
  insertStmt(
    'inflation_2026',
    ['id', 'month', 'cpi', 'food_inflation', 'non_food_inflation'],
    INFLATION.map((i) => [i.id, i.month, i.cpi, i.food, i.nonFood]),
  ),
  insertStmt(
    'idp_2026',
    ['id', 'division', 'district', 'cause', 'households', 'persons', 'date'],
    IDP.map((i) => [i.id, i.division, i.district, i.cause, i.households, i.persons, i.date]),
  ),
  insertStmt(
    'power_outages',
    ['id', 'outage_date', 'district', 'hours', 'affected_customers'],
    OUTAGES.map((o) => [o.id, o.date, o.district, o.hours, o.customers]),
  ),
  insertStmt(
    'e_services',
    ['service_id', 'service_name', 'ministry', 'digital_status', 'users', 'district_coverage'],
    ESERVICES.map((e) => [e.id, e.name, e.ministry, e.status, e.users, e.coverage]),
  ),
  insertStmt(
    'rice_prices',
    ['id', 'price_date', 'district', 'variety', 'price_per_kg'],
    RICE.map((r) => [r.id, r.date, r.district, r.variety, r.price]),
  ),
].join('\n');

let dbPromise: Promise<Database> | null = null;

async function getDatabase(): Promise<Database> {
  if (!dbPromise) {
    dbPromise = (async () => {
      const SQL = await initSql();
      const db = new SQL.Database();
      db.run(SCHEMA);
      db.run(SEED);
      return db;
    })().catch((error) => {
      // Allow a retry instead of caching a permanently rejected promise.
      dbPromise = null;
      throw error;
    });
  }
  return dbPromise;
}

/** Remove comments and string literals so we can safely inspect statement structure. */
export function stripLiterals(sql: string): string {
  return sql
    .replace(/--[^\n]*/g, ' ')
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/'(?:''|[^'])*'/g, "''")
    .replace(/"(?: ""|[^"])*"/g, '""');
}

/** Execute a single read-only SQL query against the in-browser database. */
export async function executeQuery(sql: string): Promise<QueryOutcome> {
  const trimmed = sql.trim().replace(/;+\s*$/, '');
  if (!trimmed) return { ok: false, code: 'empty', error: 'Write a SQL query first.' };

  const structure = stripLiterals(trimmed);
  if (/;/.test(structure)) {
    return { ok: false, code: 'multiple-statements', error: 'Please run one statement at a time.' };
  }
  const WRITE_VERBS = /^(DELETE|UPDATE|INSERT|DROP|ALTER|CREATE|REPLACE|TRUNCATE|VACUUM|PRAGMA|ATTACH|DETACH)\b/i;
  const WRITE_ANYWHERE = /\b(DELETE|UPDATE|INSERT|DROP|ALTER|CREATE|REPLACE|TRUNCATE|VACUUM|PRAGMA|ATTACH|DETACH)\b/i;
  const readOnlyError: QueryOutcome = {
    ok: false,
    code: 'write-operation',
    error: 'This sandbox is read-only — write operations are not allowed.',
  };

  const firstWord = structure.trim().split(/\s+/)[0]?.toUpperCase();
  // A statement that starts with a write verb is a write attempt (UPDATE, INSERT, DELETE, ...).
  if (WRITE_VERBS.test(structure.trim())) return readOnlyError;
  if (firstWord !== 'SELECT' && firstWord !== 'WITH') {
    return { ok: false, code: 'non-select', error: 'Only SELECT queries are allowed in this sandbox.' };
  }
  // SQLite also allows WITH ... DELETE / UPDATE / INSERT, so scan those too.
  // Literals and comments are already stripped, so quoted values can't trigger this.
  if (firstWord === 'WITH' && WRITE_ANYWHERE.test(structure)) return readOnlyError;

  try {
    const db = await getDatabase();
    const results = db.exec(trimmed);
    if (results.length === 0) {
      return { ok: true, result: { columns: [], values: [] } };
    }
    const last = results[results.length - 1];
    return {
      ok: true,
      result: {
        columns: last.columns,
        values: last.values.map((row) =>
          row.map((cell) => (typeof cell === 'string' || typeof cell === 'number' || cell === null ? cell : null)),
        ),
      },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return {
      ok: false,
      code: classifySqlError(message),
      error: message,
    };
  }
}
