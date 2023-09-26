// manual query api without drizzle

import { NextResponse } from "next/server";
import { db } from "@vercel/postgres";

export async function GET() {
    const client = await db.connect();
    const res = await client.query('SELECT * FROM users');
    return NextResponse.json(res);
}