import Link from "next/link";

export default function UD4() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/calibracion-metricas" className="text-sm text-teal-600 hover:underline">← Calibración y Métricas</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-teal-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">4</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD4: Métricas de Rendimiento de los Modelos de Regresión</h1>
            <p className="text-slate-500 text-sm">Calibración, métricas y explicabilidad de modelos de IA</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/calibracion-metricas/ud3" className="text-sm text-slate-500 hover:text-teal-600">← UD3</Link>
          <Link href="/calibracion-metricas/ud5" className="text-sm text-slate-500 hover:text-teal-600">Siguiente: UD5 →</Link>
          <Link href="/calibracion-metricas/ud4/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-8 text-sm text-teal-800">
        <strong>Temas:</strong> Correlación entre variables · Residuos · MSE, RMSE, MAE, R², R²-ajustado · MBE, RAE, MAPE, NRMSE, RRMSE, RMSLE · Limitaciones de métricas · Evaluación y comparación de modelos
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          La evaluación precisa de los modelos de regresión es un pilar fundamental en el Machine Learning. Estos modelos, diseñados para predecir valores continuos (precio de viviendas, temperatura, ventas), requieren métricas específicas que capturen la precisión y eficacia de sus predicciones.
        </p>
        <p>
          A diferencia de los modelos de clasificación, la regresión busca establecer una relación funcional entre variables, lo que implica desafíos únicos en su evaluación. Un detalle crucial es que <strong>ninguna métrica de rendimiento funciona de manera aislada</strong>: una combinación equilibrada de múltiples métricas es esencial para evaluar con precisión los modelos de regresión.
        </p>

        <h2>Tema 1: Comprensión de las Métricas Fundamentales en Regresión</h2>

        <h3>1.1. Conceptos previos: Residuos y Correlación</h3>

        <h4>Los residuos</h4>
        <p>
          En regresión, el <strong>residuo</strong> es la diferencia entre el valor real observado y el valor predicho por el modelo:
        </p>
        <div className="formula">Residuo = y_i - ŷ_i</div>
        <p>
          El análisis de residuos permite diagnosticar la calidad del modelo: si los residuos muestran patrones sistemáticos, el modelo no está capturando correctamente la estructura de los datos.
        </p>

        <h4>1. Correlación entre variables (Multicolinealidad)</h4>
        <p>
          Las características altamente correlacionadas proporcionan información redundante (<strong>multicolinealidad</strong>), lo que afecta negativamente la interpretación del modelo de regresión, evitando el sobreajuste y mejorando la capacidad de generalizar. Se recomienda usar matrices de correlación (matplotlib o seaborn) para identificar y eliminar variables redundantes antes de entrenar.
        </p>

        <h4>2. Correlación de variables dependientes con la variable a predecir (target)</h4>
        <p>
          Es fundamental calcular la correlación entre cada variable independiente y la variable target. El objetivo es incluir en el modelo las variables que tienen correlación significativa con la variable a predecir y que no estén correlacionadas entre sí.
        </p>

        <h4>3. Puntos relevantes durante la creación de modelos de regresión</h4>
        <ul>
          <li><strong>Uso de los errores de Regresión:</strong> Usar MSE, RMSE, MAE y R² para evaluar la calidad del modelo. Elegir la métrica más apropiada para el problema y objetivos.</li>
          <li><strong>Validación Cruzada:</strong> Aplicar validación cruzada para evaluar el rendimiento en diferentes conjuntos de datos.</li>
          <li><strong>Ajuste de Hiperparámetros:</strong> Usar métricas como la validación cruzada para encontrar la combinación óptima de parámetros.</li>
          <li><strong>Interpretación de Coeficientes:</strong> Comprender cómo cada variable afecta a la variable objetivo.</li>
          <li><strong>Regularización:</strong> Considerar Ridge o Lasso para controlar la complejidad del modelo.</li>
          <li><strong>Selección de Características:</strong> Identificar las variables más importantes teniendo en cuenta la correlación.</li>
          <li><strong>Validación Externa:</strong> Validar el modelo en datos externos para asegurarse de que sea generalizable.</li>
        </ul>

        <h3>1.2. Tabla de Métricas Fundamentales de Regresión</h3>

        <table>
          <thead>
            <tr>
              <th>Métrica</th>
              <th>Definición</th>
              <th>Fórmula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>MSE</strong> (Error Cuadrático Medio)</td>
              <td>Promedio de los cuadrados de la diferencia entre valores predichos y reales</td>
              <td><code>1/n · Σ(yᵢ − ŷᵢ)²</code></td>
            </tr>
            <tr>
              <td><strong>RMSE</strong> (Raíz del Error Cuadrático Medio)</td>
              <td>Raíz cuadrada del MSE. Mismas unidades que la variable dependiente</td>
              <td><code>√(1/n · Σ(yᵢ − ŷᵢ)²)</code></td>
            </tr>
            <tr>
              <td><strong>MAE</strong> (Error Absoluto Medio)</td>
              <td>Promedio de las magnitudes absolutas de la diferencia entre valores predichos y reales</td>
              <td><code>1/n · Σ|yᵢ − ŷᵢ|</code></td>
            </tr>
            <tr>
              <td><strong>R²</strong> (Coeficiente de Determinación)</td>
              <td>Proporción de varianza en la variable dependiente que es predecible a partir de las variables independientes</td>
              <td><code>Σ(Ŷₜ−Ȳ)² / Σ(Yₜ−Ȳ)²</code></td>
            </tr>
            <tr>
              <td><strong>R²-ajustado</strong></td>
              <td>Similar a R² pero penaliza la inclusión de variables irrelevantes</td>
              <td><code>1 − [(n−1)/(n−k−1)] · (1−R²)</code></td>
            </tr>
            <tr>
              <td><strong>MBE</strong> (Error Sesgo Medio)</td>
              <td>Cuantifica la diferencia promedio entre las predicciones y los valores reales</td>
              <td><code>1/n · Σ(Yᵢ − Ŷᵢ)</code></td>
            </tr>
            <tr>
              <td><strong>RAE</strong> (Error Absoluto Relativo)</td>
              <td>Evalúa la precisión relativa comparando la magnitud de los errores con la de los valores reales</td>
              <td><code>Σ|yᵢ−ŷᵢ| / Σ|yᵢ−ȳ|</code></td>
            </tr>
            <tr>
              <td><strong>MAPE/MAPD</strong> (Error Porcentual Absoluto Medio)</td>
              <td>Evalúa el error porcentual promedio entre las predicciones y los valores reales</td>
              <td><code>1/n · Σ|yᵢ−ŷᵢ|/yᵢ · 100%</code></td>
            </tr>
            <tr>
              <td><strong>NRMSE</strong> (Error Cuadrático Medio Normalizado)</td>
              <td>Normaliza el RMSE según el rango de la variable objetivo</td>
              <td><code>RMSE / (Max(Y) − Min(Y))</code></td>
            </tr>
            <tr>
              <td><strong>RRMSE</strong> (Error Cuadrático Medio Relativo)</td>
              <td>Expresa el error como porcentaje en relación con la media de los valores reales</td>
              <td><code>(RMSE / Ȳ) × 100</code></td>
            </tr>
            <tr>
              <td><strong>RMSLE</strong> (Error Logarítmico Cuadrático Medio)</td>
              <td>Útil cuando las variables tienen una amplia gama de valores; penaliza errores en escala logarítmica</td>
              <td><code>√(Σ(log(yᵢ+1) − log(ŷᵢ+1))²)</code></td>
            </tr>
          </tbody>
        </table>

        <h3>1.3. Limitaciones y Consideraciones de cada Métrica</h3>

        <h4>MSE</h4>
        <ul>
          <li>Sensible a outliers (eleva al cuadrado los errores, puede sobreestimar el mal rendimiento)</li>
          <li>Difícil de interpretar directamente (unidades cuadráticas)</li>
          <li>Útil en algoritmos de gradiente descendente (proporciona mínimo global diferenciable)</li>
        </ul>

        <h4>RMSE</h4>
        <ul>
          <li>Mantiene la sensibilidad a outliers del MSE, aunque es interpretable en las unidades de la variable</li>
          <li>Valores bajos indican mayor precisión predictiva</li>
          <li>Puede sobreestimar el impacto de errores grandes</li>
        </ul>

        <h4>MAE</h4>
        <ul>
          <li>Robusto frente a outliers (trata todos los errores por igual)</li>
          <li>Puede subestimar el impacto de errores grandes</li>
          <li>Puede presentar desafíos en algoritmos basados en gradiente (derivada no continua en 0)</li>
          <li>MAE bajo indica mejor rendimiento del modelo</li>
        </ul>

        <h4>R²</h4>
        <ul>
          <li>No garantiza la adecuación del modelo; un coeficiente alto no implica que el modelo sea mejor o esté libre de multicolinealidad</li>
          <li>Siempre aumenta con la adición de más variables, independientemente de su relevancia → usar R²-ajustado</li>
          <li>Siempre complementar con análisis de residuos</li>
        </ul>

        <h4>R²-ajustado</h4>
        <ul>
          <li>Fácil de interpretar: cuanto más cercano a 1, mejor</li>
          <li>Sensible al aumento de predictores, pero no garantiza un modelo adecuado por sí solo</li>
          <li>Complementar con estudio de residuos</li>
        </ul>

        <h4>MBE</h4>
        <ul>
          <li>Buena medida para verificar la dirección del sesgo: positivo = sobreestimado, negativo = subestimado</li>
          <li>No es una buena medida de magnitud (los errores individuales se compensan entre sí)</li>
        </ul>

        <h4>RAE y MAPE</h4>
        <ul>
          <li>RAE: útil para precisión relativa; RAE=10% significa que en promedio las predicciones tienen un error del 10% respecto a los valores reales</li>
          <li>MAPE: útil para comunicar el error en términos porcentuales; MAPE=10% indica que en promedio el pronóstico fue un 10% superior/inferior a los valores reales</li>
          <li>Ambas tienen limitaciones cuando los valores reales son cercanos a cero</li>
        </ul>

        <h4>NRMSE y RRMSE</h4>
        <ul>
          <li>NRMSE: normaliza el RMSE por el rango (Max-Min), independiente de la escala de los datos</li>
          <li>RRMSE: normaliza el RMSE por la media, relevante cuando se trabaja con escalas diferentes</li>
          <li>Con menor valor, mejor ajuste del modelo</li>
        </ul>

        <h4>RMSLE</h4>
        <ul>
          <li>Resistente a valores atípicos donde errores pequeños y grandes se tratan uniformemente</li>
          <li>Adecuado en distribuciones asimétricas o sesgadas</li>
          <li>No es apropiado si se trabaja con valores negativos</li>
          <li>Útil cuando las diferencias relativas son más importantes que las absolutas (e.g., precios de viviendas)</li>
        </ul>

        <h2>Tema 2: Evaluación y Comparación de Modelos de Regresión</h2>

        <h3>2.1. Utilización de Métricas para la Evaluación de Modelos</h3>
        <p>
          Al comparar modelos, es crucial seleccionar la métrica más apropiada para el problema. Por ejemplo, en modelación financiera un alto error en predicciones tiene implicaciones significativas en términos de costes → usar MSE/RMSE. En sistemas de recomendación, MAE es más equilibrado. En estudios de investigación que exploran relaciones entre variables, usar R² junto con análisis de residuos.
        </p>

        <h3>2.2. Comparación de Modelos Basada en Métricas</h3>
        <p>
          La comparación de modelos no se limita a una sola métrica. Debe considerar:
        </p>
        <ul>
          <li>Complejidad del modelo</li>
          <li>Generalización a nuevos datos (validación cruzada)</li>
          <li>Interpretabilidad de los resultados</li>
          <li>Coste computacional</li>
        </ul>

        <h3>2.3. Ejemplo de evaluación en Python</h3>
        <pre>{`from sklearn.linear_model import LinearRegression, Ridge
from sklearn.metrics import (mean_squared_error, mean_absolute_error,
                              r2_score)
import numpy as np

# Entrenar y evaluar
model = Ridge(alpha=1.0)
model.fit(X_train, y_train)
y_pred = model.predict(X_test)

# Calcular métricas
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
mae = mean_absolute_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"MSE:  {mse:.4f}")
print(f"RMSE: {rmse:.4f}")
print(f"MAE:  {mae:.4f}")
print(f"R²:   {r2:.4f}")`}</pre>

        <h2>Tema 3: Contextualización Práctica</h2>

        <h3>3.1. Métricas en el Mundo Real</h3>
        <p>
          La elección de métricas siempre debe consensuarse con el negocio. Los científicos de datos están ahí para ayudar en las tomas de decisiones del día a día, y cualquier decisión sobre los datos debe estar alineada con los objetivos del negocio.
        </p>
        <ul>
          <li><strong>Predicción de precios (inmobiliario):</strong> RMSE o MAE en unidades monetarias; RMSLE cuando la escala varía mucho</li>
          <li><strong>Predicción de demanda:</strong> MAPE (fácil de comunicar como porcentaje)</li>
          <li><strong>Modelos meteorológicos:</strong> RMSE en grados; un bajo RMSE indica predicciones de temperatura muy precisas</li>
          <li><strong>Estudios económicos:</strong> R² para mostrar correlación entre variables de mercado</li>
        </ul>

        <h3>3.2. Comunicación de Resultados</h3>
        <p>
          Las métricas deben presentarse de forma comprensible para stakeholders no técnicos. Por ejemplo:
        </p>
        <ul>
          <li>"Nuestro modelo predice el precio de viviendas con un error medio de 15.000€ (MAE)"</li>
          <li>"El modelo explica el 87% de la variabilidad en las ventas (R² = 0.87)"</li>
          <li>"En promedio, nuestras predicciones de demanda se desvían un 8% del valor real (MAPE = 8%)"</li>
        </ul>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/calibracion-metricas" className="text-sm text-slate-500 hover:text-teal-600">← Volver a Calibración y Métricas</Link>
        <div className="flex gap-3">
          <Link href="/calibracion-metricas/ud4/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD4</Link>
          <Link href="/calibracion-metricas/ud5" className="text-sm bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-semibold">Siguiente: UD5 →</Link>
        </div>
      </div>
    </div>
  );
}
