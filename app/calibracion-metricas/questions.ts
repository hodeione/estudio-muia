import type { Question } from "@/app/components/InteractiveTest";

export const ud1Questions: Question[] = [
  {
    question: "¿Qué es la Inteligencia Artificial Explicable (XAI)?",
    options: [
      "Una disciplina de la IA que busca que los modelos sean comprensibles e interpretables por los seres humanos",
      "Una técnica de compresión de modelos que reduce su tamaño sin perder precisión",
      "Un conjunto de reglas para etiquetar datos de entrenamiento de forma automática",
      "Un framework para acelerar el entrenamiento de redes neuronales profundas",
    ],
  },
  {
    question: "¿Cuáles son los autores de referencia principales en XAI mencionados en la teoría?",
    options: [
      "Barredo et al. (2020) y Escobar et al. (2021)",
      "Vaswani et al. (2017) y LeCun et al. (2015)",
      "Goodfellow et al. (2014) y Hinton et al. (2006)",
      "Breiman et al. (2001) y Friedman et al. (2001)",
    ],
  },
  {
    question: "¿Qué es la inteligibilidad de un modelo en XAI?",
    options: [
      "La capacidad de que el mecanismo de decisión pueda ser entendido directamente por el ser humano sin herramientas adicionales",
      "La habilidad del modelo para generar explicaciones en lenguaje natural automáticamente",
      "La velocidad con la que el modelo genera predicciones en tiempo real",
      "La capacidad del modelo de adaptarse a nuevos datos sin reentrenamiento",
    ],
  },
  {
    question: "¿Qué diferencia hay entre la explicabilidad global y la local en XAI?",
    options: [
      "La global describe el comportamiento general del modelo; la local justifica una predicción específica para una instancia concreta",
      "La global usa SHAP y la local usa LIME; son técnicas complementarias",
      "La global aplica a clasificación; la local aplica a regresión",
      "La global requiere más datos; la local funciona con una sola muestra",
    ],
  },
  {
    question: "¿Qué es la explicabilidad post-hoc?",
    options: [
      "Técnicas que se aplican a modelos ya entrenados sin modificar su estructura, usando métodos externos para generar explicaciones",
      "Una forma de construir modelos explicables desde el inicio durante el diseño de la arquitectura",
      "Un método para explicar el proceso de preprocesamiento de datos antes del entrenamiento",
      "La explicación del rendimiento del modelo en datos de validación después del entrenamiento",
    ],
  },
  {
    question: "¿En qué teoría matemática se basa SHAP (Shapley Additive Explanations)?",
    options: [
      "En la teoría de juegos cooperativos, concretamente en los valores de Shapley",
      "En la teoría de grafos y el análisis espectral de redes neuronales",
      "En la teoría de la información y la entropía de Shannon",
      "En la geometría diferencial y los espacios de Hilbert",
    ],
  },
  {
    question: "¿Qué muestra el Summary Plot de SHAP?",
    options: [
      "La importancia global de cada característica combinada con la dirección del efecto (positivo o negativo)",
      "La explicación local para una instancia concreta mostrando cómo cada variable empuja la predicción",
      "La relación entre una variable y sus valores SHAP para detectar tendencias no lineales",
      "La diferencia entre predicciones del modelo y los valores reales en el conjunto de test",
    ],
  },
  {
    question: "¿Qué muestra el Force Plot de SHAP?",
    options: [
      "La explicación local para una instancia concreta: cómo cada variable empuja la predicción hacia arriba (rojo) o abajo (azul) respecto al valor base",
      "La importancia global de cada característica ordenada de mayor a menor",
      "La comparación entre las predicciones del modelo base y el modelo con todas las características",
      "Las interacciones entre pares de variables en el espacio de características",
    ],
  },
  {
    question: "¿Qué es el TreeExplainer en SHAP?",
    options: [
      "Un algoritmo eficiente para calcular valores SHAP exactos en modelos basados en árboles (Random Forest, XGBoost) en tiempo polinómico",
      "Una herramienta para visualizar la estructura interna de árboles de decisión entrenados",
      "Un método para transformar cualquier modelo en un árbol de decisión interpretable",
      "Un explorador de dependencias entre variables en modelos lineales",
    ],
  },
  {
    question: "¿Qué hace LIME (Local Interpretable Model-Agnostic Explanations)?",
    options: [
      "Genera explicaciones locales creando un modelo simple (regresión lineal) en el entorno de una instancia concreta mediante perturbaciones",
      "Calcula la importancia global de características usando valores de Shapley de la teoría de juegos",
      "Explica cómo cambia la predicción cuando se varía una variable manteniendo las demás constantes",
      "Construye un árbol de decisión simplificado como aproximación al modelo complejo entrenado",
    ],
  },
  {
    question: "¿Qué característica hace a LIME especialmente versátil?",
    options: [
      "Es agnóstico al modelo: funciona con cualquier clasificador o regresor independientemente de su arquitectura interna",
      "Es el único método XAI que funciona con modelos de deep learning",
      "Genera explicaciones en tiempo constante independientemente del tamaño del dataset",
      "Produce la misma explicación para instancias similares garantizando consistencia global",
    ],
  },
  {
    question: "¿Qué son los gráficos ICE (Individual Conditional Expectation)?",
    options: [
      "Gráficos que muestran cómo la predicción de una instancia específica cambia al variar una característica, manteniendo las demás constantes",
      "Una extensión de SHAP para visualizar interacciones entre pares de características",
      "Diagramas de dispersión que comparan los valores predichos con los valores reales",
      "Gráficos de importancia de características basados en la permutación de variables",
    ],
  },
  {
    question: "¿Cuántas propiedades clave identifica Barredo et al. (2020) para un sistema XAI?",
    options: [
      "Siete: privacidad, fiabilidad, causalidad, transferibilidad, informatividad, imparcialidad e interactividad",
      "Cinco: explicabilidad, transparencia, inteligibilidad, fiabilidad e imparcialidad",
      "Cuatro: comprensibilidad, causalidad, privacidad y robustez",
      "Seis: precisión, velocidad, transparencia, imparcialidad, seguridad y privacidad",
    ],
  },
  {
    question: "¿Qué implica la propiedad de fiabilidad en XAI?",
    options: [
      "Las explicaciones deben ser consistentes y robustas: instancias similares deben recibir explicaciones similares y pequeñas perturbaciones no deben cambiar radicalmente las explicaciones",
      "El modelo debe mantener el mismo rendimiento predictivo antes y después de añadir las explicaciones",
      "Las explicaciones deben generarse en tiempo real sin afectar la latencia del sistema",
      "Las predicciones del modelo deben coincidir con los valores reales en al menos el 90% de los casos",
    ],
  },
  {
    question: "¿Qué es el Dependence Plot en SHAP?",
    options: [
      "Un gráfico que muestra la relación entre una variable específica y sus valores SHAP, revelando tendencias no lineales e interacciones con otras variables",
      "Un diagrama que representa la dependencia temporal entre predicciones en series temporales",
      "Una visualización de cómo los errores del modelo dependen de la magnitud de los valores de entrada",
      "Un gráfico de correlación entre las características del dataset y la variable objetivo",
    ],
  },
  {
    question: "¿Cuál es el principal equilibrio que busca XAI?",
    options: [
      "Entre explicabilidad y precisión: los modelos más simples son más interpretables pero los complejos ofrecen mayor rendimiento",
      "Entre velocidad de inferencia y consumo de memoria",
      "Entre el número de características y el tamaño del dataset de entrenamiento",
      "Entre el coste computacional del entrenamiento y la calidad de las predicciones",
    ],
  },
  {
    question: "¿Qué diferencia un modelo de 'caja negra' de un sistema XAI?",
    options: [
      "En una caja negra solo se conocen entradas y salidas; los sistemas XAI proporcionan visión interna del proceso de decisión",
      "Las cajas negras solo funcionan con datos numéricos; los sistemas XAI también procesan texto e imágenes",
      "Los sistemas XAI son más rápidos de entrenar que las cajas negras",
      "Las cajas negras tienen mayor precisión; los sistemas XAI sacrifican todo el rendimiento por la explicabilidad",
    ],
  },
  {
    question: "¿Qué propiedad de XAI busca identificar y comunicar posibles sesgos del modelo?",
    options: [
      "Imparcialidad: las explicaciones no deben favorecer ni perjudicar injustamente a ningún grupo y deben permitir detectar discriminaciones",
      "Fiabilidad: las explicaciones deben ser consistentes para instancias similares",
      "Causalidad: las explicaciones deben ir más allá de la correlación e identificar relaciones causa-efecto",
      "Informatividad: las explicaciones deben aportar valor real respondiendo preguntas concretas",
    ],
  },
  {
    question: "¿Qué implica la propiedad de interactividad en XAI?",
    options: [
      "El usuario puede explorar diferentes escenarios ('¿qué pasaría si cambiamos esta variable?') y recibir explicaciones adaptadas a sus consultas",
      "El modelo puede actualizarse automáticamente con nuevos datos sin necesidad de reentrenamiento completo",
      "Las explicaciones se generan en tiempo real a medida que el modelo hace predicciones",
      "El sistema XAI puede comunicarse con otros modelos para generar explicaciones comparativas",
    ],
  },
  {
    question: "¿Para qué tipo de modelos es especialmente adecuado el TreeExplainer de SHAP?",
    options: [
      "Modelos basados en árboles: Random Forest, Gradient Boosting, XGBoost",
      "Redes neuronales profundas con capas convolucionales",
      "Modelos de regresión lineal y logística",
      "Cualquier tipo de modelo de machine learning de forma universal",
    ],
  },
];

