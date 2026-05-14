"use client";

import { useState, useEffect, useCallback } from "react";
import type { Comment } from "@/lib/comments";

interface Props {
  topicId: string;
  topicLabel?: string;
}

export default function CommentSection({ topicId, topicLabel }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`/api/comments?topic_id=${encodeURIComponent(topicId)}`);
      if (res.ok) setComments(await res.json());
    } finally {
      setLoading(false);
    }
  }, [topicId]);

  useEffect(() => { fetchComments(); }, [fetchComments]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic_id: topicId, user_name: name, content }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? "Error al enviar el comentario");
      } else {
        setContent("");
        setSubmitted(true);
      }
    } finally {
      setSubmitting(false);
    }
  }

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
  }

  return (
    <div className="mt-10 border-t border-slate-200 pt-8">
      <h3 className="text-lg font-bold text-[#1e3a5f] mb-1">
        Comentarios{topicLabel ? ` — ${topicLabel}` : ""}
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        ¿Tienes dudas, apuntes adicionales o correcciones? Déjalos aquí. Serán revisados antes de publicarse.
      </p>

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center mb-8">
          <p className="text-green-800 font-semibold mb-1">Comentario recibido</p>
          <p className="text-green-700 text-sm">Será revisado y publicado en breve.</p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-3 text-sm text-green-700 underline hover:no-underline"
          >
            Añadir otro comentario
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mb-8 space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            maxLength={80}
            required
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escribe tu comentario, pregunta o aportación..."
            rows={4}
            maxLength={2000}
            required
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">{content.length}/2000</span>
            {error && <span className="text-xs text-red-600">{error}</span>}
            <button
              type="submit"
              disabled={submitting || !name.trim() || !content.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            >
              {submitting ? "Enviando..." : "Enviar comentario"}
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {loading ? (
          <p className="text-sm text-slate-400">Cargando comentarios...</p>
        ) : comments.length === 0 ? (
          <p className="text-sm text-slate-400 italic">No hay comentarios aún. ¡Sé el primero!</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="bg-white border border-slate-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-slate-700">{c.user_name}</span>
                <span className="text-xs text-slate-400">{formatDate(c.created_at)}</span>
              </div>
              <p className="text-sm text-slate-600 whitespace-pre-wrap">{c.content}</p>
              {c.admin_note && (
                <div className="mt-2 bg-blue-50 border-l-2 border-blue-400 pl-3 py-1">
                  <p className="text-xs text-blue-700"><strong>Nota del profesor:</strong> {c.admin_note}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
