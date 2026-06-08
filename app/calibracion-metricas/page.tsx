import Link from "next/link";

const uds = [
  {
    n: 1,
    title: "XAI. Definición, Conceptos y Propiedades",
    temas: ["Definición de XAI (Barredo et al. 2020)", "Conceptos: Inteligibilidad, Comprensibilidad, Transparencia", "Explicabilidad y Explicabilidad Post-Hoc", "Propiedades XAI: Privacidad, Fiabilidad, Causalidad, Transferibilidad", "SHAP: summary, force y dependence plot", "LIME e ICE"],
  },
  {
    n: 2,
    title: "Estabilidad y Sesgos",
    temas: ["Sesgo vs Varianza (Bias-Variance Tradeoff)", "K-fold, K-fold repetido, LOO, LPO", "StratifiedKFold, StratifiedShuffleSplit", "GroupKFold, StratifiedGroupKFold, LeaveOneGroupOut, LeavePGroupsOut", "TimeSeriesSplit", "SMOTE y detección de fraude"],
  },
  {
    n: 3,
    title: "Introducción a las Métricas de Rendimiento de Modelos de Machine Learning",
    temas: ["IA > ML > Deep Learning > IA Generativa", "Tipos de ML: supervisado, semi-supervisado, no supervisado, refuerzo", "Algoritmos supervisados y no supervisados", "Importancia de las métricas", "Train/Validation/Test split", "Overfitting, underfitting, datos desbalanceados"],
  },
  {
    n: 4,
    title: "Métricas de Rendimiento de los Modelos de Regresión",
    temas: ["Residuos y correlación entre variables", "MSE, RMSE, MAE, R², R²-ajustado", "MBE, RAE, MAPE, NRMSE, RRMSE, RMSLE", "Limitaciones de cada métrica", "Evaluación y comparación de modelos"],
  },
  {
    n: 5,
    title: "Métricas de Rendimiento de los Modelos de Clasificación",
    temas: ["Matriz de confusión: TP, FP, TN, FN", "Accuracy, Precisión, Recall, Especificidad, F1 Score", "AUC-ROC, Curva de Ganancia, Curva Lift", "Desbalance de clases y elección de métricas por contexto"],
  },
  {
    n: 6,
    title: "Datos Balanceados",
    temas: ["Introducción al balanceo de datos", "Submuestreo y NearMiss", "Sobremuestreo y SMOTE", "Caso práctico: Credit Card Fraud (Kaggle)", "Comparación modelo base vs NearMiss vs SMOTE"],
  },
];

export default function CalibracionMetricas() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-600 hover:underline">← Inicio</Link>
        <h1 className="text-3xl font-bold text-[#1e3a5f] mt-2">Calibración y Métricas</h1>
        <p className="text-slate-500 mt-1">Evaluación, métricas y calibración de modelos de inteligencia artificial</p>
      </div>

      <div className="space-y-4">
        {uds.map((ud) => (
          <div key={ud.n} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-start gap-4">
              <div className="bg-teal-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                {ud.n}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-[#1e3a5f] text-base mb-2">UD{ud.n}: {ud.title}</h2>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ud.temas.map((t, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/calibracion-metricas/ud${ud.n}`}
                    className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Estudiar contenido
                  </Link>
                  <Link
                    href={`/calibracion-metricas/ud${ud.n}/test`}
                    className="border border-teal-200 text-teal-700 hover:bg-teal-50 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Test
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
