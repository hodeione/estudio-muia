"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export interface Question {
  question: string;
  options: string[]; // options[0] is always the correct answer
  explanation?: string;
}

type ShuffledQ = {
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
};

const LABELS = ["A", "B", "C", "D"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepare(qs: Question[]): ShuffledQ[] {
  return shuffle(qs).map((q) => {
    const correct = q.options[0];
    const shuffled = shuffle([...q.options]);
    return {
      question: q.question,
      options: shuffled,
      correctIndex: shuffled.indexOf(correct),
      explanation: q.explanation,
    };
  });
}

interface Props {
  udNum: number;
  udTitle: string;
  backHref: string;
  backLabel?: string;
  contentHref: string;
  nextTestHref?: string;
  questions: Question[];
}

export default function InteractiveTest({
  udNum,
  udTitle,
  backHref,
  backLabel = "Inicio",
  contentHref,
  nextTestHref,
  questions,
}: Props) {
  const [tab, setTab] = useState<"ia" | "clase">("ia");
  const [shuffled, setShuffled] = useState<ShuffledQ[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const start = useCallback(() => {
    setShuffled(prepare(questions));
    setAnswers({});
    setSubmitted(false);
  }, [questions]);

  useEffect(() => { start(); }, [start]);

  const answered = Object.keys(answers).length;
  const score = submitted
    ? shuffled.filter((q, i) => answers[i] === q.correctIndex).length
    : 0;
  const pct = shuffled.length > 0 ? Math.round((score / shuffled.length) * 100) : 0;

  const resultColor =
    pct >= 80 ? "text-green-600" : pct >= 60 ? "text-yellow-600" : "text-red-600";
  const resultBg =
    pct >= 80 ? "bg-green-50 border-green-200" : pct >= 60 ? "bg-yellow-50 border-yellow-200" : "bg-red-50 border-red-200";

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href={backHref} className="text-sm text-blue-600 hover:underline">← {backLabel}</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
            {udNum}
          </span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">Test UD{udNum}: {udTitle}</h1>
            <p className="text-slate-500 text-sm">Evaluación interactiva</p>
          </div>
        </div>
        <div className="flex gap-4 mt-3 text-sm">
          <Link href={contentHref} className="text-slate-500 hover:text-indigo-600">Repasar contenido</Link>
          {nextTestHref && (
            <Link href={nextTestHref} className="text-slate-500 hover:text-indigo-600">Siguiente test →</Link>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-6">
        <button
          onClick={() => setTab("ia")}
          className={`px-5 py-2.5 text-sm font-semibold transition-colors ${
            tab === "ia"
              ? "border-b-2 border-indigo-600 text-indigo-700"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Test IA
        </button>
        <button
          onClick={() => setTab("clase")}
          className={`px-5 py-2.5 text-sm font-semibold transition-colors ${
            tab === "clase"
              ? "border-b-2 border-indigo-600 text-indigo-700"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          Test de Clase
        </button>
      </div>

      {tab === "ia" && (
        <div>
          {/* Stats bar */}
          <div className="flex items-center justify-between mb-5 text-sm">
            <span className="text-slate-500">
              {shuffled.length} preguntas · {answered} respondidas
            </span>
            {submitted && (
              <span className={`font-bold text-base ${resultColor}`}>
                {score}/{shuffled.length} correctas ({pct}%)
              </span>
            )}
          </div>

          {/* Result banner */}
          {submitted && (
            <div className={`rounded-xl border p-4 mb-6 text-center ${resultBg}`}>
              <p className={`font-bold text-lg ${resultColor}`}>
                {pct >= 80 ? "Excelente resultado" : pct >= 60 ? "Bien, pero puedes mejorar" : "Repasa el contenido"}
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Has acertado {score} de {shuffled.length} preguntas ({pct}%)
              </p>
            </div>
          )}

          {/* Questions */}
          <div className="space-y-5">
            {shuffled.map((q, qi) => {
              const sel = answers[qi];
              const isCorrect = submitted && sel === q.correctIndex;
              const isWrong = submitted && sel !== undefined && sel !== q.correctIndex;
              const unanswered = submitted && sel === undefined;

              let cardBorder = "border-slate-200";
              if (submitted) {
                if (isCorrect) cardBorder = "border-green-300";
                else if (isWrong) cardBorder = "border-red-300";
                else if (unanswered) cardBorder = "border-slate-300";
              }

              return (
                <div key={qi} className={`bg-white rounded-xl border shadow-sm p-5 ${cardBorder}`}>
                  <p className="font-medium text-[#1e3a5f] mb-3 leading-snug">
                    <span className="text-slate-400 text-sm mr-2 font-normal">{qi + 1}.</span>
                    {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((opt, oi) => {
                      let cls =
                        "w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-colors ";
                      if (!submitted) {
                        cls +=
                          sel === oi
                            ? "bg-indigo-600 text-white border-indigo-600 font-semibold"
                            : "border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50";
                      } else {
                        if (oi === q.correctIndex) {
                          cls += "bg-green-100 border-green-400 text-green-800 font-semibold";
                        } else if (oi === sel) {
                          cls += "bg-red-100 border-red-300 text-red-700 line-through";
                        } else {
                          cls += "border-slate-100 text-slate-400 bg-slate-50";
                        }
                      }
                      return (
                        <button
                          key={oi}
                          disabled={submitted}
                          onClick={() => !submitted && setAnswers((a) => ({ ...a, [qi]: oi }))}
                          className={cls}
                        >
                          <span className="font-bold mr-2">{LABELS[oi]}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {submitted && (
                    <div className="mt-3 flex items-start gap-2">
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          isCorrect
                            ? "bg-green-100 text-green-700"
                            : isWrong
                            ? "bg-red-100 text-red-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {isCorrect ? "Correcto" : isWrong ? "Incorrecto" : "Sin responder"}
                      </span>
                      {isWrong && (
                        <span className="text-xs text-slate-500">
                          Respuesta correcta: <strong>{LABELS[q.correctIndex]}</strong>
                        </span>
                      )}
                    </div>
                  )}
                  {submitted && q.explanation && (
                    <p className="mt-2 text-xs text-slate-500 bg-slate-50 rounded-lg p-2 border border-slate-100">
                      {q.explanation}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center gap-4">
            {!submitted ? (
              <button
                onClick={() => setSubmitted(true)}
                disabled={answered === 0}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Corregir test ({answered}/{shuffled.length})
              </button>
            ) : (
              <button
                onClick={start}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Repetir con orden aleatorio
              </button>
            )}
          </div>
        </div>
      )}

      {tab === "clase" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-10 text-center">
          <div className="text-5xl mb-4">📋</div>
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Test de Clase</h2>
          <p className="text-slate-500 text-sm mb-6">
            Este apartado está reservado para los tests del material oficial de clase.
            Se añadirán las preguntas del profesor próximamente.
          </p>
          <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-6 text-sm text-slate-400">
            Pendiente de añadir preguntas del temario oficial de UD{udNum}
          </div>
          <Link
            href={contentHref}
            className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Repasar contenido UD{udNum}
          </Link>
        </div>
      )}
    </div>
  );
}
