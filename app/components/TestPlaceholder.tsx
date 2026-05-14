import Link from "next/link";

interface TestPlaceholderProps {
  udNum: number;
  udTitle: string;
  backHref: string;
  contentHref: string;
  nextTestHref?: string;
}

export default function TestPlaceholder({ udNum, udTitle, backHref, contentHref, nextTestHref }: TestPlaceholderProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-no-estructurados" className="text-sm text-blue-600 hover:underline">← Datos No Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-green-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">{udNum}</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">Test UD{udNum}: {udTitle}</h1>
            <p className="text-slate-500 text-sm">Sección de evaluación</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-10 text-center">
        <div className="text-6xl mb-4">📝</div>
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Test en preparación</h2>
        <p className="text-slate-500 mb-2 text-base">
          El test para la <strong>UD{udNum}: {udTitle}</strong> estará disponible próximamente.
        </p>
        <p className="text-slate-400 text-sm mb-8">
          Esta sección incluirá preguntas de opción múltiple, verdadero/falso y ejercicios prácticos para evaluar tu comprensión del contenido teórico.
        </p>

        <div className="bg-slate-50 rounded-lg border border-dashed border-slate-300 p-6 mb-8 text-left">
          <h3 className="font-semibold text-slate-700 mb-3 text-sm">Qué encontrarás aquí:</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">A</span>
              Preguntas de opción múltiple sobre los conceptos clave
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">B</span>
              Preguntas de verdadero o falso
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">C</span>
              Preguntas de desarrollo breve
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">D</span>
              Puntuación y revisión de respuestas
            </li>
          </ul>
        </div>

        <div className="flex justify-center gap-4">
          <Link
            href={contentHref}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
          >
            Repasar contenido UD{udNum}
          </Link>
          {nextTestHref && (
            <Link
              href={nextTestHref}
              className="border border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold px-6 py-2.5 rounded-lg transition-colors"
            >
              Test UD{udNum + 1} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
