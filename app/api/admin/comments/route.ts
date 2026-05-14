import { NextRequest, NextResponse } from "next/server";
import { readComments } from "@/lib/comments";

export async function GET(request: NextRequest) {
  const token = request.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  const all = await readComments();
  return NextResponse.json(all.sort((a, b) => b.created_at.localeCompare(a.created_at)));
}
