import Link from "next/link";

export default function UD5() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/calibracion-metricas" className="text-sm text-teal-600 hover:underline">← Calibración y Métricas</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-teal-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">5</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD5: Métricas de Rendimiento de los Modelos de Clasificación</h1>
            <p className="text-slate-500 text-sm">Calibración, métricas y explicabilidad de modelos de IA</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/calibracion-metricas/ud4" className="text-sm text-slate-500 hover:text-teal-600">← UD4</Link>
          <Link href="/calibracion-metricas/ud6" className="text-sm text-slate-500 hover:text-teal-600">Siguiente: UD6 →</Link>
          <Link href="/calibracion-metricas/ud5/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-8 text-sm text-teal-800">
        <strong>Temas:</strong> Matriz de confusión · Accuracy, Precisión, Recall, Especificidad, F1 · Desbalance de clases · AUC-ROC · Curvas de Ganancia y Lift · Elección de métricas por contexto
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          La evaluación precisa de los modelos de clasificación supervisada es un pilar fundamental del Machine Learning. Estos modelos, diseñados para predecir categorías (spam/no spam, fraude/no fraude, enfermo/sano), requieren métricas específicas que capturen no solo el porcentaje de aciertos, sino también aspectos críticos como el equilibrio entre errores de tipo I y tipo II.
        </p>
        <p>
          Un detalle crucial: <strong>ninguna métrica de rendimiento funciona de manera aislada</strong>. Una combinación equilibrada y una comprensión integral de múltiples métricas son esenciales para evaluar con precisión los modelos de clasificación.
        </p>

        <h2>Tema 1: La Matriz de Confusión</h2>

        <h3>1.1. ¿Qué es la Matriz de Confusión?</h3>
        <p>
          La <strong>matriz de confusión</strong> es una tabla que permite visualizar y entender cómo un modelo de clasificación ha realizado sus predicciones y dónde ha cometido errores. Compara las etiquetas reales de los datos (valores verdaderos) con las predicciones realizadas por el modelo (valores predichos).
        </p>

        <h3>Clasificación binaria (2 clases)</h3>
        <p>En el caso más simple, la matriz de confusión tiene 4 componentes:</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Predicción: Positivo</th>
              <th>Predicción: Negativo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Real: Positivo</strong></td>
              <td><strong>TP</strong> (Verdadero Positivo)</td>
              <td><strong>FN</strong> (Falso Negativo)</td>
            </tr>
            <tr>
              <td><strong>Real: Negativo</strong></td>
              <td><strong>FP</strong> (Falso Positivo)</td>
              <td><strong>TN</strong> (Verdadero Negativo)</td>
            </tr>
          </tbody>
        </table>

        <ul>
          <li><strong>TP (Verdaderos Positivos):</strong> Casos donde el modelo predijo correctamente la clase positiva.</li>
          <li><strong>FP (Falsos Positivos):</strong> Casos donde el modelo predijo incorrectamente la clase positiva (en realidad es negativa). Error tipo I.</li>
          <li><strong>TN (Verdaderos Negativos):</strong> Casos donde el modelo predijo correctamente la clase negativa.</li>
          <li><strong>FN (Falsos Negativos):</strong> Casos donde el modelo predijo incorrectamente la clase negativa (en realidad es positiva). Error tipo II.</li>
        </ul>

        <h3>Clasificación multiclase</h3>
        <p>
          Para más de dos clases, la matriz de confusión se extiende a n×n (donde n es el número de clases). La diagonal de la tabla representa las instancias correctamente identificadas.
        </p>
        <p>
          En problemas de clasificación con múltiples clases, se puede evaluar de dos formas:
        </p>
        <ul>
          <li><strong>1-vs-1 (OvO):</strong> Mide la capacidad de discriminar entre instancias de dos clases específicas. Genera una matriz 2×2 para cada par de clases.</li>
          <li><strong>1-vs-All (OvA):</strong> Mide la capacidad de discriminar entre instancias de una clase vs todas las demás. También genera matrices 2×2.</li>
        </ul>

        <h2>Tema 2: Métricas de Clasificación</h2>

        <h3>2.1. Tabla de Métricas Principales</h3>

        <table>
          <thead>
            <tr>
              <th>Métrica</th>
              <th>Abrev.</th>
              <th>Definición</th>
              <th>Fórmula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Error del Modelo</strong></td>
              <td>ERR</td>
              <td>Suma de predicciones incorrectas sobre el total</td>
              <td><code>(FP + FN) / (FP + FN + TP + TN)</code></td>
            </tr>
            <tr>
              <td><strong>Accuracy</strong></td>
              <td>ACC</td>
              <td>Número de predicciones correctas sobre el total</td>
              <td><code>(TP + TN) / (FP + FN + TP + TN) = 1 − ERR</code></td>
            </tr>
            <tr>
              <td><strong>Precisión</strong></td>
              <td>PRE / PPV</td>
              <td>Proporción de predicciones positivas correctas</td>
              <td><code>TP / (TP + FP)</code></td>
            </tr>
            <tr>
              <td><strong>Recall / Sensibilidad</strong></td>
              <td>REC / SEN</td>
              <td>Proporción de casos positivos reales correctamente identificados</td>
              <td><code>TP / (FN + TP)</code></td>
            </tr>
            <tr>
              <td><strong>Especificidad</strong></td>
              <td>SPE / ESP</td>
              <td>Proporción de verdaderos negativos sobre el total de negativos reales</td>
              <td><code>TN / (TN + FP) = 1 − FPR</code></td>
            </tr>
            <tr>
              <td><strong>F1 Score</strong></td>
              <td>F1</td>
              <td>Media armónica de Precisión y Recall; equilibrio entre ambas</td>
              <td><code>2 × (PRE × REC) / (PRE + REC)</code></td>
            </tr>
            <tr>
              <td><strong>Tasa de Verdaderos Positivos</strong></td>
              <td>TPR</td>
              <td>Igual que Recall; muy relacionada con la curva ROC</td>
              <td><code>TP / (FN + TP)</code></td>
            </tr>
            <tr>
              <td><strong>Tasa de Falsos Positivos</strong></td>
              <td>FPR</td>
              <td>Proporción de negativos reales incorrectamente clasificados como positivos</td>
              <td><code>FP / (FP + TN)</code></td>
            </tr>
          </tbody>
        </table>

        <h3>2.2. Interpretación práctica de cada métrica</h3>

        <h4>Accuracy</h4>
        <p>
          Métrica más intuitiva pero peligrosa con clases desbalanceadas. Un modelo que siempre predice "no fraude" obtiene 99.83% accuracy en el dataset de tarjetas de crédito, pero detecta 0 fraudes.
        </p>

        <h4>Precisión</h4>
        <p>
          Responde a: "De todos los casos que el modelo predijo como positivos, ¿cuántos son realmente positivos?" Importante cuando el coste de un falso positivo es alto (e.g., marcar correos legítimos como spam).
        </p>

        <h4>Recall (Sensibilidad)</h4>
        <p>
          Responde a: "De todos los casos positivos reales, ¿cuántos detectó el modelo?" Crucial cuando el coste de un falso negativo es alto (e.g., no detectar una enfermedad grave, no detectar un fraude).
        </p>

        <h4>F1 Score</h4>
        <p>
          Equilibrio entre Precisión y Recall. Ideal cuando ambos tipos de error tienen importancia similar y las clases están desbalanceadas. Un F1 bajo indica que el modelo falla en uno o en ambos aspectos.
        </p>
        <div className="formula">F1 = 2 × (Precisión × Recall) / (Precisión + Recall)</div>

        <h2>Tema 3: Limitaciones y Consideraciones</h2>

        <h3>3.1. Desbalance de Clases</h3>
        <p>
          El desbalance de clases ocurre cuando las proporciones de clases en el dataset no están igualmente representadas. Un modelo entrenado con datos desequilibrados tiende a predecir mejor la clase mayoritaria, ignorando la minoritaria.
        </p>
        <p>Recomendaciones para datasets desbalanceados:</p>
        <ul>
          <li><strong>Evitar Accuracy</strong> ya que puede ser engañosa</li>
          <li><strong>Usar Recall, Precisión y F1-Score:</strong> El recall es crucial para identificar instancias de la clase minoritaria</li>
          <li><strong>Considerar AUC-ROC:</strong> Insensible al desbalance de clases y proporciona una medida del rendimiento a diferentes umbrales</li>
          <li>Técnicas de rebalanceo: <strong>SMOTE</strong> (sobremuestreo), <strong>NearMiss</strong> (submuestreo), ajuste de class_weight</li>
        </ul>

        <h3>3.2. Sesgo de Confirmación y Sobreajuste</h3>
        <p>
          El sesgo de confirmación se refiere al sobreajuste: el modelo aprende los detalles y ruido de los datos de entrenamiento en lugar de las tendencias generales. Las métricas comunes como la precisión y el F1-score pueden indicar alto rendimiento en entrenamiento, ocultando la incapacidad del modelo para generalizar.
        </p>
        <p>
          Para mitigar este riesgo: usar validación cruzada robusta y evaluar siempre sobre datos no vistos.
        </p>

        <h3>3.3. Elección de Métricas Basada en el Contexto</h3>
        <p>
          No existe una "talla única" en métricas de rendimiento. La elección debe adaptarse al problema:
        </p>
        <ul>
          <li><strong>Diagnóstico médico:</strong> Recall alto (minimizar falsos negativos — no perder casos positivos)</li>
          <li><strong>Detección de spam:</strong> Precisión alta (no marcar correos legítimos como spam)</li>
          <li><strong>Detección de fraude:</strong> F1 y AUC-ROC (equilibrio entre detectar fraudes y no generar falsas alarmas)</li>
          <li><strong>Marketing dirigido:</strong> Precisión (maximizar relevancia de los impactos positivos)</li>
        </ul>

        <h2>Tema 4: AUC-ROC y Curvas de Análisis</h2>

        <h3>4.1. La Curva ROC (Receiver Operating Characteristic)</h3>
        <p>
          La <strong>curva ROC</strong> es una gráfica que muestra la relación entre la Tasa de Verdaderos Positivos (TPR) y la Tasa de Falsos Positivos (FPR) a varios umbrales de decisión. Proporciona una visión clara de cómo el modelo equilibra la detección de casos positivos (sensibilidad) con la evitación de falsos positivos.
        </p>

        <h3>4.2. AUC (Área Bajo la Curva)</h3>
        <p>
          El <strong>AUC</strong> es una medida cuantitativa que resume la información de la curva ROC:
        </p>
        <ul>
          <li><strong>AUC = 1.0:</strong> Modelo perfecto (separa perfectamente las clases)</li>
          <li><strong>AUC = 0.5:</strong> Modelo aleatorio (no mejor que el azar — curva diagonal)</li>
          <li><strong>AUC &gt; 0.7:</strong> Modelo aceptable</li>
          <li><strong>AUC &gt; 0.9:</strong> Modelo excelente</li>
        </ul>
        <p>
          El AUC es especialmente valioso porque es <strong>insensible al desbalance de clases</strong> y permite comparar modelos independientemente del umbral de decisión elegido.
        </p>
        <pre>{`from sklearn.metrics import roc_auc_score, roc_curve
import matplotlib.pyplot as plt

# Calcular AUC-ROC
y_prob = clf.predict_proba(X_test)[:, 1]
auc = roc_auc_score(y_test, y_prob)
print(f"AUC-ROC: {auc:.4f}")

# Trazar curva ROC
fpr, tpr, thresholds = roc_curve(y_test, y_prob)
plt.plot(fpr, tpr, label=f'ROC (AUC = {auc:.2f})')
plt.plot([0, 1], [0, 1], 'k--', label='Aleatorio')
plt.xlabel('Tasa de Falsos Positivos')
plt.ylabel('Tasa de Verdaderos Positivos')
plt.title('Curva ROC')
plt.legend()
plt.show()`}</pre>

        <h3>4.3. Curva de Ganancia y Curva Lift</h3>
        <p>
          Dos herramientas analíticas utilizadas principalmente en marketing y negocios:
        </p>
        <ul>
          <li>
            <strong>Curva de Ganancia:</strong> Muestra el porcentaje de casos positivos totales capturados al considerar diferentes proporciones de la población.
            <br />Ejemplo en marketing: podría mostrar cuántos clientes respondieron a una campaña en función de diferentes segmentos de la base de clientes.
          </li>
          <li>
            <strong>Curva Lift:</strong> Mide cuánto mejor es el modelo comparado con una selección aleatoria. Un Lift de 3 en el primer decil significa que el modelo es 3 veces mejor que seleccionar aleatoriamente.
          </li>
        </ul>
        <p>
          A diferencia de la curva ROC (que compara modelos), las curvas de Ganancia y Lift se usan para <em>explotar</em> el modelo en producción, determinando qué proporción de la población contactar para maximizar el retorno.
        </p>

        <h2>Resumen de Métricas y Casos de Uso</h2>
        <pre>{`from sklearn.metrics import (
    accuracy_score, precision_score, recall_score,
    f1_score, roc_auc_score, classification_report,
    confusion_matrix
)

# Evaluación completa
y_pred = clf.predict(X_test)
y_prob = clf.predict_proba(X_test)[:, 1]

print("Accuracy:  ", accuracy_score(y_test, y_pred))
print("Precisión: ", precision_score(y_test, y_pred))
print("Recall:    ", recall_score(y_test, y_pred))
print("F1-Score:  ", f1_score(y_test, y_pred))
print("AUC-ROC:   ", roc_auc_score(y_test, y_prob))
print()
print(classification_report(y_test, y_pred))
print(confusion_matrix(y_test, y_pred))`}</pre>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/calibracion-metricas" className="text-sm text-slate-500 hover:text-teal-600">← Volver a Calibración y Métricas</Link>
        <div className="flex gap-3">
          <Link href="/calibracion-metricas/ud5/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD5</Link>
          <Link href="/calibracion-metricas/ud6" className="text-sm bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-semibold">Siguiente: UD6 →</Link>
        </div>
      </div>
    </div>
  );
}
