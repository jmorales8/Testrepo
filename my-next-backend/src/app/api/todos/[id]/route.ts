import { NextResponse } from "next/server";
import { getStore } from "../../../lib/store";

export const dynamic = "force-dynamic";

function findIndex(idStr: string) {
const id = Number(idStr);
if (!Number.isFinite(id)) return -1;
const { todos } = getStore();
return todos.findIndex((t) => t.id === id);
}


export async function PUT(_: Request, { params }: { params: { id: string } }) {
const idx = findIndex(params.id);
const { todos } = getStore();
if (idx < 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
todos[idx].done = !todos[idx].done;
return NextResponse.json(todos[idx]);
}


export async function DELETE(_: Request, { params }: { params: { id: string } }) {
const idx = findIndex(params.id);
const { todos } = getStore();
if (idx < 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
const [removed] = todos.splice(idx, 1);
return NextResponse.json(removed);
}