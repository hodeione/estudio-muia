import { readFile, writeFile } from "fs/promises";
import path from "path";

export type Comment = {
  id: string;
  topic_id: string;
  user_name: string;
  content: string;
  status: "pending" | "approved" | "rejected";
  admin_note: string | null;
  created_at: string;
};

const FILE = path.join(process.cwd(), "data", "comments.json");

export async function readComments(): Promise<Comment[]> {
  try {
    const raw = await readFile(FILE, "utf-8");
    return JSON.parse(raw) as Comment[];
  } catch {
    return [];
  }
}

export async function writeComments(comments: Comment[]): Promise<void> {
  await writeFile(FILE, JSON.stringify(comments, null, 2), "utf-8");
}
