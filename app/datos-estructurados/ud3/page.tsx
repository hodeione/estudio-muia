import Link from "next/link";

export default function UD3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-estructurados" className="text-sm text-blue-600 hover:underline">← Datos Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">3</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD3: Modelos SARIMA</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-estructurados/ud2" className="text-sm text-slate-500 hover:text-blue-600">← UD2</Link>
          <Link href="/datos-estructurados/ud4" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD4 →</Link>
          <Link href="/datos-estructurados/ud3/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
        <strong>Temas:</strong> 1. Estacionalidad en series temporales · 2. Componentes S-AR y S-MA · 3. SARIMA(p,d,q)×(P,D,Q)_s · 4. Caso práctico: temperaturas Nueva York
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Muchas series temporales reales presentan patrones que se repiten con regularidad en cada periodo estacional: las ventas minoristas suben en Navidad, las temperaturas siguen ciclos anuales, el tráfico web tiene picos semanales. Los modelos ARIMA estándar no capturan adecuadamente esta <strong>estacionalidad</strong> y necesitan ser extendidos.
        </p>
        <p>
          Los modelos <strong>SARIMA</strong> (Seasonal ARIMA) añaden componentes estacionales al ARIMA clásico, permitiendo modelar simultáneamente la dinámica a corto plazo (dentro del periodo estacional) y la dinámica estacional (entre periodos).
        </p>

        <h2>Tema 1: Estacionalidad en Series Temporales</h2>

        <h3>1.1 Concepto de estacionalidad</h3>
        <p>
          Se dice que una serie temporal tiene <strong>estacionalidad</strong> de periodo s si presenta un patrón que se repite cada s observaciones. Los periodos estacionales más comunes son:
        </p>
        <ul>
          <li><strong>s = 12:</strong> datos mensuales con ciclo anual</li>
          <li><strong>s = 4:</strong> datos trimestrales con ciclo anual</li>
          <li><strong>s = 7:</strong> datos diarios con ciclo semanal</li>
          <li><strong>s = 24:</strong> datos horarios con ciclo diario</li>
        </ul>

        <h3>1.2 Diferenciación estacional</h3>
        <p>
          Análogamente a la diferenciación ordinaria para eliminar tendencias, la <strong>diferenciación estacional</strong> de orden s elimina el componente estacional:
        </p>
        <div className="formula">ΔₛY_t = Y_t − Y_{"{t-s}"} = (1 − Bˢ)·Y_t</div>
        <p>
          Por ejemplo, para datos mensuales (s=12): Δ₁₂Y_t = Y_t − Y_{"{t-12}"} compara cada mes con el mismo mes del año anterior.
        </p>
        <p>
          Si D es el número de diferenciaciones estacionales necesarias, aplicamos el operador (1 − Bˢ)^D a la serie antes de ajustar el modelo.
        </p>

        <h3>1.3 Identificación de estacionalidad en ACF/PACF</h3>
        <p>
          La estacionalidad se detecta en la ACF por la presencia de <strong>picos significativos en los retardos múltiplos de s</strong>: s, 2s, 3s, ... En la PACF también aparecen picos en esos retardos estacionales.
        </p>

        <h2>Tema 2: Componentes Estacionales S-AR y S-MA</h2>

        <h3>2.1 Componente S-AR(P) — Autorregresivo estacional</h3>
        <p>
          El componente <strong>S-AR(1)</strong> modela la dependencia en el retardo estacional s:
        </p>
        <div className="formula">Y_t = Φ · Y_{"{t-s}"} + ε_t</div>
        <p>
          De forma general, el S-AR(P) usa P retardos estacionales: Y_t = Φ₁Y_{"{t-s}"} + Φ₂Y_{"{t-2s}"} + ··· + Φ_PY_{"{t-Ps}"} + ε_t.
        </p>
        <p>
          En notación de operadores: Φ(Bˢ)·Y_t = ε_t, donde Φ(Bˢ) = 1 − Φ₁Bˢ − ··· − Φ_P·B^{"{Ps}"}.
        </p>
        <p>
          <strong>Patrón ACF/PACF:</strong> La PACF presenta picos aislados en los retardos s, 2s, ..., Ps y la ACF decae geométricamente en esos mismos retardos.
        </p>

        <h3>2.2 Componente S-MA(Q) — Media móvil estacional</h3>
        <p>
          El componente <strong>S-MA(1)</strong> modela los errores en el retardo estacional:
        </p>
        <div className="formula">Y_t = ε_t − Θ · ε_{"{t-s}"}</div>
        <p>
          De forma general: Y_t = Θ(Bˢ)·ε_t, donde Θ(Bˢ) = 1 − Θ₁Bˢ − ··· − Θ_Q·B^{"{Qs}"}.
        </p>
        <p>
          <strong>Patrón ACF/PACF:</strong> La ACF presenta picos aislados en los retardos s, 2s, ..., Qs y la PACF decae geométricamente en esos mismos retardos.
        </p>

        <h2>Tema 3: Modelo SARIMA(p,d,q)×(P,D,Q)_s</h2>

        <h3>3.1 Definición completa</h3>
        <p>
          El modelo <strong>SARIMA(p,d,q)×(P,D,Q)_s</strong> combina el ARIMA ordinario con los componentes estacionales:
        </p>
        <div className="formula">φ(B) · Φ(Bˢ) · Δ^d · Δˢ^D · Y_t = θ(B) · Θ(Bˢ) · ε_t</div>
        <p>donde:</p>
        <ul>
          <li><strong>φ(B)</strong>: polinomio AR ordinario de orden p</li>
          <li><strong>Φ(Bˢ)</strong>: polinomio AR estacional de orden P</li>
          <li><strong>Δ^d = (1−B)^d</strong>: diferenciación ordinaria d veces</li>
          <li><strong>Δˢ^D = (1−Bˢ)^D</strong>: diferenciación estacional D veces</li>
          <li><strong>θ(B)</strong>: polinomio MA ordinario de orden q</li>
          <li><strong>Θ(Bˢ)</strong>: polinomio MA estacional de orden Q</li>
        </ul>

        <h3>3.2 Número total de parámetros</h3>
        <p>
          El SARIMA tiene p + q + P + Q parámetros más la constante y la varianza del error. La elección del modelo requiere especificar los 7 valores: (p, d, q, P, D, Q, s).
        </p>

        <h3>3.3 Metodología Box-Jenkins para SARIMA</h3>
        <p>El proceso de identificación se extiende al caso estacional:</p>
        <ol>
          <li><strong>Visualización:</strong> identificar tendencia, estacionalidad, cambios de varianza</li>
          <li><strong>Diferenciación:</strong> aplicar Δ^d y Δˢ^D hasta obtener estacionariedad (test ADF, test OCSB para estacionalidad)</li>
          <li><strong>ACF/PACF de la serie transformada:</strong>
            <ul>
              <li>Retardos 1, 2, ...: informan sobre p y q (componentes ordinarios)</li>
              <li>Retardos s, 2s, ...: informan sobre P y Q (componentes estacionales)</li>
            </ul>
          </li>
          <li><strong>Estimación:</strong> MLE de todos los parámetros conjuntamente</li>
          <li><strong>Diagnóstico:</strong> residuos deben ser Ruido Blanco (test Ljung-Box para múltiples retardos)</li>
          <li><strong>Predicción:</strong> con intervalos de confianza que capturan la incertidumbre estacional</li>
        </ol>

        <h2>Tema 4: Caso Práctico — Temperaturas en Nueva York</h2>

        <h3>4.1 Descripción del dataset</h3>
        <p>
          Se analiza la serie de <strong>temperaturas medias mensuales en Nueva York</strong> (en grados Fahrenheit), con s = 12 (ciclo anual). La serie muestra claramente un patrón estacional: temperaturas altas en verano y bajas en invierno, repitiéndose cada año.
        </p>

        <h3>4.2 Identificación del modelo</h3>
        <p>
          Tras la diferenciación estacional (D=1, d=0), el análisis de ACF/PACF sugiere:
        </p>
        <ul>
          <li><strong>Componente ordinario:</strong> picos significativos en lags 1 (ACF y PACF) → posible AR(1) o MA(1)</li>
          <li><strong>Componente estacional:</strong> pico significativo solo en lag 12 de la ACF → S-MA(1)</li>
        </ul>
        <p>
          El modelo propuesto es <strong>SARIMA(1,0,1)×(0,1,1)[12]</strong>:
        </p>
        <div className="formula">φ(B) · (1 − B¹²) · Y_t = θ(B) · Θ(B¹²) · ε_t</div>

        <h3>4.3 Interpretación del modelo SARIMA(1,0,1)×(0,1,1)[12]</h3>
        <ul>
          <li>p=1, d=0, q=1: componente ARMA(1,1) para la dinámica mensual</li>
          <li>P=0, D=1, Q=1: una diferenciación estacional + S-MA(1) para capturar el ciclo anual</li>
          <li>s=12: periodicidad mensual (ciclo anual)</li>
        </ul>
        <p>
          Este modelo expande como: la temperatura de este mes depende de la del mismo mes del año pasado (por la diferenciación estacional), más un componente ARMA a corto plazo que recoge la inercia mes a mes.
        </p>

        <h3>4.4 Predicción SARIMA</h3>
        <p>
          El modelo ajustado produce predicciones que respetan el patrón estacional: los meses de verano se predicen más cálidos y los de invierno más fríos, con intervalos de confianza que se amplían a mayor horizonte de predicción.
        </p>

        <h4>Comparación de modelos para la serie de Nueva York</h4>
        <table>
          <thead>
            <tr><th>Modelo</th><th>AIC</th><th>Residuos Ljung-Box</th></tr>
          </thead>
          <tbody>
            <tr><td>ARIMA(1,0,1)</td><td>Alto</td><td>Autocorrelación residual en lags estacionales</td></tr>
            <tr><td>SARIMA(0,1,1)×(0,1,1)[12]</td><td>Medio</td><td>Sin autocorrelación</td></tr>
            <tr><td>SARIMA(1,0,1)×(0,1,1)[12]</td><td>Menor</td><td>Sin autocorrelación — modelo seleccionado</td></tr>
          </tbody>
        </table>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-estructurados/ud2" className="text-sm text-slate-500 hover:text-blue-600">← UD2: Modelos ARIMA</Link>
        <div className="flex gap-3">
          <Link href="/datos-estructurados/ud3/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD3</Link>
          <Link href="/datos-estructurados/ud4" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">Siguiente: UD4 →</Link>
        </div>
      </div>
    </div>
  );
}
