import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";

import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
    user_id: serial("user_id"),
    user_name: varchar("name",{ length: 100 }),
});

//connect to vercel postgres
export const db = drizzle(sql);