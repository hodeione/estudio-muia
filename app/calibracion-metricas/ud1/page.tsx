import Link from "next/link";

export default function UD1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/calibracion-metricas" className="text-sm text-teal-600 hover:underline">← Calibración y Métricas</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-teal-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">1</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD1: XAI. Definición, Conceptos y Propiedades</h1>
            <p className="text-slate-500 text-sm">Calibración, métricas y explicabilidad de modelos de IA</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/calibracion-metricas/ud2" className="text-sm text-slate-500 hover:text-teal-600">Siguiente: UD2 →</Link>
          <Link href="/calibracion-metricas/ud1/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 mb-8 text-sm text-teal-800">
        <strong>Temas:</strong> Definición de XAI · Conceptos aplicables al modelo y al resultado · Propiedades y objetivos · SHAP · LIME e ICE · Caso práctico
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          La Inteligencia Artificial Explicable (<strong>XAI, Explainable Artificial Intelligence</strong>) es una disciplina de la IA que busca que los modelos sean comprensibles e interpretables por los seres humanos. A medida que los sistemas de IA se vuelven más complejos y se emplean en decisiones críticas (medicina, justicia, finanzas), la capacidad de explicar sus predicciones se convierte en un requisito fundamental.
        </p>
        <p>
          Las referencias formales más relevantes en XAI son <strong>Barredo et al. (2020)</strong> y <strong>Escobar et al. (2021)</strong>, quienes sistematizan los conceptos y propiedades que deben guiar el diseño de sistemas explicables.
        </p>

        <h2>Tema 1: Definición de XAI</h2>
        <p>
          XAI engloba técnicas y métodos que permiten a los usuarios entender, confiar y gestionar sistemas de IA de manera efectiva. A diferencia de los modelos de "caja negra" (black-box), donde solo se conocen las entradas y salidas, los sistemas XAI proporcionan una visión interna del proceso de decisión.
        </p>
        <p>
          El objetivo principal de XAI es producir modelos más explicables sin sacrificar demasiado rendimiento predictivo. Esto implica un equilibrio entre <em>explicabilidad</em> y <em>precisión</em>: los modelos más simples suelen ser más interpretables, pero los más complejos (redes neuronales profundas, Random Forests con muchos árboles) tienden a ofrecer mayor rendimiento.
        </p>

        <h2>Tema 2: Conceptos Aplicables a XAI</h2>

        <h3>2.1. Conceptos aplicables al modelo</h3>
        <p>Estos conceptos describen propiedades internas del modelo que facilitan su comprensión:</p>

        <h4>Inteligibilidad</h4>
        <p>
          Un modelo es <strong>inteligible</strong> cuando su mecanismo de decisión puede ser entendido directamente por el ser humano sin necesidad de herramientas adicionales. Los árboles de decisión poco profundos y las regresiones lineales son ejemplos de modelos inteligibles por diseño.
        </p>

        <h4>Comprensibilidad</h4>
        <p>
          La <strong>comprensibilidad</strong> se refiere a la capacidad del modelo para generar representaciones que los humanos puedan procesar mentalmente. Un modelo comprensible no solo es inteligible, sino que produce explicaciones que el usuario puede asimilar e integrar en su conocimiento previo.
        </p>

        <h4>Transparencia</h4>
        <p>
          Un modelo <strong>transparente</strong> permite conocer su estructura interna, sus parámetros y el proceso de entrenamiento. La transparencia implica que los desarrolladores y auditores pueden inspeccionar cómo el modelo transforma las entradas en salidas en cada etapa del procesamiento.
        </p>

        <h3>2.2. Conceptos aplicables al resultado</h3>
        <p>Estos conceptos se refieren a cómo se explican las predicciones o salidas del modelo:</p>

        <h4>Explicabilidad</h4>
        <p>
          La <strong>explicabilidad</strong> es la capacidad de proporcionar una justificación comprensible de por qué un modelo tomó una determinada decisión. Una explicación puede ser global (describe el comportamiento general del modelo) o local (justifica una predicción específica para una instancia concreta).
        </p>

        <h4>Explicabilidad Post-Hoc</h4>
        <p>
          La <strong>explicabilidad post-hoc</strong> se aplica a modelos ya entrenados, sin modificar su estructura. En lugar de construir un modelo intrínsecamente explicable, se utilizan técnicas externas (como SHAP o LIME) para generar explicaciones después del entrenamiento. Es especialmente útil con modelos complejos tipo caja negra donde la transparencia nativa es limitada.
        </p>

        <h2>Tema 3: Propiedades y Objetivos Aplicados a XAI</h2>
        <p>Barredo et al. (2020) identifican siete propiedades clave que debe cumplir un sistema XAI:</p>

        <h4>Privacidad</h4>
        <p>
          Las explicaciones deben garantizar que no se revela información sensible o privada de los datos de entrenamiento. Un sistema explicable que expone datos personales infringe principios éticos y legales (RGPD).
        </p>

        <h4>Fiabilidad</h4>
        <p>
          Las explicaciones deben ser <strong>consistentes y robustas</strong>: dos instancias similares deberían recibir explicaciones similares, y pequeñas perturbaciones en los datos no deberían producir explicaciones radicalmente diferentes.
        </p>

        <h4>Causalidad</h4>
        <p>
          Una explicación causal va más allá de la correlación e identifica las relaciones de causa-efecto reales entre variables. Esto es especialmente importante en aplicaciones donde se toman decisiones de alto impacto.
        </p>

        <h4>Transferibilidad</h4>
        <p>
          Las explicaciones generadas deben ser aplicables en diferentes contextos o dominios, permitiendo que el conocimiento extraído de un modelo sea reutilizable en situaciones nuevas.
        </p>

        <h4>Informatividad</h4>
        <p>
          Una explicación <strong>informativa</strong> aporta valor real al usuario, respondiendo a preguntas concretas sobre el comportamiento del modelo. No basta con generar una explicación; debe ser relevante y útil para la toma de decisiones.
        </p>

        <h4>Imparcialidad</h4>
        <p>
          Los sistemas XAI deben identificar y comunicar posibles sesgos del modelo. Una explicación imparcial no favorece ni perjudica injustamente a ningún grupo, y permite detectar discriminaciones en el sistema.
        </p>

        <h4>Interactividad</h4>
        <p>
          La interactividad permite al usuario explorar diferentes escenarios y recibir explicaciones adaptadas a sus consultas ("¿qué pasaría si cambiamos esta variable?"). Los sistemas interactivos de XAI mejoran la confianza y comprensión del usuario.
        </p>

        <h2>Tema 4: SHAP (Shapley Additive Explanations)</h2>
        <p>
          <strong>SHAP</strong> es uno de los métodos post-hoc más utilizados en XAI. Se basa en la teoría de juegos cooperativos, concretamente en los <em>valores de Shapley</em>, para asignar a cada característica su contribución marginal a la predicción del modelo.
        </p>
        <p>
          La librería Python <code>shap</code> (documentación: shap.readthedocs.io) proporciona implementaciones eficientes para distintos tipos de modelos.
        </p>

        <h3>Tipos de gráficos SHAP</h3>
        <ul>
          <li>
            <strong>Summary plot:</strong> Muestra la importancia global de cada característica. Combina la importancia con la dirección del efecto (positivo o negativo) mediante un gráfico de puntos codificado por color.
          </li>
          <li>
            <strong>Force plot:</strong> Explicación local para una instancia concreta. Visualiza cómo cada variable "empuja" la predicción hacia valores más altos (en rojo) o más bajos (en azul) respecto al valor base del modelo.
          </li>
          <li>
            <strong>Dependence plot:</strong> Muestra la relación entre una variable específica y sus valores SHAP, revelando tendencias no lineales e interacciones con otras variables.
          </li>
        </ul>

        <h3>TreeExplainer</h3>
        <p>
          Para modelos basados en árboles (Random Forest, Gradient Boosting, XGBoost), SHAP utiliza el <strong>TreeExplainer</strong>, un algoritmo altamente eficiente que calcula los valores SHAP exactos en tiempo polinómico. Esto lo hace especialmente adecuado para grandes conjuntos de datos.
        </p>

        <h3>Ejemplo de uso en Python</h3>
        <pre>{`import shap
import numpy as np

# Crear explainer para un modelo basado en árboles
explainer = shap.TreeExplainer(modelo_rf)

# Calcular valores SHAP para el conjunto de test
shap_values = explainer.shap_values(X_test)

# Summary plot (importancia global)
shap.summary_plot(shap_values[1], X_test)

# Force plot (explicación local para la primera instancia)
shap.force_plot(explainer.expected_value[1],
                shap_values[1][0], X_test.iloc[0])`}</pre>

        <h2>Tema 5: Otros Métodos de XAI</h2>

        <h3>LIME (Local Interpretable Model-Agnostic Explanations)</h3>
        <p>
          <strong>LIME</strong> genera explicaciones locales creando un modelo interpretable simple (por ejemplo, una regresión lineal) en el entorno de una instancia concreta. Pertuba la instancia de interés, obtiene las predicciones del modelo original, y ajusta el modelo simple sobre esas perturbaciones.
        </p>
        <p>
          LIME es <em>agnóstico al modelo</em>: funciona con cualquier clasificador o regresor, independientemente de su arquitectura interna.
        </p>

        <h3>ICE (Individual Conditional Expectation)</h3>
        <p>
          Las gráficas <strong>ICE</strong> muestran cómo la predicción de una instancia específica cambia cuando se varía el valor de una característica, manteniendo las demás constantes. Son la versión individual de los <em>Partial Dependence Plots (PDP)</em>, y permiten detectar heterogeneidad en los efectos de las variables.
        </p>

        <h2>Caso Práctico: Explicación de un Modelo de Clasificación usando SHAP</h2>
        <p>
          En este caso práctico se construye un modelo de clasificación con <strong>Random Forest</strong> sobre un dataset sintético generado con <code>make_classification</code> de scikit-learn (300 muestras, 10 características). El objetivo es aplicar SHAP para interpretar las predicciones del modelo.
        </p>

        <h3>Resultados del modelo</h3>
        <ul>
          <li>Accuracy en test: <strong>0.89</strong></li>
          <li>Se utiliza <code>TreeExplainer</code> para calcular los valores SHAP</li>
          <li>El summary plot revela las características más influyentes globalmente</li>
          <li>El force plot muestra la contribución individual de cada variable para una predicción concreta</li>
        </ul>

        <h3>Código del caso práctico</h3>
        <pre>{`from sklearn.datasets import make_classification
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
import shap

# Generar datos sintéticos
X, y = make_classification(n_samples=300, n_features=10, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Entrenar Random Forest
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Evaluar
y_pred = rf.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")  # 0.89

# Explicar con SHAP
explainer = shap.TreeExplainer(rf)
shap_values = explainer.shap_values(X_test)
shap.summary_plot(shap_values[1], X_test)`}</pre>

        <p>
          Este caso práctico ilustra cómo la explicabilidad post-hoc con SHAP permite auditar un modelo de caja negra, identificar las variables más relevantes y comunicar el comportamiento del modelo de forma transparente a stakeholders no técnicos.
        </p>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/calibracion-metricas" className="text-sm text-slate-500 hover:text-teal-600">← Volver a Calibración y Métricas</Link>
        <div className="flex gap-3">
          <Link href="/calibracion-metricas/ud1/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD1</Link>
          <Link href="/calibracion-metricas/ud2" className="text-sm bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-semibold">Siguiente: UD2 →</Link>
        </div>
      </div>
    </div>
  );
}
