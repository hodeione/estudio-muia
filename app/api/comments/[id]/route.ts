import { NextRequest, NextResponse } from "next/server";
import { readComments, writeComments } from "@/lib/comments";

function isAdmin(request: NextRequest) {
  const token = request.headers.get("x-admin-token");
  return token === process.env.ADMIN_SECRET;
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin(request)) return NextResponse.json({ error: "No autorizado" }, { status: 403 });

  const { id } = await params;
  const { status, admin_note } = await request.json();

  if (!["approved", "rejected", "pending"].includes(status)) {
    return NextResponse.json({ error: "Estado inválido" }, { status: 400 });
  }

  const all = await readComments();
  const idx = all.findIndex((c) => c.id === id);
  if (idx === -1) return NextResponse.json({ error: "No encontrado" }, { status: 404 });

  all[idx] = { ...all[idx], status, admin_note: admin_note ?? null };
  await writeComments(all);
  return NextResponse.json(all[idx]);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!isAdmin(request)) return NextResponse.json({ error: "No autorizado" }, { status: 403 });

  const { id } = await params;
  const all = await readComments();
  const filtered = all.filter((c) => c.id !== id);
  if (filtered.length === all.length) return NextResponse.json({ error: "No encontrado" }, { status: 404 });

  await writeComments(filtered);
  return NextResponse.json({ success: true });
}
