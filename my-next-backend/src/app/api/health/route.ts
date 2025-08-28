import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // no caching for demo

export async function GET() {
    return NextResponse.json({ ok: true, ts: Date.now().toLocaleString() });
}
export async function POST() {
    return NextResponse.json({ ok: true, ts: Date.now() });
}