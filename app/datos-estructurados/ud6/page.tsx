import Link from "next/link";

export default function UD6() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-estructurados" className="text-sm text-blue-600 hover:underline">← Datos Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">6</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD6: Modelos GARCH y ARCH</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-estructurados/ud5" className="text-sm text-slate-500 hover:text-blue-600">← UD5</Link>
          <Link href="/datos-estructurados/ud7" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD7 →</Link>
          <Link href="/datos-estructurados/ud6/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
        <strong>Temas:</strong> 1. Clustering de volatilidad · 2. Modelo ARCH(q) · 3. GARCH(p,q) y GARCH(1,1) · 4. Estimación y diagnóstico · 5. Caso práctico EurUSD
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Los modelos ARIMA asumen que la varianza de los errores es constante (homocedasticidad). Sin embargo, en series financieras como precios de acciones, tipos de cambio o índices bursátiles, la varianza es claramente <strong>no constante en el tiempo</strong>: periodos de alta volatilidad se alternan con periodos de calma.
        </p>
        <p>
          Los modelos <strong>ARCH</strong> (Autoregressive Conditional Heteroskedasticity), propuestos por Engle en 1982, y su extensión <strong>GARCH</strong> (Generalized ARCH), propuesta por Bollerslev en 1986, modelan esta volatilidad condicional. El premio Nobel de Economía 2003 se concedió parcialmente a Engle por este trabajo.
        </p>

        <h2>Tema 1: Clustering de Volatilidad</h2>

        <h3>1.1 ¿Qué es el clustering de volatilidad?</h3>
        <p>
          El <strong>clustering de volatilidad</strong> (volatility clustering) es el fenómeno empírico por el cual los rendimientos de activos financieros exhiben periodos de alta volatilidad seguidos de periodos de baja volatilidad. Es decir, los grandes movimientos tienden a ser seguidos por grandes movimientos, y los pequeños por pequeños.
        </p>
        <p>
          Formalmente, aunque los rendimientos r_t pueden ser no correlacionados (ACF ≈ 0), sus cuadrados r_t² o sus valores absolutos |r_t| sí están correlacionados: ACF(r_t²) ≠ 0. Esto indica que la varianza condicional varía en el tiempo.
        </p>

        <h3>1.2 Evidencia empírica</h3>
        <ul>
          <li>Durante la crisis financiera de 2008, la volatilidad del S&P 500 se multiplicó por 10 respecto a periodos normales</li>
          <li>El índice VIX (volatilidad implícita del S&P 500) fluctúa entre 10 (calma) y 80+ (crisis)</li>
          <li>Las distribuciones de rendimientos tienen colas más gruesas que la normal (leptocurtosis)</li>
        </ul>

        <h2>Tema 2: Modelo ARCH(q)</h2>

        <h3>2.1 Definición</h3>
        <p>
          El modelo <strong>ARCH(q)</strong> modela la varianza condicional como función de los q cuadrados de errores pasados:
        </p>
        <div className="formula">σ²_t = ω + α₁ε²_{"{t-1}"} + α₂ε²_{"{t-2}"} + ··· + α_qε²_{"{t-q}"} = ω + Σᵢ αᵢ ε²_{"{t-i}"}</div>
        <p>donde:</p>
        <ul>
          <li>σ²_t es la varianza condicional en el instante t (dada la información pasada)</li>
          <li>ε_t = σ_t · z_t, con z_t ~ N(0,1) i.i.d.</li>
          <li>ω &gt; 0: constante (varianza incondicional de largo plazo)</li>
          <li>αᵢ ≥ 0: coeficientes del efecto ARCH</li>
        </ul>

        <h3>2.2 Condición de estacionariedad ARCH(q)</h3>
        <div className="formula">Σᵢ αᵢ &lt; 1</div>
        <p>
          Si esta condición se cumple, la varianza incondicional es finita: σ² = ω / (1 − Σαᵢ).
        </p>

        <h3>2.3 Test de efectos ARCH</h3>
        <p>
          Se puede detectar si una serie presenta efectos ARCH usando el <strong>test de Engle</strong> (test LM): H₀: no hay efectos ARCH. Se rechaza H₀ si los cuadrados de los residuos presentan autocorrelación significativa.
        </p>

        <h2>Tema 3: Modelo GARCH(p,q)</h2>

        <h3>3.1 Motivación: ARCH requiere muchos parámetros</h3>
        <p>
          El ARCH(q) necesita muchos retardos q para capturar la persistencia de la volatilidad, lo que resulta en muchos parámetros y posibles problemas de estimación. El GARCH soluciona esto añadiendo términos de varianza condicional pasada.
        </p>

        <h3>3.2 Definición GARCH(p,q)</h3>
        <p>
          El modelo <strong>GARCH(p,q)</strong> es:
        </p>
        <div className="formula">σ²_t = ω + Σᵢ₌₁ᵖ αᵢ ε²_{"{t-i}"} + Σⱼ₌₁ᵍ βⱼ σ²_{"{t-j}"}</div>
        <p>donde:</p>
        <ul>
          <li>Los términos αᵢε²_{"{t-i}"}: efecto de los "choques" pasados (noticias pasadas)</li>
          <li>Los términos βⱼσ²_{"{t-j}"}: persistencia de la volatilidad pasada</li>
        </ul>

        <h3>3.3 El modelo GARCH(1,1) — el más utilizado</h3>
        <p>
          El <strong>GARCH(1,1)</strong> con un solo retardo de cada componente es el modelo más popular en la práctica:
        </p>
        <div className="formula">σ²_t = ω + α · ε²_{"{t-1}"} + β · σ²_{"{t-1}"}</div>
        <ul>
          <li><strong>ω &gt; 0:</strong> varianza de largo plazo (constante)</li>
          <li><strong>α ≥ 0:</strong> "news coefficient" — cómo reacciona la volatilidad a nuevos choques</li>
          <li><strong>β ≥ 0:</strong> "persistence coefficient" — inercia de la volatilidad</li>
        </ul>

        <h4>Condición de estacionariedad GARCH(1,1)</h4>
        <div className="formula">α + β &lt; 1</div>
        <p>
          Si α + β &lt; 1, la varianza incondicional (de largo plazo) es:
        </p>
        <div className="formula">σ² = ω / (1 − α − β)</div>
        <p>
          Cuando α + β se acerca a 1, la volatilidad es muy persistente (IGARCH: Integrated GARCH).
        </p>

        <h4>Interpretación del GARCH(1,1)</h4>
        <table>
          <thead>
            <tr><th>α grande</th><th>La volatilidad reacciona fuertemente a nuevos choques (spiky)</th></tr>
          </thead>
          <tbody>
            <tr><td>β grande</td><td>La volatilidad se ajusta lentamente (alta persistencia)</td></tr>
            <tr><td>α+β próximo a 1</td><td>Volatilidad muy persistente (shocks duran mucho)</td></tr>
            <tr><td>α+β pequeño</td><td>Volatilidad revierte rápidamente a la media</td></tr>
          </tbody>
        </table>

        <h2>Tema 4: Estimación y Diagnóstico</h2>

        <h3>4.1 Estimación por Máxima Verosimilitud</h3>
        <p>
          Los modelos GARCH se estiman por <strong>MLE</strong>. Asumiendo errores normales, la log-verosimilitud es:
        </p>
        <div className="formula">log L = −(T/2)·log(2π) − (1/2)·Σ_t [log(σ²_t) + ε²_t/σ²_t]</div>
        <p>
          En Python se usa la librería <code>arch</code>: <code>model = arch_model(returns, vol='Garch', p=1, q=1)</code>.
        </p>

        <h3>4.2 Diagnóstico del modelo GARCH</h3>
        <p>
          Después de ajustar el modelo, los residuos estandarizados z_t = ε_t / σ_t deben ser:
        </p>
        <ul>
          <li>No correlacionados (ACF de z_t ≈ 0)</li>
          <li>Sin efectos ARCH residuales (ACF de z_t² ≈ 0)</li>
          <li>Con distribución aproximadamente normal o t-Student</li>
        </ul>

        <h2>Tema 5: Caso Práctico — Tipo de Cambio EurUSD</h2>

        <h3>5.1 Descripción de los datos</h3>
        <p>
          Se analiza la serie de <strong>rendimientos diarios del tipo de cambio Euro/USD</strong>. Los rendimientos log se calculan como r_t = log(P_t/P_{"{t-1}"}) ≈ (P_t − P_{"{t-1}"})/P_{"{t-1}"}.
        </p>
        <p>
          El análisis exploratorio revela: media ≈ 0, ACF de r_t sin autocorrelación significativa, pero ACF de r_t² con picos significativos → presencia de efectos ARCH.
        </p>

        <h3>5.2 Resultados del GARCH(1,1) en EurUSD</h3>
        <p>
          La estimación MLE del GARCH(1,1) produce los siguientes parámetros típicos:
        </p>
        <table>
          <thead>
            <tr><th>Parámetro</th><th>Estimación</th><th>Interpretación</th></tr>
          </thead>
          <tbody>
            <tr><td>ω</td><td>~0.000002</td><td>Varianza de largo plazo muy pequeña</td></tr>
            <tr><td>α</td><td>~0.09</td><td>Reacción moderada a nuevos choques</td></tr>
            <tr><td>β</td><td>~0.90</td><td>Alta persistencia de la volatilidad</td></tr>
            <tr><td>α+β</td><td>~0.99</td><td>Casi IGARCH, volatilidad muy persistente</td></tr>
          </tbody>
        </table>

        <h3>5.3 Predicción de volatilidad</h3>
        <p>
          El GARCH(1,1) genera predicciones de la volatilidad condicional futura. La predicción h pasos adelante converge a la varianza incondicional σ² = ω/(1−α−β) a medida que h crece (reversión a la media), a una tasa determinada por α+β.
        </p>
        <div className="formula">σ²_{"{t+h|t}"} = σ² + (α+β)ʰ · (σ²_t − σ²)</div>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-estructurados/ud5" className="text-sm text-slate-500 hover:text-blue-600">← UD5: Facebook Prophet</Link>
        <div className="flex gap-3">
          <Link href="/datos-estructurados/ud6/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD6</Link>
          <Link href="/datos-estructurados/ud7" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">Siguiente: UD7 →</Link>
        </div>
      </div>
    </div>
  );
}
