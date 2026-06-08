import Link from "next/link";

export default function UD3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/calibracion-metricas" className="text-sm text-teal-600 hover:underline">← Calibración y Métricas</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-teal-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">3</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD3: Introducción a las Métricas de Rendimiento de Modelos de Machine Learning</h1>
            <p className="text-slate-500 text-sm">Calibración, métricas y explicabilidad de modelos de IA</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/calibracion-metricas/ud2" className="text-sm text-slate-500 hover:text-teal-600">← UD2</Link>
          <Link href="/calibracion-metricas/ud4" className="text-sm text-slate-500 hover:text-teal-600">Siguiente: UD4 →</Link>
          <Link href="/calibracion-metricas/ud3/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-8 text-sm text-teal-800">
        <strong>Temas:</strong> Contexto IA/ML · Tipos de aprendizaje · Algoritmos supervisados y no supervisados · Definición de métricas · Evaluación de modelos · Overfitting/Underfitting · Datos desbalanceados
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Las métricas de rendimiento son el puente entre el entrenamiento de un modelo de Machine Learning y su utilidad práctica. Sin una evaluación rigurosa, es imposible saber si un modelo generaliza correctamente o simplemente memoriza los datos de entrenamiento. Esta unidad establece el marco conceptual necesario para entender qué son las métricas, por qué importan y cómo seleccionarlas adecuadamente.
        </p>
        <p>
          En un proyecto de ciencia de datos, aproximadamente el <strong>60-70% del tiempo</strong> se dedica al preprocesamiento de datos, y el <strong>20-30%</strong> restante a la ingeniería de características, selección del modelo y evaluación.
        </p>

        <h2>Tema 1: Contexto Actual en Algoritmos de Machine Learning</h2>

        <h3>La jerarquía de la IA</h3>
        <p>La Inteligencia Artificial engloba un conjunto de disciplinas ordenadas jerárquicamente:</p>
        <ul>
          <li><strong>Inteligencia Artificial (IA):</strong> Campo más amplio que busca crear sistemas capaces de realizar tareas que requieren inteligencia humana.</li>
          <li><strong>Machine Learning (ML):</strong> Subconjunto de la IA donde los sistemas aprenden de los datos sin ser explícitamente programados.</li>
          <li><strong>Deep Learning (DL):</strong> Subconjunto de ML basado en redes neuronales profundas con múltiples capas.</li>
          <li><strong>IA Generativa:</strong> Subconjunto de DL capaz de generar contenido nuevo (texto, imágenes, audio).</li>
        </ul>
        <div className="formula">IA ⊃ Machine Learning ⊃ Deep Learning ⊃ IA Generativa</div>

        <h3>Tipos de Machine Learning</h3>
        <p>Existen cuatro paradigmas principales de aprendizaje automático:</p>
        <ul>
          <li>
            <strong>Aprendizaje supervisado:</strong> El modelo aprende a partir de pares (entrada, etiqueta). Los datos de entrenamiento están etiquetados. Ejemplos: clasificación, regresión.
          </li>
          <li>
            <strong>Aprendizaje semi-supervisado:</strong> Combina datos etiquetados (pocos) y no etiquetados (muchos). Útil cuando etiquetar datos es costoso.
          </li>
          <li>
            <strong>Aprendizaje no supervisado:</strong> El modelo descubre estructuras en datos sin etiquetas. Ejemplos: clustering, reducción de dimensionalidad.
          </li>
          <li>
            <strong>Aprendizaje por refuerzo:</strong> Un agente aprende tomando acciones en un entorno para maximizar una recompensa acumulada.
          </li>
        </ul>

        <h3>Principales algoritmos supervisados</h3>
        <table>
          <thead>
            <tr>
              <th>Algoritmo</th>
              <th>Tipo</th>
              <th>Uso principal</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Regresión Lineal</td><td>Regresión</td><td>Predecir valores continuos</td></tr>
            <tr><td>Ridge</td><td>Regresión regularizada</td><td>Evitar sobreajuste (L2)</td></tr>
            <tr><td>Lasso</td><td>Regresión regularizada</td><td>Selección de variables (L1)</td></tr>
            <tr><td>Árbol de Decisión</td><td>Clasificación/Regresión</td><td>Reglas interpretables</td></tr>
            <tr><td>Random Forest</td><td>Ensemble</td><td>Alta precisión, robusto</td></tr>
            <tr><td>Regresión Logística</td><td>Clasificación binaria</td><td>Probabilidades de clase</td></tr>
            <tr><td>SVM</td><td>Clasificación/Regresión</td><td>Datos de alta dimensión</td></tr>
            <tr><td>K-NN</td><td>Clasificación/Regresión</td><td>Basado en similitud</td></tr>
            <tr><td>Naive Bayes</td><td>Clasificación</td><td>Texto, datos categóricos</td></tr>
            <tr><td>Gradient Boosting</td><td>Ensemble</td><td>Alta precisión competitiva</td></tr>
            <tr><td>AdaBoost</td><td>Ensemble</td><td>Combinar clasificadores débiles</td></tr>
            <tr><td>LDA</td><td>Clasificación</td><td>Reducción dimensional supervisada</td></tr>
          </tbody>
        </table>

        <h3>Principales algoritmos no supervisados</h3>
        <table>
          <thead>
            <tr>
              <th>Algoritmo</th>
              <th>Tipo</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>K-means</td><td>Clustering por partición</td></tr>
            <tr><td>Clustering Jerárquico</td><td>Clustering aglomerativo</td></tr>
            <tr><td>DBSCAN</td><td>Clustering por densidad</td></tr>
            <tr><td>PCA</td><td>Reducción de dimensionalidad</td></tr>
            <tr><td>Reglas de Asociación</td><td>Descubrimiento de patrones</td></tr>
          </tbody>
        </table>

        <h2>Tema 2: Definición e Importancia de las Métricas</h2>
        <p>
          Una <strong>métrica de rendimiento</strong> es una función matemática que cuantifica el grado de acierto o error de un modelo predictivo. Las métricas permiten:
        </p>
        <ul>
          <li>Comparar objetivamente diferentes modelos</li>
          <li>Seleccionar el modelo más adecuado para un problema específico</li>
          <li>Identificar áreas de mejora (¿el modelo falla más en una clase?)</li>
          <li>Comunicar el rendimiento a stakeholders no técnicos</li>
        </ul>

        <h3>Diferencia entre métricas de clasificación y regresión</h3>
        <p>
          La elección de métricas depende del tipo de problema:
        </p>
        <ul>
          <li>
            <strong>Clasificación:</strong> La variable objetivo es categórica. Se usan métricas como MCC (Matthews Correlation Coefficient), Specificity, Sensitivity, Accuracy.
          </li>
          <li>
            <strong>Regresión:</strong> La variable objetivo es continua. Se usan métricas como RMSE (Root Mean Squared Error), R² (coeficiente de determinación), MSE (Mean Squared Error).
          </li>
        </ul>

        <h3>Métricas principales de clasificación</h3>
        <ul>
          <li><strong>Accuracy:</strong> Porcentaje de predicciones correctas sobre el total.</li>
          <li><strong>Sensitivity (Recall):</strong> Capacidad para detectar los verdaderos positivos.</li>
          <li><strong>Specificity:</strong> Capacidad para detectar los verdaderos negativos.</li>
          <li><strong>MCC:</strong> Métrica robusta para datasets desbalanceados que considera los cuatro valores de la matriz de confusión.</li>
        </ul>

        <h3>Métricas principales de regresión</h3>
        <ul>
          <li><strong>MSE (Mean Squared Error):</strong> Promedio de los errores al cuadrado. Penaliza los errores grandes.</li>
          <li><strong>RMSE (Root MSE):</strong> Raíz cuadrada del MSE. Mismas unidades que la variable objetivo.</li>
          <li><strong>R² (Coeficiente de Determinación):</strong> Proporción de varianza explicada por el modelo. Varía entre 0 y 1 (1 = ajuste perfecto).</li>
        </ul>

        <h2>Tema 3: Evaluación de Modelos en la Práctica</h2>

        <h3>División de datos: TRAINING / VALIDATION / TEST</h3>
        <p>
          El conjunto de datos se divide en tres subconjuntos con propósitos distintos:
        </p>
        <ul>
          <li>
            <strong>Training (60-70%):</strong> Datos usados para entrenar el modelo y ajustar sus parámetros.
          </li>
          <li>
            <strong>Validation (10-20%):</strong> Datos usados para ajustar hiperparámetros y comparar modelos durante el desarrollo. El modelo no los ve durante el entrenamiento.
          </li>
          <li>
            <strong>Test (20%):</strong> Datos reservados para la evaluación final. Solo se usan una vez, al final del proceso.
          </li>
        </ul>
        <div className="formula">División típica: 80% (Train + Validation) / 20% Test</div>

        <p>
          Una mala práctica muy común es usar el conjunto de test para seleccionar modelos o ajustar hiperparámetros, lo que produce <em>data leakage</em> y una estimación optimista del rendimiento real.
        </p>

        <h3>Validación cruzada</h3>
        <p>
          La validación cruzada (ver UD2) permite estimar el rendimiento del modelo con mayor fiabilidad que una única división, especialmente cuando los datos son escasos. El K-Fold estratificado es la variante más recomendada para clasificación.
        </p>

        <h3>Overfitting y Underfitting</h3>
        <p>
          Dos fenómenos opuestos que indican un ajuste inadecuado del modelo:
        </p>
        <ul>
          <li>
            <strong>Overfitting (sobreajuste):</strong> El modelo aprende el ruido del conjunto de entrenamiento. Síntoma: rendimiento muy alto en train pero bajo en test.
            <br />Soluciones: Regularización (L1/L2), reducir complejidad del modelo, más datos, dropout (redes neuronales).
          </li>
          <li>
            <strong>Underfitting (subajuste):</strong> El modelo es demasiado simple para capturar los patrones. Síntoma: rendimiento bajo tanto en train como en test.
            <br />Soluciones: Aumentar complejidad, más características, menos regularización, más iteraciones.
          </li>
        </ul>

        <h3>Datos desbalanceados</h3>
        <p>
          En muchos problemas reales, las clases no están igualmente representadas. Esto afecta significativamente la evaluación del modelo:
        </p>
        <ul>
          <li>Un clasificador que siempre predice la clase mayoritaria puede obtener alta accuracy pero ser inútil.</li>
          <li>Se recomienda usar métricas robustas al desbalance: F1-Score, AUC-ROC, MCC.</li>
          <li>Técnicas de rebalanceo: SMOTE (sobremuestreo), NearMiss (submuestreo), ajuste de pesos de clase.</li>
        </ul>

        <h2>Caso Práctico: Predicción de Fraude con Datos Desequilibrados</h2>
        <p>
          Dataset de fraude en tarjetas de crédito (creditcard.csv). El objetivo es comparar el rendimiento de un modelo con y sin técnicas de rebalanceo, usando múltiples métricas.
        </p>

        <h3>Pipeline de evaluación</h3>
        <pre>{`import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (accuracy_score, f1_score,
                              roc_auc_score, classification_report)

data = pd.read_csv('creditcard.csv')
X = data.drop('Class', axis=1)
y = data['Class']

# División train/test (80/20)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

# Modelo base
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
y_pred = rf.predict(X_test)

# Múltiples métricas
print(f"Accuracy: {accuracy_score(y_test, y_pred):.4f}")
print(f"F1-Score: {f1_score(y_test, y_pred):.4f}")
print(f"AUC-ROC: {roc_auc_score(y_test, y_pred):.4f}")
print(classification_report(y_test, y_pred))`}</pre>

        <h3>Conclusión</h3>
        <p>
          Este caso práctico demuestra que la elección de métricas no es trivial: en un dataset con 0.17% de fraudes, un modelo que predice siempre "no fraude" obtiene 99.83% de accuracy. El uso de F1-Score, AUC-ROC y la matriz de confusión revela la realidad del rendimiento del modelo y guía las decisiones de mejora.
        </p>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/calibracion-metricas" className="text-sm text-slate-500 hover:text-teal-600">← Volver a Calibración y Métricas</Link>
        <div className="flex gap-3">
          <Link href="/calibracion-metricas/ud3/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD3</Link>
          <Link href="/calibracion-metricas/ud4" className="text-sm bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-semibold">Siguiente: UD4 →</Link>
        </div>
      </div>
    </div>
  );
}
