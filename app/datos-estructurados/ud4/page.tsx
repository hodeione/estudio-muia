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
        <strong>Temas:</strong> 1. Regresión OLS con residuos correlacionados · 2. Test de autocorrelación residual · 3. Procedimiento de 3 pasos · 4. Modelo ARIMAX
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          En muchos problemas prácticos queremos relacionar una serie temporal Y_t con una o varias variables explicativas X_t mediante regresión lineal. Sin embargo, cuando los datos son series temporales, los <strong>residuos de la regresión suelen estar autocorrelacionados</strong>, violando uno de los supuestos fundamentales de los Mínimos Cuadrados Ordinarios (OLS).
        </p>
        <p>
          Ignorar esta autocorrelación tiene consecuencias graves: los estimadores OLS siguen siendo insesgados pero ya no son BLUE (Best Linear Unbiased Estimators), los errores estándar estimados son incorrectos (generalmente subestimados), y los tests t y F no son válidos. El resultado es una falsa sensación de precisión estadística que puede llevar a conclusiones erróneas.
        </p>

        <h2>Tema 1: El Problema de la Autocorrelación en Residuos</h2>

        <h3>1.1 Modelo de regresión con errores ST</h3>
        <p>
          Consideramos el modelo:
        </p>
        <div className="formula">Y_t = β₀ + β₁X₁_t + β₂X₂_t + ··· + β_kX_k_t + ε_t</div>
        <p>
          Si los errores ε_t siguen un proceso ARMA, los supuestos de OLS (errores i.i.d.) se violan. El error puede tener una estructura AR(1): ε_t = ρ·ε_{"{t-1}"} + a_t, donde a_t ~ WN(0, σ²).
        </p>

        <h3>1.2 Consecuencias de ignorar la autocorrelación</h3>
        <ul>
          <li><strong>Estimadores β insesgados</strong> pero ineficientes</li>
          <li><strong>Errores estándar subestimados:</strong> los t-ratios están inflados artificialmente</li>
          <li><strong>Tests F no válidos:</strong> podemos rechazar H₀ cuando es cierta (error tipo I inflado)</li>
          <li><strong>Intervalos de confianza demasiado estrechos:</strong> sobreestimamos la precisión</li>
          <li><strong>R² sobreestimado</strong> si no se corrige correctamente</li>
        </ul>

        <h3>1.3 Test de Durbin-Watson</h3>
        <p>
          El <strong>test de Durbin-Watson</strong> detecta autocorrelación de primer orden (AR(1)) en los residuos:
        </p>
        <div className="formula">DW = Σ(ê_t − ê_{"{t-1}"})² / Σê_t²  ≈  2(1 − ρ̂)</div>
        <p>
          Donde ρ̂ es la autocorrelación muestral de primer orden. El estadístico DW toma valores en [0, 4]:
        </p>
        <ul>
          <li><strong>DW ≈ 2:</strong> sin autocorrelación (ρ ≈ 0)</li>
          <li><strong>DW &lt; 2:</strong> autocorrelación positiva (ρ &gt; 0)</li>
          <li><strong>DW &gt; 2:</strong> autocorrelación negativa (ρ &lt; 0)</li>
        </ul>
        <p>
          También se usa el <strong>test de Ljung-Box</strong> sobre los residuos para detectar autocorrelación en múltiples retardos simultáneamente.
        </p>

        <h2>Tema 2: Procedimiento de 3 Pasos</h2>
        <p>
          La solución estándar para regresión con errores de series temporales es un <strong>procedimiento iterativo de 3 pasos</strong>:
        </p>

        <h3>Paso 1: Ajustar el modelo de regresión OLS</h3>
        <p>
          Se estima el modelo de regresión por OLS obteniendo los residuos ê_t:
        </p>
        <div className="formula">ê_t = Y_t − β̂₀ − β̂₁X₁_t − ··· − β̂_kX_k_t</div>
        <p>
          A continuación se verifica si los residuos presentan autocorrelación mediante el test de Durbin-Watson y/o el ACF de los residuos.
        </p>

        <h3>Paso 2: Modelar la estructura de los errores con ARIMA</h3>
        <p>
          Si se detecta autocorrelación, se analiza la estructura del proceso de error usando la metodología Box-Jenkins sobre los residuos ê_t:
        </p>
        <ul>
          <li>Examinar ACF y PACF de ê_t para identificar el orden del proceso ARIMA</li>
          <li>Si la ACF decae y la PACF se corta tras lag 1 → errores AR(1)</li>
          <li>Si la PACF decae y la ACF se corta tras lag 1 → errores MA(1)</li>
        </ul>

        <h3>Paso 3: Estimación conjunta por Máxima Verosimilitud (MLE)</h3>
        <p>
          Se estima el modelo completo de forma <strong>conjunta</strong> por MLE, estimando simultáneamente los parámetros de regresión β y los parámetros del proceso de error φ, θ:
        </p>
        <div className="formula">Y_t = β₀ + β₁X_t + ε_t, donde ε_t sigue ARIMA(p,d,q)</div>
        <p>
          La estimación conjunta es más eficiente que la estimación en dos etapas (Cochrane-Orcutt), especialmente cuando los parámetros AR/MA son grandes.
        </p>

        <h2>Tema 3: Caso Práctico — Regresión entre Tasas de Cambio</h2>

        <h3>3.1 Descripción del problema</h3>
        <p>
          Se estudia la relación lineal entre dos tasas de cambio de divisas. El modelo de regresión teórico es:
        </p>
        <div className="formula">c_{"{3,t}"} = β₀ + β₁ · c_{"{1,t}"} + ε_t</div>
        <p>
          donde c_{"{3,t}"} y c_{"{1,t}"} son series de rendimientos de dos pares de divisas.
        </p>

        <h3>3.2 Diagnóstico de residuos OLS</h3>
        <p>
          Tras el ajuste OLS inicial, el análisis de residuos revela:
        </p>
        <ul>
          <li>La ACF de los residuos muestra un pico significativo en el lag 1</li>
          <li>La PACF decae geométricamente</li>
          <li>→ Sugiere estructura MA(1) en los errores</li>
        </ul>

        <h3>3.3 Modelo final estimado por MLE</h3>
        <p>
          El modelo final estimado de forma conjunta es:
        </p>
        <div className="formula">c_{"{3,t}"} = 0.794 · c_{"{1,t}"} + e_t</div>
        <div className="formula">e_t = a_t + 0.1823 · a_{"{t-1}"}</div>
        <p>
          donde a_t ~ WN(0, σ²). La interpretación es:
        </p>
        <ul>
          <li>β₁ = 0.794: cada unidad adicional en c₁ se asocia con 0.794 unidades en c₃</li>
          <li>θ₁ = 0.1823: el choque del periodo anterior tiene un efecto positivo de 0.18 sobre el error actual</li>
        </ul>

        <h3>3.4 Validación del modelo</h3>
        <p>
          El test de Ljung-Box sobre los residuos del modelo conjunto muestra un p-valor &gt; 0.05: los residuos a_t son Ruido Blanco, confirmando que el modelo captura adecuadamente la estructura de dependencia.
        </p>

        <h2>Tema 4: Modelo ARIMAX</h2>

        <h3>4.1 Definición</h3>
        <p>
          El modelo <strong>ARIMAX</strong> (ARIMA with eXogenous variables) es una generalización natural que incorpora variables explicativas externas (exógenas) dentro de un modelo ARIMA:
        </p>
        <div className="formula">φ(B)·Δ^d·Y_t = β₁X_{"{1,t}"} + ··· + β_kX_{"{k,t}"} + θ(B)·ε_t</div>
        <p>
          También conocido como modelo de <strong>función de transferencia</strong> cuando el efecto de X sobre Y puede tener retardos dinámicos.
        </p>

        <h3>4.2 Ventajas del ARIMAX</h3>
        <ul>
          <li>Combina el poder predictivo de variables externas con la modelización de la estructura temporal</li>
          <li>Los coeficientes β tienen interpretación causal (bajo condiciones de exogeneidad)</li>
          <li>Corrige la inferencia incorrecta de OLS en presencia de autocorrelación</li>
          <li>Es la base de los modelos VAR (Vector Autoregression) para sistemas multivariantes</li>
        </ul>

        <h3>4.3 Comparación de enfoques</h3>
        <table>
          <thead>
            <tr><th>Enfoque</th><th>Trata autocorrelación</th><th>Variables externas</th><th>Eficiencia</th></tr>
          </thead>
          <tbody>
            <tr><td>OLS clásico</td><td>No</td><td>Sí</td><td>Baja (si hay autocorrelación)</td></tr>
            <tr><td>Procedimiento 3 pasos</td><td>Sí</td><td>Sí</td><td>Buena</td></tr>
            <tr><td>ARIMAX (MLE conjunto)</td><td>Sí</td><td>Sí</td><td>Óptima</td></tr>
            <tr><td>ARIMA puro</td><td>Sí</td><td>No</td><td>Óptima (sin variables externas)</td></tr>
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
