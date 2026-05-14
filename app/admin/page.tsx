"use client";

import { useState, useEffect, useCallback } from "react";
import type { Comment } from "@/lib/comments";

const TOPIC_LABELS: Record<string, string> = {
  ud1: "UD1: Fundamentos NLP e IA Generativa",
  ud2: "UD2: Modelos Profundos de Lenguaje",
  ud3: "UD3: Frameworks y Agentes de IA",
  ud4: "UD4: Visión por Computador",
  ud5: "UD5: Redes Generativas y Difusión",
  ud6: "UD6: Impacto y Futuro de la IA",
};

export default function AdminPage() {
  const [token, setToken] = useState("");
  const [input, setInput] = useState("");
  const [authError, setAuthError] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("pending");
  const [editNote, setEditNote] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<string | null>(null);

  const fetchAll = useCallback(async (t: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/comments", {
        headers: { "x-admin-token": t },
      });
      if (res.status === 403) { setAuthError(true); setToken(""); return; }
      if (res.ok) setComments(await res.json());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) fetchAll(token);
  }, [token, fetchAll]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthError(false);
    setToken(input);
  }

  async function updateComment(id: string, status: string, admin_note?: string) {
    setSaving(id);
    try {
      const res = await fetch(`/api/comments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ status, admin_note: admin_note ?? editNote[id] ?? null }),
      });
      if (res.ok) {
        const updated = await res.json();
        setComments((prev) => prev.map((c) => (c.id === id ? updated : c)));
      }
    } finally {
      setSaving(null);
    }
  }

  async function deleteComment(id: string) {
    if (!confirm("¿Eliminar este comentario permanentemente?")) return;
    setSaving(id);
    try {
      const res = await fetch(`/api/comments/${id}`, {
        method: "DELETE",
        headers: { "x-admin-token": token },
      });
      if (res.ok) setComments((prev) => prev.filter((c) => c.id !== id));
    } finally {
      setSaving(null);
    }
  }

  if (!token) {
    return (
      <div className="max-w-sm mx-auto px-4 py-20">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">
          <div className="text-4xl text-center mb-4">🔒</div>
          <h1 className="text-xl font-bold text-center text-[#1e3a5f] mb-6">Panel de administración</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Contraseña de administrador"
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {authError && <p className="text-xs text-red-600">Contraseña incorrecta.</p>}
            <button
              type="submit"
              className="w-full bg-[#1e3a5f] hover:bg-[#16304f] text-white font-semibold py-2 rounded-lg transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

  const filtered = filter === "all" ? comments : comments.filter((c) => c.status === filter);
  const counts = {
    pending: comments.filter((c) => c.status === "pending").length,
    approved: comments.filter((c) => c.status === "approved").length,
    rejected: comments.filter((c) => c.status === "rejected").length,
  };

  function statusBadge(s: string) {
    if (s === "approved") return <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">Aprobado</span>;
    if (s === "rejected") return <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full">Rechazado</span>;
    return <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full">Pendiente</span>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#1e3a5f]">Panel de administración</h1>
          <p className="text-slate-500 text-sm mt-1">Modera los comentarios de los estudiantes.</p>
        </div>
        <button
          onClick={() => setToken("")}
          className="text-sm text-slate-500 hover:text-red-600 border border-slate-200 px-3 py-1.5 rounded-lg"
        >
          Cerrar sesión
        </button>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {(["pending", "approved", "rejected", "all"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filter === f ? "bg-[#1e3a5f] text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {f === "pending" ? `Pendientes (${counts.pending})`
              : f === "approved" ? `Aprobados (${counts.approved})`
              : f === "rejected" ? `Rechazados (${counts.rejected})`
              : "Todos"}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-slate-400 text-sm">Cargando comentarios...</p>
      ) : filtered.length === 0 ? (
        <p className="text-slate-400 text-sm italic">No hay comentarios en esta categoría.</p>
      ) : (
        <div className="space-y-4">
          {filtered.map((c) => (
            <div key={c.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {statusBadge(c.status)}
                    <span className="text-xs text-slate-400">{new Date(c.created_at).toLocaleString("es-ES")}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{c.user_name}</p>
                  <p className="text-xs text-blue-600 mt-0.5">{TOPIC_LABELS[c.topic_id] ?? c.topic_id}</p>
                </div>
              </div>

              <p className="text-sm text-slate-700 bg-slate-50 rounded-lg p-3 mb-3 whitespace-pre-wrap">{c.content}</p>

              <div className="mb-3">
                <label className="text-xs text-slate-500 mb-1 block">Nota del profesor (opcional, visible al aprobar)</label>
                <textarea
                  rows={2}
                  value={editNote[c.id] ?? c.admin_note ?? ""}
                  onChange={(e) => setEditNote((prev) => ({ ...prev, [c.id]: e.target.value }))}
                  placeholder="Añade una aclaración o corrección visible al estudiante..."
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                />
              </div>

              <div className="flex gap-2 flex-wrap">
                <button
                  disabled={saving === c.id}
                  onClick={() => updateComment(c.id, "approved")}
                  className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
                >
                  Aprobar
                </button>
                <button
                  disabled={saving === c.id}
                  onClick={() => updateComment(c.id, "rejected")}
                  className="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
                >
                  Rechazar
                </button>
                <button
                  disabled={saving === c.id}
                  onClick={() => updateComment(c.id, c.status, editNote[c.id] ?? c.admin_note ?? "")}
                  className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
                >
                  Guardar nota
                </button>
                <button
                  disabled={saving === c.id}
                  onClick={() => deleteComment(c.id)}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50 ml-auto"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
