import Link from "next/link";

export default function CalibracionMetricas() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/" className="text-sm text-blue-600 hover:underline">← Inicio</Link>
        <h1 className="text-3xl font-bold text-[#1e3a5f] mt-2">Calibración y Métricas</h1>
        <p className="text-slate-500 mt-1">Contenido teórico en preparación</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-10 text-center">
        <div className="text-6xl mb-4">📐</div>
        <h2 className="text-2xl font-bold text-[#1e3a5f] mb-3">Próximamente</h2>
        <p className="text-slate-500 mb-2 text-base">
          El contenido de la asignatura <strong>Calibración y Métricas</strong> estará disponible próximamente.
        </p>
        <p className="text-slate-400 text-sm mb-8">
          Esta asignatura cubrirá metodologías de evaluación de modelos de IA, métricas de rendimiento, calibración de probabilidades, análisis de errores y benchmarks del sector.
        </p>

        <div className="bg-slate-50 rounded-lg border border-dashed border-slate-300 p-6 mb-8 text-left">
          <h3 className="font-semibold text-slate-700 mb-3 text-sm">Contenido previsto:</h3>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              Métricas de clasificación: Precisión, Recall, F1, AUC-ROC
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              Métricas de regresión: MSE, RMSE, MAE, R²
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              Calibración de modelos probabilísticos
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              Validación cruzada y técnicas de evaluación
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300 rounded-full"></span>
              Benchmarks y leaderboards en IA
            </li>
          </ul>
        </div>

        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
