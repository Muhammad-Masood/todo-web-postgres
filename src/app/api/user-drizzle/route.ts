import { NextRequest, NextResponse } from "next/server";
import { db, userTable } from "@/app/lib/drizzle";

export const GET = async (req:NextRequest) => {
    const res = await db.select().from(userTable);
    return NextResponse.json(res);
}

export const POST = async (req: NextRequest) => {
    const res = await db.insert(userTable).values({
        user_name: "New User"
    });
    return NextResponse.json({message: "record added"}, {status:200});
}