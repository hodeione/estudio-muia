import Link from "next/link";

export default function UD5() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-estructurados" className="text-sm text-blue-600 hover:underline">← Datos Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">5</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD5: Facebook Prophet</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-estructurados/ud4" className="text-sm text-slate-500 hover:text-blue-600">← UD4</Link>
          <Link href="/datos-estructurados/ud6" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD6 →</Link>
          <Link href="/datos-estructurados/ud5/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
        <strong>Temas:</strong> 1. Modelo aditivo de Prophet · 2. Changepoints y detección automática · 3. Parámetros del modelo · 4. Implementación en Python · 5. Validación cruzada temporal
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Una vez comprendidos los modelos ARIMA, que se basan en la suposición de estacionariedad y requieren una cuidadosa selección de parámetros (p, d, q), surge la necesidad de contar con herramientas más flexibles y automatizadas. Especialmente cuando se trabaja con series temporales que presentan estacionalidades múltiples, festivos u otras irregularidades.
        </p>
        <p>
          <strong>Facebook Prophet</strong> es un modelo desarrollado por el equipo de ingeniería de Meta (Facebook) diseñado específicamente para pronosticar series temporales de tipo empresarial: datos con fuertes efectos estacionales, tendencias a largo plazo y posibles interrupciones abruptas. A diferencia de ARIMA, Prophet adopta un enfoque aditivo.
        </p>

        <h2>Tema 1: El Modelo Aditivo de Prophet</h2>

        <h3>1.1 Ecuación fundamental</h3>
        <p>
          Prophet descompone la serie temporal en tres componentes principales más un término de error:
        </p>
        <div className="formula">y(t) = g(t) + s(t) + h(t) + εₜ</div>
        <ul>
          <li><strong>g(t):</strong> función de tendencia, modela cambios no periódicos a largo plazo</li>
          <li><strong>s(t):</strong> cambios periódicos (estacionalidad semanal, anual, etc.)</li>
          <li><strong>h(t):</strong> efectos de los días festivos, que pueden afectar uno o más días</li>
          <li><strong>εₜ:</strong> término de error, representa variaciones no explicadas (se asume distribución normal)</li>
        </ul>

        <h3>1.2 Ventajas principales</h3>
        <ul>
          <li>Maneja automáticamente los cambios de tendencia mediante detección de <strong>changepoints</strong></li>
          <li>Incorpora fácilmente variables externas como días festivos</li>
          <li>No requiere un conocimiento estadístico profundo por parte del usuario</li>
          <li>Muy robusto ante datos faltantes y valores atípicos</li>
          <li>Produce intervalos de confianza de forma nativa</li>
        </ul>

        <h2>Tema 2: Changepoints — Detección Automática de Cambios de Tendencia</h2>

        <h3>2.1 ¿Qué son los changepoints?</h3>
        <p>
          Los <strong>changepoints</strong> (puntos de cambio) son momentos en el tiempo donde el comportamiento de la tendencia cambia significativamente. Por ejemplo, un producto que empieza a crecer más rápido tras un lanzamiento viral, o una empresa cuyas ventas caen bruscamente por la pandemia.
        </p>
        <p>
          Prophet detecta automáticamente los posibles changepoints al entrenar el modelo, colocando por defecto 25 candidatos en el primer 80% de la serie y seleccionando los más relevantes mediante regularización (Laplace prior sobre los cambios de pendiente).
        </p>

        <h3>2.2 Código para visualizar changepoints</h3>
        <pre className="bg-slate-100 rounded-lg p-4 text-sm overflow-x-auto"><code>{`# Listing all the change points in the model
deltas = m.params['delta'].mean(0)
cp = pd.DataFrame(m.changepoints)
cp['deltas'] = deltas
fig = go.Figure()
fig.add_trace(go.Bar(x=cp['ds'], y=cp['deltas'], name='CPs'))`}</code></pre>

        <h2>Tema 3: Parámetros del Modelo Prophet</h2>
        <table>
          <thead>
            <tr><th>Parámetro</th><th>Descripción</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Holidays</strong></td><td>DataFrame con los días festivos relevantes para el modelo</td></tr>
            <tr><td><strong>Seasonality</strong></td><td>Define si se consideran estacionalidades anuales, semanales o diarias (True/False)</td></tr>
            <tr><td><strong>Seasonality_mode</strong></td><td>Tipo de estacionalidad: <em>aditiva</em> o <em>multiplicativa</em></td></tr>
            <tr><td><strong>Seasonality_prior_scale</strong></td><td>Controla la fuerza de la estacionalidad. Valores más altos permiten mayor flexibilidad</td></tr>
            <tr><td><strong>Holiday_prior_scale</strong></td><td>Valores más altos permiten al modelo ajustarse más a los efectos de festivos</td></tr>
            <tr><td><strong>Changepoint_prior_scale</strong></td><td>Determina qué tan fácil es que el modelo detecte cambios en la tendencia. Valor alto → cambios más bruscos</td></tr>
          </tbody>
        </table>
        <p>
          Usar <strong>Hyperopt o GridSearch</strong> ayuda a automatizar la optimización de hiperparámetros, explorando un mayor número de configuraciones de forma eficiente.
        </p>

        <h2>Tema 4: Implementación en Python</h2>

        <h3>4.1 Uso básico</h3>
        <p>
          Prophet espera que el DataFrame tenga exactamente dos columnas: <strong>ds</strong> (fecha) e <strong>y</strong> (valor a predecir).
        </p>
        <pre className="bg-slate-100 rounded-lg p-4 text-sm overflow-x-auto"><code>{`# 1. Instanciar y entrenar el modelo
m = Prophet()
m.fit(dataset)  # dataset debe tener columnas 'ds' y 'y'

# 2. Crear DataFrame futuro (180 días hacia adelante)
future = m.make_future_dataframe(periods=180, freq='D')

# 3. Generar predicciones
forecast = m.predict(future)

# 4. Columnas clave del resultado:
# ds: fecha, yhat: predicción, yhat_lower: límite inferior, yhat_upper: límite superior`}</code></pre>

        <h3>4.2 Ejemplo de salida de predicción</h3>
        <table>
          <thead>
            <tr><th>ds</th><th>yhat</th><th>yhat_lower</th><th>yhat_upper</th></tr>
          </thead>
          <tbody>
            <tr><td>2020-11-12</td><td>79.24</td><td>62.91</td><td>94.52</td></tr>
            <tr><td>2020-11-13</td><td>73.76</td><td>58.42</td><td>89.83</td></tr>
            <tr><td>2020-11-14</td><td>60.95</td><td>46.07</td><td>75.92</td></tr>
          </tbody>
        </table>

        <h3>4.3 Prophet con variables exógenas</h3>
        <pre className="bg-slate-100 rounded-lg p-4 text-sm overflow-x-auto"><code>{`# Añadir festivos del país y regresores externos
m = Prophet(holidays=holidays)
m.add_country_holidays(country_name='ES')
m.add_regressor('rain')
m.add_regressor('temp')

m.fit(dataset)
future = m.make_future_dataframe(periods=0, freq='D')
future = future.merge(dataset, on='ds')
forecast = m.predict(future)`}</code></pre>

        <h3>4.4 Prophet con hyperparameter tuning</h3>
        <pre className="bg-slate-100 rounded-lg p-4 text-sm overflow-x-auto"><code>{`m = Prophet(
    holidays=holidays,
    changepoint_prior_scale=0.01,
    changepoint_range=0.8,
    seasonality_prior_scale=0.5,
    holidays_prior_scale=1.0,
    yearly_seasonality=20,
    weekly_seasonality=5,
    seasonality_mode='additive'
)`}</code></pre>

        <h2>Tema 5: Validación Cruzada Temporal</h2>

        <h3>5.1 El problema con la validación cruzada estándar</h3>
        <p>
          A diferencia de otros tipos de datos, <strong>las series temporales tienen un orden cronológico</strong>: no podemos mezclar aleatoriamente los datos de entrenamiento y prueba. Si lo hiciéramos, estaríamos "mirando al futuro" durante el entrenamiento, lo que produce evaluaciones optimistas e irrealistas.
        </p>

        <h3>5.2 Validación temporal progresiva (Walk-Forward)</h3>
        <p>
          Prophet resuelve esto con una técnica de <strong>validación temporal progresiva</strong>: se entrena el modelo en una ventana inicial de tiempo y luego se prueba en una ventana futura (el <em>horizon</em>), repitiendo esto varias veces avanzando en el tiempo.
        </p>
        <pre className="bg-slate-100 rounded-lg p-4 text-sm overflow-x-auto"><code>{`df_cv = cross_validation(
    m,
    initial='730 days',   # 2 años de datos iniciales de entrenamiento
    period='31 days',     # cada 31 días avanza la ventana
    horizon='365 days'    # predice 1 año hacia adelante en cada iteración
)`}</code></pre>
        <ul>
          <li><strong>initial:</strong> Los primeros 730 días (2 años) se usan para entrenar inicialmente</li>
          <li><strong>horizon:</strong> Después de cada entrenamiento, el modelo predice 365 días</li>
          <li><strong>period:</strong> Cada 31 días, Prophet avanza en el tiempo y hace una nueva división</li>
        </ul>

        <h2>ARIMA vs Prophet: Comparativa</h2>
        <table>
          <thead>
            <tr><th>Característica</th><th>ARIMA</th><th>Prophet</th></tr>
          </thead>
          <tbody>
            <tr><td>Tipo de modelo</td><td>Estadístico clásico</td><td>Modelo aditivo basado en descomposición</td></tr>
            <tr><td>Supone estacionariedad</td><td>Sí</td><td>No necesariamente</td></tr>
            <tr><td>Tratamiento de tendencia</td><td>Diferenciación manual</td><td>Automático, con changepoints</td></tr>
            <tr><td>Estacionalidad</td><td>Incluida como SARIMA</td><td>Modelada explícitamente y flexible</td></tr>
            <tr><td>Incorporación de festivos</td><td>Manual y compleja</td><td>Nativa y sencilla</td></tr>
            <tr><td>Curva de aprendizaje</td><td>Alta (requiere estadística)</td><td>Baja (intuitivo y automatizado)</td></tr>
            <tr><td>Parámetros principales</td><td>p, d, q (y P,D,Q para SARIMA)</td><td>growth, seasonality, changepoints</td></tr>
          </tbody>
        </table>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-estructurados/ud4" className="text-sm text-slate-500 hover:text-blue-600">← UD4: Regresión con ST</Link>
        <div className="flex gap-3">
          <Link href="/datos-estructurados/ud5/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD5</Link>
          <Link href="/datos-estructurados/ud6" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">Siguiente: UD6 →</Link>
        </div>
      </div>
    </div>
  );
}
