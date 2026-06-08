import Link from "next/link";

export default function UD2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-estructurados" className="text-sm text-blue-600 hover:underline">← Datos Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">2</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD2: Modelos ARIMA y Metodología Box-Jenkins</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-estructurados/ud1" className="text-sm text-slate-500 hover:text-blue-600">← UD1</Link>
          <Link href="/datos-estructurados/ud3" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD3 →</Link>
          <Link href="/datos-estructurados/ud2/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
        <strong>Temas:</strong> 1. Modelos AR(p), MA(q) y ARMA(p,q) · 2. ARIMA(p,d,q) y diferenciación · 3. Metodología Box-Jenkins · 4. Criterios de selección AIC/BIC
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Los modelos <strong>ARIMA</strong> (Autoregressive Integrated Moving Average) son la familia de modelos más utilizada para el análisis y predicción de series temporales univariantes. Desarrollados y sistematizados por Box y Jenkins en 1970, ofrecen un marco flexible para modelar una amplia variedad de patrones temporales combinando componentes autorregresivos, de media móvil y de diferenciación.
        </p>

        <h2>Tema 1: Modelos AR(p), MA(q) y ARMA(p,q)</h2>

        <h3>1.1 Modelo AR(p) — Autorregresivo de orden p</h3>
        <p>
          El modelo <strong>AR(p)</strong> expresa Y_t como combinación lineal de sus p valores pasados más un término de error:
        </p>
        <div className="formula">Y_t = φ₁Y_{"{t-1}"} + φ₂Y_{"{t-2}"} + ··· + φ_pY_{"{t-p}"} + ε_t</div>
        <p>
          donde ε_t es Ruido Blanco. Usando el <strong>operador de retardo</strong> B (donde B·Y_t = Y_{"{t-1}"}), se puede escribir de forma compacta:
        </p>
        <div className="formula">φ(B)·Y_t = ε_t, donde φ(B) = 1 − φ₁B − φ₂B² − ··· − φ_pBᵖ</div>
        <p>
          El modelo es estacionario si todas las raíces del polinomio φ(B) = 0 están fuera del círculo unitario (en módulo &gt; 1).
        </p>
        <p><strong>Patrón ACF/PACF del AR(p):</strong> ACF decae gradualmente; PACF se corta abruptamente tras el lag p.</p>

        <h3>1.2 Modelo MA(q) — Media Móvil de orden q</h3>
        <p>
          El modelo <strong>MA(q)</strong> expresa Y_t como combinación lineal de los q errores pasados:
        </p>
        <div className="formula">Y_t = ε_t − θ₁ε_{"{t-1}"} − θ₂ε_{"{t-2}"} − ··· − θ_qε_{"{t-q}"}</div>
        <p>
          En notación compacta: Y_t = θ(B)·ε_t, donde θ(B) = 1 − θ₁B − θ₂B² − ··· − θ_qBq.
        </p>
        <p>
          El MA(q) es siempre estacionario (para cualquier valor de los parámetros). Es <strong>invertible</strong> si las raíces de θ(B) = 0 están fuera del círculo unitario, condición necesaria para obtener una representación AR(∞) del proceso.
        </p>
        <p><strong>Patrón ACF/PACF del MA(q):</strong> ACF se corta abruptamente tras el lag q; PACF decae gradualmente.</p>

        <h3>1.3 Modelo ARMA(p,q)</h3>
        <p>
          El modelo <strong>ARMA(p,q)</strong> combina componentes AR y MA:
        </p>
        <div className="formula">φ(B)·Y_t = θ(B)·ε_t</div>
        <p>
          Es decir: Y_t = φ₁Y_{"{t-1}"} + ··· + φ_pY_{"{t-p}"} + ε_t − θ₁ε_{"{t-1}"} − ··· − θ_qε_{"{t-q}"}
        </p>
        <p>
          El ARMA(p,q) es más parsimonioso que un AR(p) o MA(q) puros: a menudo se puede modelar una dinámica compleja con pocos parámetros. Requiere estacionariedad (condición sobre φ) e invertibilidad (condición sobre θ).
        </p>
        <p><strong>Patrón ACF/PACF del ARMA(p,q):</strong> Ambas decaen gradualmente. La identificación del orden exacto es más difícil y se apoya en criterios de información.</p>

        <h2>Tema 2: ARIMA(p,d,q) y Diferenciación</h2>

        <h3>2.1 El problema de la no estacionariedad</h3>
        <p>
          Muchas series reales (precios, PIB, poblaciones) no son estacionarias: presentan tendencias o varianzas crecientes. Los modelos AR y ARMA solo son válidos para series estacionarias, por lo que es necesario transformar la serie antes de ajustar el modelo.
        </p>
        <p>
          La solución estándar es la <strong>diferenciación</strong>. La diferencia de primer orden elimina tendencias lineales:
        </p>
        <div className="formula">ΔY_t = Y_t − Y_{"{t-1}"} = (1 − B)·Y_t</div>
        <p>
          Si una sola diferenciación no es suficiente, se aplica dos veces (diferencia de segundo orden: Δ²Y_t), aunque en la práctica d = 1 cubre la mayoría de los casos.
        </p>

        <h3>2.2 Definición de ARIMA(p,d,q)</h3>
        <p>
          Un proceso Y_t es <strong>ARIMA(p,d,q)</strong> si la serie diferenciada d veces, W_t = Δ^d·Y_t, sigue un ARMA(p,q):
        </p>
        <div className="formula">φ(B)·Δ^d·Y_t = θ(B)·ε_t</div>
        <p>donde:</p>
        <ul>
          <li><strong>p</strong>: orden del componente autorregresivo</li>
          <li><strong>d</strong>: número de diferenciaciones necesarias para estacionarizar</li>
          <li><strong>q</strong>: orden del componente de media móvil</li>
        </ul>

        <h4>Casos especiales notables</h4>
        <table>
          <thead>
            <tr><th>Notación</th><th>Modelo</th></tr>
          </thead>
          <tbody>
            <tr><td>ARIMA(1,0,0)</td><td>AR(1)</td></tr>
            <tr><td>ARIMA(0,0,1)</td><td>MA(1)</td></tr>
            <tr><td>ARIMA(0,1,0)</td><td>Random Walk</td></tr>
            <tr><td>ARIMA(1,1,0)</td><td>AR(1) sobre primeras diferencias</td></tr>
            <tr><td>ARIMA(0,1,1)</td><td>Suavizado exponencial simple</td></tr>
          </tbody>
        </table>

        <h2>Tema 3: Metodología Box-Jenkins</h2>
        <p>
          La <strong>metodología Box-Jenkins</strong> es un procedimiento iterativo de 5 pasos para ajustar modelos ARIMA a series temporales reales. Es el estándar en la industria para el análisis de series temporales univariantes.
        </p>

        <h3>Paso 1: Visualización y Análisis Exploratorio (EDA)</h3>
        <p>
          Antes de modelar, se visualiza la serie temporal para identificar características cualitativas: tendencias, estacionalidad, cambios de nivel, outliers, varianza no constante. Si la varianza crece con el nivel, puede ser necesaria una transformación logarítmica: Y_t* = log(Y_t).
        </p>

        <h3>Paso 2: Identificación (Selección de p, d, q)</h3>
        <p>
          Se usa el <strong>test ADF</strong> para determinar el orden de integración d. A continuación, se examinan los correlogramas (ACF y PACF) de la serie diferenciada para proponer valores tentativos de p y q:
        </p>
        <ul>
          <li>PACF se corta tras lag p → componente AR(p)</li>
          <li>ACF se corta tras lag q → componente MA(q)</li>
          <li>Ambas decaen → ARMA(p,q)</li>
        </ul>

        <h3>Paso 3: Estimación de parámetros</h3>
        <p>
          Los parámetros φ₁,...,φ_p y θ₁,...,θ_q se estiman por <strong>Máxima Verosimilitud (MLE)</strong>. Para modelos AR puros también se puede usar mínimos cuadrados ordinarios (OLS). En la práctica se usan funciones como <code>auto.arima()</code> en R o <code>ARIMA()</code> de statsmodels en Python.
        </p>

        <h3>Paso 4: Diagnóstico</h3>
        <p>
          Se analizan los <strong>residuos</strong> ê_t del modelo ajustado. Si el modelo es correcto, los residuos deben comportarse como Ruido Blanco. Las herramientas de diagnóstico son:
        </p>
        <ul>
          <li><strong>Gráfico de residuos:</strong> no deben mostrar patrones sistemáticos</li>
          <li><strong>ACF de residuos:</strong> todas las autocorrelaciones deben ser estadísticamente nulas</li>
          <li><strong>Test de Ljung-Box:</strong> p-valor &gt; 0.05 confirma Ruido Blanco</li>
          <li><strong>Test de normalidad:</strong> Jarque-Bera para verificar normalidad de los residuos</li>
        </ul>
        <p>
          Si los residuos presentan autocorrelación, se vuelve al Paso 2 con un modelo revisado.
        </p>

        <h3>Paso 5: Predicción</h3>
        <p>
          Una vez validado el modelo, se generan predicciones h pasos hacia adelante con sus <strong>intervalos de confianza</strong>. El intervalo de predicción al 95% es:
        </p>
        <div className="formula">Ŷ_{"{T+h}"} ± 1.96 · σ_h</div>
        <p>
          donde σ_h es la desviación estándar del error de predicción h pasos adelante, que crece con h (mayor incertidumbre en el horizonte lejano).
        </p>

        <h2>Tema 4: Criterios de Selección AIC y BIC</h2>

        <p>
          Cuando hay varios modelos candidatos, se utilizan <strong>criterios de información</strong> para seleccionar el más parsimonioso (que equilibra bondad de ajuste y complejidad):
        </p>

        <h3>4.1 Criterio de Información de Akaike (AIC)</h3>
        <div className="formula">AIC = −2 · log(L̂) + 2k</div>
        <p>
          donde L̂ es la verosimilitud maximizada y k = p + q + 1 es el número de parámetros. Se penaliza la complejidad con 2k. Se selecciona el modelo con <strong>menor AIC</strong>.
        </p>

        <h3>4.2 Criterio de Información Bayesiano (BIC)</h3>
        <div className="formula">BIC = −2 · log(L̂) + k · log(n)</div>
        <p>
          El BIC usa una penalización más fuerte que el AIC (log(n) vs 2), lo que favorece modelos más simples. Asintóticamente consistente: selecciona el modelo verdadero con probabilidad 1 cuando n → ∞.
        </p>

        <h4>AIC vs BIC: ¿cuál usar?</h4>
        <table>
          <thead>
            <tr><th>Criterio</th><th>Penalización</th><th>Tendencia</th><th>Recomendado cuando</th></tr>
          </thead>
          <tbody>
            <tr><td>AIC</td><td>2k</td><td>Modelos más complejos</td><td>El objetivo es predecir</td></tr>
            <tr><td>BIC</td><td>k·log(n)</td><td>Modelos más simples</td><td>El objetivo es identificar el modelo verdadero</td></tr>
          </tbody>
        </table>

        <h3>4.3 AICc — AIC corregido para muestras pequeñas</h3>
        <div className="formula">AICc = AIC + 2k(k+1) / (n−k−1)</div>
        <p>
          El AICc es preferible cuando el tamaño muestral n es pequeño relativo al número de parámetros k. Converge al AIC cuando n → ∞.
        </p>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-estructurados/ud1" className="text-sm text-slate-500 hover:text-blue-600">← UD1: Series Temporales</Link>
        <div className="flex gap-3">
          <Link href="/datos-estructurados/ud2/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD2</Link>
          <Link href="/datos-estructurados/ud3" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">Siguiente: UD3 →</Link>
        </div>
      </div>
    </div>
  );
}
