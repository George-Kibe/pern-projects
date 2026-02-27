import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// In Vercel, env vars are injected by the platform (no dotenv needed).
// Locally, pg can also read standard PG* env vars if DATABASE_URL isn't set.
const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : new Pool();

export const db = drizzle(pool);
