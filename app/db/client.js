import pg from 'pg';
// const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const pool = new pg.Pool();

export { pool };
