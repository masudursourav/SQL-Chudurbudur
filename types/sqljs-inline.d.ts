declare module 'sql.js/dist/sql-wasm-inline' {
  const initSqlJs: (config?: Record<string, unknown>) => Promise<unknown>;
  export default initSqlJs;
}
