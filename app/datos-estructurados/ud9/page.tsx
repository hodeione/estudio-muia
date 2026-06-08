import Link from "next/link";

export default function UD9() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-estructurados" className="text-sm text-blue-600 hover:underline">← Datos Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">9</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD9: VaR y Expected Shortfall</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-estructurados/ud8" className="text-sm text-slate-500 hover:text-blue-600">← UD8</Link>
          <Link href="/datos-estructurados/ud9/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
        <strong>Temas:</strong> 1. Risk Management y categorías de riesgo · 2. Value at Risk · 3. EWMA y volatilidad condicional · 4. GARCH para VaR · 5. Expected Shortfall y backtesting
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Tras las recientes crisis financieras y el incremento en la complejidad de los mercados, <strong>medir el riesgo</strong> se ha convertido en uno de los asuntos más importantes del sector financiero. Los supervisores han aumentado los controles de los bancos para asegurarse de que disponen de suficiente capital para sobrevivir a los mercados deficientes.
        </p>
        <p>
          Para calcular el capital requerido se han definido medidas de riesgo que resumen el riesgo total de una entidad con un único número. Durante años la medida más utilizada ha sido el <strong>Value-at-Risk (VaR)</strong>, cuyas razones de éxito son que el concepto es muy fácil de entender y que se puede realizar un backtesting de manera sencilla.
        </p>

        <h2>Tema 1: Risk Management — Categorías de Riesgo</h2>
        <p>
          Las instituciones financieras enfrentan múltiples <strong>categorías de riesgo</strong> que pueden afectar su solvencia, liquidez y rentabilidad:
        </p>
        <ul>
          <li>
            <strong>Market Risk (Riesgo de Mercado):</strong> riesgo de pérdida debido a movimientos adversos en variables de mercado como tasas de interés, tipos de cambio, precios de acciones o commodities. Es el principal tipo de riesgo que mide el VaR.
          </li>
          <li>
            <strong>Credit Risk (Riesgo de Crédito):</strong> riesgo de que una contraparte no cumpla con sus obligaciones contractuales. Se manifiesta en impagos de préstamos o incumplimientos de bonos corporativos.
          </li>
          <li>
            <strong>Operational Risk (Riesgo Operacional):</strong> pérdida por fallos internos en procesos, personas, sistemas o eventos externos (fraudes, errores humanos, ciberataques).
          </li>
          <li>
            <strong>Model Risk (Riesgo de Modelo):</strong> riesgo de que los modelos utilizados para medir o gestionar los otros riesgos sean incorrectos o estén mal calibrados. Ejemplo: subestimar el riesgo en un modelo VaR porque no captura adecuadamente la cola de la distribución.
          </li>
        </ul>

        <h2>Tema 2: Value at Risk (VaR)</h2>

        <h3>2.1 Definición formal</h3>
        <p>
          El <strong>VaR</strong> se define como un valor límite tal que la probabilidad de que la pérdida de una cartera sobre un horizonte temporal exceda ese valor sea el nivel de probabilidad dado α:
        </p>
        <div className="formula">P(Pérdida &gt; VaR_α) = α</div>
        <p>
          O equivalentemente: con una probabilidad (1 − α) el propietario de esa acción experimentará una pérdida no superior al VaR.
        </p>
        <div className="formula">VaR_α = Inversión inicial × Percentil_α</div>

        <h3>2.2 Ejemplo numérico</h3>
        <p>
          Inviertes 10.000€ en acciones. La inversión tiene una rentabilidad mensual esperada del 5% (μ=0.05) con desviación estándar de 0.10 (σ=0.10). Asumiendo distribución normal:
        </p>
        <ul>
          <li>q(0.05) = μ + σ · z₀.₀₅ = 0.05 + 0.10 · (−1.645) = −0.1145</li>
          <li>q(0.01) = μ + σ · z₀.₀₁ = 0.05 + 0.10 · (−2.326) = −0.1826</li>
        </ul>
        <table>
          <thead>
            <tr><th>Nivel</th><th>Percentil</th><th>VaR (10.000€)</th><th>Interpretación</th></tr>
          </thead>
          <tbody>
            <tr><td>5% VaR</td><td>−0.1145</td><td>−1.144,85€</td><td>Con 5% de probabilidad, la pérdida será 1.144,85€ o más</td></tr>
            <tr><td>1% VaR</td><td>−0.1826</td><td>−1.826,35€</td><td>Con 1% de probabilidad, la pérdida será 1.826,35€ o más</td></tr>
          </tbody>
        </table>

        <h3>2.3 Delta Normal Approach</h3>
        <p>
          La fórmula estándar para el VaR bajo normalidad es:
        </p>
        <div className="formula">VaR(X) = μ + σ · N⁻¹(X)</div>
        <div className="formula">VaR^α_t = μ_t + z_α · σ_t</div>
        <p>
          donde z_α es el cuantil de la distribución normal estándar (z₀.₉₉ ≈ 2.33 para VaR al 99%) y σ_t es la volatilidad en el instante t. El problema clave es cómo estimar σ_t.
        </p>

        <h3>2.4 Usos del VaR</h3>
        <ul>
          <li>Control financiero: medida de control para no sobrepasar niveles de riesgo</li>
          <li>Comunicación de riesgo de productos financieros</li>
          <li>Cálculo del capital regulatorio según los requerimientos de Basilea II/III</li>
        </ul>

        <h2>Tema 3: Del VaR Histórico a la Volatilidad Condicional — EWMA</h2>

        <h3>3.1 El problema de la varianza incondicional</h3>
        <p>
          Si se usa la varianza histórica constante (incondicional), se comete el error de dar el mismo peso a todos los datos históricos. Esto lleva a <strong>subestimar el riesgo en tiempos turbulentos</strong> y sobrestimarlo en tiempos tranquilos, porque la volatilidad del mercado varía en el tiempo.
        </p>

        <h3>3.2 Modelo EWMA (Exponentially Weighted Moving Average)</h3>
        <p>
          Una primera solución es dar más peso a los eventos recientes usando el modelo <strong>EWMA</strong>, propuesto por RiskMetrics con λ=0.94:
        </p>
        <div className="formula">σ²_t = λ · σ²_{"{t-1}"} + (1 − λ) · R²_{"{t-1}"}</div>
        <ul>
          <li>σ²_t: varianza condicional para el periodo actual</li>
          <li>λ ∈ [0,1]: parámetro de suavizamiento (memoria)</li>
          <li>R_{"{t-1}"}: rendimiento observado entre t−2 y t−1</li>
        </ul>
        <p>
          <strong>Limitaciones del EWMA:</strong> no modela explícitamente si los choques pasados son positivos o negativos. Es un caso particular del GARCH(1,1) con restricciones: ω=0, α+β=1, α=1−λ, β=λ. No permite estimar los parámetros libremente, lo que lo hace más rígido.
        </p>

        <h2>Tema 4: Modelo GARCH(1,1) para VaR</h2>

        <h3>4.1 Por qué GARCH es superior al EWMA</h3>
        <p>
          El modelo <strong>GARCH(1,1)</strong> supera las limitaciones del EWMA al ser más flexible y estimar los parámetros libremente:
        </p>
        <div className="formula">σ²_t = ω + α · ε²_{"{t-1}"} + β · σ²_{"{t-1}"}</div>
        <p>
          La combinación <strong>VaR-GARCH es más realista</strong> porque:
        </p>
        <ul>
          <li>Cuando la volatilidad del mercado aumenta (crisis), GARCH lo detecta y ajusta hacia arriba la estimación de riesgo</li>
          <li>El VaR estático no responde al cambio en volatilidad → frecuentes "violaciones del límite"</li>
          <li>GARCH se ajusta mejor a periodos de alta volatilidad (2008, 2011)</li>
        </ul>

        <h3>4.2 Caso práctico: Índice SMI suizo</h3>
        <p>
          Se aplica GARCH(1,1) al índice bursátil suizo SMI (5.078 observaciones, 1995-2015):
        </p>
        <ul>
          <li><strong>Entrenamiento:</strong> primeras 3.078 observaciones para estimación inicial</li>
          <li><strong>Validación:</strong> 2.000 observaciones restantes con estimación rodante (ventana de 25 días)</li>
        </ul>
        <pre className="bg-slate-100 rounded-lg p-4 text-sm overflow-x-auto"><code>{`# Modelo GARCH(1,1) con distribución normal
garch_model = arch_model(train, vol='Garch', p=1, q=1, mean='Zero', dist='normal')
garch_fit = garch_model.fit(disp='off')

# Estimación rolling
for i in range(0, len(test), window_size):
    end = 3078 + i
    window_data = SMI_df['returns'].iloc[end - 3078:end]
    model = arch_model(window_data, vol='Garch', p=1, q=1, mean='Zero', dist='normal')
    res = model.fit(disp='off')
    forecast = res.forecast(horizon=1)
    rolling_forecasts.append(forecast.variance.values[-1, 0])`}</code></pre>

        <h3>4.3 Comparativa VaR 95% en el SMI</h3>
        <table>
          <thead>
            <tr><th>Método</th><th>Descripción</th><th>Fortaleza</th></tr>
          </thead>
          <tbody>
            <tr><td>GARCH(1,1)</td><td>Volatilidad condicional dinámica</td><td>Mejor en crisis (2008, 2011)</td></tr>
            <tr><td>MA 150 días</td><td>Desviación estándar móvil histórica</td><td>Simple pero lenta en responder</td></tr>
            <tr><td>VaR estático</td><td>Umbral fijo basado en volatilidad promedio</td><td>Muchas violaciones del límite</td></tr>
          </tbody>
        </table>

        <h2>Tema 5: Expected Shortfall y Backtesting</h2>

        <h3>5.1 Expected Shortfall (ES) — CVaR</h3>
        <p>
          El <strong>Expected Shortfall</strong> (ES), también llamado CVaR (Conditional VaR) o TVaR, es una medida de riesgo más informativa que el VaR porque captura no solo cuándo se supera el VaR, sino cuánto se supera en promedio:
        </p>
        <div className="formula">ES_α = E[Pérdida | Pérdida &gt; VaR_α]</div>
        <p>
          Es decir, el ES es la <strong>pérdida esperada condicionada a que la pérdida supere el VaR</strong>. Siempre ES_α ≥ VaR_α.
        </p>

        <h4>Ventajas del ES sobre el VaR</h4>
        <ul>
          <li><strong>Subaditividad:</strong> ES(A+B) ≤ ES(A) + ES(B) — el VaR no siempre cumple esta propiedad</li>
          <li><strong>Coherencia:</strong> ES es una medida de riesgo coherente en el sentido de Artzner (1999)</li>
          <li><strong>Informa sobre la cola:</strong> el VaR ignora la magnitud de las pérdidas más allá del umbral</li>
          <li>Basilea III/IV requiere ES en lugar de VaR para el cálculo de capital regulatorio</li>
        </ul>

        <h3>5.2 Backtesting del VaR</h3>
        <p>
          El <strong>backtesting</strong> valida si el modelo VaR es adecuado: se compara cuántas veces las pérdidas reales superaron el VaR estimado (<em>excepciones</em> o <em>violations</em>).
        </p>
        <p>
          Si el modelo VaR al 95% es correcto, deberíamos observar excepciones el 5% de los días. El <strong>test de Kupiec</strong> (Proportional of Failures, PoF) contrasta H₀: la frecuencia de excepciones observada es consistente con el nivel de confianza del modelo.
        </p>
        <table>
          <thead>
            <tr><th>Excepciones en 250 días</th><th>Evaluación VaR 95%</th></tr>
          </thead>
          <tbody>
            <tr><td>0 – 4</td><td>Modelo demasiado conservador</td></tr>
            <tr><td>5 – 9</td><td>Modelo aceptable (zona verde)</td></tr>
            <tr><td>10 – 14</td><td>Zona amarilla (revisión)</td></tr>
            <tr><td>15+</td><td>Modelo inaceptable (zona roja)</td></tr>
          </tbody>
        </table>

        <h3>5.3 Ejemplo: Caso práctico 2 — Citigroup</h3>
        <p>
          Se analizan 5 años de datos de acciones de Citigroup (feb 2013 – feb 2018, 1.259 observaciones):
        </p>
        <ol>
          <li>Se calculan rendimientos diarios: r_t = (price_t − price_{"{t-1}"}) / price_{"{t-1}"}</li>
          <li>Test ADF confirma estacionariedad de los rendimientos</li>
          <li>auto.arima selecciona ARIMA(2,0,0) como mejor modelo para la media</li>
          <li>Se estima GARCH(1,1) sobre los residuos del ARIMA</li>
          <li>Se realiza backtesting comparando VaR-GARCH vs VaR delta-normal estático</li>
        </ol>
        <p>
          El modelo GARCH captura el clustering de volatilidad y produce estimaciones de VaR que respetan mejor el nivel de confianza del 99%, reduciendo significativamente el número de violaciones durante periodos de alta incertidumbre.
        </p>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-estructurados/ud8" className="text-sm text-slate-500 hover:text-blue-600">← UD8: Sistemas Recomendadores</Link>
        <div className="flex gap-3">
          <Link href="/datos-estructurados/ud9/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD9</Link>
          <Link href="/datos-estructurados" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">Volver al índice</Link>
        </div>
      </div>
    </div>
  );
}
