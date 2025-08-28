import { NextResponse } from "next/server";
import { z } from "zod";
import { signJwt } from "../../../lib/jwt";


const LoginSchema = z.object({
username: z.string().trim().min(1),
password: z.string().trim().min(1),
});


export async function POST(req: Request) {
const json = await req.json().catch(() => ({}));
const parsed = LoginSchema.safeParse(json);
if (!parsed.success) {
return NextResponse.json({ error: "Invalid body" }, { status: 400 });
}


// Demo only: accept any user/pass and return a token
const token = signJwt({ sub: parsed.data.username, name: parsed.data.username });
return NextResponse.json({ token });
}