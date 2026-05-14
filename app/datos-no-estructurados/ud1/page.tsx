import Link from "next/link";

export default function UD1() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-no-estructurados" className="text-sm text-blue-600 hover:underline">← Datos No Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">1</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD1: Fundamentos del Procesamiento del Lenguaje Natural</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso entornos con datos no estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-no-estructurados/ud2" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD2 →</Link>
          <Link href="/datos-no-estructurados/ud1/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
        <strong>Temas:</strong> 1. Introducción a NLP y sus aplicaciones · 2. Representación del texto · 3. Modelos clásicos de NLP
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          NLP o Procesamiento del Lenguaje Natural es una rama de la inteligencia artificial que se ocupa de la interacción entre los ordenadores y el lenguaje humano. El objetivo principal de NLP es permitir que las máquinas comprendan, interpreten y generen texto de manera similar a como lo hacen los humanos. Esto implica la capacidad de procesar, analizar y responder a información escrita o hablada.
        </p>
        <p>
          En términos simples, NLP busca habilitar a los ordenadores para comprender el significado detrás del lenguaje humano en todas sus complejidades. Esto incluye la capacidad de entender la gramática, el contexto, las ambigüedades, el tono emocional y otros aspectos lingüísticos. Las aplicaciones de NLP son diversas y van desde la traducción automática y la generación de texto hasta la extracción de información, el análisis de sentimientos, el chatbot y la mejora de motores de búsqueda.
        </p>

        <h2>Tema 1: Introducción a NLP y sus aplicaciones</h2>

        <h3>1.1. Historia, evolución y áreas de aplicación</h3>
        <p>
          El Procesamiento de Lenguaje Natural (NLP) es una rama de la inteligencia artificial que busca que las máquinas comprendan, interpreten y generen lenguaje humano. Sus aplicaciones van desde traducción automática hasta asistentes virtuales.
        </p>

        <h4>Historia del NLP</h4>
        <ol>
          <li><strong>Inicios (1950-1980):</strong> Los primeros enfoques fueron basados en reglas y centrados en traducción automática, con proyectos como ELIZA y SHRDLU. Sin embargo, las limitaciones tecnológicas y conceptuales ralentizaron su avance.</li>
          <li><strong>Técnicas estadísticas (1980-2000):</strong> Se introdujeron modelos estadísticos como los Modelos de Markov Ocultos, que permitieron procesar grandes cantidades de datos con más flexibilidad que los sistemas basados en reglas.</li>
          <li><strong>Redes neuronales (2000-presente):</strong> La llegada de word embeddings (Word2Vec) y modelos transformadores como BERT y GPT revolucionaron el campo, logrando avances significativos en comprensión y generación de lenguaje.</li>
          <li><strong>Modelos a gran escala (2020-presente):</strong> Modelos como GPT-3 han llevado el NLP a nuevas alturas con capacidades sorprendentes en generación de texto y análisis. Sin embargo, plantean desafíos éticos y de sostenibilidad debido a sus altos requerimientos computacionales.</li>
        </ol>

        <h4>Áreas de Aplicación del NLP</h4>
        <ul>
          <li><strong>Análisis de sentimiento:</strong> Evalúa opiniones públicas y detecta actitudes positivas, negativas o neutras en redes sociales y reseñas, ayudando a las marcas a comprender percepciones de sus productos y servicios.</li>
          <li><strong>Traducción automática:</strong> Herramientas como Google Translate y DeepL ofrecen traducciones precisas en tiempo real, facilitando la comunicación cotidiana y profesional.</li>
          <li><strong>Sistemas de recomendación:</strong> Personalizan contenido en plataformas como Netflix y YouTube, utilizando preferencias previas e intereses expresados por los usuarios.</li>
          <li><strong>Asistentes virtuales y chatbots:</strong> Tecnologías como Siri, Alexa y ChatGPT responden preguntas y automatizan la atención al cliente.</li>
          <li><strong>Detección de fraude y ciberseguridad:</strong> Identifican patrones en mensajes para prevenir phishing y fraudes, analizando grandes volúmenes de datos en busca de actividad maliciosa.</li>
          <li><strong>Análisis jurídico y financiero:</strong> Automatizan la revisión de documentos legales y financieros, acelerando procesos y minimizando errores.</li>
        </ul>

        <h3>1.2. Desafíos y límites actuales en NLP</h3>
        <p>El Procesamiento de Lenguaje Natural ha experimentado avances significativos con el desarrollo de modelos de aprendizaje profundo, pero aún enfrenta desafíos críticos:</p>
        <ul>
          <li><strong>Ambigüedad semántica y polisemia:</strong> El lenguaje humano es ambiguo, y palabras con múltiples significados dependen del contexto. Los modelos de NLP todavía tienen dificultades para desambiguar términos en contextos complejos.</li>
          <li><strong>Ironía, sarcasmo y lenguaje figurado:</strong> Elementos como el sarcasmo o las metáforas son complicados de interpretar debido a su dependencia del contexto cultural y tonal.</li>
          <li><strong>Dependencia contextual a largo plazo:</strong> Mantener coherencia en textos extensos o conversaciones largas sigue siendo un reto, ya que los modelos tienden a perder precisión a medida que aumenta la longitud del contexto.</li>
        </ul>

        <h4>Ética y sesgos en los modelos de NLP</h4>
        <ul>
          <li><strong>Sesgo en los datos de entrenamiento:</strong> Los modelos tienden a reflejar y amplificar sesgos de género, raza o clase presentes en los datos, lo que puede llevar a respuestas discriminatorias.</li>
          <li><strong>Privacidad y confidencialidad:</strong> La inclusión de datos sensibles en los conjuntos de entrenamiento puede ocasionar que los modelos reproduzcan información confidencial.</li>
          <li><strong>Uso en aplicaciones sensibles:</strong> En ámbitos como la medicina y el derecho, errores en la interpretación del lenguaje pueden tener consecuencias graves.</li>
          <li><strong>Multilingüismo:</strong> Los modelos enfrentan retos al manejar múltiples idiomas, como la falta de datos en lenguas menos representadas.</li>
        </ul>

        <h4>Limitaciones técnicas actuales</h4>
        <ul>
          <li><strong>Alta demanda computacional y energética:</strong> Entrenar y operar modelos grandes como GPT-4 o BERT requiere enormes recursos computacionales y energéticos.</li>
          <li><strong>Desafíos de escalabilidad y mantenimiento:</strong> La integración de estos modelos en sistemas masivos plantea problemas de escalabilidad y requiere actualizaciones constantes.</li>
          <li><strong>Interoperabilidad entre idiomas y dialectos:</strong> Aunque los modelos muestran resultados sobresalientes en inglés, su rendimiento es menor en idiomas con pocos recursos de entrenamiento.</li>
        </ul>

        <h4>Evolución hacia el futuro del NLP</h4>
        <ul>
          <li><strong>NLP Multimodal:</strong> Los modelos integran texto, imágenes y audio, mejorando aplicaciones como la interpretación de lenguaje de señas y chatbots sofisticados.</li>
          <li><strong>Sistemas más eficientes y personalizables:</strong> Se están desarrollando modelos más ligeros usando técnicas como la destilación de modelos y la compresión de redes.</li>
          <li><strong>Mejor control de sesgos:</strong> Los esfuerzos para detectar y mitigar sesgos durante el entrenamiento incluyen curación avanzada de datos y penalizaciones específicas.</li>
        </ul>

        <h2>Tema 2: Representación del texto</h2>

        <h3>1.3. Limpieza y preprocesamiento de texto</h3>
        <p>
          El preprocesamiento de texto es uno de los primeros pasos fundamentales en NLP. Este proceso implica preparar el texto para que los modelos puedan analizarlo y extraer información de manera eficiente. Las etapas de limpieza y preprocesamiento permiten transformar el texto en un formato estructurado y sin ruido.
        </p>

        <h4>Pasos principales en la limpieza de texto</h4>
        <ul>
          <li><strong>Conversión a minúsculas:</strong> Se unifican las palabras sin distinguir entre mayúsculas y minúsculas, evitando duplicados (e.g., "Amor" → "amor").</li>
          <li><strong>Eliminación de signos de puntuación y caracteres especiales:</strong> Se eliminan para limpiar y simplificar el texto.</li>
          <li><strong>Eliminación de palabras vacías (stop words):</strong> Se descartan palabras comunes con poco valor informativo (e.g., "el", "de") para reducir ruido.</li>
          <li><strong>Corrección ortográfica y normalización:</strong> Se corrigen errores y se estandarizan abreviaturas (e.g., "tb" → "también").</li>
          <li><strong>Lematización y stemming:</strong> Se reducen las palabras a su raíz o forma base. La lematización considera el contexto gramatical, mientras que el stemming aplica recortes más básicos.</li>
        </ul>

        <h4>Herramientas populares para el preprocesamiento</h4>
        <ul>
          <li><strong>NLTK:</strong> Ofrece tokenización, lematización y eliminación de palabras vacías.</li>
          <li><strong>SpaCy:</strong> Eficiente para grandes volúmenes de datos y tareas avanzadas como la detección de entidades.</li>
          <li><strong>TextBlob:</strong> Útil para análisis básico, como corrección ortográfica y sentimientos.</li>
          <li><strong>Gensim:</strong> Enfocado en modelado de temas y representaciones semánticas.</li>
        </ul>

        <h4>Principales técnicas de limpieza avanzada</h4>
        <ul>
          <li><strong>Eliminación de caracteres especiales y emojis:</strong> Se pueden descartar o convertir emojis en etiquetas textuales según su relevancia.</li>
          <li><strong>Corrección de errores tipográficos:</strong> Herramientas como SymSpell, Hunspell o modelos basados en transformadores (e.g., BERT) detectan y corrigen errores.</li>
          <li><strong>Manejo de jerga y abreviaturas:</strong> Consiste en expandir términos informales (e.g., "u" → "you") mediante diccionarios personalizados.</li>
          <li><strong>Normalización de caracteres:</strong> Simplifica repeticiones excesivas (e.g., "heellooo" → "hello").</li>
        </ul>

        <h3>1.4. Tokenización y extracción de características</h3>
        <p>La tokenización divide el texto en unidades más pequeñas llamadas <strong>tokens</strong>, que pueden ser palabras, subpalabras o caracteres:</p>
        <ul>
          <li><strong>Tokenización de palabras:</strong> Divide el texto en palabras individuales, útil en métodos como Bag of Words o TF-IDF.</li>
          <li><strong>Tokenización de subpalabras:</strong> Segmenta palabras en prefijos, sufijos o radicales, usado en modelos como BERT para mayor flexibilidad.</li>
          <li><strong>Tokenización de caracteres:</strong> Separa texto en caracteres, útil para análisis más detallado, como detección de errores tipográficos.</li>
        </ul>

        <h4>Extracción de Características</h4>
        <ul>
          <li><strong>Frecuencia de términos:</strong> Representa palabras según su aparición en el texto, base de técnicas como Bag of Words.</li>
          <li><strong>N-gramas:</strong> Combina palabras en secuencias de longitud N para capturar relaciones y contexto entre palabras.</li>
          <li><strong>Etiquetas gramaticales y entidades:</strong> Identifica nombres, lugares y fechas, y asigna categorías gramaticales.</li>
        </ul>

        <p>
          Entre los modelos sub-palabra destaca el <strong>Byte Pair Encoding (BPE)</strong>, que segmenta las palabras en unidades más pequeñas. El BPE se basa en un proceso iterativo donde los pares de caracteres o sub-palabras más frecuentes se combinan en nuevos tokens, reduciendo el tamaño del vocabulario y mejorando la eficiencia del modelo.
        </p>

        <h3>1.5. Técnicas de representación</h3>

        <h4>A. Representación basada en frecuencia de palabras</h4>
        <ul>
          <li><strong>Bag of Words (BoW):</strong> Representa el texto como un vector de frecuencias de palabras, sin considerar el orden ni el contexto. Es sencilla y rápida, pero limitada en capturar relaciones semánticas.</li>
          <li><strong>TF-IDF:</strong> Mejora BoW al ponderar las palabras según su relevancia, considerando su frecuencia en un documento (TF) y su rareza en el corpus (IDF).</li>
        </ul>

        <h4>B. Word Embeddings</h4>
        <ul>
          <li><strong>Word2Vec:</strong> Basado en redes neuronales, genera vectores de alta dimensionalidad que capturan relaciones semánticas. Variantes:
            <ul>
              <li><strong>CBOW:</strong> Predice palabras desde el contexto.</li>
              <li><strong>Skip-Gram:</strong> Predice el contexto desde una palabra.</li>
            </ul>
          </li>
          <li><strong>GloVe:</strong> Genera embeddings a partir de co-ocurrencias de palabras, integrando frecuencia y semántica.</li>
          <li><strong>FastText:</strong> Considera subpalabras, mejorando la representación de palabras nuevas o complejas, ideal para lenguajes morfológicamente ricos.</li>
        </ul>

        <h4>C. Embeddings contextuales (Transformers)</h4>
        <p><strong>BERT</strong> y modelos similares generan embeddings contextuales dinámicos, adaptándose al contexto en el que aparecen las palabras. Esto permite una comprensión más precisa del lenguaje y su estructura.</p>

        <h2>Tema 3: Modelos clásicos de NLP</h2>

        <h3>1.6. Modelos estadísticos: N-grams y Markov Chains</h3>

        <h4>N-grams</h4>
        <p>Un <strong>N-gram</strong> es una secuencia de "N" elementos contiguos (palabras o caracteres) en un texto o habla. Este enfoque asume que la probabilidad de una palabra depende de las "N-1" palabras previas.</p>
        <ul>
          <li><strong>Unigramas (N=1):</strong> Cada palabra es independiente.</li>
          <li><strong>Bigramas (N=2):</strong> La probabilidad de una palabra depende de la anterior.</li>
          <li><strong>Trigramas (N=3):</strong> Consideran las dos palabras previas.</li>
        </ul>
        <p>Ejemplo con la frase "el gato come pescado" — un modelo de bigramas analiza relaciones como P("gato"|"el"), P("come"|"gato"), P("pescado"|"come").</p>
        <div className="formula">P("el gato come pescado") = P("el") × P("gato"|"el") × P("come"|"el gato") × P("pescado"|"gato come")</div>
        <p><strong>Ventajas:</strong> Simples, fáciles de implementar, efectivos en textos cortos y dominios específicos. <strong>Limitaciones:</strong> Alta dependencia del contexto (solo N-1 palabras), problemas de escasez de datos, complejidad exponencial con N grande.</p>

        <h4>Cadenas de Markov</h4>
        <p>Una <strong>Cadena de Markov</strong> es un modelo estadístico que describe una secuencia de eventos donde la probabilidad de cada evento depende únicamente del evento inmediatamente anterior (propiedad de Markov: el futuro es independiente del pasado dado el presente).</p>
        <p>Se caracteriza por una <strong>matriz de transición</strong>. Ejemplo: sistema con estados "soleado" y "lluvioso" con probabilidades de transición entre ellos.</p>
        <p><strong>Ventajas:</strong> Simplifican el modelado de secuencias con dependencias de corto alcance. <strong>Limitaciones:</strong> Suponen independencia de estados pasados, dificultades en secuencias largas.</p>

        <h4>Comparación N-grams vs Cadenas de Markov</h4>
        <table>
          <thead>
            <tr><th>Característica</th><th>N-grams</th><th>Cadenas de Markov</th></tr>
          </thead>
          <tbody>
            <tr><td>Dependencia de contexto</td><td>Fija (hasta N-1 elementos)</td><td>Fija (normalmente 1 elemento)</td></tr>
            <tr><td>Matriz de transición</td><td>No es necesario</td><td>Necesaria</td></tr>
            <tr><td>Aplicaciones</td><td>Textos cortos, corrección de errores</td><td>Sistemas de transición, análisis de patrones</td></tr>
            <tr><td>Escalabilidad</td><td>Compleja con alto N</td><td>Compleja con muchos estados</td></tr>
          </tbody>
        </table>

        <h3>1.7. Métodos de clasificación y etiquetado (Naive Bayes, K-Nearest Neighbors)</h3>

        <h4>Naive Bayes</h4>
        <p>Naive Bayes es un conjunto de algoritmos de clasificación que se basa en el <strong>Teorema de Bayes</strong> y asume independencia entre características. Aunque este supuesto no siempre se cumple, el modelo es eficaz en clasificación de textos, detección de spam y análisis de sentimientos.</p>
        <div className="formula">P(A|B) = P(B|A) · P(A) / P(B)</div>
        <p>Para clasificar una muestra con Naive Bayes:</p>
        <div className="formula">P(C|X) = P(C) · P(x₁|C) · P(x₂|C) · ... · P(xₙ|C)</div>
        <p><strong>Tipos:</strong> Gaussian (distribución normal), Multinomial (características discretas, común en texto), Bernoulli (características binarias).</p>
        <p><strong>Ventajas:</strong> Rápido, fácil de implementar, eficiente con datos pequeños. <strong>Limitaciones:</strong> El supuesto de independencia es poco realista.</p>

        <h4>K-Nearest Neighbors (KNN)</h4>
        <p>KNN es un método no paramétrico que asigna una clase a una muestra basándose en los "vecinos" más cercanos en el espacio de características.</p>
        <p><strong>Funcionamiento:</strong></p>
        <ol>
          <li>Se elige un valor para K (número de vecinos).</li>
          <li>Se calcula la distancia entre la muestra a clasificar y las del conjunto de entrenamiento.</li>
          <li>Se seleccionan los K vecinos más cercanos.</li>
          <li>La clase asignada corresponde a la mayoría de votos entre los vecinos.</li>
        </ol>
        <p><strong>Métricas de distancia:</strong> Euclidiana (características numéricas), Manhattan (características enteras), Coseno (texto).</p>
        <p><strong>Ventajas:</strong> Simple, no requiere entrenamiento explícito. <strong>Limitaciones:</strong> Poco eficiente en conjuntos grandes, afectado por la "maldición de la dimensionalidad".</p>

        <h4>SVMs y otros métodos</h4>
        <ul>
          <li><strong>SVM (Máquinas de Soporte Vectorial):</strong> Busca un hiperplano para separar clases. Ideal para datos de alta dimensionalidad como texto. Funciones kernel: lineal o RBF.</li>
          <li><strong>Árboles de Decisión y Random Forest:</strong> Los árboles generan reglas interpretables. Random Forest combina múltiples árboles para mejorar precisión y reducir sobreajuste.</li>
        </ul>

        <h3>1.8. Análisis de frecuencia y probabilidad en el lenguaje natural</h3>
        <ul>
          <li><strong>Frecuencia absoluta:</strong> Cantidad total de veces que aparece una palabra en el texto.</li>
          <li><strong>Frecuencia relativa:</strong> Proporción de la aparición de una palabra respecto al total de palabras.</li>
          <li><strong>Ley de Zipf:</strong> Establece que las palabras más comunes tienen frecuencias mucho mayores que las menos comunes, siguiendo una relación inversa con su posición en el ranking de frecuencia.</li>
          <li><strong>Probabilidad de una palabra:</strong> Frecuencia de la palabra dividida entre el total de palabras. Ejemplo: si "probabilidad" aparece 25 veces en 1000 palabras → probabilidad = 2.5%.</li>
        </ul>

        <h4>Aplicaciones del análisis de frecuencia en PLN</h4>
        <ul>
          <li><strong>Análisis de Sentimiento:</strong> Examina la frecuencia de palabras para determinar la polaridad de un texto.</li>
          <li><strong>Clasificación de Textos:</strong> Utiliza frecuencias y modelos como Naive Bayes para asignar textos a categorías.</li>
          <li><strong>Desambiguación Semántica:</strong> Calcula probabilidades basadas en las palabras circundantes para identificar el significado correcto.</li>
          <li><strong>Generación de Texto:</strong> Modelos basados en n-gramas predicen palabras para crear texto coherente.</li>
        </ul>

        <h3>1.9. Técnicas de Evaluación de Modelos de NLP</h3>
        <ul>
          <li>
            <strong>Precisión (Precision):</strong> Proporción de predicciones positivas correctas.
            <div className="formula">Precisión = Verdaderos Positivos / (Verdaderos Positivos + Falsos Positivos)</div>
          </li>
          <li>
            <strong>Recall (Cobertura):</strong> Capacidad del modelo para capturar correctamente todos los casos positivos.
            <div className="formula">Recall = Verdaderos Positivos / (Verdaderos Positivos + Falsos Negativos)</div>
          </li>
          <li>
            <strong>F1 Score:</strong> Media armónica de precisión y recall.
            <div className="formula">F1 Score = 2 × (Precisión × Recall) / (Precisión + Recall)</div>
          </li>
          <li><strong>BLEU:</strong> Evalúa la calidad de traducciones automáticas comparando n-gramas con traducciones de referencia. BLEU = Precisión de n-gramas × Factor de penalización de longitud.</li>
          <li><strong>ROUGE:</strong> Usado principalmente en resumen automático. Mide la superposición entre la salida generada y referencias en términos de recall. ROUGE-N = n-gramas coincidentes / Total de n-gramas en la referencia.</li>
          <li><strong>Perplexidad:</strong> Mide la incertidumbre de un modelo al predecir secuencias (menor es mejor).</li>
          <li><strong>WMD (Word Mover's Distance):</strong> Calcula la distancia semántica entre textos usando embeddings.</li>
          <li><strong>METEOR:</strong> Evalúa traducciones considerando coincidencias, sinónimos y morfología.</li>
        </ul>
      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-no-estructurados" className="text-sm text-slate-500 hover:text-blue-600">← Volver a Datos No Estructurados</Link>
        <div className="flex gap-3">
          <Link href="/datos-no-estructurados/ud1/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD1</Link>
          <Link href="/datos-no-estructurados/ud2" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold">Siguiente: UD2 →</Link>
        </div>
      </div>

    </div>
  );
}
