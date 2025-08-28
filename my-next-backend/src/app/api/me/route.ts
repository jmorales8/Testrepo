import { NextResponse } from "next/server";
import { verifyJwt } from "../../lib/jwt";


export async function GET(req: Request) {
const auth = req.headers.get("authorization") || "";
const token = auth.startsWith("Bearer ") ? auth.slice(7) : undefined;
const payload = verifyJwt(token);
if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
return NextResponse.json({ user: { id: payload.sub, name: payload.name } });
}