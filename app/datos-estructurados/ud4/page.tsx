import Link from "next/link";

export default function UD4() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-estructurados" className="text-sm text-blue-600 hover:underline">← Datos Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">4</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD4: Regresión con Errores de Series Temporales</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-estructurados/ud3" className="text-sm text-slate-500 hover:text-blue-600">← UD3</Link>
          <Link href="/datos-estructurados/ud5" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD5 →</Link>
          <Link href="/datos-estructurados/ud4/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
        <strong>Temas:</strong> 1. Modelos de regresión con errores de ST · 2. Procedimiento de 4 pasos · 3. Caso práctico: tasas de interés de EE.UU. · 4. Modelo ARIMAX
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Los modelos ARIMA que hemos estudiado hasta ahora <strong>intentan explicar el futuro de una variable basándose en su propio pasado</strong>. Parece lógico tratar de explicar y predecir con mayor precisión usando también el presente y pasado de <em>otras variables explicativas</em>.
        </p>
        <p>
          La técnica para abordar esto son los <strong>modelos de regresión con errores de series temporales</strong>. El modelo base es:
        </p>
        <div className="formula">y_t = α + β·x_t + e_t</div>
        <p>
          donde y_t y x_t son dos series temporales y e_t es el término de error.
        </p>

        <h2>Tema 1: El Problema de la Correlación Serial</h2>

        <h3>1.1 Consecuencias de ignorar la autocorrelación</h3>
        <p>
          Si e_t es Ruido Blanco, el método de mínimos cuadrados ordinarios (OLS) produce estimaciones <strong>consistentes</strong> para α y β.
        </p>
        <p>
          Sin embargo, si e_t está <strong>correlacionado en serie</strong>, las estimaciones de α y β pueden <strong>no ser consistentes</strong>: aunque aumente el tamaño muestral n, el estimador no converge al valor real del parámetro.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-900">
          <strong>Consistencia:</strong> Un estimador θ̂_n es consistente si lim_{"{n→∞}"} P(|θ̂_n − θ| {"< ε"}) = 1 para todo ε {">"} 0. Es decir, con suficientes datos el estimador converge en probabilidad al valor real del parámetro.
        </div>

        <h3>1.2 ¿Por qué e_t tiene autocorrelación?</h3>
        <p>
          En muchas aplicaciones reales el error e_t <strong>sí muestra autocorrelación</strong>, es decir, tiene memoria: el error actual depende de errores pasados. Esto es habitual en:
        </p>
        <ul>
          <li>Series financieras (tasas de interés, tipos de cambio)</li>
          <li>Series económicas (PIB, inflación, desempleo)</li>
          <li>Cualquier serie donde los factores omitidos persisten en el tiempo</li>
        </ul>
        <p>
          Por eso usamos modelos como <strong>MA(1)</strong> para los errores:
        </p>
        <div className="formula">e_t = a_t + θ·a_{"{t-1}"}</div>

        <h2>Tema 2: a_t vs e_t — La Innovación</h2>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h3 className="mt-0">¿Por qué no modelamos e_t directamente como Ruido Blanco?</h3>
          <p>
            Porque en muchos casos e_t tiene memoria (autocorrelación). Entonces la solución es encontrar la parte "verdaderamente aleatoria" dentro de e_t.
          </p>
          <p>En el modelo: <code>e_t = a_t + θ·a_{"{t-1}"}</code></p>
          <ul>
            <li><strong>a_t</strong> es el <strong>verdadero ruido aleatorio</strong> (la innovación): representa un shock económico puro, un error de medición. Cumple: E[a_t] = 0, Var(a_t) = σ²_a, Cov(a_t, a_{"{t-k}"}) = 0 para todo k ≠ 0.</li>
            <li><strong>e_t</strong> es el <strong>error observado</strong>: mezcla el ruido puro a_t con la influencia del pasado. Por eso e_t no es WN aunque a_t sí lo sea.</li>
          </ul>
          <p className="mb-0">a_t es "lo más puro de lo aleatorio", el ruido base que genera el comportamiento de e_t.</p>
        </div>

        <h2>Tema 3: Procedimiento de 4 Pasos</h2>
        <p>
          Los pasos para analizar modelos de regresión lineal con errores de series temporales son:
        </p>

        <h3>Paso 1: Ajustar OLS y verificar correlación serial de los residuos</h3>
        <p>
          Se estima el modelo de regresión por OLS en la escala original y se analizan los residuos ê_t: ACF, PACF y test de Dickey-Fuller para verificar si son estacionarios.
        </p>

        <h3>Paso 2: ¿Son estacionarios los residuos?</h3>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
          <p className="font-semibold text-amber-800 mb-2">Bifurcación clave:</p>
          <ul className="mb-0">
            <li><strong>Si los residuos NO son estacionarios:</strong> tomar la <strong>primera diferencia tanto de la variable dependiente como de las explicativas</strong> y volver al Paso 1.</li>
            <li><strong>Si los residuos SÍ son estacionarios:</strong> identificar un modelo ARMA para los residuos (usando ACF y PACF) y modificar el modelo de regresión lineal en consecuencia.</li>
          </ul>
        </div>

        <h3>Paso 3: Estimación conjunta por Máxima Verosimilitud (MLE)</h3>
        <p>
          Realizar una estimación conjunta de los parámetros de regresión (α, β) y los parámetros del modelo de errores (θ) mediante MLE. Verificar el modelo ajustado para posibles mejoras.
        </p>

        <h3>Paso 4: Pronóstico</h3>
        <p>
          Una vez que los residuos del modelo conjunto sean Ruido Blanco (WN), el modelo está listo para hacer pronósticos.
        </p>

        <h2>Tema 4: Caso Práctico — Tasas de Interés Semanales de EE.UU.</h2>

        <h3>4.1 Descripción</h3>
        <p>
          Se estudia la relación entre dos series semanales de tasas de interés de bonos del Tesoro de EE.UU.:
        </p>
        <ul>
          <li><strong>r_{"{1,t}"}</strong>: tasa de madurez constante a 1 año</li>
          <li><strong>r_{"{3,t}"}</strong>: tasa de madurez constante a 3 años</li>
        </ul>
        <p>La correlación entre ambas series es <strong>0.9823</strong>.</p>

        <h3>4.2 Paso 1 — OLS en niveles</h3>
        <p>El modelo OLS estimado es:</p>
        <div className="formula">r_{"{3,t}"} = 0.832 + 0.93·r_{"{1,t}"} + e_t</div>
        <p>R² = 96.49%, error estándar = 0.5228. Sin embargo, los residuos son <strong>claramente no estacionarios</strong> (la ACF decae muy lentamente) y el test ADF sugiere raíz unitaria. Las dos tasas no están cointegradas.</p>

        <h3>4.3 Paso 2 — Diferenciar ambas variables</h3>
        <p>
          Como los residuos no son estacionarios, se toma la primera diferencia de ambas series:
        </p>
        <div className="formula">c_{"{1,t}"} = (1 − L)·r_{"{1,t}"} = r_{"{1,t}"} − r_{"{1,t-1}"}</div>
        <div className="formula">c_{"{3,t}"} = (1 − L)·r_{"{3,t}"} = r_{"{3,t}"} − r_{"{3,t-1}"}</div>
        <p>
          La correlación entre los cambios ahora es <strong>0.9084</strong>. El nuevo modelo OLS sobre los cambios:
        </p>
        <div className="formula">c_{"{3,t}"} = 0.794·c_{"{1,t}"} + e_t</div>
        <p>
          R² = 85.5%, error estándar = 0.06. La ACF de los residuos muestra un pico significativo en lag 1, lo que sugiere un modelo <strong>MA(1)</strong> para los errores.
        </p>
        <p>
          El error no es WN, lo que significa que queda estructura en e_t que no está siendo explicada por x_t. Esa estructura es autocorrelación: los errores actuales dependen de errores pasados.
        </p>

        <h3>4.4 Paso 3 — Estimación conjunta MLE</h3>
        <p>
          Estimando conjuntamente con errores MA(1), el modelo final es:
        </p>
        <div className="formula">c_{"{3,t}"} = 0.794·c_{"{1,t}"} + e_t</div>
        <div className="formula">e_t = a_t + 0.1823·a_{"{t-1}"}, con σ_a = 0.0678</div>
        <p>
          Deshaciendo las diferencias, el modelo en niveles equivalente es:
        </p>
        <div className="formula">r_{"{3,t}"} = r_{"{3,t-1}"} + 0.794·(r_{"{1,t}"} − r_{"{1,t-1}"}) + a_t + 0.182·a_{"{t-1}"}</div>
        <p>
          <strong>La serie de interés puede ser explicada por su propio pasado y por el presente y pasado de otra serie.</strong> Este es un ejemplo de modelo <strong>ARIMAX</strong> (AutoRegressive Integrated Moving Average with eXogenous variables).
        </p>

        <h2>Tema 5: Modelo ARIMAX</h2>
        <p>
          ARIMAX es la generalización natural: incorpora variables externas (exógenas) dentro de un modelo ARIMA. La forma general es:
        </p>
        <div className="formula">φ(B)·Δ^d·Y_t = β₁X_{"{1,t}"} + ··· + β_kX_{"{k,t}"} + θ(B)·ε_t</div>

        <table>
          <thead>
            <tr><th>Enfoque</th><th>Trata autocorrelación</th><th>Variables externas</th><th>Consistencia</th></tr>
          </thead>
          <tbody>
            <tr><td>OLS clásico</td><td>No</td><td>Sí</td><td>Solo si e_t = WN</td></tr>
            <tr><td>Procedimiento 4 pasos</td><td>Sí</td><td>Sí</td><td>Buena</td></tr>
            <tr><td>ARIMAX (MLE conjunto)</td><td>Sí</td><td>Sí</td><td>Óptima</td></tr>
            <tr><td>ARIMA puro</td><td>Sí</td><td>No</td><td>Óptima (sin vars externas)</td></tr>
          </tbody>
        </table>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-estructurados/ud3" className="text-sm text-slate-500 hover:text-blue-600">← UD3: Modelos SARIMA</Link>
        <div className="flex gap-3">
          <Link href="/datos-estructurados/ud4/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD4</Link>
          <Link href="/datos-estructurados/ud5" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">Siguiente: UD5 →</Link>
        </div>
      </div>
    </div>
  );
}
