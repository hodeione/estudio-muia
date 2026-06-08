import type { Question } from "@/app/components/InteractiveTest";

export const ud1Questions: Question[] = [
  {
    question: "¿Qué es el Procesamiento del Lenguaje Natural (NLP)?",
    options: [
      "Una rama de la IA que permite a las máquinas comprender, interpretar y generar texto de forma similar a los humanos",
      "Un conjunto de reglas gramaticales para corregir textos automáticamente",
      "Un sistema de traducción basado exclusivamente en diccionarios",
      "Una técnica de compresión de texto para almacenamiento eficiente",
    ],
  },
  {
    question: "¿Qué modelo marcó el inicio de la era del deep learning en NLP con embeddings y transformers?",
    options: [
      "Word2Vec (embeddings) y BERT/GPT (transformers), llegando en la etapa 2000-presente",
      "ELIZA y SHRDLU, en los inicios de los años 50-80",
      "Los Modelos de Markov Ocultos, en la etapa estadística de 1980-2000",
      "GPT-3, desde 2020 en adelante",
    ],
  },
  {
    question: "¿Cuál es el objetivo principal de la lematización (lemmatization) en NLP?",
    options: [
      "Reducir las palabras a su forma base o lema considerando el contexto gramatical",
      "Eliminar palabras frecuentes con poco valor informativo (stop words)",
      "Dividir el texto en tokens individuales",
      "Convertir todo el texto a minúsculas para uniformidad",
    ],
  },
  {
    question: "¿Qué diferencia al stemming de la lematización?",
    options: [
      "El stemming aplica recortes básicos sin considerar el contexto; la lematización considera el contexto gramatical",
      "El stemming es más preciso que la lematización",
      "El stemming solo funciona en inglés; la lematización es multilingüe",
      "Son técnicas equivalentes con diferente nombre",
    ],
  },
  {
    question: "¿Qué es el Bag of Words (BoW)?",
    options: [
      "Una representación del texto como vector de frecuencias de palabras, sin considerar el orden ni el contexto",
      "Una técnica que pondera las palabras según su rareza en el corpus",
      "Un modelo que captura relaciones semánticas mediante redes neuronales",
      "Un método de tokenización que considera subpalabras",
    ],
  },
  {
    question: "¿En qué mejora TF-IDF respecto a Bag of Words?",
    options: [
      "Pondera las palabras según su frecuencia en el documento (TF) y su rareza en el corpus (IDF), mejorando la relevancia",
      "Captura el orden de las palabras en la oración",
      "Genera vectores de alta dimensionalidad con relaciones semánticas",
      "Reduce la dimensionalidad del vocabulario usando subpalabras",
    ],
  },
  {
    question: "¿Cuáles son las dos variantes principales de Word2Vec?",
    options: [
      "CBOW (predice la palabra desde el contexto) y Skip-Gram (predice el contexto desde la palabra)",
      "TF-IDF y BoW, ambas basadas en frecuencias",
      "GloVe y FastText, basadas en co-ocurrencias",
      "BERT y GPT, basados en transformers",
    ],
  },
  {
    question: "¿Qué ventaja tiene FastText sobre Word2Vec?",
    options: [
      "Considera subpalabras (n-gramas de caracteres), mejorando la representación de palabras nuevas o morfológicamente complejas",
      "Es más rápido de entrenar y consume menos memoria",
      "Genera embeddings contextuales dinámicos adaptados al contexto",
      "Utiliza co-ocurrencias globales en lugar de ventana de contexto local",
    ],
  },
  {
    question: "¿Qué es un N-gram en NLP?",
    options: [
      "Una secuencia de N elementos contiguos (palabras o caracteres) donde la probabilidad de una palabra depende de las N-1 anteriores",
      "Un vector de N dimensiones que representa una palabra en el espacio semántico",
      "Un modelo estadístico con N capas ocultas para clasificación de texto",
      "Un método de evaluación basado en N referencias de traducción",
    ],
  },
  {
    question: "¿Qué supuesto fundamental hace Naive Bayes para clasificación de texto?",
    options: [
      "Asume independencia entre las características (palabras), aunque en la práctica no siempre se cumple",
      "Supone que las palabras siguen una distribución normal",
      "Asume que el texto tiene longitud fija para todos los documentos",
      "Supone que las clases están balanceadas en el dataset de entrenamiento",
    ],
  },
  {
    question: "¿Cuáles son los tres tipos de Naive Bayes mencionados en la teoría?",
    options: [
      "Gaussian (distribución normal), Multinomial (características discretas) y Bernoulli (características binarias)",
      "Lineal, cuadrático y cúbico según el grado del modelo",
      "Supervisado, semisupervisado y no supervisado según el tipo de datos",
      "Unigrama, Bigrama y Trigrama según el orden de N-grams",
    ],
  },
  {
    question: "¿Qué métrica de distancia es más adecuada para texto en KNN?",
    options: [
      "Distancia coseno, ya que mide la similitud entre vectores de texto",
      "Distancia euclidiana, la más general para cualquier tipo de datos",
      "Distancia Manhattan, óptima para características enteras",
      "Distancia de Hamming, diseñada para cadenas de texto",
    ],
  },
  {
    question: "¿Qué establece la Ley de Zipf sobre la frecuencia de palabras?",
    options: [
      "Las palabras más comunes tienen frecuencias mucho mayores que las menos comunes, siguiendo una relación inversa con su rango",
      "Todas las palabras tienen una frecuencia uniformemente distribuida en textos largos",
      "La frecuencia de una palabra crece proporcionalmente a la longitud del texto",
      "Solo el 10% de las palabras del vocabulario aparecen más de una vez",
    ],
  },
  {
    question: "¿Para qué se usa la métrica BLEU?",
    options: [
      "Evaluar la calidad de traducciones automáticas comparando n-gramas con traducciones de referencia",
      "Medir la perplexidad de un modelo de lenguaje al predecir secuencias",
      "Calcular la similitud semántica entre textos usando embeddings",
      "Evaluar la cobertura de un sistema de resumen automático",
    ],
  },
  {
    question: "¿En qué se diferencia ROUGE de BLEU?",
    options: [
      "ROUGE mide recall (cobertura) y se usa principalmente en resumen automático; BLEU mide precisión y se usa en traducción",
      "ROUGE es para clasificación; BLEU es para generación de texto",
      "ROUGE considera sinónimos; BLEU solo palabras exactas",
      "Son idénticos pero con diferente nombre según el idioma",
    ],
  },
  {
    question: "¿Qué es el Byte Pair Encoding (BPE) en tokenización?",
    options: [
      "Un proceso iterativo que combina los pares de caracteres o subpalabras más frecuentes en nuevos tokens, reduciendo el vocabulario",
      "Un método de codificación binaria para comprimir texto",
      "Un tokenizador que divide el texto en bytes individuales",
      "Una técnica de normalización que reemplaza caracteres especiales por secuencias de bytes",
    ],
  },
  {
    question: "¿Cuál de estas herramientas es ideal para grandes volúmenes de datos y tareas avanzadas como detección de entidades?",
    options: [
      "SpaCy",
      "NLTK",
      "TextBlob",
      "Gensim",
    ],
  },
  {
    question: "¿Qué es la perplexidad (perplexity) en NLP?",
    options: [
      "Una medida de la incertidumbre de un modelo al predecir secuencias; menor valor indica mejor modelo",
      "La proporción de predicciones correctas sobre el total de predicciones",
      "La distancia semántica entre textos medida con embeddings",
      "El número de parámetros entrenables de un modelo de lenguaje",
    ],
  },
  {
    question: "¿Cuál es el principal desafío de la ambigüedad semántica en NLP?",
    options: [
      "Palabras con múltiples significados (polisemia) dependen del contexto, y los modelos tienen dificultades para desambiguarlas",
      "Las palabras tienen demasiadas formas morfológicas que dificultan el stemming",
      "El vocabulario crece infinitamente con nuevos textos, haciendo imposible el entrenamiento",
      "Los modelos consumen demasiada memoria al procesar textos extensos",
    ],
  },
  {
    question: "¿Qué diferencia a los embeddings contextuales (BERT) de los estáticos (Word2Vec)?",
    options: [
      "BERT genera representaciones dinámicas que cambian según el contexto de uso de la palabra; Word2Vec produce un vector fijo por palabra",
      "Word2Vec es bidireccional; BERT solo considera contexto hacia la derecha",
      "BERT es más rápido de calcular que Word2Vec para vocabularios grandes",
      "Word2Vec usa transformers; BERT usa redes recurrentes",
    ],
  },
];

