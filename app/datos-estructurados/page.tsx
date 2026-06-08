import Link from "next/link";

const uds = [
  {
    n: 1,
    title: "Introducción a las Series Temporales",
    temas: ["Concepto de serie temporal y proceso estocástico", "Estacionariedad débil", "ACF, PACF y Ruido Blanco", "Modelos AR(1) y AR(2)"],
  },
  {
    n: 2,
    title: "Modelos ARIMA y Metodología Box-Jenkins",
    temas: ["Modelos AR(p), MA(q) y ARMA(p,q)", "ARIMA(p,d,q) y diferenciación", "Metodología Box-Jenkins (5 pasos)", "Criterios AIC y BIC"],
  },
  {
    n: 3,
    title: "Modelos SARIMA",
    temas: ["Estacionalidad en series temporales", "SARIMA(p,d,q)×(P,D,Q)_s", "Diferenciación estacional", "Caso práctico: temperaturas Nueva York"],
  },
  {
    n: 4,
    title: "Regresión con Errores de Series Temporales",
    temas: ["Regresión OLS con residuos correlacionados", "Procedimiento de 3 pasos", "Estimación conjunta por MLE", "Modelo ARIMAX"],
  },
  {
    n: 5,
    title: "Facebook Prophet",
    temas: ["Modelo aditivo: tendencia, estacionalidad, festivos", "Changepoints y detección automática", "Parámetros e implementación en Python", "Validación cruzada temporal"],
  },
  {
    n: 6,
    title: "Modelos GARCH y ARCH",
    temas: ["Clustering de volatilidad", "Modelo ARCH(q)", "GARCH(p,q) y GARCH(1,1)", "Caso práctico: EurUSD"],
  },
  {
    n: 7,
    title: "Redes Neuronales y Aprendizaje Profundo",
    temas: ["Perceptrón y ADALINE", "Funciones de activación", "Optimizadores y proceso de entrenamiento", "Forward/Backpropagation y Keras"],
  },
  {
    n: 8,
    title: "Sistemas Recomendadores",
    temas: ["Tipos: Popular, Content-Based, Collaborative, Hybrid", "Fenómeno Long Tail", "Rating Matrix y entradas del sistema", "Memory-based vs Model-based"],
  },
  {
    n: 9,
    title: "VaR y Expected Shortfall",
    temas: ["Risk Management: categorías de riesgo", "Value at Risk: definición y cálculo", "EWMA y GARCH para volatilidad condicional", "Expected Shortfall y backtesting"],
  },
];

export default function DatosEstructurados() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-600 hover:underline">← Inicio</Link>
        <h1 className="text-3xl font-bold text-[#1e3a5f] mt-2">Datos Estructurados</h1>
        <p className="text-slate-500 mt-1">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
      </div>

      <div className="space-y-4">
        {uds.map((ud) => (
          <div key={ud.n} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-start gap-4">
              <div className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                    href={`/datos-estructurados/ud${ud.n}`}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Estudiar contenido
                  </Link>
                  <Link
                    href={`/datos-estructurados/ud${ud.n}/test`}
                    className="border border-indigo-200 text-indigo-700 hover:bg-indigo-50 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
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