export const ud2Questions: Question[] = [
  {
    question: "¿Qué es el sesgo (bias) en el contexto del tradeoff sesgo-varianza?",
    options: [
      "Los errores sistemáticos que comete un modelo debido a suposiciones simplistas sobre los datos, produciendo underfitting",
      "La sensibilidad del modelo a las fluctuaciones en los datos de entrenamiento, produciendo overfitting",
      "La diferencia entre el rendimiento en entrenamiento y en test",
      "La variación en las predicciones cuando se cambia el conjunto de entrenamiento",
    ],
  },
  {
    question: "¿Cuál es la fórmula del error total en el tradeoff sesgo-varianza?",
    options: [
      "Error Total = Sesgo² + Varianza + Ruido irreducible",
      "Error Total = Sesgo + Varianza + Error de generalización",
      "Error Total = (Sesgo × Varianza) / Ruido",
      "Error Total = Sesgo² × Varianza² + Ruido²",
    ],
  },
  {
    question: "¿Qué caracteriza a un modelo con alta varianza?",
    options: [
      "Sobreajuste (overfitting): funciona muy bien en entrenamiento pero mal en test, y es inestable ante cambios en los datos",
      "Subajuste (underfitting): mal rendimiento tanto en entrenamiento como en test",
      "Rendimiento constante independientemente del conjunto de datos usado",
      "Alta precisión en datos de test pero baja precisión en entrenamiento",
    ],
  },
  {
    question: "¿Qué es la validación cruzada K-fold?",
    options: [
      "Divide los datos en k pliegues iguales; en cada iteración un pliegue es test y los k-1 restantes son entrenamiento; se promedia el rendimiento en las k iteraciones",
      "Divide los datos una sola vez en k% entrenamiento y (100-k)% test y evalúa el rendimiento",
      "Usa el mismo conjunto de datos k veces con diferentes hiperparámetros para seleccionar el mejor modelo",
      "Divide los datos por clases y usa k muestras por clase para el entrenamiento",
    ],
  },
  {
    question: "¿Cuál es la ventaja del K-fold repetido (Repeated K-Fold) respecto al K-fold estándar?",
    options: [
      "Repite el K-fold n veces con diferentes divisiones aleatorias, proporcionando estimaciones más estables del rendimiento a costa de mayor tiempo de cómputo",
      "Es más rápido que el K-fold estándar al reutilizar los mismos pliegues",
      "Garantiza que cada muestra aparece exactamente una vez en el conjunto de test",
      "Reduce el sobreajuste al usar más datos para entrenamiento en cada iteración",
    ],
  },
  {
    question: "¿Qué es la validación cruzada Leave-One-Out (LOO)?",
    options: [
      "Un caso extremo del K-fold donde k = n (número de muestras): cada muestra se usa una vez como test y el resto para entrenamiento",
      "Una técnica que deja fuera el 10% de los datos en cada iteración para validación",
      "Un método que excluye los outliers del conjunto de entrenamiento para reducir el sesgo",
      "Una validación que elimina las variables menos importantes en cada iteración",
    ],
  },
  {
    question: "¿Para qué datasets es especialmente útil la validación cruzada estratificada?",
    options: [
      "Para datasets con clases desbalanceadas, garantizando que cada pliegue mantiene la misma proporción de clases que el dataset original",
      "Para datasets con variables continuas donde la distribución sigue una curva normal",
      "Para series temporales donde es importante mantener el orden cronológico",
      "Para datos agrupados donde muestras del mismo grupo deben estar juntas",
    ],
  },
  {
    question: "¿Por qué no se usa la validación cruzada K-fold estándar con series temporales?",
    options: [
      "Porque mezcla datos del futuro con datos del pasado en el entrenamiento, introduciendo data leakage; se requieren técnicas específicas que respeten el orden temporal",
      "Porque las series temporales tienen demasiados datos para dividir en pliegues",
      "Porque las series temporales siempre tienen clases balanceadas y no necesitan estratificación",
      "Porque el K-fold produce sobreajuste en datos secuenciales debido a la autocorrelación",
    ],
  },
  {
    question: "¿Qué es la validación cruzada agrupada (Group K-Fold)?",
    options: [
      "Garantiza que muestras del mismo grupo (ej. mismo paciente, mismo cliente) no aparezcan en entrenamiento y test simultáneamente, evitando data leakage",
      "Agrupa las muestras por similitud usando clustering antes de dividir en pliegues",
      "Divide los pliegues agrupando muestras con la misma clase para maximizar la representatividad",
      "Usa grupos de hiperparámetros en cada pliegue para seleccionar el modelo óptimo",
    ],
  },
  {
    question: "¿Qué problema resuelve SMOTE en el contexto de datos desbalanceados?",
    options: [
      "Genera muestras sintéticas de la clase minoritaria interpolando entre instancias existentes, equilibrando el dataset sin simplemente duplicar ejemplos",
      "Elimina muestras de la clase mayoritaria aleatoriamente para equilibrar las clases",
      "Reduce el ruido en el dataset eliminando muestras ruidosas de la clase minoritaria",
      "Normaliza los pesos de las clases en la función de pérdida sin modificar el dataset",
    ],
  },
  {
    question: "¿Qué diferencia hay entre underfitting y overfitting?",
    options: [
      "Underfitting: el modelo es demasiado simple y tiene mal rendimiento en entrenamiento y test (alto sesgo); overfitting: el modelo memoriza los datos de entrenamiento y falla en test (alta varianza)",
      "Underfitting ocurre con redes neuronales; overfitting ocurre con modelos lineales",
      "Underfitting se da con datasets pequeños; overfitting con datasets grandes",
      "Son el mismo problema con diferente nombre según el tipo de algoritmo utilizado",
    ],
  },
  {
    question: "¿Qué es el Leave-P-Out (LPO) en validación cruzada?",
    options: [
      "Usa p muestras como test en cada iteración y el resto como entrenamiento; genera todas las combinaciones posibles de p muestras",
      "Deja fuera el p% de los datos en cada iteración de forma aleatoria",
      "Divide los datos en pliegues de exactamente p muestras cada uno",
      "Repite el Leave-One-Out p veces con diferente orden para mayor estabilidad",
    ],
  },
  {
    question: "¿Qué técnica de regularización penaliza los coeficientes con norma L1 en regresión?",
    options: [
      "Lasso (Least Absolute Shrinkage and Selection Operator): induce esparsidad, llevando algunos coeficientes exactamente a cero (selección de características)",
      "Ridge: penaliza los coeficientes grandes pero no los lleva a cero",
      "ElasticNet: combina penalizaciones L1 y L2 de forma equilibrada",
      "Dropout: elimina neuronas aleatoriamente durante el entrenamiento",
    ],
  },
  {
    question: "¿Cuál es la principal diferencia entre Ridge y Lasso?",
    options: [
      "Ridge usa regularización L2 (reduce los coeficientes sin anularlos); Lasso usa L1 (puede llevar coeficientes a cero, realizando selección de variables)",
      "Ridge funciona solo para regresión; Lasso también para clasificación",
      "Lasso es más computacionalmente eficiente que Ridge",
      "Ridge funciona con cualquier número de variables; Lasso solo con variables numéricas",
    ],
  },
  {
    question: "¿Qué ventaja tiene la validación cruzada frente a una única división train/test?",
    options: [
      "Reduce la dependencia de una división concreta de los datos y proporciona una estimación más robusta y generalizable del rendimiento del modelo",
      "Es más rápida de computar al reutilizar los mismos datos en cada iteración",
      "Siempre produce mejores modelos al usar más datos para entrenamiento",
      "Garantiza que el modelo no sobreajusta al dataset completo",
    ],
  },
  {
    question: "¿Cuándo un modelo tiene alto sesgo y baja varianza?",
    options: [
      "Cuando es demasiado simple (underfitting): tiene mal rendimiento en entrenamiento y test, pero sus predicciones son consistentes entre diferentes conjuntos de entrenamiento",
      "Cuando es demasiado complejo (overfitting): excelente en entrenamiento pero malo en test",
      "Cuando tiene excelente rendimiento tanto en entrenamiento como en test",
      "Cuando memoriza exactamente los datos de entrenamiento pero falla en datos nuevos",
    ],
  },
  {
    question: "¿Cómo se usa SMOTE en el caso práctico de detección de fraude descrito en la teoría?",
    options: [
      "Para generar muestras sintéticas de las transacciones fraudulentas (clase minoritaria) y equilibrar el dataset, mejorando la detección de fraudes",
      "Para eliminar transacciones duplicadas y limpiar el dataset antes del entrenamiento",
      "Para normalizar los importes de las transacciones y reducir la influencia de outliers",
      "Para dividir el dataset en pliegues estratificados manteniendo la proporción de fraudes",
    ],
  },
  {
    question: "¿Qué tipo de validación cruzada es más adecuada para datos donde hay grupos naturales (ej. pacientes)?",
    options: [
      "Group K-Fold: garantiza que muestras del mismo grupo nunca están simultáneamente en entrenamiento y test, evitando data leakage entre grupos",
      "Stratified K-Fold: mantiene la proporción de clases en cada pliegue",
      "Leave-One-Out: usa cada muestra individual como test una vez",
      "K-Fold repetido: promedia resultados de múltiples iteraciones con diferentes particiones",
    ],
  },
];