export const ud2Questions: Question[] = [
  {
    question: "¿Cuál es el principal problema de las RNNs estándar para secuencias largas?",
    options: [
      "El desvanecimiento del gradiente: las actualizaciones de pesos se debilitan al retroceder en la secuencia, perdiendo información lejana",
      "Son demasiado lentas para procesar texto en tiempo real",
      "No pueden manejar secuencias de longitud variable",
      "Requieren datos etiquetados para aprender representaciones secuenciales",
    ],
  },
  {
    question: "¿Cuántas puertas tiene una celda LSTM y cuáles son?",
    options: [
      "3 puertas: Puerta de Olvido, Puerta de Entrada y Puerta de Salida",
      "2 puertas: Puerta de Actualización y Puerta de Reinicio",
      "4 puertas: Olvido, Entrada, Candidato y Salida",
      "1 puerta: Puerta de Control de Contexto",
    ],
  },
  {
    question: "¿En qué se diferencia la GRU de la LSTM?",
    options: [
      "La GRU tiene solo 2 puertas (actualización y reinicio), es más simple y eficiente computacionalmente que la LSTM",
      "La GRU tiene más puertas que la LSTM, haciéndola más potente",
      "La GRU no tiene célula de memoria; la LSTM sí",
      "La GRU es unidireccional; la LSTM puede ser bidireccional",
    ],
  },
  {
    question: "¿En qué artículo y año se presentaron los Transformers?",
    options: [
      "\"Attention is All You Need\" (Vaswani et al., 2017)",
      "\"Deep Learning\" (LeCun et al., 2015)",
      "\"BERT: Pre-training of Deep Bidirectional Transformers\" (Devlin et al., 2018)",
      "\"Attention Mechanisms in Neural Networks\" (Bahdanau et al., 2014)",
    ],
  },
  {
    question: "¿Qué representan Q, K y V en el mecanismo de self-attention de los Transformers?",
    options: [
      "Query (la palabra analizada), Key (características de todas las palabras) y Value (información usada tras calcular conexiones)",
      "Quantization, Kernel y Vector: componentes del proceso de cuantización del modelo",
      "Query, Kernel y Vector: tres tipos de capas de la red neuronal",
      "Quality, Knowledge y Validation: métricas de evaluación del modelo",
    ],
  },
  {
    question: "¿Qué ventaja fundamental tienen los Transformers sobre las RNNs en términos de entrenamiento?",
    options: [
      "Procesan datos de forma paralela, lo que mejora significativamente la eficiencia respecto al procesamiento secuencial de las RNNs",
      "Requieren menos datos de entrenamiento que las RNNs",
      "Son más interpretables porque cada capa tiene una función específica definida",
      "No necesitan backpropagation para actualizar sus pesos",
    ],
  },
  {
    question: "¿Cuál es la diferencia principal entre BERT y GPT en cuanto a su arquitectura?",
    options: [
      "BERT es un encoder bidireccional que entiende contexto en ambas direcciones; GPT es un decoder autoregresivo para generación de texto",
      "BERT es más grande que GPT en número de parámetros",
      "GPT usa atención multi-cabeza; BERT usa atención unidireccional",
      "BERT solo hace clasificación; GPT solo hace traducción",
    ],
  },
  {
    question: "¿Qué innovación introduce DeBERTa respecto a BERT?",
    options: [
      "Atención disentangled: representa cada palabra con vectores separados para contenido y posición, mejorando el rendimiento",
      "Un encoder más profundo con el doble de capas que BERT",
      "El uso de datos de entrenamiento 10 veces mayores que BERT",
      "Una arquitectura puramente decoder sin componente encoder",
    ],
  },
  {
    question: "¿Cuáles son las fases de aprendizaje de los LLMs (Large Language Models)?",
    options: [
      "Preentrenamiento (no supervisado, datos masivos no etiquetados) y Fine-tuning (supervisado, datos específicos de la tarea)",
      "Entrenamiento supervisado seguido de validación cruzada",
      "Clustering no supervisado seguido de clasificación supervisada",
      "Generación de texto seguida de corrección humana iterativa",
    ],
  },
  {
    question: "¿Qué es el Hugging Face Hub?",
    options: [
      "Una plataforma centralizada para compartir y colaborar en modelos de lenguaje, datasets y recursos de IA",
      "Un framework de entrenamiento de modelos como PyTorch",
      "Un servicio de computación en la nube especializado en NLP",
      "Una herramienta de evaluación automática de modelos de lenguaje",
    ],
  },
  {
    question: "¿Qué hace el Masked Language Modeling (MLM) en el preentrenamiento de BERT?",
    options: [
      "Oculta palabras aleatorias y el modelo debe predecirlas a partir del contexto bidireccional",
      "Predice la siguiente palabra en una secuencia de forma autoregresiva",
      "Clasifica si dos oraciones están relacionadas coherentemente",
      "Aprende a distinguir entre pares de frases similares y diferentes",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre K-Means y DBSCAN para clustering en NLP?",
    options: [
      "K-Means requiere definir K previamente y asume clusters esféricos; DBSCAN detecta clusters de cualquier forma y clasifica ruido automáticamente",
      "DBSCAN siempre produce mejores resultados que K-Means para texto",
      "K-Means es jerárquico; DBSCAN es particional",
      "DBSCAN requiere más hiperparámetros que K-Means",
    ],
  },
  {
    question: "¿Para qué se usa UMAP en NLP?",
    options: [
      "Reducción de dimensionalidad de embeddings de alta dimensionalidad para visualización, más rápido y escalable que t-SNE",
      "Generación de embeddings contextuales para palabras fuera del vocabulario",
      "Evaluación de la calidad semántica de los embeddings generados",
      "Preprocesamiento de texto para eliminar palabras irrelevantes",
    ],
  },
  {
    question: "¿Cuál es el flujo de trabajo completo para análisis no supervisado de texto con embeddings?",
    options: [
      "Preprocesamiento → Generación de embeddings → Reducción de dimensionalidad (UMAP/t-SNE) → Clustering → Visualización",
      "Tokenización → Stemming → TF-IDF → K-Means → Exportar resultados",
      "Fine-tuning → Inferencia → Clustering → Etiquetado manual → Evaluación",
      "Word2Vec → PCA → KNN → Clasificación → Métricas de evaluación",
    ],
  },
  {
    question: "¿Qué ventaja tiene HDBSCAN sobre DBSCAN?",
    options: [
      "Es una extensión jerárquica que selecciona automáticamente el número óptimo de clusters",
      "Requiere menos parámetros que DBSCAN para funcionar",
      "Produce clusters con formas siempre esféricas, más interpretables",
      "Solo funciona con embeddings de alta dimensionalidad como BERT",
    ],
  },
  {
    question: "¿Qué tarea realiza el Next Sentence Prediction (NSP) en BERT?",
    options: [
      "Evalúa si dos oraciones están relacionadas coherentemente; sirve para mejorar tareas de respuesta a preguntas",
      "Predice la siguiente palabra en una secuencia de texto",
      "Clasifica el sentimiento de una oración completa",
      "Genera la siguiente oración dado un contexto previo",
    ],
  },
  {
    question: "¿Cuál es la principal limitación de los LLMs según la teoría?",
    options: [
      "No entienden el mundo como los humanos (falta comprensión real) y reproducen sesgos de los datos de entrenamiento",
      "Solo pueden procesar textos en inglés con alta precisión",
      "Son demasiado lentos para aplicaciones en tiempo real",
      "Requieren GPU especializadas que solo existen en tres empresas en el mundo",
    ],
  },
  {
    question: "¿Qué diferencia a GloVe de Word2Vec?",
    options: [
      "GloVe genera embeddings a partir de co-ocurrencias globales del corpus; Word2Vec usa una ventana de contexto local",
      "GloVe es más rápido de entrenar y requiere menos datos",
      "Word2Vec es bidireccional; GloVe solo considera contexto unidireccional",
      "GloVe genera embeddings contextuales dinámicos; Word2Vec es estático",
    ],
  },
  {
    question: "¿Qué es el one-hot encoding y cuál es su principal limitación frente a los embeddings?",
    options: [
      "Representa cada palabra como un vector binario único; no captura relaciones semánticas entre palabras similares",
      "Codifica texto en formato numérico para compresión; pierde información sintáctica",
      "Asigna un índice a cada palabra; no permite procesamiento paralelo",
      "Normaliza vectores de palabras a longitud 1; pierde información de frecuencia",
    ],
  },
  {
    question: "DistilBERT es descrito como...",
    options: [
      "Una versión ligera y eficiente de BERT con menor coste computacional",
      "Un BERT más grande con mejor rendimiento en todas las tareas",
      "Una variante que combina las arquitecturas de BERT y GPT",
      "El primer modelo Transformer para datos multilingües",
    ],
  },
];

export const ud3Questions: Question[] = [
  {
    question: "¿Cuáles son los tres principales modelos de servicio en la nube (Cloud)?",
    options: [
      "IaaS (infraestructura), PaaS (plataforma) y SaaS (software como servicio)",
      "Public Cloud, Private Cloud y Hybrid Cloud",
      "Almacenamiento, Cómputo y Red como los tres pilares de la nube",
      "On-premise, Off-premise y Edge Computing como modelos de despliegue",
    ],
  },
  {
    question: "¿Qué diferencia una GPU de una CPU para tareas de IA?",
    options: [
      "Las GPUs tienen miles de núcleos paralelos ideales para operaciones matriciales del deep learning; las CPUs tienen pocos núcleos potentes para tareas secuenciales",
      "Las CPUs son más rápidas que las GPUs para entrenamiento de modelos grandes",
      "Las GPUs solo sirven para renderizado de gráficos, no para IA",
      "Las CPUs y GPUs tienen el mismo rendimiento para operaciones de IA",
    ],
  },
  {
    question: "¿Qué son las TPUs y quién las desarrolló?",
    options: [
      "ASICs (circuitos integrados de aplicación específica) diseñados por Google para operaciones tensoriales, extremadamente eficientes en TensorFlow",
      "Procesadores de Intel especializados para tareas de NLP",
      "Unidades de procesamiento de texto desarrolladas por NVIDIA para LLMs",
      "Chips de memoria de alta velocidad para acelerar la inferencia de modelos BERT",
    ],
  },
  {
    question: "¿Qué es el Edge Computing?",
    options: [
      "Procesamiento de datos cerca de donde se generan (dispositivos IoT, smartphones) en lugar de enviarlos a la nube central, reduciendo latencia",
      "Computación en los nodos periféricos de una red de servidores en la nube",
      "Un modelo de servicio donde el software se ejecuta en el borde de la red del usuario",
      "Tecnología para procesar datos en el límite entre la CPU y la GPU",
    ],
  },
  {
    question: "¿Cuál fue el año de lanzamiento de LangChain y quién lo creó?",
    options: [
      "Octubre 2022, por Harrison Chase y más de 2.200 contribuidores, con licencia MIT",
      "Marzo 2023, por Microsoft, con soporte para C#, Java y Python",
      "Enero 2021, por OpenAI, integrado en la API de GPT-3",
      "Septiembre 2019, por Google DeepMind, basado en TensorFlow",
    ],
  },
  {
    question: "¿Cuál es la diferencia clave entre LangChain y Semantic Kernel en cuanto a enfoque?",
    options: [
      "LangChain tiene enfoque de comunidad open-source con ecosistema amplio; Semantic Kernel tiene enfoque empresarial en el stack de Microsoft",
      "Semantic Kernel soporta más lenguajes de programación que LangChain",
      "LangChain solo funciona con OpenAI; Semantic Kernel es agnóstico al proveedor",
      "Semantic Kernel tiene más forks en GitHub y mayor comunidad",
    ],
  },
  {
    question: "¿Qué son los planners (planificadores) en Semantic Kernel?",
    options: [
      "Componentes que permiten al modelo generar un plan de ejecución automáticamente a partir de un objetivo en lenguaje natural, encadenando plugins (meta-prompting)",
      "Funciones nativas como TimePlugin o MathPlugin que el kernel puede invocar",
      "Conectores a servicios externos como Azure OpenAI o Hugging Face",
      "Herramientas para monitorizar y depurar aplicaciones LLM",
    ],
  },
  {
    question: "¿Qué es un modelo Mixture of Experts (MoE)?",
    options: [
      "Una arquitectura donde múltiples subredes especializadas (expertos) se activan de forma dispersa según cada token, reduciendo el coste de inferencia",
      "Un ensemble de modelos entrenados en diferentes datasets que votan la predicción final",
      "Un modelo que mezcla diferentes tipos de datos (texto, imagen, audio) en el entrenamiento",
      "Una arquitectura con múltiples capas de atención especializadas en diferentes idiomas",
    ],
  },
  {
    question: "¿Cuál es el principal desafío del entrenamiento de modelos MoE?",
    options: [
      "El load balancing: el router tiende a enviar tokens siempre a los mismos expertos, requiriendo pérdidas auxiliares para distribuir uniformemente",
      "Requieren más datos que los modelos densos para converger",
      "No pueden entrenarse en paralelo, lo que aumenta el tiempo de entrenamiento",
      "Tienen menor capacidad que los modelos densos equivalentes",
    ],
  },
  {
    question: "¿Cuál es el patrón base más común en los agentes de IA?",
    options: [
      "ReAct (Reasoning + Acting): el modelo alterna entre razonamiento en lenguaje natural y ejecución de acciones",
      "Plan-and-Execute: primero genera un plan completo y luego ejecuta cada paso",
      "MRKL: sistema modular que enruta consultas a módulos especializados",
      "Reflexion: el agente genera una respuesta y la evalúa críticamente antes de entregarla",
    ],
  },
  {
    question: "¿Cuántos document loaders soporta LangChain aproximadamente?",
    options: [
      "Más de 100 formatos, incluyendo HTML, PDF, JSON, Word, CSV, YouTube, arXiv, S3",
      "Solo PDF, TXT y Word, los formatos más comunes",
      "Exactamente 50 formatos documentados y estables",
      "Cualquier formato mediante un procesador genérico de texto",
    ],
  },
  {
    question: "¿Qué es el Federated Learning en el contexto de privacidad?",
    options: [
      "Entrenamiento distribuido donde los datos nunca salen del dispositivo local, preservando la privacidad",
      "Un protocolo de comunicación cifrada entre servidores de IA",
      "Una técnica que añade ruido estadístico a los datos para proteger la privacidad individual",
      "Un método de compresión que reduce el tamaño de los modelos sin pérdida de privacidad",
    ],
  },
  {
    question: "¿Cuál es el modelo de Mixtral 8x7B y cuántos parámetros activa por inferencia?",
    options: [
      "Un modelo MoE con 8 expertos FFN que activa 2 por token, con ~13B parámetros activos de 47B totales",
      "Un modelo denso de 7B parámetros con 8 capas de atención multi-cabeza",
      "Un ensemble de 8 modelos de 7B parámetros que votan la predicción",
      "Un modelo de 56B parámetros (8×7B) activos en cada inferencia",
    ],
  },
  {
    question: "¿Qué diferencia LangSmith de LangServe en el ecosistema LangChain?",
    options: [
      "LangSmith es para monitorización y depuración (DevOps); LangServe permite desplegar cadenas como APIs REST",
      "LangSmith gestiona la memoria a largo plazo; LangServe gestiona la memoria a corto plazo",
      "LangSmith es el framework principal; LangServe es una extensión para procesamiento de imágenes",
      "Son dos nombres del mismo componente con funciones idénticas",
    ],
  },
  {
    question: "¿Qué es el Chain-of-Thought (CoT) prompting?",
    options: [
      "Una técnica de prompting donde se pide al modelo que razone paso a paso antes de dar la respuesta final",
      "Una cadena de varios modelos LLM encadenados para procesar una consulta",
      "El historial de conversación que se incluye en el contexto del prompt",
      "Una técnica para entrenar modelos con secuencias de pensamientos anotados por humanos",
    ],
  },
  {
    question: "¿Qué es BART y para qué destaca?",
    options: [
      "Un modelo de denoising preentrenado que combina encoder bidireccional (BERT) con decoder autoregresivo (GPT), ideal para sumarización",
      "Un modelo de traducción automática neuronal basado en reglas lingüísticas",
      "Un sistema de análisis de sentimiento desarrollado por Facebook",
      "Una variante de GPT especializada en respuesta a preguntas sobre documentos",
    ],
  },
  {
    question: "¿Qué es ChatGPT y qué técnica adicional usa respecto a GPT?",
    options: [
      "Una versión de GPT alineada con preferencias humanas mediante RLHF (Reinforcement Learning from Human Feedback)",
      "Un modelo GPT más pequeño y eficiente para aplicaciones en dispositivos móviles",
      "La primera versión de GPT capaz de procesar imágenes además de texto",
      "Una API que combina múltiples modelos GPT para mayor precisión",
    ],
  },
  {
    question: "¿Cuáles son los componentes principales de un agente de IA según la teoría?",
    options: [
      "LLM como cerebro, herramientas (Tools), memoria y loop de acción Observación-Pensamiento-Acción",
      "Encoder, decoder, memoria y sistema de puntuación",
      "Base de datos vectorial, modelo de embeddings, generador de texto y evaluador",
      "Pipeline de preprocesamiento, modelo de clasificación, postprocesamiento y API",
    ],
  },
  {
    question: "¿Cuál es el patrón básico de AutoGen (Microsoft)?",
    options: [
      "AssistantAgent (propone código/soluciones) + UserProxyAgent (ejecuta y devuelve feedback), ciclo iterativo hasta resolver la tarea",
      "Un único agente autónomo que gestiona todo el flujo de trabajo sin interacción",
      "Tres agentes especializados: planificador, ejecutor y evaluador trabajando en secuencia",
      "Un framework donde el usuario define cada paso del agente manualmente",
    ],
  },
  {
    question: "¿Qué es T5 y cuál es su enfoque diferenciador?",
    options: [
      "Text-to-Text Transfer Transformer: unifica todas las tareas NLP bajo el enfoque de texto a texto",
      "Un modelo de traducción automática con 5 capas de transformers",
      "Un sistema de resumen automático con 5 etapas de procesamiento",
      "Una versión reducida de BERT con 5 veces menos parámetros",
    ],
  },
];

export const ud4Questions: Question[] = [
  {
    question: "¿Cuál es el hito que marcó el inicio del deep learning en Computer Vision?",
    options: [
      "AlexNet ganó ILSVRC 2012 con un error del 15.3%, frente al 26% del mejor método tradicional",
      "LeNet-5 demostró en 1998 la viabilidad de las CNNs para reconocimiento de dígitos",
      "ResNet introdujo en 2015 las conexiones residuales para redes muy profundas",
      "ImageNet fue creada en 2009 con más de 14 millones de imágenes etiquetadas",
    ],
  },
  {
    question: "¿Qué hace la operación de convolución en una CNN?",
    options: [
      "Aplica un filtro (kernel) deslizándolo sobre la imagen, calculando el producto punto entre el kernel y cada región, generando un mapa de características",
      "Reduce la dimensionalidad espacial de los mapas de características tomando el valor máximo de cada región",
      "Conecta todas las neuronas de una capa con todas las de la siguiente capa",
      "Normaliza los valores de los píxeles de la imagen antes de procesarlos",
    ],
  },
  {
    question: "¿Qué hace el Max Pooling en una CNN?",
    options: [
      "Toma el valor máximo de una ventana (normalmente 2×2), reduciendo la dimensión espacial de los mapas de características",
      "Calcula el promedio de los valores de la ventana para suavizar las características",
      "Multiplica cada píxel por el filtro aprendido durante el entrenamiento",
      "Conecta los mapas de características con la capa completamente conectada",
    ],
  },
  {
    question: "¿Cuál es la función de la capa de Flattening en una CNN?",
    options: [
      "Transformar el tensor 3D de salida de las capas convolucionales/pooling en un vector 1D para las capas completamente conectadas",
      "Reducir la dimensión espacial de los mapas de características",
      "Aplicar regularización para evitar el sobreajuste de la red",
      "Normalizar los valores de activación antes de pasarlos a la siguiente capa",
    ],
  },
  {
    question: "¿Cuál es la fórmula del tamaño de salida de una capa convolucional?",
    options: [
      "((W - K + 2P) / S) + 1, donde W=tamaño entrada, K=kernel size, P=padding, S=stride",
      "(W + K - 2P) / S, donde los parámetros tienen el mismo significado",
      "W × K / (P + S), simplificación de la fórmula estándar",
      "W - K + 1, sin considerar padding ni stride",
    ],
  },
  {
    question: "¿Qué innovación introdujo ResNet en 2015?",
    options: [
      "Conexiones residuales (skip connections) que permiten entrenar redes muy profundas (50, 101, 152 capas) resolviendo la degradación del gradiente",
      "El uso de múltiples tamaños de kernel en paralelo (módulos inception)",
      "Kernels 3×3 uniformes para demostrar que la profundidad es clave en el rendimiento",
      "El primer uso de dropout para regularización en redes convolucionales",
    ],
  },
  {
    question: "¿Para qué sirve el Data Augmentation en entrenamiento de CNNs?",
    options: [
      "Enriquecer los datos de entrenamiento mediante transformaciones (rotación, volteo, ajuste de color) para aumentar la variedad sin recopilar más datos reales",
      "Generar datos sintéticos completamente nuevos usando modelos generativos",
      "Normalizar las imágenes para que tengan la misma distribución de píxeles",
      "Reducir el tamaño del dataset para acelerar el entrenamiento",
    ],
  },
  {
    question: "¿Cuál es la diferencia principal entre Data Augmentation y Synthetic Data?",
    options: [
      "Data Augmentation transforma datos existentes; Synthetic Data genera datos completamente nuevos mediante simuladores o GANs",
      "Synthetic Data es más barato; Data Augmentation requiere computación costosa",
      "Data Augmentation solo funciona con imágenes; Synthetic Data sirve para cualquier tipo de datos",
      "Son técnicas equivalentes con diferente nombre según el contexto",
    ],
  },
  {
    question: "¿Cuál es la estrategia de Transfer Learning donde se congela toda la red preentrenada?",
    options: [
      "Feature extraction: solo se entrena la nueva cabeza de clasificación, ideal cuando el nuevo dominio es similar a ImageNet",
      "Fine-tuning: se descongela parte de la red y se reentrenan con tasa de aprendizaje pequeña",
      "Fine-tuning progresivo: se descongelan capas gradualmente de arriba hacia abajo",
      "Domain adaptation: se adapta el modelo al nuevo dominio sin modificar ninguna capa",
    ],
  },
  {
    question: "¿Cuál es el principal caso de uso de EfficientNet?",
    options: [
      "Escalar eficientemente profundidad, anchura y resolución simultáneamente, logrando el mejor ratio parámetros/rendimiento",
      "Procesar imágenes en dispositivos móviles gracias a sus depthwise separable convolutions",
      "Generar imágenes de alta resolución mediante convoluciones transpuestas",
      "Detectar objetos en tiempo real con alta velocidad de inferencia",
    ],
  },
  {
    question: "¿Cómo tokeniza ViT (Vision Transformer) las imágenes?",
    options: [
      "Divide la imagen en parches de tamaño fijo (ej. 16×16 píxeles), los aplana y proyecta linealmente, añadiendo embeddings posicionales y un token [CLS]",
      "Aplica convoluciones 1×1 para reducir la imagen a un solo vector de características",
      "Convierte cada píxel en un token y aplica atención sobre todos los píxeles",
      "Divide la imagen en cuadrantes recursivos hasta obtener parches mínimos de 1×1",
    ],
  },
  {
    question: "¿Para qué imágenes son más adecuadas las CNNs frente a los Vision Transformers?",
    options: [
      "Para datasets pequeños, recursos computacionales limitados y cuando los patrones locales son más importantes que las relaciones globales",
      "Para imágenes de alta resolución donde las relaciones globales son cruciales",
      "Para grandes datasets con millones de imágenes y múltiples categorías",
      "Para tareas de segmentación semántica donde se requiere alta precisión por píxel",
    ],
  },
  {
    question: "¿Qué son los Swin Transformers y qué los diferencia de ViT original?",
    options: [
      "Introducen un enfoque jerárquico con ventanas deslizantes (swins), siendo más eficientes y aplicables a segmentación y detección además de clasificación",
      "Son una versión más grande de ViT con mayor número de capas de atención",
      "Usan destilación de conocimiento desde CNNs para mejorar su eficiencia con pocos datos",
      "Procesan la imagen completa en una sola operación de atención sin ventanas",
    ],
  },
  {
    question: "¿Qué es DeiT y qué problema resuelve?",
    options: [
      "Data-Efficient Image Transformers: usa destilación de conocimiento desde CNNs para entrenar ViT eficientemente con menos datos",
      "Deep Efficient Inception Transformers: combina módulos inception con atención para mayor eficiencia",
      "Dynamic Edge Image Transformers: diseñado para detección de bordes en imágenes de baja resolución",
      "Distilled Ensemble of Image Transformers: combina múltiples modelos para mayor precisión",
    ],
  },
  {
    question: "¿Qué es SIFT (Scale-Invariant Feature Transform)?",
    options: [
      "Un método clásico pre-deep learning para extraer características robustas a escala, rotación e iluminación en imágenes",
      "Un tipo de kernel aprendido en CNNs para detectar características de escala variable",
      "Un algoritmo de pooling que adapta el tamaño de la ventana según la escala de los objetos",
      "Una función de activación invariante a la escala de los valores de entrada",
    ],
  },
  {
    question: "¿Qué es el padding 'same' en capas convolucionales?",
    options: [
      "Se añaden ceros alrededor de la imagen para que la salida tenga el mismo tamaño espacial que la entrada",
      "Se elimina el padding para que la salida sea más pequeña que la entrada",
      "Se replica el borde de la imagen para evitar efectos de borde",
      "Se normaliza la salida para que tenga los mismos valores que la entrada",
    ],
  },
  {
    question: "¿Cuál es la ventaja principal del Average Pooling respecto al Max Pooling?",
    options: [
      "Suaviza las características y puede ser útil cuando la uniformidad de la información es más relevante que la presencia de características máximas",
      "Es siempre más eficiente computacionalmente que el Max Pooling",
      "Detecta mejor la presencia de características independientemente de variaciones menores",
      "Produce mapas de características invariantes a la traslación",
    ],
  },
  {
    question: "¿Qué es CLIP (OpenAI) y cuál es su capacidad diferenciadora?",
    options: [
      "Un modelo preentrenado con texto e imagen que permite zero-shot classification mediante descripciones textuales",
      "Un modelo de segmentación semántica que clasifica cada píxel según el texto de entrada",
      "Un generador de imágenes que interpreta descripciones textuales complejas",
      "Un modelo de detección de objetos que usa texto como supervisión débil",
    ],
  },
  {
    question: "¿Qué es ImageNet y por qué fue fundamental para el deep learning?",
    options: [
      "Una base de datos de más de 14 millones de imágenes etiquetadas en 20.000 categorías, cuya existencia fue clave para el desarrollo del deep learning en visión",
      "El primer framework de deep learning que permitió entrenar CNNs eficientemente en GPU",
      "Una competición anual de visión por computadora que impulsó el desarrollo de nuevas arquitecturas",
      "Un modelo de red neuronal convolucional desarrollado por Google en 2012",
    ],
  },
  {
    question: "¿Qué tipo de kernels aprenden las capas convolucionales profundas?",
    options: [
      "Kernels optimizados automáticamente mediante backpropagation, adaptados a las características específicas del problema",
      "Kernels de Sobel y Canny para detección de bordes en cualquier aplicación",
      "Kernels gaussianos para suavizado y reducción del ruido en imágenes",
      "Kernels de Gabor para detección de texturas y frecuencias espaciales",
    ],
  },
];

export const ud5Questions: Question[] = [
  {
    question: "¿Quién propuso las GANs y en qué año?",
    options: [
      "Ian Goodfellow en 2014, con el verdadero punto de inflexión en las redes generativas",
      "Yann LeCun en 1998, como extensión de las CNN para generación de imágenes",
      "Yoshua Bengio en 2012, junto con las primeras redes profundas",
      "Geoffrey Hinton en 2006, como aplicación de los autoencoders variacionales",
    ],
  },
  {
    question: "¿Cuáles son las dos redes que componen una GAN y cuál es su objetivo respectivo?",
    options: [
      "Generador (crear muestras para engañar al discriminador) y Discriminador (distinguir entre muestras reales y falsas)",
      "Encoder (comprimir datos) y Decoder (reconstruir datos originales)",
      "Actor (generar acciones) y Crítico (evaluar las acciones del actor)",
      "Políticas (generar texto) y Valor (evaluar la calidad del texto)",
    ],
  },
  {
    question: "¿Cómo se formula matemáticamente el entrenamiento de una GAN?",
    options: [
      "Como un juego minimax: min_G max_D [E[log D(x)] + E[log(1 - D(G(z)))]]",
      "Como una minimización conjunta de la pérdida del generador y el discriminador",
      "Como una maximización de la verosimilitud de los datos generados respecto a los reales",
      "Como una minimización del MSE entre los datos reales y los generados",
    ],
  },
  {
    question: "¿Qué es el 'mode collapse' en el entrenamiento de GANs?",
    options: [
      "El generador aprende a producir solo un subconjunto limitado de muestras (siempre la misma cara), perdiendo diversidad",
      "El discriminador colapsa y acepta todas las muestras como reales sin discriminar",
      "El entrenamiento diverge porque los gradientes explotan en las capas iniciales",
      "El modelo converge a un mínimo local sin alcanzar la calidad deseada",
    ],
  },
  {
    question: "¿Qué hace CycleGAN?",
    options: [
      "Traducción imagen-a-imagen sin pares de entrenamiento, usando dos GANs con pérdidas de ciclo-consistencia",
      "Genera imágenes con control estilístico a múltiples escalas mediante AdaIN",
      "Entrena progresivamente desde resoluciones bajas hasta altas para mayor estabilidad",
      "Condiciona el generador con una etiqueta de clase para generar imágenes específicas",
    ],
  },
  {
    question: "¿Qué es StyleGAN2 y qué técnica introduce?",
    options: [
      "Una GAN que genera imágenes ultrarrealistas de 1024×1024 con control estilístico a múltiples escalas, usando AdaIN (Adaptive Instance Normalization)",
      "Una GAN entrenada en ImageNet para generar imágenes de alta calidad condicionadas por clase",
      "Una GAN que aplica el concepto de residual connections al discriminador",
      "Una GAN que comienza con resoluciones de 4×4 y aumenta progresivamente",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre Pix2Pix y CycleGAN?",
    options: [
      "Pix2Pix es supervisada y requiere pares de entrenamiento (boceto→foto); CycleGAN no necesita pares",
      "CycleGAN es supervisada; Pix2Pix funciona sin pares de entrenamiento",
      "Pix2Pix genera imágenes desde ruido aleatorio; CycleGAN transforma imágenes existentes",
      "Son arquitecturas idénticas con diferente función de pérdida",
    ],
  },
  {
    question: "¿Cuáles son las dos fases de un modelo de difusión como Stable Diffusion?",
    options: [
      "1) Añadir ruido gaussiano progresivamente hasta convertir los datos en ruido puro; 2) Proceso inverso que elimina el ruido paso a paso para generar datos nuevos",
      "1) Comprimir la imagen en un espacio latente; 2) Descomprimir para generar una imagen nueva",
      "1) Entrenar un discriminador sobre datos reales; 2) Entrenar un generador para engañarlo",
      "1) Aplicar transformaciones de data augmentation; 2) Reconstruir la imagen original",
    ],
  },
  {
    question: "¿Qué es el espacio latente comprimido en Stable Diffusion y qué ventaja ofrece?",
    options: [
      "Transforma los datos a una representación comprimida antes de aplicar difusión, reduciendo significativamente los requisitos computacionales sin perder calidad",
      "Es el conjunto de parámetros aprendidos durante el entrenamiento del modelo",
      "Una dimensión oculta del transformer que codifica el estilo artístico de la imagen",
      "La representación de los prompts de texto en el espacio del modelo CLIP",
    ],
  },
  {
    question: "¿Qué arquitectura utiliza Stable Diffusion para el proceso de denoising?",
    options: [
      "Una arquitectura U-Net modificada que captura tanto detalles finos como patrones globales a diferentes niveles de resolución",
      "Un decoder transformer que genera píxeles de forma autoregresiva",
      "Una CNN ResNet que aplica residuales para mantener la información espacial",
      "Un encoder-decoder con atención cruzada entre texto e imagen",
    ],
  },
  {
    question: "¿Cómo guía el texto la generación de imágenes en Stable Diffusion?",
    options: [
      "Mediante embeddings de texto generados por CLIP que representan características semánticas latentes y guían el proceso de denoising",
      "Convirtiendo el texto en máscaras binarias que determinan qué regiones generar",
      "Usando el texto como nombre de una imagen de referencia en la base de datos de entrenamiento",
      "Aplicando el texto como etiqueta de clase en el condicionamiento condicional",
    ],
  },
  {
    question: "¿Cuál es la diferencia arquitectónica fundamental entre Stable Diffusion y DALL-E?",
    options: [
      "Stable Diffusion usa modelos de difusión en espacio latente comprimido; DALL-E usa transformers que relacionan directamente palabras con píxeles",
      "DALL-E es open-source; Stable Diffusion es un servicio propietario de OpenAI",
      "Stable Diffusion solo puede generar imágenes fotorrealistas; DALL-E también genera arte abstracto",
      "DALL-E requiere menos recursos computacionales al operar en espacio comprimido",
    ],
  },
  {
    question: "¿En qué destaca DALL-E comparado con Stable Diffusion?",
    options: [
      "Sobresale en la creación de composiciones abstractas e interpretación de descripciones textuales complejas y conceptos inusuales",
      "Genera imágenes más fotorrealistas con mayor precisión en los detalles y texturas",
      "Ofrece mayor personalización al ser open-source con comunidad activa",
      "Es más eficiente computacionalmente al operar en espacio latente comprimido",
    ],
  },
  {
    question: "¿Qué es BigGAN y quién lo desarrolló?",
    options: [
      "Una GAN a gran escala de DeepMind entrenada en ImageNet que genera imágenes de alta calidad condicionada por clase",
      "Una GAN de Google que introduce el entrenamiento progresivo por resoluciones",
      "Una GAN de OpenAI que precede a DALL-E en la generación texto-a-imagen",
      "Una GAN de NVIDIA diseñada para síntesis de video en alta resolución",
    ],
  },
  {
    question: "¿Cuál es la principal ventaja de los modelos de difusión sobre las GANs?",
    options: [
      "Son más estables durante el entrenamiento y no sufren mode collapse, ya que no dependen de un equilibrio adversarial",
      "Son más rápidos de inferir ya que no requieren múltiples pasos iterativos",
      "Requieren menos datos de entrenamiento para generar imágenes de alta calidad",
      "Generan imágenes de mayor resolución que cualquier arquitectura GAN",
    ],
  },
  {
    question: "¿Qué es MidJourney y cómo se diferencia de Stable Diffusion en acceso?",
    options: [
      "Una herramienta centrada en arte digital estilizado con interfaz a través de Discord; Stable Diffusion es open-source con comunidad activa",
      "Un modelo open-source de Meta centrado en generación de video; Stable Diffusion es solo para imágenes",
      "Un servicio de Google para generación de imágenes fotorrealistas; Stable Diffusion es de Stability AI",
      "Un modelo propietario de Adobe para diseño profesional; Stable Diffusion es un proyecto académico",
    ],
  },
  {
    question: "¿Qué es el equilibrio de Nash en el contexto de las GANs?",
    options: [
      "El equilibrio teórico donde el generador produce datos indistinguibles de los reales y el discriminador no puede mejorar su discriminación",
      "El punto donde la función de pérdida del discriminador y del generador son iguales",
      "Un estado de entrenamiento estable donde no hay gradientes explosivos ni vanishing",
      "El momento donde el modelo ha memorizado todos los datos de entrenamiento",
    ],
  },
  {
    question: "¿Qué son los Variational Autoencoders (VAEs) y en qué se diferencian de las GANs?",
    options: [
      "Los VAEs aprenden un espacio latente continuo y estructurado; las GANs usan entrenamiento adversarial. Los VAEs tienden a producir imágenes más borrosas",
      "Los VAEs usan discriminador adversarial; las GANs usan reconstrucción probabilística",
      "Son arquitecturas equivalentes con diferente función de pérdida",
      "Los VAEs son más modernos que las GANs y producen mejores resultados en todos los casos",
    ],
  },
  {
    question: "¿Para qué se usan las GANs en la generación de datos sintéticos?",
    options: [
      "Para aumentar datasets de entrenamiento cuando los datos reales son escasos o costosos de obtener, como en medicina o seguridad",
      "Para reemplazar completamente los datos reales y evitar problemas de privacidad",
      "Para generar datos de test más difíciles que permitan evaluar mejor los modelos",
      "Para normalizar la distribución de los datos de entrenamiento",
    ],
  },
  {
    question: "¿Qué es la DCGAN (Deep Convolutional GAN)?",
    options: [
      "La primera GAN estable que usa capas convolucionales transpuestas, sentando las bases de las GANs modernas (2015)",
      "Una GAN de Google diseñada para clasificación y generación de imágenes de alta resolución",
      "Una GAN especializada en generación de video mediante convoluciones 3D",
      "La primera GAN capaz de generar imágenes condicionadas por descripción textual",
    ],
  },
];

export const ud6Questions: Question[] = [
  {
    question: "¿Qué son los deepfakes y cuál es su principal riesgo?",
    options: [
      "Videos, imágenes y audio ultrarrealistas de personas que no existen o que dicen cosas que nunca dijeron, con riesgos de manipulación política, fraude y erosión de confianza en los medios",
      "Modelos de IA que generan código malicioso de forma automática",
      "Técnicas de hacking que explotan vulnerabilidades en modelos de IA generativa",
      "Datos de entrenamiento sintéticos que contienen información falsa",
    ],
  },
  {
    question: "¿Cuándo fue aprobado el AI Act de la Unión Europea y qué lo hace único?",
    options: [
      "2024; es la primera regulación comprehensiva de IA del mundo, que clasifica los sistemas por nivel de riesgo",
      "2022; es la primera regulación que prohíbe completamente el uso de IA en decisiones laborales",
      "2023; regula exclusivamente los modelos de lenguaje de gran tamaño (LLMs)",
      "2021; establece el RGPD aplicado específicamente a sistemas de inteligencia artificial",
    ],
  },
  {
    question: "¿Qué categorías de riesgo establece el AI Act de la UE?",
    options: [
      "Riesgo inaceptable (prohibido), riesgo alto (regulado), riesgo limitado (transparencia obligatoria) y riesgo mínimo (sin obligaciones específicas)",
      "Riesgo crítico, riesgo elevado, riesgo moderado y riesgo bajo, con regulación progresiva",
      "Solo dos categorías: sistemas permitidos y sistemas prohibidos",
      "Tres niveles: verde (libre), amarillo (supervisado) y rojo (prohibido)",
    ],
  },
  {
    question: "¿Qué ejemplo se da como sistema de IA de riesgo inaceptable bajo el AI Act?",
    options: [
      "Sistemas de puntuación social gubernamental, manipulación subliminal y reconocimiento facial en tiempo real en espacios públicos (con excepciones)",
      "Sistemas de recomendación de contenido en plataformas de streaming",
      "Modelos de lenguaje como GPT-4 o Claude usados como asistentes de escritura",
      "Filtros de spam en correo electrónico basados en machine learning",
    ],
  },
  {
    question: "¿Cuáles son las tres estrategias de gobernanza de la IA mencionadas?",
    options: [
      "Autorregulación del sector, regulación estatal y colaboración público-privada",
      "Regulación técnica, ética y legal como los tres pilares de gobernanza",
      "Gobernanza por empresa, por sector y por país",
      "Auditorías automáticas, manuales y cruzadas",
    ],
  },
  {
    question: "¿Qué es la C2PA (Coalition for Content Provenance and Authenticity)?",
    options: [
      "Una iniciativa para establecer marcas de agua digitales y certificados de autenticidad del contenido para combatir los deepfakes",
      "Una coalición de empresas que prohíbe el desarrollo de modelos generativos sin supervisión",
      "Un protocolo criptográfico para verificar la identidad de los generadores de contenido",
      "Una organización que regula el uso comercial de las GANs y modelos de difusión",
    ],
  },
  {
    question: "¿Qué son las redes KAN y en qué se diferencian de las redes neuronales tradicionales (MLP)?",
    options: [
      "Redes que combinan aprendizaje conexionista con razonamiento simbólico, con nodos de conocimiento explícito en lugar de simples valores numéricos, ofreciendo alta interpretabilidad",
      "Redes con mayor número de parámetros que los MLP, logrando mejor rendimiento en tareas de visión",
      "Redes especializadas en procesamiento de grafos de conocimiento mediante atención",
      "Una arquitectura similar a LSTM pero diseñada para razonamiento lógico formal",
    ],
  },
  {
    question: "¿Cuál es la principal ventaja de las KAN en términos de interpretabilidad?",
    options: [
      "El razonamiento interno del modelo es inspeccionable; cada nodo representa conceptos, hechos o reglas explícitos",
      "Tienen menos parámetros que los MLP, lo que facilita su visualización",
      "Generan automáticamente explicaciones en lenguaje natural de sus decisiones",
      "Son modelos lineales que permiten calcular la importancia de cada variable directamente",
    ],
  },
  {
    question: "¿Qué es la AGI (Artificial General Intelligence)?",
    options: [
      "Un sistema capaz de realizar cualquier tarea intelectual que un ser humano puede hacer, con la misma capacidad de aprendizaje autónomo, razonamiento y adaptación entre dominios",
      "Un sistema de IA que supera a los humanos en todas las tareas específicas conocidas",
      "La versión más avanzada de GPT-4 con capacidad para procesar cualquier tipo de dato",
      "Un modelo de IA con más de 1 billón de parámetros entrenado en todos los textos de internet",
    ],
  },
  {
    question: "¿En qué fase de desarrollo hacia la AGI se encuentran actualmente sistemas como GPT-4?",
    options: [
      "Below Human Level: IA estrecha que supera humanos en tareas específicas pero falla fuera de su dominio",
      "Human Level: rendimiento equivalente al humano en cualquier tarea intelectual",
      "Moderately Superhuman: supera consistentemente a los mejores humanos en todos los dominios",
      "Super-Intelligent: inteligencia cualitativamente superior a la humana en todos los aspectos",
    ],
  },
  {
    question: "¿Qué es la Agentic AI y cómo se diferencia de la AGI?",
    options: [
      "La Agentic AI actúa como agente autónomo proactivo dentro de dominios específicos; la AGI tendría comprensión y generalización humana completa. Son etapas diferentes",
      "Son sinónimos que describen el mismo nivel de capacidad de la IA",
      "La Agentic AI es más avanzada que la AGI al poder actuar en el mundo real",
      "La AGI es reactiva; la Agentic AI es proactiva, siendo la AGI un subconjunto de la Agentic AI",
    ],
  },
  {
    question: "¿Cuáles son los 3 enfoques para lograr la AGI según la teoría?",
    options: [
      "Conexionistas avanzados (escalar transformers), Híbridos simbólico+conexionistas y Neuromórficos (hardware inspirado en el cerebro)",
      "Aprendizaje supervisado masivo, aprendizaje por refuerzo y aprendizaje no supervisado a gran escala",
      "Modelos de lenguaje, modelos de visión y modelos multimodales integrados",
      "Computación cuántica, computación neuromórfica y computación clásica distribuida",
    ],
  },
  {
    question: "¿Qué demostró Google con el procesador cuántico Willow en 2024?",
    options: [
      "Resolvió un problema de referencia en 5 minutos que tomaría 10^25 años a supercomputadores clásicos",
      "Entrenó un LLM de 1 billón de parámetros en menos de una hora",
      "Implementó el primer algoritmo cuántico de machine learning en producción",
      "Rompió el cifrado RSA de 4096 bits, demostrando la supremacía cuántica práctica",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre superposición y entrelazamiento en computación cuántica?",
    options: [
      "Superposición: un qubit puede representar 0 y 1 simultáneamente; Entrelazamiento: correlación cuántica entre qubits que permite paralelismo masivo",
      "Son el mismo fenómeno cuántico descrito con diferente nombre",
      "Superposición es un efecto de hardware; entrelazamiento es un efecto de software",
      "El entrelazamiento es superposición entre múltiples qubits que se estabiliza con el tiempo",
    ],
  },
  {
    question: "¿Cuál es un ejemplo de sistema agéntico según la teoría?",
    options: [
      "Devin (Cognition): agente de software que escribe, testea y despliega código de forma completamente autónoma",
      "GPT-4 respondiendo preguntas sin acceso a herramientas externas",
      "Un clasificador de imágenes entrenado con supervised learning",
      "Un chatbot de atención al cliente basado en reglas predefinidas",
    ],
  },
  {
    question: "¿Qué regulación específica aprobó China para la IA generativa en 2023?",
    options: [
      "El contenido generado por IA debe ser identificable y los modelos deben registrarse con las autoridades",
      "Prohibición total del uso de IA generativa en medios de comunicación",
      "Obligación de obtener licencia gubernamental para entrenar modelos de más de 1B parámetros",
      "Restricción del uso de IA generativa a empresas con capital chino mayoritario",
    ],
  },
  {
    question: "¿Qué establece la Executive Order on AI de Biden (2023) en EE.UU.?",
    options: [
      "Directrices sobre seguridad, privacidad y equidad en IA, requiriendo pruebas de 'red-teaming' para modelos de alto riesgo",
      "Una prohibición de los modelos de IA generativa en el sector público federal",
      "La creación de una agencia federal regulatoria específica para la IA",
      "Obligaciones de transparencia idénticas al AI Act europeo",
    ],
  },
  {
    question: "¿Qué son las conexiones dinámicas en las redes KAN?",
    options: [
      "Conexiones entre nodos modificables según el contexto, que se adaptan a nueva información sin necesitar reentrenamiento completo",
      "Conexiones que se activan o desactivan aleatoriamente durante el entrenamiento (como dropout)",
      "Conexiones residuales similares a las de ResNet para evitar el vanishing gradient",
      "Conexiones entre capas no consecutivas que saltan varias capas",
    ],
  },
  {
    question: "¿Qué es la era NISQ en computación cuántica?",
    options: [
      "Noisy Intermediate-Scale Quantum: ordenadores de 50-1000 qubits con alta tasa de error, fase actual del desarrollo cuántico",
      "Non-Integrated Symbolic Quantum: computación que combina qubits con procesadores clásicos",
      "Next Intelligent Scaling Quantum: la siguiente generación de ordenadores cuánticos sin errores",
      "Neural-Inspired Stochastic Quantum: arquitectura que imita el cerebro mediante qubits",
    ],
  },
  {
    question: "¿Cuál es el principal desafío de los agentes de IA según la teoría?",
    options: [
      "Las alucinaciones en la planificación: el LLM puede generar planes incoherentes o acciones inválidas, y puede quedarse en bucles infinitos",
      "La velocidad de procesamiento insuficiente para tareas en tiempo real",
      "La incapacidad para conectarse a APIs externas de forma segura",
      "El alto coste de entrenamiento de los modelos subyacentes",
    ],
  },
];

export const generalQuestions: Question[] = [
  {
    question: "¿Cuál es la diferencia entre BoW, TF-IDF y Word2Vec en representación de texto?",
    options: [
      "BoW usa frecuencias simples; TF-IDF pondera por rareza; Word2Vec captura relaciones semánticas con redes neuronales",
      "Son técnicas equivalentes que producen el mismo tipo de representación vectorial",
      "BoW y TF-IDF son para clasificación; Word2Vec es solo para generación de texto",
      "Word2Vec es más antiguo que BoW; TF-IDF es la técnica más moderna",
    ],
  },
  {
    question: "¿Cómo evolucionó el NLP desde sus inicios hasta los modelos actuales?",
    options: [
      "Reglas (1950-80) → Estadísticas/HMM (1980-2000) → Redes neuronales/Word2Vec/BERT (2000-presente) → Modelos gran escala/GPT-3 (2020-presente)",
      "Sistemas expertos (1970) → Machine learning (1990) → Deep learning (2010) → IA General (2020)",
      "Traducción automática → Reconocimiento de voz → Análisis de sentimientos → Generación de texto",
      "ELIZA → NLTK → spaCy → Transformers, todos siendo mejoras incrementales del mismo enfoque",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre LSTM y GRU en cuanto a puertas y eficiencia?",
    options: [
      "LSTM tiene 3 puertas (olvido, entrada, salida) y es mejor para dependencias largas; GRU tiene 2 puertas (actualización, reinicio) y es más eficiente computacionalmente",
      "GRU tiene 3 puertas y LSTM 2; GRU es más potente para secuencias largas",
      "Son equivalentes en todos los aspectos; la elección es solo de preferencia personal",
      "LSTM no tiene puertas; GRU tiene puertas que resuelven el vanishing gradient",
    ],
  },
  {
    question: "¿Qué ventaja tienen los Transformers sobre las RNNs para NLP?",
    options: [
      "Procesan secuencias en paralelo (no secuencialmente) y capturan relaciones a largo plazo mediante self-attention, siendo más escalables",
      "Tienen menos parámetros y son más rápidos de entrenar con datasets pequeños",
      "Son más interpretables al tener una arquitectura más simple y lineal",
      "No requieren datos etiquetados gracias al mecanismo de atención autodirigida",
    ],
  },
  {
    question: "¿Cuál es la relación entre LangChain, Semantic Kernel y los agentes de IA?",
    options: [
      "Son frameworks de orquestación de LLMs que permiten construir agentes con cadenas de acciones, memoria y herramientas; LangChain es más open-source y SK más empresarial",
      "Son frameworks competidores sin relación entre sí; LangChain es para NLP y SK para visión",
      "Semantic Kernel es una extensión de LangChain desarrollada por Microsoft",
      "Son herramientas de evaluación de modelos LLM, no de construcción de agentes",
    ],
  },
  {
    question: "¿Cómo se relacionan las CNNs con los Vision Transformers (ViT) en Computer Vision?",
    options: [
      "CNNs capturan patrones locales con filtros aprendidos; ViT modela relaciones globales mediante autoatención; son complementarios y ViT supera a CNN con grandes datasets",
      "ViT remplaza completamente a las CNNs en todas las tareas de visión",
      "Las CNNs son la versión moderna de los ViT, con mejor rendimiento en todos los escenarios",
      "Son arquitecturas idénticas excepto por el tipo de función de activación usada",
    ],
  },
  {
    question: "¿Qué tienen en común GANs y Stable Diffusion como modelos generativos?",
    options: [
      "Ambos aprenden la distribución de datos reales para generar nuevos ejemplos similares; difieren en su arquitectura (adversarial vs. difusión iterativa)",
      "Usan la misma arquitectura base de encoder-decoder con atención cruzada",
      "Requieren pares de datos etiquetados para generar contenido específico",
      "Solo generan imágenes fotorrealistas; para arte abstracto se necesitan otros modelos",
    ],
  },
  {
    question: "¿Cuál es el propósito del Transfer Learning tanto en NLP (BERT fine-tuning) como en CV (ResNet preentrenada)?",
    options: [
      "Reutilizar conocimiento aprendido en tareas/datos grandes para tareas específicas con menos datos, reduciendo el coste de entrenamiento",
      "Transferir pesos entre diferentes arquitecturas para crear modelos híbridos",
      "Mejorar la velocidad de inferencia al compartir capas entre múltiples modelos",
      "Garantizar que el modelo funcione en múltiples idiomas o dominios sin ajustes",
    ],
  },
  {
    question: "¿Qué problemas éticos comparten los LLMs y los modelos generativos de imágenes?",
    options: [
      "Sesgos heredados de datos de entrenamiento, riesgo de generar contenido falso/dañino, propiedad intelectual y alto impacto ambiental",
      "Problemas de latencia y escalabilidad en producción",
      "Incapacidad para procesar idiomas distintos al inglés",
      "Vulnerabilidades de seguridad en las APIs de acceso",
    ],
  },
  {
    question: "¿Cómo se relacionan AGI, Agentic AI y los sistemas de IA actuales en la hoja de ruta de desarrollo?",
    options: [
      "IA actual (IA estrecha) → Agentic AI (autónoma en dominios específicos) → AGI (generalización humana completa): son etapas progresivas de capacidad",
      "Son simultáneos; la IA actual incluye tanto Agentic AI como precursores de AGI",
      "La Agentic AI ya es equivalente a la AGI; solo difieren en el nombre",
      "AGI es más simple que Agentic AI; la generalidad reduce la necesidad de autonomía",
    ],
  },
  {
    question: "¿Qué papel juega el mecanismo de atención tanto en los Transformers de NLP como en los Vision Transformers?",
    options: [
      "En ambos casos permite al modelo asignar diferentes pesos de importancia a las partes relevantes de la entrada (palabras o parches de imagen), capturando relaciones a largo plazo",
      "En NLP la atención es bidireccional; en visión es unidireccional desde arriba hacia abajo",
      "La atención en visión funciona píxel a píxel; en NLP funciona token a token con diferente complejidad",
      "Solo los Transformers de NLP usan atención multi-cabeza; los ViT usan atención de una sola cabeza",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre el preentrenamiento de BERT (MLM) y de GPT (CLM)?",
    options: [
      "BERT usa Masked Language Modeling (bidireccional, predice palabras ocultas); GPT usa Causal Language Modeling (autoregresivo, predice la siguiente palabra)",
      "BERT predice secuencias completas; GPT solo predice tokens individuales",
      "Son idénticos; ambos usan el mismo objetivo de entrenamiento con diferente nombre",
      "GPT usa datos supervisados; BERT usa datos no supervisados para el preentrenamiento",
    ],
  },
  {
    question: "¿Qué rol juega CLIP en el ecosistema de modelos de visión e imagen-texto?",
    options: [
      "Conecta texto e imagen en un espacio compartido de embeddings, permitiendo zero-shot classification y guiando la generación en Stable Diffusion",
      "Es un clasificador de imágenes que usa texto como etiqueta de supervisión débil",
      "Es el discriminador en el sistema adversarial de Stable Diffusion",
      "Genera embeddings de texto exclusivamente para su uso en sistemas de búsqueda semántica",
    ],
  },
  {
    question: "¿Qué característica comparten el Mixture of Experts (MoE) y las redes KAN respecto a la eficiencia?",
    options: [
      "MoE activa solo un subconjunto de expertos por token (eficiencia en inferencia); KAN adapta conexiones dinámicamente sin reentrenar (eficiencia en actualización)",
      "Ambos son menos eficientes que los modelos densos tradicionales en inferencia",
      "Son dos nombres del mismo tipo de arquitectura con diferente aplicación",
      "Ambos solo son eficientes para tareas de generación de imagen, no de texto",
    ],
  },
  {
    question: "¿Cómo impacta la regulación del AI Act europeo en el desarrollo de LLMs como GPT, Gemini y Claude?",
    options: [
      "Requiere transparencia sobre datos de entrenamiento, pruebas adversariales y publicación de resúmenes de entrenamiento para modelos de IA de propósito general",
      "Prohíbe el despliegue de estos modelos en la UE sin aprobación previa de una agencia regulatoria",
      "Obliga a open-sourcear todos los pesos de los modelos de más de 10B parámetros",
      "Los modelos de propósito general están exentos de la regulación al no ser de riesgo alto",
    ],
  },
  {
    question: "¿Qué es el modelo T5 y en qué se diferencia de BERT y GPT?",
    options: [
      "T5 (Text-to-Text Transfer Transformer) unifica todas las tareas NLP como texto a texto; BERT es solo encoder para comprensión; GPT es solo decoder para generación",
      "T5 es más pequeño que BERT y GPT, pero más preciso en todas las tareas",
      "T5 es una versión multilingüe de BERT con soporte para 100 idiomas",
      "Son el mismo modelo con diferente configuración de capas de atención",
    ],
  },
  {
    question: "¿Cuántos y cuáles son los tipos de agentes de IA descritos en la teoría?",
    options: [
      "5 tipos: ReAct, Reflexion, Plan-and-Execute, OpenAI Functions y MRKL",
      "3 tipos: generativos, discriminativos y híbridos",
      "4 tipos: chatbots, asistentes virtuales, agentes autónomos y sistemas multi-agente",
      "2 tipos: agentes reactivos (sin memoria) y agentes deliberativos (con planificación)",
    ],
  },
  {
    question: "¿Cuál es la diferencia entre el Data Augmentation en CNN y el SMOTE en ML clásico?",
    options: [
      "Data Augmentation transforma imágenes existentes para aumentar variedad; SMOTE genera muestras sintéticas de la clase minoritaria interpolando entre instancias existentes",
      "Son la misma técnica aplicada a diferentes tipos de datos",
      "SMOTE es más potente y ha reemplazado al Data Augmentation en todas las aplicaciones",
      "Data Augmentation solo funciona en imágenes; SMOTE solo funciona en datos tabulares",
    ],
  },
  {
    question: "¿Qué aplicaciones prácticas tienen los embeddings más allá de los modelos de NLP?",
    options: [
      "Búsqueda semántica (RAG), sistemas de recomendación, clustering de documentos, detección de similitud y clasificación zero-shot",
      "Solo se usan dentro de modelos de NLP como componente interno",
      "Exclusivamente para visualización de datos textuales en 2D o 3D",
      "Solo sirven para comparar documentos en el mismo idioma",
    ],
  },
  {
    question: "¿Cuál es la relación entre la computación cuántica y el futuro de la IA?",
    options: [
      "La QAI (Quantum AI) podría acelerar la optimización y el entrenamiento de modelos, pero su uso práctico para IA general se estima a 10-20 años de distancia",
      "La computación cuántica ya está sustituyendo a las GPUs en entrenamiento de LLMs",
      "Son campos completamente independientes sin aplicaciones comunes previstas",
      "La computación cuántica solo mejora la criptografía, no el rendimiento de los modelos de IA",
    ],
  },
  {
    question: "¿Por qué es importante el RLHF (Reinforcement Learning from Human Feedback) en modelos como ChatGPT?",
    options: [
      "Permite alinear el modelo con las preferencias y valores humanos, mejorando la utilidad y seguridad de las respuestas más allá del simple preentrenamiento",
      "Es una técnica para reducir el tamaño del modelo sin perder precisión en las respuestas",
      "Permite al modelo aprender sin necesidad de ningún dato de entrenamiento inicial",
      "Garantiza que el modelo siempre responda en el idioma nativo del usuario",
    ],
  },
  {
    question: "¿Cuál es la ventaja de usar Kubernetes para despliegue de aplicaciones de IA?",
    options: [
      "Automatiza despliegue, escalado y gestión de contenedores Docker en clústeres, garantizando alta disponibilidad y balanceo de carga para aplicaciones de IA",
      "Permite entrenar modelos más rápido al distribuir el proceso entre múltiples contenedores",
      "Proporciona aceleradores de hardware cuántico para inferencia eficiente",
      "Es un framework de ML que optimiza automáticamente la arquitectura del modelo",
    ],
  },
  {
    question: "¿Qué es el fine-tuning progresivo en Transfer Learning para Computer Vision?",
    options: [
      "Se descongelan capas gradualmente de arriba hacia abajo (primero las finales, luego las iniciales) para una adaptación más estable y eficiente al nuevo dominio",
      "Se entrena el modelo progresivamente con imágenes de mayor resolución en cada época",
      "Se aumenta gradualmente el tamaño del modelo durante el fine-tuning",
      "Se entrena primero en datos de entrenamiento y luego progresivamente en datos de validación",
    ],
  },
  {
    question: "¿Qué tienen en común el 'mode collapse' en GANs y el 'overfitting' en modelos supervisados?",
    options: [
      "Ambos representan una falta de generalización: GANs producen poca variedad; modelos supervisados memorizan datos sin generalizar",
      "Ambos se resuelven exactamente con la misma técnica: dropout",
      "Son el mismo problema con diferente nombre según el tipo de modelo",
      "Ambos son deseables en ciertas situaciones que requieren alta especialización",
    ],
  },
  {
    question: "¿En qué se diferencia el Quantum Machine Learning (QML) del Machine Learning clásico?",
    options: [
      "QML ejecuta algoritmos de ML (QSVM, Quantum PCA, QNN) en hardware cuántico para aprovechar la superposición y entrelazamiento, con potencial de aceleración exponencial en ciertos problemas",
      "QML solo puede usar datos cuánticos; ML clásico funciona con cualquier tipo de dato",
      "QML produce modelos más interpretables al poder observar el estado cuántico interno",
      "Son exactamente equivalentes en capacidad; QML solo ofrece ventajas de velocidad marginal",
    ],
  },
];
