import Link from "next/link";

export default function UD1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-estructurados" className="text-sm text-blue-600 hover:underline">← Datos Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">1</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD1: Introducción a las Series Temporales</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-estructurados/ud2" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD2 →</Link>
          <Link href="/datos-estructurados/ud1/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
        <strong>Temas:</strong> 1. Concepto de serie temporal · 2. Proceso estocástico y estacionariedad · 3. ACF, PACF y Ruido Blanco · 4. Modelos AR(1) y AR(2)
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Una <strong>serie temporal</strong> es una sucesión de valores Y₁, Y₂, ..., Y_T medidos en instantes de tiempo t = 1, 2, ..., T equiespaciados. A diferencia de los datos transversales, en las series temporales el orden importa: cada observación tiene un lugar fijo en el tiempo y el análisis explota las relaciones entre valores pasados y futuros.
        </p>
        <p>
          Las series temporales aparecen en multitud de ámbitos: precios de acciones, temperaturas diarias, ventas mensuales, consumo energético horario o número de usuarios activos. El objetivo principal del análisis es comprender la estructura subyacente de la serie y utilizarla para hacer predicciones.
        </p>

        <h2>Tema 1: Proceso Estocástico</h2>

        <h3>1.1 Definición formal</h3>
        <p>
          Formalmente, una serie temporal es la <strong>realización observada</strong> de un <strong>proceso estocástico</strong> {"{Y_t : t ∈ T}"}. Un proceso estocástico es una familia de variables aleatorias indexadas en el tiempo: para cada instante t, Y_t es una variable aleatoria. Lo que observamos en la práctica es una única trayectoria (realización) de ese proceso.
        </p>
        <p>
          El reto estadístico fundamental es que, a diferencia de los datos i.i.d., solo disponemos de <em>una</em> realización del proceso. Para hacer inferencia estadística válida necesitamos suponer ciertas propiedades de regularidad sobre cómo evoluciona el proceso en el tiempo.
        </p>

        <h2>Tema 2: Estacionariedad</h2>

        <h3>2.1 Estacionariedad débil (covarianza-estacionaria)</h3>
        <p>
          Un proceso {"{Y_t}"} es <strong>débilmente estacionario</strong> (o estacionario en covarianza) si cumple tres condiciones:
        </p>
        <ol>
          <li><strong>Media constante:</strong> E[Y_t] = μ para todo t</li>
          <li><strong>Varianza finita y constante:</strong> Var[Y_t] = σ² &lt; ∞ para todo t</li>
          <li><strong>Autocovarianza solo depende del retardo:</strong> Cov[Y_t, Y_{"{t+s}"}] = γ_s solo depende del desfase s, no del instante t</li>
        </ol>
        <p>
          Intuitivamente, la estacionariedad débil significa que las propiedades estadísticas del proceso no cambian a lo largo del tiempo: la serie fluctúa alrededor de una media fija con una dispersión constante.
        </p>

        <h3>2.2 Por qué importa la estacionariedad</h3>
        <p>
          La mayoría de los modelos clásicos de series temporales (AR, MA, ARIMA) requieren estacionariedad para que la estimación y predicción sean válidas. Una serie no estacionaria con tendencia o varianza creciente viola los supuestos del modelo y produce predicciones poco fiables.
        </p>
        <p>
          La solución habitual es la <strong>diferenciación</strong>: si Y_t no es estacionaria, tomamos la diferencia de primer orden ΔY_t = Y_t − Y_{"{t−1}"}. Si con una diferenciación es suficiente, se dice que Y_t es I(1) (integrada de orden 1).
        </p>

        <h3>2.3 Test ADF (Augmented Dickey-Fuller)</h3>
        <p>
          Para contrastar formalmente si una serie tiene una raíz unitaria (es no estacionaria) se usa el <strong>test ADF</strong>. La hipótesis nula es H₀: existe raíz unitaria (no estacionaria). Si el p-valor es menor que el nivel de significación (p &lt; 0.05), rechazamos H₀ y concluimos que la serie es estacionaria.
        </p>

        <h2>Tema 3: ACF, PACF y Ruido Blanco</h2>

        <h3>3.1 Función de Autocorrelación (ACF)</h3>
        <p>
          La <strong>Función de Autocorrelación</strong> (ACF) mide la correlación lineal entre Y_t e Y_{"{t+s}"} en función del retardo s:
        </p>
        <div className="formula">ρ(s) = Cov[Y_t, Y_{"{t+s}"}] / Var[Y_t] = γ_s / γ_0</div>
        <p>
          La ACF toma valores en [−1, 1]. Un valor ρ(s) próximo a ±1 indica fuerte dependencia entre observaciones separadas s periodos. La gráfica de ρ(s) frente a s se llama <em>correlograma</em> y es una herramienta clave para identificar el tipo de modelo.
        </p>

        <h3>3.2 Función de Autocorrelación Parcial (PACF)</h3>
        <p>
          La <strong>PACF</strong> mide la correlación entre Y_t e Y_{"{t+s}"} eliminando el efecto de los retardos intermedios. Es especialmente útil para identificar el orden p de un modelo AR: en un AR(p), la PACF se corta abruptamente después del retardo p (es cero para s &gt; p).
        </p>

        <h3>3.3 Ruido Blanco</h3>
        <p>
          Un proceso {"{ε_t}"} es <strong>Ruido Blanco</strong> (White Noise) si satisface:
        </p>
        <ul>
          <li>E[ε_t] = 0 (media cero)</li>
          <li>Var[ε_t] = σ² &lt; ∞ (varianza constante)</li>
          <li>Cov[ε_t, ε_s] = 0 para t ≠ s (no correlación)</li>
        </ul>
        <p>
          El Ruido Blanco es estacionario y su ACF es cero para todos los retardos s ≠ 0. Es el bloque fundamental sobre el que se construyen todos los modelos ARIMA: los residuos de un buen modelo deben comportarse como Ruido Blanco.
        </p>

        <h4>Test de Ljung-Box</h4>
        <p>
          Para verificar que los residuos son Ruido Blanco se usa el <strong>test de Ljung-Box</strong>: H₀: las primeras m autocorrelaciones son todas cero. Un p-valor elevado (p &gt; 0.05) indica que no hay autocorrelación residual, lo que valida el modelo.
        </p>

        <h2>Tema 4: Modelos Autorregresivos</h2>

        <h3>4.1 Modelo AR(1)</h3>
        <p>
          El modelo <strong>AR(1)</strong> (Autorregresivo de orden 1) expresa Y_t como función lineal de su valor inmediatamente anterior más un término de error:
        </p>
        <div className="formula">Y_t = φ · Y_{"{t-1}"} + ε_t</div>
        <p>donde ε_t es Ruido Blanco con varianza σ².</p>

        <h4>Propiedades del AR(1)</h4>
        <ul>
          <li><strong>Estacionariedad:</strong> El AR(1) es estacionario si y solo si |φ| &lt; 1. Si φ = 1, obtenemos un <em>random walk</em> (no estacionario).</li>
          <li><strong>Media:</strong> E[Y_t] = 0 (si la constante es cero)</li>
          <li><strong>Varianza:</strong> Var[Y_t] = σ² / (1 − φ²)</li>
          <li><strong>ACF:</strong> ρ(s) = φˢ — decae geométricamente hacia cero</li>
          <li><strong>PACF:</strong> φ(1,1) = φ, φ(s,s) = 0 para s &gt; 1 — se corta abruptamente en el lag 1</li>
        </ul>

        <h4>Interpretación de φ</h4>
        <table>
          <thead>
            <tr><th>Valor de φ</th><th>Comportamiento</th></tr>
          </thead>
          <tbody>
            <tr><td>0 &lt; φ &lt; 1</td><td>Persistencia positiva, decaimiento hacia la media</td></tr>
            <tr><td>−1 &lt; φ &lt; 0</td><td>Oscilación amortiguada alrededor de la media</td></tr>
            <tr><td>φ = 1</td><td>Random walk (no estacionario, raíz unitaria)</td></tr>
            <tr><td>|φ| &gt; 1</td><td>Proceso explosivo (inestable)</td></tr>
          </tbody>
        </table>

        <h3>4.2 Modelo AR(2)</h3>
        <p>
          El modelo <strong>AR(2)</strong> incluye los dos últimos retardos:
        </p>
        <div className="formula">Y_t = φ₁ · Y_{"{t-1}"} + φ₂ · Y_{"{t-2}"} + ε_t</div>

        <h4>Condiciones de estacionariedad para AR(2)</h4>
        <p>El AR(2) es estacionario si y solo si los parámetros satisfacen simultáneamente las tres condiciones:</p>
        <ul>
          <li>φ₁ + φ₂ &lt; 1</li>
          <li>φ₂ − φ₁ &lt; 1</li>
          <li>−1 &lt; φ₂ &lt; 1</li>
        </ul>
        <p>
          El AR(2) puede generar comportamientos más ricos que el AR(1): ciclos amortiguados, oscilaciones quasi-periódicas, etc., dependiendo de si las raíces del polinomio característico son reales o complejas.
        </p>

        <h3>4.3 Patrones ACF/PACF para identificación del modelo</h3>
        <table>
          <thead>
            <tr><th>Modelo</th><th>ACF</th><th>PACF</th></tr>
          </thead>
          <tbody>
            <tr><td>AR(p)</td><td>Decae gradualmente (geométrico u oscilante)</td><td>Se corta tras el lag p</td></tr>
            <tr><td>MA(q)</td><td>Se corta tras el lag q</td><td>Decae gradualmente</td></tr>
            <tr><td>ARMA(p,q)</td><td>Decae gradualmente</td><td>Decae gradualmente</td></tr>
            <tr><td>Ruido Blanco</td><td>Todos ≈ 0</td><td>Todos ≈ 0</td></tr>
          </tbody>
        </table>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-estructurados" className="text-sm text-slate-500 hover:text-blue-600">← Volver a Datos Estructurados</Link>
        <div className="flex gap-3">
          <Link href="/datos-estructurados/ud1/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD1</Link>
          <Link href="/datos-estructurados/ud2" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">Siguiente: UD2 →</Link>
        </div>
      </div>
    </div>
  );
}
