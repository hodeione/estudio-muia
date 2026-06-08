import Link from "next/link";

export default function UD2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/calibracion-metricas" className="text-sm text-teal-600 hover:underline">← Calibración y Métricas</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-teal-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">2</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD2: Estabilidad y Sesgos</h1>
            <p className="text-slate-500 text-sm">Calibración, métricas y explicabilidad de los modelos</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/calibracion-metricas/ud1" className="text-sm text-slate-500 hover:text-teal-600">← UD1</Link>
          <Link href="/calibracion-metricas/ud3" className="text-sm text-slate-500 hover:text-teal-600">Siguiente: UD3 →</Link>
          <Link href="/calibracion-metricas/ud2/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-8 text-sm text-teal-800">
        <strong>Temas:</strong> Sesgo vs Varianza · Validación cruzada (K-fold, LOO, LPO, Estratificada, Agrupada, Series temporales) · SMOTE · Caso práctico: Detección de fraude
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          La estabilidad y los sesgos son conceptos fundamentales para evaluar la calidad y confiabilidad de los modelos de Machine Learning. Un modelo que generaliza correctamente debe equilibrar el sesgo (bias) y la varianza, dos fuentes de error que determinan su comportamiento tanto en los datos de entrenamiento como en datos nuevos.
        </p>
        <p>
          La <strong>validación cruzada</strong> es la técnica principal para estimar de forma robusta el rendimiento de un modelo, reduciendo la dependencia de una división concreta de los datos.
        </p>

        <h2>Tema 1: Sesgo y Varianza (Bias-Variance Tradeoff)</h2>

        <h3>Sesgo (Bias)</h3>
        <p>
          El <strong>sesgo</strong> representa los errores sistemáticos que comete un modelo debido a suposiciones simplistas sobre los datos. Un modelo con alto sesgo:
        </p>
        <ul>
          <li>Es poco flexible (modelos lineales para datos no lineales)</li>
          <li>Produce <strong>subajuste (underfitting)</strong>: el modelo no captura los patrones del dataset</li>
          <li>Tiene mal rendimiento tanto en entrenamiento como en test</li>
        </ul>

        <h3>Varianza</h3>
        <p>
          La <strong>varianza</strong> mide la sensibilidad del modelo a las fluctuaciones en los datos de entrenamiento. Un modelo con alta varianza:
        </p>
        <ul>
          <li>Es demasiado complejo (memoriza los datos de entrenamiento)</li>
          <li>Produce <strong>sobreajuste (overfitting)</strong>: funciona muy bien en entrenamiento pero mal en test</li>
          <li>Es inestable: pequeños cambios en los datos de entrenamiento cambian mucho las predicciones</li>
        </ul>

        <h3>El equilibrio sesgo-varianza</h3>
        <p>
          El <em>tradeoff</em> sesgo-varianza implica que reducir uno tiende a aumentar el otro. El objetivo es encontrar el punto de equilibrio donde el error total (sesgo² + varianza + ruido irreducible) sea mínimo. Las técnicas de regularización, la validación cruzada y la selección adecuada de hiperparámetros ayudan a encontrar ese punto óptimo.
        </p>
        <div className="formula">Error Total = Sesgo² + Varianza + Ruido irreducible</div>

        <h2>Tema 2: Validación Cruzada</h2>
        <p>
          La validación cruzada es un método de evaluación que divide el conjunto de datos en múltiples subconjuntos para estimar el rendimiento del modelo de forma más fiable que una única división train/test. Scikit-learn proporciona implementaciones para todos los iteradores descritos a continuación.
        </p>

        <h3>2.1. Iteradores para datos i.i.d.</h3>

        <h4>K-fold</h4>
        <p>
          El método más común. Divide las muestras en <strong>k pliegues (folds) iguales</strong>. En cada iteración, un pliegue se usa como test y los k-1 restantes como entrenamiento. Se repite k veces y se promedia el rendimiento.
        </p>
        <pre>{`from sklearn.model_selection import KFold
kf = KFold(n_splits=5, shuffle=True, random_state=42)`}</pre>

        <h4>K-fold repetido (Repeated K-Fold)</h4>
        <p>
          Repite el K-Fold <strong>n veces con diferentes divisiones aleatorias</strong>. Proporciona estimaciones más estables del rendimiento a costa de mayor tiempo de cómputo.
        </p>
        <pre>{`from sklearn.model_selection import RepeatedKFold
rkf = RepeatedKFold(n_splits=5, n_repeats=10, random_state=42)`}</pre>

        <h4>LOO (Leave One Out)</h4>
        <p>
          Caso extremo de K-fold donde k = n (número de muestras). <strong>Cada muestra es el conjunto de test una sola vez</strong>. Produce estimaciones muy poco sesgadas pero con alta varianza y coste computacional elevado.
        </p>
        <pre>{`from sklearn.model_selection import LeaveOneOut
loo = LeaveOneOut()`}</pre>

        <h4>LPO (Leave P Out)</h4>
        <p>
          Similar a LOO pero el conjunto de test contiene <strong>p muestras</strong> en lugar de 1. El número de combinaciones posibles crece exponencialmente con p, por lo que se usa solo para valores pequeños de p.
        </p>
        <pre>{`from sklearn.model_selection import LeavePOut
lpo = LeavePOut(p=2)`}</pre>

        <h3>2.2. Iteradores con estratificación</h3>

        <h4>KFold Estratificado (StratifiedKFold)</h4>
        <p>
          Preserva el <strong>porcentaje de muestras de cada clase</strong> en cada pliegue. Esencial cuando las clases están desbalanceadas para garantizar que todos los pliegues son representativos.
        </p>
        <pre>{`from sklearn.model_selection import StratifiedKFold
skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)`}</pre>

        <h4>División aleatoria estratificada (StratifiedShuffleSplit)</h4>
        <p>
          Variación de ShuffleSplit que mantiene la proporción de clases. Útil cuando se necesitan múltiples evaluaciones rápidas preservando el balance de clases.
        </p>
        <pre>{`from sklearn.model_selection import StratifiedShuffleSplit
sss = StratifiedShuffleSplit(n_splits=5, test_size=0.2, random_state=42)`}</pre>

        <h3>2.3. Iteradores para datos agrupados</h3>

        <h4>KFold agrupado (GroupKFold)</h4>
        <p>
          Garantiza que las muestras de un <strong>mismo grupo no aparezcan en entrenamiento y test simultáneamente</strong>. Fundamental cuando hay múltiples registros del mismo sujeto o entidad.
        </p>
        <pre>{`from sklearn.model_selection import GroupKFold
gkf = GroupKFold(n_splits=5)`}</pre>

        <h4>KFold agrupado estratificado (StratifiedGroupKFold)</h4>
        <p>
          Combina las propiedades de StratifiedKFold y GroupKFold: preserva el porcentaje de clases y asegura que los grupos no se dividan entre train y test.
        </p>
        <pre>{`from sklearn.model_selection import StratifiedGroupKFold
sgkf = StratifiedGroupKFold(n_splits=5)`}</pre>

        <h4>Dejar un grupo fuera (LeaveOneGroupOut)</h4>
        <p>
          En cada iteración, todas las muestras de <strong>un grupo completo</strong> forman el conjunto de test. Evalúa la capacidad de generalización a grupos no vistos.
        </p>
        <pre>{`from sklearn.model_selection import LeaveOneGroupOut
logo = LeaveOneGroupOut()`}</pre>

        <h4>Dejar P grupos fuera (LeavePGroupsOut)</h4>
        <p>
          Extensión de LeaveOneGroupOut donde se dejan fuera <strong>p grupos</strong> en cada iteración. Útil para evaluar la generalización cuando se excluyen múltiples grupos simultáneamente.
        </p>
        <pre>{`from sklearn.model_selection import LeavePGroupsOut
lpgo = LeavePGroupsOut(n_groups=2)`}</pre>

        <h3>2.4. Validación cruzada para series temporales</h3>

        <h4>TimeSeriesSplit</h4>
        <p>
          Diseñado para <strong>datos temporales</strong> donde el orden importa. Los primeros pliegues se usan como entrenamiento y los siguientes como test, respetando la cronología. Nunca se usa información futura para predecir el pasado.
        </p>
        <pre>{`from sklearn.model_selection import TimeSeriesSplit
tscv = TimeSeriesSplit(n_splits=5)

for train_idx, test_idx in tscv.split(X):
    X_train, X_test = X[train_idx], X[test_idx]
    y_train, y_test = y[train_idx], y[test_idx]`}</pre>

        <h2>Tema 3: Datos Desbalanceados y SMOTE</h2>
        <p>
          En muchos problemas reales (detección de fraude, diagnóstico médico, ciberseguridad), las clases están muy desbalanceadas. La clase minoritaria puede representar menos del 0,1% de los datos. En estos casos, un modelo que siempre predice la clase mayoritaria obtendrá alta accuracy pero será inútil en la práctica.
        </p>

        <h3>SMOTE (Synthetic Minority Over-sampling Technique)</h3>
        <p>
          <strong>SMOTE</strong> genera muestras sintéticas de la clase minoritaria interpolando entre instancias existentes de esa clase y sus vecinos más cercanos. A diferencia del sobremuestreo aleatorio (que simplemente duplica muestras), SMOTE crea ejemplos nuevos y variados.
        </p>
        <pre>{`from imblearn.over_sampling import SMOTE

smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)
# Ahora las clases están balanceadas`}</pre>

        <h2>Caso Práctico: Detección de Fraude en Tarjetas de Crédito</h2>
        <p>
          Dataset: <code>creditcard.csv</code> — transacciones de tarjetas de crédito europeas de septiembre 2013. Dataset altamente desbalanceado: 284.315 transacciones legítimas vs 492 fraudes (0,172%).
        </p>

        <h3>Pipeline del caso práctico</h3>
        <ol>
          <li>Carga del dataset con pandas</li>
          <li>División con <strong>StratifiedKFold</strong> (5 pliegues) para preservar la proporción de fraudes</li>
          <li>Aplicación de <strong>SMOTE</strong> dentro de cada pliegue (solo sobre entrenamiento) — resultado: 6.964 muestras de cada clase</li>
          <li>Entrenamiento de un clasificador</li>
          <li>Evaluación con F1-Score y Accuracy</li>
        </ol>

        <h3>Resultados obtenidos</h3>
        <ul>
          <li>Accuracy: <strong>0.99</strong> (alta pero engañosa por el desbalance)</li>
          <li>F1-Score: <strong>0.00</strong> sin SMOTE (el modelo no detecta fraudes)</li>
          <li>Tras SMOTE: mejora significativa en la detección de la clase minoritaria</li>
        </ul>

        <p>
          Este resultado ilustra por qué en datasets desbalanceados la accuracy es una métrica inadecuada y es necesario usar F1-Score, Recall o AUC-ROC para evaluar correctamente el modelo.
        </p>

        <pre>{`import pandas as pd
from sklearn.model_selection import StratifiedKFold
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import f1_score, accuracy_score
from imblearn.over_sampling import SMOTE

data = pd.read_csv('creditcard.csv')
X = data.drop('Class', axis=1)
y = data['Class']

skf = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
smote = SMOTE(random_state=42)

for fold, (train_idx, test_idx) in enumerate(skf.split(X, y)):
    X_tr, X_te = X.iloc[train_idx], X.iloc[test_idx]
    y_tr, y_te = y.iloc[train_idx], y.iloc[test_idx]

    # Aplicar SMOTE solo sobre entrenamiento
    X_res, y_res = smote.fit_resample(X_tr, y_tr)

    clf = LogisticRegression(max_iter=1000)
    clf.fit(X_res, y_res)
    y_pred = clf.predict(X_te)

    print(f"Fold {fold+1}: Acc={accuracy_score(y_te, y_pred):.4f}, F1={f1_score(y_te, y_pred):.4f}")`}</pre>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/calibracion-metricas" className="text-sm text-slate-500 hover:text-teal-600">← Volver a Calibración y Métricas</Link>
        <div className="flex gap-3">
          <Link href="/calibracion-metricas/ud2/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD2</Link>
          <Link href="/calibracion-metricas/ud3" className="text-sm bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-semibold">Siguiente: UD3 →</Link>
        </div>
      </div>
    </div>
  );
}
