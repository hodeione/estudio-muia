import { NextRequest, NextResponse } from "next/server";
import { readComments, writeComments, Comment } from "@/lib/comments";
import { randomUUID } from "crypto";

export async function GET(request: NextRequest) {
  const topicId = request.nextUrl.searchParams.get("topic_id");
  if (!topicId) return NextResponse.json({ error: "topic_id requerido" }, { status: 400 });

  const all = await readComments();
  const visible = all.filter((c) => c.topic_id === topicId && c.status === "approved");
  return NextResponse.json(visible);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { topic_id, user_name, content } = body;

  if (!topic_id || !user_name?.trim() || !content?.trim()) {
    return NextResponse.json({ error: "topic_id, nombre y comentario son obligatorios" }, { status: 400 });
  }
  if (content.trim().length > 2000) {
    return NextResponse.json({ error: "El comentario no puede superar 2000 caracteres" }, { status: 400 });
  }

  const comment: Comment = {
    id: randomUUID(),
    topic_id,
    user_name: user_name.trim(),
    content: content.trim(),
    status: "pending",
    admin_note: null,
    created_at: new Date().toISOString(),
  };

  const all = await readComments();
  all.push(comment);
  await writeComments(all);

  return NextResponse.json(comment, { status: 201 });
}
