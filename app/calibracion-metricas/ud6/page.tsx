import Link from "next/link";

export default function UD6() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/calibracion-metricas" className="text-sm text-teal-600 hover:underline">← Calibración y Métricas</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-teal-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">6</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD6: Datos Balanceados</h1>
            <p className="text-slate-500 text-sm">Calibración, métricas y explicabilidad de los modelos</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/calibracion-metricas/ud5" className="text-sm text-slate-500 hover:text-teal-600">← UD5</Link>
          <Link href="/calibracion-metricas/ud6/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-8 text-sm text-teal-800">
        <strong>Temas:</strong> Introducción al balanceo · Submuestreo y NearMiss · Sobremuestreo · Caso práctico: Credit Card Fraud · Modelo básico vs NearMiss vs SMOTE
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Este módulo es la segunda parte de un caso de uso completo que abarca 4 sesiones de 90 minutos (módulos 5 y 6 conjuntamente). Se recomienda trabajar con ambos módulos de forma coordinada.
        </p>
        <p>
          La <strong>Inteligencia Artificial</strong> es un campo de la informática que busca desarrollar sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Uno de los enfoques más destacados es el aprendizaje automático (ML), donde los sistemas mejoran su rendimiento a través de la experiencia y la retroalimentación.
        </p>

        <h2>Tema 1: Introducción al Balanceo de Datos</h2>

        <h3>El problema del desbalanceo</h3>
        <p>
          En la mayoría de los casos de uso reales, los conjuntos de datos con los que trabajamos los científicos de datos no están bien balanceados. Normalmente en el mundo real la mayoría de los eventos siempre tienen el mismo valor, y solo un pequeño porcentaje son los eventos que queremos detectar.
        </p>
        <p>Ejemplos de tasas de desbalanceo en sectores reales:</p>
        <ul>
          <li><strong>Ciberseguridad:</strong> Tasas de ataque de 1 a 10.000 eventos normales</li>
          <li><strong>Detección de fraude:</strong> Tasas de 1 a 10 o 1 a 100</li>
          <li><strong>Medicina:</strong> Tasas similares al fraude para enfermedades raras</li>
        </ul>
        <p>
          Si los datos no se balancean correctamente, los modelos algorítmicos se convierten en <em>vagos</em> y siempre intentarán predecir que no se ha detectado el tipo de anomalía. El reto consiste en balancear correctamente las muestras para forzar a los modelos a detectar las anomalías dentro del conjunto elevado de datos.
        </p>
        <p>
          Un porcentaje menor al 4-5% de la clase minoritaria puede servir para detectar este tipo de patrones, pero por debajo de ese umbral el desbalanceo se vuelve crítico.
        </p>

        <h2>Tema 2: Submuestreo de Datos (Undersampling)</h2>
        <p>
          El <strong>submuestreo</strong> reduce el número de muestras de la clase mayoritaria para equilibrar el dataset. La idea es maximizar la información de las muestras de la clase minoritaria.
        </p>

        <h3>Técnica básica de submuestreo</h3>
        <p>
          La forma más sencilla consiste en dividir la muestra en dos grupos según la clase y crear un dataset donde el número de filas de cada grupo sea exactamente igual. Por ejemplo, si tenemos 400 muestras con clase 0 y 10.000 con clase 1, pasamos a 400 muestras de clase 0 y 400 de clase 1.
        </p>
        <p>
          <strong>Ventaja:</strong> Aumenta la información que tiene el modelo sobre las variables a detectar.<br />
          <strong>Desventaja:</strong> Perdemos información al reducir el número de muestras de entrenamiento. La selección aleatoria no siempre extrae las muestras más adecuadas.
        </p>

        <h2>Tema 3: NearMiss</h2>
        <p>
          <strong>NearMiss</strong> es una familia de métodos de submuestreo que seleccionan ejemplos de la clase mayoritaria en función de su <strong>distancia euclidiana</strong> con respecto a los ejemplos de la clase minoritaria. La idea básica es conservar los ejemplos que están cerca de la clase minoritaria y descartar los que están lejos.
        </p>

        <h3>Variantes de NearMiss</h3>
        <ul>
          <li><strong>NearMiss-1:</strong> Selecciona ejemplos de la clase mayoritaria cuya distancia media a los k vecinos más cercanos de la clase minoritaria es mínima.</li>
          <li><strong>NearMiss-2:</strong> Selecciona ejemplos de la clase mayoritaria cuya distancia media a los k vecinos más lejanos de la clase minoritaria es mínima.</li>
          <li><strong>NearMiss-3:</strong> Para cada muestra minoritaria, selecciona un número dado de los vecinos más cercanos de la clase mayoritaria.</li>
        </ul>
        <pre>{`from imblearn.under_sampling import NearMiss

# Aplicar NearMiss
nm = NearMiss(version=1, n_neighbors=3)
X_resampled, y_resampled = nm.fit_resample(X_train, y_train)
print(f"Distribución después de NearMiss: {dict(zip(*np.unique(y_resampled, return_counts=True)))}")`}</pre>

        <h2>Tema 4: Sobremuestreo de Datos (Oversampling)</h2>
        <p>
          El <strong>sobremuestreo</strong> genera más datos sintéticos de la clase minoritaria para equilibrar el dataset. A diferencia del submuestreo, no perdemos información; en su lugar, creamos nuevas muestras.
        </p>
        <p>
          Esta técnica es más peligrosa que el submuestreo, ya que generamos datos que no son reales y, por tanto, probablemente sean del valor de fraude pero no asegurado desde el punto de vista real.
        </p>

        <h3>SMOTE (Synthetic Minority Over-sampling Technique)</h3>
        <p>
          <strong>SMOTE</strong> crea ejemplos sintéticos de la clase minoritaria interpolando entre instancias existentes y sus vecinos más cercanos. A diferencia del sobremuestreo aleatorio (que simplemente duplica muestras), SMOTE crea ejemplos nuevos y variados.
        </p>
        <pre>{`from imblearn.over_sampling import SMOTE

smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)
print(f"Distribución después de SMOTE: {dict(zip(*np.unique(y_resampled, return_counts=True)))}")`}</pre>

        <h2>Caso Práctico: Credit Card Fraud Detection</h2>

        <h3>El Dataset</h3>
        <p>
          Dataset de Kaggle: <strong>Credit Card Fraud Detection</strong> (Machine Learning Group - ULB). Contiene transacciones realizadas con tarjetas de crédito europeas en septiembre de 2013.
        </p>
        <ul>
          <li>Total: <strong>284.807 transacciones</strong></li>
          <li>Fraudes: <strong>492</strong> (0,172% del total)</li>
          <li>Variables: 28 componentes PCA anónimas (V1-V28), Time, Amount, Class</li>
          <li>Variable objetivo: <code>Class</code> (0 = legítima, 1 = fraude)</li>
        </ul>

        <h3>Carga del Dataset</h3>
        <pre>{`import pandas as pd
from sklearn.model_selection import train_test_split

data = pd.read_csv('creditcard.csv')
print(data.Class.value_counts())
# 0    284315
# 1       492

X = data.drop('Class', axis=1)
y = data['Class']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=42
)`}</pre>

        <h3>Modelo Básico (Sin Balanceo)</h3>
        <p>
          Primero entrenamos un Random Forest básico sin ninguna técnica de balanceo para establecer la línea base:
        </p>
        <pre>{`from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, f1_score, confusion_matrix

clf_base = RandomForestClassifier(n_estimators=100, random_state=42)
clf_base.fit(X_train, y_train)
y_pred_base = clf_base.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred_base):.6f}")  # 0.9995
print(f"F1-Score: {f1_score(y_test, y_pred_base):.4f}")        # ~0.84
print(confusion_matrix(y_test, y_pred_base))
# [[85256   44]
#  [   55   88]]`}</pre>

        <p>
          Resultados del modelo básico:
        </p>
        <ul>
          <li><strong>Accuracy: 0.9995</strong> — Alta pero engañosa</li>
          <li><strong>F1-Score: ~0.84</strong> — Razonable pero mejorable</li>
          <li>La matriz de confusión revela: 55 fraudes no detectados (FN) y 44 falsas alarmas (FP)</li>
        </ul>

        <h3>Modelo con NearMiss (Submuestreo)</h3>
        <pre>{`from imblearn.under_sampling import NearMiss
from sklearn.metrics import classification_report

nm = NearMiss(version=1)
X_nm, y_nm = nm.fit_resample(X_train, y_train)
print(f"Distribución NearMiss: {dict(zip(*np.unique(y_nm, return_counts=True)))}")

clf_nm = RandomForestClassifier(n_estimators=100, random_state=42)
clf_nm.fit(X_nm, y_nm)
y_pred_nm = clf_nm.predict(X_test)

print(classification_report(y_test, y_pred_nm))`}</pre>

        <h3>Modelo con SMOTE (Sobremuestreo)</h3>
        <pre>{`from imblearn.over_sampling import SMOTE

smote = SMOTE(random_state=42)
X_smote, y_smote = smote.fit_resample(X_train, y_train)
print(f"Distribución SMOTE: {dict(zip(*np.unique(y_smote, return_counts=True)))}")
# Ambas clases con ~199.000 muestras

clf_smote = RandomForestClassifier(n_estimators=100, random_state=42)
clf_smote.fit(X_smote, y_smote)
y_pred_smote = clf_smote.predict(X_test)

print(f"Accuracy: {accuracy_score(y_test, y_pred_smote):.4f}")
print(f"F1-Score: {f1_score(y_test, y_pred_smote):.4f}")
print(f"Recall:   {recall_score(y_test, y_pred_smote):.4f}")`}</pre>

        <h3>Comparación de Técnicas</h3>
        <table>
          <thead>
            <tr>
              <th>Técnica</th>
              <th>Accuracy</th>
              <th>F1-Score</th>
              <th>Recall</th>
              <th>Observación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Modelo Base</td>
              <td>0.9995</td>
              <td>~0.84</td>
              <td>~0.62</td>
              <td>Alta accuracy, pero pierde fraudes</td>
            </tr>
            <tr>
              <td>NearMiss</td>
              <td>Variable</td>
              <td>Variable</td>
              <td>Alto</td>
              <td>Mejor detección, más FP posibles</td>
            </tr>
            <tr>
              <td>SMOTE</td>
              <td>Alto</td>
              <td>Mayor</td>
              <td>Mayor</td>
              <td>Mejor equilibrio general</td>
            </tr>
          </tbody>
        </table>

        <h3>Conclusión</h3>
        <p>
          La <strong>accuracy es una medida muy peligrosa para los modelos muy desbalanceados</strong>. Un modelo que siempre devuelve 0 (no fraude) tiene accuracy del 99.83% pero F1-Score de 0. El objetivo no es maximizar la accuracy, sino maximizar la detección de fraudes (recall) sin generar demasiadas falsas alarmas (precisión). El equilibrio óptimo entre ambas depende del contexto de negocio y los costes asociados a cada tipo de error.
        </p>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/calibracion-metricas" className="text-sm text-slate-500 hover:text-teal-600">← Volver a Calibración y Métricas</Link>
        <div className="flex gap-3">
          <Link href="/calibracion-metricas/ud6/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD6</Link>
        </div>
      </div>
    </div>
  );
}