export const ud3Questions: Question[] = [
  {
    question: "¿Cuál es la jerarquía correcta de la IA según la teoría?",
    options: [
      "IA ⊃ Machine Learning ⊃ Deep Learning ⊃ IA Generativa",
      "Machine Learning ⊃ IA ⊃ Deep Learning ⊃ IA Generativa",
      "IA ⊃ Deep Learning ⊃ Machine Learning ⊃ IA Generativa",
      "IA Generativa ⊃ Deep Learning ⊃ Machine Learning ⊃ IA",
    ],
  },
  {
    question: "¿Qué porcentaje del tiempo en un proyecto de ciencia de datos se dedica al preprocesamiento de datos?",
    options: [
      "El 60-70% del tiempo se dedica al preprocesamiento de datos",
      "El 10-20% del tiempo se dedica al preprocesamiento de datos",
      "El 30-40% del tiempo se dedica al preprocesamiento de datos",
      "El 80-90% del tiempo se dedica al preprocesamiento de datos",
    ],
  },
  {
    question: "¿Qué caracteriza el aprendizaje supervisado?",
    options: [
      "El modelo aprende a partir de pares (entrada, etiqueta); los datos de entrenamiento están etiquetados",
      "El modelo descubre estructuras en datos sin etiquetas mediante clustering o reducción de dimensionalidad",
      "Combina datos etiquetados (pocos) y no etiquetados (muchos) para reducir el coste de etiquetado",
      "Un agente aprende tomando acciones en un entorno para maximizar una recompensa acumulada",
    ],
  },
  {
    question: "¿Cuál de estas situaciones describe mejor el aprendizaje semi-supervisado?",
    options: [
      "Combina pocos datos etiquetados y muchos datos no etiquetados; útil cuando etiquetar datos es costoso",
      "El modelo aprende solo de datos etiquetados con alta calidad",
      "El modelo recibe retroalimentación del entorno en forma de recompensas y penalizaciones",
      "Usa dos modelos en paralelo: uno supervisado y uno no supervisado que se complementan",
    ],
  },
  {
    question: "¿Qué es el aprendizaje por refuerzo?",
    options: [
      "Un agente aprende tomando acciones en un entorno para maximizar una recompensa acumulada",
      "Un método de entrenamiento que refuerza las predicciones correctas aumentando su peso",
      "Una técnica que repite el entrenamiento varias veces con diferentes inicializaciones",
      "Un tipo de aprendizaje donde el modelo se corrige automáticamente con cada nuevo dato",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre clasificación y regresión en aprendizaje supervisado?",
    options: [
      "Clasificación predice categorías discretas (spam/no spam); regresión predice valores continuos (precio, temperatura)",
      "Clasificación es más precisa que la regresión para cualquier tipo de dato",
      "Regresión solo funciona con datos lineales; clasificación no tiene esa limitación",
      "Son el mismo tipo de problema con diferente función de pérdida",
    ],
  },
  {
    question: "¿Qué es el Random Forest y en qué se diferencia de un árbol de decisión?",
    options: [
      "Un ensemble de múltiples árboles de decisión entrenados con subconjuntos aleatorios de datos y características; más robusto y preciso que un árbol individual",
      "Un árbol de decisión con mayor profundidad que otros árboles para capturar más complejidad",
      "Una técnica de poda de árboles de decisión para mejorar la interpretabilidad",
      "Un árbol de decisión que usa features aleatorias para reducir el sobreajuste",
    ],
  },
  {
    question: "¿Qué son los algoritmos de clustering en aprendizaje no supervisado?",
    options: [
      "Algoritmos que agrupan las muestras en grupos (clusters) según su similitud sin usar etiquetas previas",
      "Algoritmos que clasifican nuevas muestras usando los grupos definidos en el entrenamiento",
      "Técnicas de reducción de dimensionalidad que proyectan datos a espacios de menor dimensión",
      "Métodos para detectar outliers y anomalías en datasets sin etiquetas",
    ],
  },
  {
    question: "¿Qué es una métrica de rendimiento en Machine Learning?",
    options: [
      "Una medida cuantitativa que evalúa qué tan bien un modelo realiza predicciones, siendo esencial para comparar modelos y seleccionar el mejor",
      "Un indicador del tiempo de entrenamiento necesario para ajustar los parámetros del modelo",
      "Una función matemática que el modelo optimiza durante el proceso de entrenamiento",
      "Una estadística descriptiva del dataset de entrenamiento para evaluar su calidad",
    ],
  },
  {
    question: "¿Por qué no es suficiente usar una sola métrica para evaluar un modelo?",
    options: [
      "Porque cada métrica captura solo un aspecto del rendimiento; una combinación equilibrada de múltiples métricas es necesaria para una evaluación completa y precisa",
      "Porque las métricas individuales son poco fiables y tienen alto error de estimación",
      "Porque las métricas se calculan sobre diferentes subconjuntos de datos y no son comparables",
      "Porque el rendimiento depende del hardware y las métricas varían entre ejecuciones",
    ],
  },
  {
    question: "¿Qué es el overfitting y cómo se detecta?",
    options: [
      "El modelo memoriza los datos de entrenamiento; se detecta cuando el rendimiento en entrenamiento es muy alto pero cae significativamente en validación/test",
      "El modelo converge demasiado rápido durante el entrenamiento; se detecta por la velocidad de convergencia",
      "El modelo usa demasiadas características; se detecta cuando el número de features supera el de muestras",
      "El modelo es computacionalmente costoso; se detecta por el alto tiempo de inferencia",
    ],
  },
  {
    question: "¿Cuál es la solución más común para el underfitting?",
    options: [
      "Aumentar la complejidad del modelo (más capas, más árboles, mayor profundidad) o incluir más características relevantes",
      "Añadir regularización L1 o L2 para penalizar la complejidad del modelo",
      "Aumentar el tamaño del dataset de entrenamiento con más muestras",
      "Reducir la tasa de aprendizaje y aumentar el número de épocas de entrenamiento",
    ],
  },
  {
    question: "¿Qué problema introduce el desbalanceo de clases en modelos de clasificación?",
    options: [
      "El modelo tiende a predecir siempre la clase mayoritaria, obteniendo alta accuracy pero fallando en detectar la clase minoritaria de interés",
      "El modelo no puede entrenarse porque la función de pérdida no converge",
      "El modelo sobreajusta a la clase minoritaria ignorando la clase mayoritaria",
      "La validación cruzada no funciona correctamente con clases desbalanceadas",
    ],
  },
  {
    question: "¿Qué técnica de reducción de dimensionalidad se mencionan en el contexto del ML no supervisado?",
    options: [
      "PCA (Análisis de Componentes Principales): proyecta los datos a un espacio de menor dimensión preservando la máxima varianza",
      "SMOTE: genera muestras sintéticas de la clase minoritaria interpolando entre ejemplos existentes",
      "Random Forest: selecciona automáticamente las características más importantes para el modelo",
      "Cross-validation: evalúa el rendimiento del modelo en diferentes subconjuntos de datos",
    ],
  },
  {
    question: "¿Cuál es el propósito de dividir el dataset en conjuntos de entrenamiento, validación y test?",
    options: [
      "Entrenamiento: ajustar los parámetros del modelo; validación: seleccionar hiperparámetros; test: evaluación final e imparcial del rendimiento real",
      "Entrenamiento: explorar los datos; validación: entrenar el modelo; test: ajustar los hiperparámetros",
      "Los tres conjuntos son equivalentes y se usan para diferentes métricas de evaluación",
      "Entrenamiento: modelo simple; validación: modelo complejo; test: comparar ambos modelos",
    ],
  },
  {
    question: "¿Qué es la regresión logística a pesar de su nombre?",
    options: [
      "Un algoritmo de clasificación binaria que estima la probabilidad de pertenencia a una clase usando la función sigmoide",
      "Un algoritmo de regresión para predecir valores continuos cuando los datos tienen distribución logística",
      "Un ensemble de regresiones lineales que clasifica usando un umbral",
      "Una regresión con función de pérdida logarítmica para mayor estabilidad numérica",
    ],
  },
  {
    question: "¿Qué modelo es más adecuado cuando la interpretabilidad es la prioridad principal?",
    options: [
      "Árbol de decisión o regresión lineal/logística, ya que sus reglas de decisión son directamente comprensibles por humanos",
      "Random Forest o Gradient Boosting, por su alta precisión en cualquier tipo de datos",
      "Redes neuronales profundas, por su capacidad de capturar cualquier relación no lineal",
      "SVM con kernel RBF, por su eficiencia en espacios de alta dimensionalidad",
    ],
  },
];

export const ud4Questions: Question[] = [
  {
    question: "¿Qué es un residuo en el contexto de modelos de regresión?",
    options: [
      "La diferencia entre el valor real observado y el valor predicho por el modelo: Residuo = yᵢ - ŷᵢ",
      "El error sistemático del modelo causado por suposiciones incorrectas sobre los datos",
      "La diferencia entre el valor predicho en entrenamiento y en test",
      "El error de predicción acumulado a lo largo de todas las muestras del dataset",
    ],
  },
  {
    question: "¿Qué es la multicolinealidad y por qué es problemática en regresión?",
    options: [
      "La alta correlación entre características independientes que proporciona información redundante, afectando negativamente la interpretación del modelo y favoreciendo el sobreajuste",
      "La correlación entre las predicciones del modelo y los valores reales, indicando buen rendimiento",
      "La presencia de valores atípicos en el dataset que distorsionan los coeficientes del modelo",
      "La falta de correlación entre las variables independientes y la variable objetivo",
    ],
  },
  {
    question: "¿Cuál es la fórmula del MSE (Mean Squared Error)?",
    options: [
      "MSE = 1/n · Σ(yᵢ − ŷᵢ)²: promedio de los cuadrados de las diferencias entre valores reales y predichos",
      "MSE = 1/n · Σ|yᵢ − ŷᵢ|: promedio de los valores absolutos de las diferencias",
      "MSE = √(1/n · Σ(yᵢ − ŷᵢ)²): raíz cuadrada del promedio de errores al cuadrado",
      "MSE = Σ(Ŷₜ−Ȳ)² / Σ(Yₜ−Ȳ)²: proporción de varianza explicada por el modelo",
    ],
  },
  {
    question: "¿Cuál es la principal ventaja del RMSE sobre el MSE?",
    options: [
      "El RMSE tiene las mismas unidades que la variable dependiente, haciendo el error directamente interpretable",
      "El RMSE es menos sensible a los outliers que el MSE",
      "El RMSE siempre es menor que el MSE, indicando un error más pequeño",
      "El RMSE no requiere calcular la raíz cuadrada, siendo más eficiente computacionalmente",
    ],
  },
  {
    question: "¿Por qué el MAE es más robusto a outliers que el MSE/RMSE?",
    options: [
      "Porque trata todos los errores por igual con valor absoluto, sin elevarlos al cuadrado, por lo que los errores grandes no tienen un impacto desproporcionado",
      "Porque normaliza los errores por el rango de la variable objetivo",
      "Porque elimina automáticamente los outliers antes de calcular el error",
      "Porque usa la mediana en lugar de la media para calcular el error promedio",
    ],
  },
  {
    question: "¿Qué mide el R² (Coeficiente de Determinación)?",
    options: [
      "La proporción de varianza en la variable dependiente que es predecible a partir de las variables independientes; R²=1 indica ajuste perfecto, R²=0 indica que el modelo no aporta nada",
      "La correlación lineal entre los valores predichos y los valores reales del modelo",
      "El porcentaje de muestras del dataset que el modelo predice correctamente",
      "La reducción del error al usar el modelo respecto a un modelo de regresión polinómica",
    ],
  },
  {
    question: "¿Por qué el R²-ajustado es preferible al R² cuando se comparan modelos con diferente número de variables?",
    options: [
      "Porque penaliza la inclusión de variables irrelevantes; el R² siempre aumenta al añadir más variables aunque no sean relevantes",
      "Porque el R²-ajustado es invariante a la escala de las variables independientes",
      "Porque el R²-ajustado siempre es mayor que el R² y ofrece estimaciones más optimistas",
      "Porque el R² no funciona correctamente con más de 10 variables independientes",
    ],
  },
  {
    question: "¿Qué indica un MBE (Mean Bias Error) positivo?",
    options: [
      "El modelo sobreestima sistemáticamente los valores reales (las predicciones son en promedio mayores que los valores reales)",
      "El modelo subestima sistemáticamente los valores reales",
      "El modelo tiene alta varianza y sus predicciones son inconsistentes",
      "El modelo tiene un error cuadrático medio superior a la media de los datos",
    ],
  },
  {
    question: "¿Para qué es útil la métrica MAPE (Mean Absolute Percentage Error)?",
    options: [
      "Para comunicar el error en términos porcentuales: MAPE=10% indica que en promedio el pronóstico fue un 10% superior/inferior a los valores reales",
      "Para evaluar modelos cuando los valores reales son cercanos a cero",
      "Para comparar modelos entrenados en datasets con diferentes unidades de medida",
      "Para detectar el sesgo sistemático del modelo en una dirección concreta",
    ],
  },
  {
    question: "¿Cuándo es especialmente útil la métrica RMSLE?",
    options: [
      "Cuando las variables tienen una amplia gama de valores o distribuciones asimétricas/sesgadas; penaliza los errores en escala logarítmica",
      "Cuando todos los valores son cercanos a cero y los errores pequeños son críticos",
      "Cuando el dataset tiene muchos outliers que deben tratarse con más peso",
      "Cuando se necesita comparar modelos entrenados en diferentes idiomas o dominios",
    ],
  },
  {
    question: "¿Qué limitación tiene el MSE en términos de interpretación?",
    options: [
      "Sus unidades son el cuadrado de las unidades de la variable objetivo, lo que dificulta la interpretación directa del error",
      "No puede calcular errores negativos, subestimando el rendimiento del modelo",
      "Solo funciona correctamente cuando los residuos siguen una distribución normal",
      "No es diferenciable, lo que impide su uso en algoritmos de gradiente descendente",
    ],
  },
  {
    question: "¿Qué diferencia el NRMSE del RRMSE?",
    options: [
      "NRMSE normaliza el RMSE por el rango (Max-Min) del objetivo; RRMSE lo normaliza por la media, expresando el error como porcentaje relativo a la media",
      "NRMSE es más adecuado para datos con outliers; RRMSE para datos con distribución normal",
      "RRMSE considera el sesgo del modelo; NRMSE solo considera la magnitud del error",
      "Son métricas idénticas con diferente nombre según la bibliografía consultada",
    ],
  },
  {
    question: "¿Por qué el R² puede ser engañoso como única métrica?",
    options: [
      "Un R² alto no garantiza que el modelo sea adecuado; siempre aumenta al añadir más variables y puede ser alto incluso con patrones en los residuos; debe complementarse con análisis de residuos",
      "Porque el R² solo mide el ajuste en datos de entrenamiento y no predice el rendimiento en test",
      "Porque el R² es sensible a outliers y puede variar significativamente entre ejecuciones",
      "Porque el R² penaliza modelos complejos y puede descartar modelos con buen rendimiento real",
    ],
  },
  {
    question: "¿Cuándo se debe preferir el MAE sobre el MSE/RMSE?",
    options: [
      "Cuando el dataset tiene outliers y no se quiere que los errores grandes tengan un impacto desproporcionado en la evaluación del modelo",
      "Cuando se usa gradiente descendente como algoritmo de optimización",
      "Cuando se necesita una métrica en las mismas unidades que la variable objetivo",
      "Cuando el número de muestras es pequeño y hay riesgo de inestabilidad numérica",
    ],
  },
  {
    question: "¿Qué indica un RAE (Relative Absolute Error) de 10%?",
    options: [
      "En promedio, las predicciones tienen un error del 10% respecto a los valores reales comparado con usar la media como predicción",
      "El modelo comete errores que son el 10% del valor máximo de la variable objetivo",
      "El 10% de las predicciones tienen un error superior a un umbral predefinido",
      "Los residuos del modelo siguen una distribución con cola del 10% en valores extremos",
    ],
  },
  {
    question: "¿Por qué MAPE tiene limitaciones cuando los valores reales son cercanos a cero?",
    options: [
      "Porque divide por los valores reales (yᵢ), produciendo valores extremadamente grandes o indefinidos cuando yᵢ ≈ 0",
      "Porque el logaritmo de valores cercanos a cero no está definido matemáticamente",
      "Porque los errores porcentuales pierden significado cuando la magnitud de los valores es pequeña",
      "Porque la normalización hace que todos los errores parezcan iguales independientemente de su magnitud",
    ],
  },
  {
    question: "¿Cuál es la fórmula del R²-ajustado?",
    options: [
      "R²-ajustado = 1 − [(n−1)/(n−k−1)] · (1−R²), donde n es el número de muestras y k el número de variables independientes",
      "R²-ajustado = R² − (k/n), restando una penalización proporcional al número de variables",
      "R²-ajustado = R² · (n−1)/(n+k), normalizando por el tamaño del dataset",
      "R²-ajustado = √R², tomando la raíz cuadrada para escalar entre 0 y 1 de forma lineal",
    ],
  },
  {
    question: "¿Por qué se recomienda siempre usar múltiples métricas en modelos de regresión?",
    options: [
      "Porque ninguna métrica funciona de manera aislada: cada una captura aspectos diferentes (robustez a outliers, interpretabilidad, sesgo direccional) y una combinación da una visión completa",
      "Porque las diferentes métricas se calculan sobre diferentes subconjuntos del dataset",
      "Porque algunas métricas son sesgadas y solo la media de varias métricas es objetiva",
      "Porque las métricas individuales tienen alta varianza estadística y necesitan promediarse",
    ],
  },
];

export const ud5Questions: Question[] = [
  {
    question: "¿Qué es la matriz de confusión?",
    options: [
      "Una tabla que compara las etiquetas reales con las predicciones del modelo, permitiendo visualizar los aciertos (TP, TN) y errores (FP, FN)",
      "Una matriz de correlación entre las características del dataset y las predicciones del modelo",
      "Un gráfico que muestra la distribución de probabilidades para cada clase en el modelo",
      "Una tabla que compara el rendimiento de diferentes modelos en el mismo dataset",
    ],
  },
  {
    question: "En clasificación binaria, ¿qué es un Falso Positivo (FP)?",
    options: [
      "El modelo predice positivo pero el valor real es negativo; también llamado error de tipo I",
      "El modelo predice negativo pero el valor real es positivo; también llamado error de tipo II",
      "El modelo predice correctamente que una instancia es positiva",
      "Una predicción positiva del modelo con baja probabilidad de confianza",
    ],
  },
  {
    question: "¿Cómo se calcula la Accuracy (exactitud)?",
    options: [
      "Accuracy = (TP + TN) / (TP + TN + FP + FN): proporción de predicciones correctas sobre el total",
      "Accuracy = TP / (TP + FP): proporción de positivos predichos que son realmente positivos",
      "Accuracy = TP / (TP + FN): proporción de positivos reales que el modelo detecta",
      "Accuracy = TN / (TN + FP): proporción de negativos reales que el modelo identifica correctamente",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre Precisión y Recall (Sensibilidad)?",
    options: [
      "Precisión = TP/(TP+FP): de los que predijo como positivos, cuántos lo son realmente; Recall = TP/(TP+FN): de los positivos reales, cuántos detectó el modelo",
      "Precisión mide los aciertos en la clase negativa; Recall mide los aciertos en la clase positiva",
      "Son la misma métrica calculada con diferente denominador; se usan indistintamente",
      "Precisión es para clasificación multiclase; Recall es solo para clasificación binaria",
    ],
  },
  {
    question: "¿Qué es la métrica F1-Score y cuándo es especialmente útil?",
    options: [
      "La media harmónica entre Precisión y Recall: F1 = 2·(Precisión·Recall)/(Precisión+Recall); especialmente útil con clases desbalanceadas cuando ambas métricas importan",
      "La media aritmética de Accuracy y AUC-ROC para una evaluación equilibrada",
      "La raíz cuadrada del producto entre Precisión y Recall, sensible a diferencias extremas",
      "Una métrica que combina TP, TN, FP y FN mediante una fórmula ponderada",
    ],
  },
  {
    question: "¿Por qué la Accuracy puede ser engañosa con clases desbalanceadas?",
    options: [
      "Porque un modelo que predice siempre la clase mayoritaria puede obtener alta accuracy (ej. 99%) sin detectar nunca la clase minoritaria de interés",
      "Porque la Accuracy no tiene en cuenta los verdaderos negativos en su cálculo",
      "Porque la Accuracy es sensible a outliers en los valores de las características",
      "Porque la Accuracy solo funciona correctamente con exactamente dos clases balanceadas",
    ],
  },
  {
    question: "¿Qué mide la Especificidad (Specificity)?",
    options: [
      "TN / (TN + FP): la proporción de negativos reales que el modelo clasifica correctamente como negativos; también llamada True Negative Rate",
      "TP / (TP + FN): la proporción de positivos reales que el modelo detecta correctamente",
      "TP / (TP + FP): de los positivos predichos, qué proporción son realmente positivos",
      "La capacidad del modelo de generalizar correctamente a datos no vistos durante el entrenamiento",
    ],
  },
  {
    question: "¿Qué representa la curva ROC (Receiver Operating Characteristic)?",
    options: [
      "Representa la tasa de verdaderos positivos (Recall/Sensibilidad) en el eje Y frente a la tasa de falsos positivos (1-Especificidad) en el eje X, variando el umbral de clasificación",
      "Representa la Precisión en el eje Y frente al Recall en el eje X para diferentes umbrales de clasificación",
      "Muestra cómo varía la Accuracy del modelo a medida que aumenta el tamaño del dataset de entrenamiento",
      "Compara el rendimiento de múltiples modelos en términos de velocidad de convergencia",
    ],
  },
  {
    question: "¿Qué indica el AUC (Area Under the Curve) en la curva ROC?",
    options: [
      "La capacidad discriminativa del modelo: AUC=1 indica clasificación perfecta, AUC=0.5 indica modelo aleatorio (sin capacidad discriminativa)",
      "El umbral óptimo de clasificación que maximiza el F1-Score del modelo",
      "La precisión del modelo en datos de validación cruzada con 5 pliegues",
      "El porcentaje de instancias positivas correctamente clasificadas en el conjunto de test",
    ],
  },
  {
    question: "¿Cuándo es más importante maximizar el Recall que la Precisión?",
    options: [
      "Cuando los falsos negativos son más costosos que los falsos positivos: detección de enfermedades graves, fraudes críticos, donde es peor no detectar un caso real",
      "Cuando el dataset está perfectamente balanceado y ambas métricas tienen el mismo peso",
      "Cuando se trabaja con modelos de regresión donde los errores positivos son más costosos",
      "Cuando el número de muestras de la clase positiva es mucho mayor que la negativa",
    ],
  },
  {
    question: "¿Cuándo es más importante maximizar la Precisión que el Recall?",
    options: [
      "Cuando los falsos positivos son más costosos: spam filtrado como ham, errores médicos por sobrediagnóstico; no queremos hacer alarmas innecesarias",
      "Cuando el dataset tiene más muestras de la clase positiva que de la negativa",
      "Cuando el modelo trabaja con datos continuos convertidos a clases mediante umbral",
      "Cuando la función de pérdida penaliza más los verdaderos negativos que los positivos",
    ],
  },
  {
    question: "¿Qué son las Curvas de Ganancia (Gain Curves) en clasificación?",
    options: [
      "Muestran qué porcentaje de positivos reales se capturan al contactar un cierto porcentaje de la población ordenada por probabilidad predicha de ser positivo",
      "Visualizan cómo mejora el AUC-ROC a medida que aumenta el número de características",
      "Comparan la ganancia en Accuracy entre el modelo actual y el modelo base",
      "Representan la distribución de probabilidades del modelo para cada clase",
    ],
  },
  {
    question: "¿Qué es el Lift en el contexto de modelos de clasificación?",
    options: [
      "La mejora del modelo respecto a un clasificador aleatorio: Lift = % positivos capturados / % población seleccionada; cuántas veces mejor es el modelo que el azar",
      "La diferencia entre la Accuracy en entrenamiento y en test que indica el nivel de sobreajuste",
      "La proporción de mejora en Recall al aumentar el umbral de clasificación en 0.1",
      "El incremento en el número de verdaderos positivos al añadir una nueva característica",
    ],
  },
  {
    question: "¿Qué métrica es más adecuada para detección de fraudes bancarios donde los fraudes son raros?",
    options: [
      "F1-Score o AUC-ROC: la Accuracy sería engañosa (alta aunque el modelo no detecte ningún fraude) y se necesita equilibrar la detección de fraudes con los falsos positivos",
      "Accuracy: mide el porcentaje global de aciertos que es la métrica más importante en producción",
      "Solo Precisión: no queremos molestar a clientes con falsas alarmas de fraude",
      "Solo Recall: queremos detectar todos los fraudes posibles sin importar los falsos positivos",
    ],
  },
  {
    question: "¿Cómo se calcula el F1-Score para clasificación multiclase?",
    options: [
      "Calculando F1 para cada clase y promediando (macro-average: peso igual a cada clase; weighted-average: ponderando por el número de muestras de cada clase)",
      "Calculando solo el F1 de la clase mayoritaria y normalizando por el número total de clases",
      "Usando la media aritmética de las Precisiones de todas las clases del problema",
      "El F1-Score no es aplicable a clasificación multiclase; solo funciona en binaria",
    ],
  },
  {
    question: "¿Qué es un Falso Negativo (FN) y en qué contexto es más crítico?",
    options: [
      "El modelo predice negativo pero el valor real es positivo (error tipo II); crítico en medicina (no detectar enfermedad) o seguridad (no detectar amenaza)",
      "El modelo predice positivo pero el valor real es negativo; crítico cuando las falsas alarmas tienen alto coste",
      "Una predicción negativa con alta confianza que resulta ser incorrecta",
      "El conjunto de muestras negativas mal clasificadas por el modelo en el conjunto de test",
    ],
  },
  {
    question: "¿Qué relación existe entre el umbral de clasificación y el tradeoff Precisión-Recall?",
    options: [
      "Subir el umbral aumenta la Precisión pero reduce el Recall; bajarlo aumenta el Recall pero reduce la Precisión; el F1 ayuda a encontrar el equilibrio óptimo",
      "El umbral afecta solo a la Accuracy y no tiene impacto en Precisión ni Recall",
      "Subir el umbral siempre mejora tanto la Precisión como el Recall simultáneamente",
      "El tradeoff Precisión-Recall es independiente del umbral; depende solo de la arquitectura del modelo",
    ],
  },
  {
    question: "¿Qué representa el punto (0,1) en la curva ROC?",
    options: [
      "El clasificador perfecto: tasa de falsos positivos = 0 y tasa de verdaderos positivos = 1 (detecta todos los positivos sin ningún falso positivo)",
      "El clasificador aleatorio: la curva ROC cruza por ese punto en un modelo sin capacidad discriminativa",
      "El punto donde la Precisión y el Recall tienen el mismo valor (punto de equilibrio)",
      "El umbral óptimo de clasificación que maximiza el AUC de la curva ROC",
    ],
  },
];

export const ud6Questions: Question[] = [
  {
    question: "¿Por qué el desbalanceo de clases es un problema crítico en Machine Learning?",
    options: [
      "Los modelos se vuelven 'vagos' y predicen siempre la clase mayoritaria, obteniendo alta accuracy pero fallando en detectar las anomalías de interés (clase minoritaria)",
      "Impide que el modelo converja durante el entrenamiento con gradiente descendente",
      "Causa que la validación cruzada produzca estimaciones de rendimiento inconsistentes",
      "Aumenta exponencialmente el tiempo de entrenamiento sin mejorar el rendimiento",
    ],
  },
  {
    question: "¿A partir de qué porcentaje de la clase minoritaria el desbalanceo se vuelve crítico según la teoría?",
    options: [
      "Por debajo del 4-5% de la clase minoritaria el desbalanceo se vuelve crítico",
      "Por debajo del 20% de la clase minoritaria el desbalanceo es problemático",
      "Por debajo del 1% de la clase minoritaria el desbalanceo se considera extremo",
      "Por debajo del 10% de la clase minoritaria el modelo falla completamente",
    ],
  },
  {
    question: "¿Cuál es la tasa típica de desbalanceo en detección de fraudes bancarios?",
    options: [
      "De 1 a 10 o 1 a 100 transacciones fraudulentas por transacciones normales",
      "De 1 a 10.000, similar a la tasa de ataques en ciberseguridad",
      "De 1 a 2, siendo un desbalanceo moderado y manejable",
      "De 1 a 1.000.000, siendo el sector con mayor desbalanceo conocido",
    ],
  },
  {
    question: "¿Qué es el submuestreo (undersampling)?",
    options: [
      "Reducir el número de muestras de la clase mayoritaria para equilibrar el dataset, maximizando la información de la clase minoritaria",
      "Aumentar el número de muestras de la clase minoritaria para equilibrar el dataset",
      "Generar muestras sintéticas interpolando entre instancias existentes de la clase minoritaria",
      "Eliminar muestras ruidosas de ambas clases para mejorar la calidad del dataset",
    ],
  },
  {
    question: "¿Qué es el algoritmo NearMiss?",
    options: [
      "Una técnica de submuestreo informado que selecciona muestras de la clase mayoritaria cercanas a la clase minoritaria, preservando la información más relevante en la frontera de decisión",
      "Un método de sobremuestreo que genera nuevas muestras en la zona de frontera entre clases",
      "Un algoritmo de clustering que agrupa las muestras mayoritarias antes de submuestrear",
      "Una técnica de detección de outliers que elimina muestras anómalas de la clase mayoritaria",
    ],
  },
  {
    question: "¿Cuáles son las tres variantes de NearMiss mencionadas en la teoría?",
    options: [
      "NearMiss-1 (mínima distancia media a los k más cercanos de la minoría), NearMiss-2 (mínima distancia a los k más lejanos de la minoría) y NearMiss-3 (un número mínimo de muestras mayoritarias por cada minoritaria)",
      "NearMiss-A (aleatoria), NearMiss-B (basada en clusters) y NearMiss-C (basada en densidad)",
      "NearMiss-Simple, NearMiss-Estratificado y NearMiss-Agrupado según el tipo de validación cruzada",
      "NearMiss-1 (para clasificación), NearMiss-2 (para regresión) y NearMiss-3 (para clustering)",
    ],
  },
  {
    question: "¿Cómo genera SMOTE nuevas muestras de la clase minoritaria?",
    options: [
      "Interpolando entre instancias existentes de la clase minoritaria y sus vecinos más cercanos: nueva muestra = muestra_original + λ × (vecino − muestra_original), donde λ ∈ [0,1]",
      "Copiando exactamente las instancias existentes de la clase minoritaria hasta equilibrar las clases",
      "Usando un modelo generativo adversarial (GAN) para crear muestras sintéticas realistas",
      "Aplicando rotaciones y traslaciones a las instancias originales de la clase minoritaria",
    ],
  },
  {
    question: "¿Cuál es la principal ventaja de SMOTE sobre el sobremuestreo aleatorio simple?",
    options: [
      "SMOTE genera muestras sintéticas diversas interpolando entre vecinos, evitando el sobreajuste a las muestras duplicadas que ocurre con el sobremuestreo aleatorio",
      "SMOTE es más rápido computacionalmente que el sobremuestreo aleatorio simple",
      "SMOTE no requiere especificar el ratio de balanceo deseado; lo calcula automáticamente",
      "SMOTE funciona con cualquier tipo de variable (numéricas, categóricas, texto) sin preprocesamiento",
    ],
  },
  {
    question: "¿Qué es el caso práctico de Credit Card Fraud descrito en la teoría?",
    options: [
      "Un dataset real de transacciones bancarias con clase muy desbalanceada (~0.17% fraudes) donde se comparan modelo básico, NearMiss y SMOTE para mejorar la detección de fraudes",
      "Un caso de uso ficticio para ilustrar los conceptos de balanceo sin datos reales de tarjetas",
      "Un benchmark estándar de clasificación con clases perfectamente balanceadas para probar algoritmos",
      "Un dataset de transacciones en efectivo donde el desbalanceo es del 50% entre fraudes y no fraudes",
    ],
  },
  {
    question: "¿Cuál es el principal problema del sobremuestreo aleatorio simple?",
    options: [
      "Puede provocar sobreajuste ya que simplemente duplica las mismas muestras de la clase minoritaria, haciendo que el modelo memorice esos ejemplos específicos",
      "Es computacionalmente muy costoso para datasets de gran tamaño",
      "No funciona con algoritmos de ensemble como Random Forest o Gradient Boosting",
      "Reduce la accuracy del modelo al introducir ruido artificial en los datos de entrenamiento",
    ],
  },
  {
    question: "¿Qué métrica es más adecuada para evaluar modelos en datasets muy desbalanceados como fraude?",
    options: [
      "F1-Score, AUC-ROC o métricas de Precisión/Recall; la Accuracy es engañosa porque un modelo que no detecta ningún fraude puede tener >99% de accuracy",
      "La Accuracy es suficiente si el dataset tiene más de 1 millón de muestras",
      "Solo la Especificidad (True Negative Rate) para garantizar no molestar a clientes legítimos",
      "El RMSE adaptado para clasificación, que penaliza los errores en la clase minoritaria",
    ],
  },
  {
    question: "¿Qué diferencia el submuestreo del sobremuestreo en términos de estrategia?",
    options: [
      "El submuestreo reduce las muestras de la clase mayoritaria; el sobremuestreo aumenta las muestras de la clase minoritaria; ambos buscan equilibrar el dataset pero desde perspectivas opuestas",
      "El submuestreo añade muestras artificiales; el sobremuestreo elimina muestras reales",
      "El submuestreo funciona mejor con Random Forest; el sobremuestreo con redes neuronales",
      "El submuestreo es preferible con datasets pequeños; el sobremuestreo con datasets grandes",
    ],
  },
  {
    question: "¿Cuándo podría ser problemático usar SMOTE en lugar de submuestreo?",
    options: [
      "Con datasets muy grandes donde hay suficientes muestras de la clase mayoritaria para submuestrear, ya que SMOTE genera muchas muestras sintéticas que aumentan el tiempo de entrenamiento",
      "Cuando la clase minoritaria tiene menos de 100 muestras, ya que SMOTE necesita vecinos suficientes",
      "Con variables categóricas, ya que SMOTE no puede interpolar entre categorías",
      "Cuando se usa validación cruzada, ya que SMOTE debe aplicarse antes de dividir los datos",
    ],
  },
  {
    question: "¿Qué representa una tasa de desbalanceo de 1:10.000 en ciberseguridad?",
    options: [
      "Por cada ataque detectado hay 10.000 eventos normales; hace extremadamente difícil que el modelo aprenda a identificar ataques sin técnicas de balanceo",
      "El 10.000% de los eventos son ataques, indicando una red bajo ataque masivo continuo",
      "Se necesitan 10.000 muestras de entrenamiento para detectar correctamente un ataque",
      "La probabilidad de un ataque es de 1 en 10.000, considerada negligible en producción",
    ],
  },
  {
    question: "¿Por qué es importante aplicar SMOTE solo al conjunto de entrenamiento y no al de test?",
    options: [
      "Porque el conjunto de test debe reflejar la distribución real de datos en producción; aplicar SMOTE al test introduce data leakage y produce métricas de evaluación irrealistas",
      "Porque el test no tiene suficientes muestras de la clase minoritaria para que SMOTE funcione",
      "Porque SMOTE en test aumentaría el tamaño del conjunto de evaluación sin mejorar la calidad",
      "No hay restricción; SMOTE puede aplicarse tanto al entrenamiento como al test indistintamente",
    ],
  },
  {
    question: "¿Qué ventaja ofrece combinar NearMiss con SMOTE en un pipeline de balanceo?",
    options: [
      "NearMiss reduce la clase mayoritaria (eliminando muestras alejadas de la frontera de decisión) y SMOTE aumenta la minoritaria (generando muestras sintéticas), logrando un balanceo más efectivo",
      "La combinación siempre es peor que usar solo una técnica; introducen ruido incompatible",
      "NearMiss genera muestras y SMOTE las elimina, siendo técnicas complementarias opuestas",
      "Solo tiene sentido combinarlos cuando el ratio de desbalanceo es exactamente 1:2",
    ],
  },
];

export const generalQuestions: Question[] = [
  {
    question: "¿Cuál es la relación entre XAI y el tradeoff sesgo-varianza en la práctica?",
    options: [
      "Los modelos más simples (bajo sesgo, baja varianza) son más interpretables pero menos precisos; XAI permite usar modelos complejos y precisos añadiendo explicabilidad post-hoc con SHAP o LIME",
      "XAI elimina el tradeoff sesgo-varianza al hacer los modelos complejos tan interpretables como los simples",
      "El tradeoff sesgo-varianza solo aplica a modelos sin XAI; los modelos explicables no sufren este problema",
      "La validación cruzada resuelve tanto el tradeoff sesgo-varianza como la necesidad de XAI",
    ],
  },
  {
    question: "¿Cómo se relacionan las métricas de clasificación con el desbalanceo de clases?",
    options: [
      "La Accuracy es engañosa con desbalanceo; F1-Score y AUC-ROC son más robustas; las técnicas de balanceo (SMOTE, NearMiss) mejoran el rendimiento en la clase minoritaria",
      "El desbalanceo solo afecta a la Precisión; el Recall y el F1-Score son invariantes al desbalanceo",
      "El AUC-ROC es la única métrica invariante al desbalanceo; todas las demás son igualmente engañosas",
      "Las métricas de clasificación no necesitan ajustarse para datos desbalanceados si se usa validación cruzada estratificada",
    ],
  },
  {
    question: "¿Qué tienen en común SMOTE (para clasificación) y el K-fold estratificado (para validación)?",
    options: [
      "Ambos abordan el problema del desbalanceo de clases: SMOTE equilibrando el dataset y K-fold estratificado garantizando que cada pliegue represente correctamente la distribución de clases",
      "Ambos son técnicas de sobremuestreo que generan muestras sintéticas para clases minoritarias",
      "Son técnicas equivalentes; usar una hace innecesaria la otra en el pipeline de ML",
      "Ambos aplican solo a clasificación multiclase y no funcionan en clasificación binaria",
    ],
  },
  {
    question: "¿Cómo complementan SHAP y las métricas de rendimiento la evaluación de un modelo?",
    options: [
      "Las métricas (Accuracy, F1, AUC-ROC) indican QUÉ tan bien predice el modelo globalmente; SHAP explica POR QUÉ hace cada predicción, permitiendo identificar sesgos y validar que aprende características correctas",
      "Son técnicas redundantes; si las métricas son buenas, SHAP no aporta información adicional",
      "SHAP reemplaza a las métricas de rendimiento al ser más informativo sobre el comportamiento del modelo",
      "Las métricas evalúan el entrenamiento; SHAP evalúa el test; son complementarios pero independientes",
    ],
  },
  {
    question: "¿Cuándo se debe usar el R²-ajustado en lugar del R² en regresión?",
    options: [
      "Siempre que se comparen modelos con diferente número de variables, ya que el R² siempre aumenta al añadir variables aunque sean irrelevantes; el R²-ajustado penaliza la complejidad innecesaria",
      "Solo cuando el dataset tiene más de 1000 muestras y más de 50 variables",
      "Cuando los residuos no siguen una distribución normal según el test de Shapiro-Wilk",
      "Únicamente en modelos de regresión polinómica con grado superior a 3",
    ],
  },
  {
    question: "¿Cómo afecta el umbral de clasificación a la curva ROC y al F1-Score?",
    options: [
      "La curva ROC muestra todos los posibles umbrales (variando de 0 a 1), graficando TPR vs FPR; el F1-Score varía con el umbral y hay un punto donde es máximo, que puede no coincidir con el umbral por defecto de 0.5",
      "El umbral solo afecta al F1-Score; la curva ROC es independiente del umbral elegido",
      "Un umbral más alto siempre mejora tanto el AUC-ROC como el F1-Score del modelo",
      "El umbral óptimo siempre es 0.5 para cualquier problema de clasificación binaria",
    ],
  },
  {
    question: "¿Qué diferencia la validación cruzada para series temporales de la K-fold estándar?",
    options: [
      "En series temporales el entrenamiento siempre usa datos del pasado y el test del futuro, respetando el orden temporal para evitar data leakage; el K-fold mezcla tiempos y produce evaluaciones irrealistas",
      "La validación cruzada para series temporales usa más pliegues que el K-fold estándar",
      "El K-fold estándar sobreestima el rendimiento en series temporales; la validación temporal lo subestima",
      "No hay diferencia significativa; el K-fold funciona igual de bien para series temporales si los datos están estacionarizados",
    ],
  },
  {
    question: "¿Cuál es la relación entre la Precisión, el Recall y el F1-Score en detección de fraude?",
    options: [
      "Alta Precisión: pocos falsos positivos (clientes legítimos no molestados); alto Recall: pocos fraudes sin detectar; F1 equilibra ambos; en fraude el Recall suele priorizarse para no perder fraudes",
      "En detección de fraude solo importa la Accuracy; el F1-Score es relevante solo en NLP",
      "La Precisión y el Recall siempre aumentan simultáneamente al mejorar el modelo",
      "El F1-Score es siempre mayor que la Precisión y el Recall individualmente",
    ],
  },
  {
    question: "¿Cómo se relaciona el MAE con la robustez a outliers en comparación con el RMSE?",
    options: [
      "El MAE trata todos los errores por igual (valor absoluto); el RMSE penaliza desproporcionadamente los errores grandes (cuadrado), siendo más sensible a outliers; si hay outliers, MAE es más representativo del error típico",
      "El RMSE siempre produce valores más pequeños que el MAE, indicando menor error aparente",
      "El MAE es más útil cuando los outliers son frecuentes; el RMSE cuando son raros",
      "Son equivalentes en términos de sensibilidad a outliers; solo difieren en las unidades",
    ],
  },
  {
    question: "¿Por qué es importante usar SMOTE después de dividir en train/test y no antes?",
    options: [
      "Para evitar data leakage: si se aplica SMOTE antes de la división, las muestras sintéticas generadas a partir del test contaminan el entrenamiento, produciendo métricas de evaluación irrealmente optimistas",
      "Porque SMOTE necesita conocer la distribución del test para generar muestras correctamente",
      "Porque el test tiene siempre mayor desbalanceo que el entrenamiento y necesita más muestras",
      "No importa el orden; aplicar SMOTE antes o después de la división produce resultados equivalentes",
    ],
  },
  {
    question: "¿Qué aporta LIME respecto a SHAP en términos de aplicabilidad?",
    options: [
      "LIME es completamente agnóstico al modelo (funciona con cualquier modelo incluyendo cajas negras de acceso limitado); SHAP requiere acceso al modelo o tiene variantes específicas por tipo de modelo (TreeExplainer, DeepExplainer)",
      "LIME produce explicaciones globales más precisas que SHAP para modelos complejos",
      "SHAP es más rápido que LIME para modelos con más de 100 características",
      "LIME y SHAP son completamente equivalentes; son dos implementaciones del mismo algoritmo",
    ],
  },
  {
    question: "¿Cuál es la relación entre el underfitting y el alto sesgo en el tradeoff sesgo-varianza?",
    options: [
      "El underfitting es la manifestación práctica del alto sesgo: el modelo tiene suposiciones demasiado simplistas, no captura los patrones de los datos y tiene mal rendimiento tanto en entrenamiento como en test",
      "El underfitting ocurre solo en test; el alto sesgo se detecta en el error de entrenamiento",
      "Son conceptos independientes: el underfitting depende del tamaño del dataset; el sesgo de la arquitectura",
      "El underfitting y el alto sesgo tienen causas opuestas; no están relacionados directamente",
    ],
  },
];
