import { NextResponse } from "next/server";
import { getStore } from "../../lib/store";
import { z } from "zod";


export const dynamic = "force-dynamic";


export async function GET() {
const { todos } = getStore();
return NextResponse.json(todos);
}


const CreateSchema = z.object({ text: z.string().trim().min(1) });


export async function POST(req: Request) {
const body = await req.json().catch(() => ({}));
const parsed = CreateSchema.safeParse(body);
if (!parsed.success) {
return NextResponse.json({ error: "Invalid body" }, { status: 400 });
}


const { todos } = getStore();
const todo = { id: Date.now(), text: parsed.data.text, done: false };
todos.push(todo);
return NextResponse.json(todo, { status: 201 });
}