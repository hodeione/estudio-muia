import Link from "next/link";

export default function UD2() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-no-estructurados" className="text-sm text-blue-600 hover:underline">← Datos No Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">2</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD2: Modelos Profundos y Redes Neuronales para NLP</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso entornos con datos no estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-no-estructurados/ud1" className="text-sm text-slate-500 hover:text-blue-600">← UD1</Link>
          <Link href="/datos-no-estructurados/ud3" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD3 →</Link>
          <Link href="/datos-no-estructurados/ud2/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
        <strong>Temas:</strong> 1. RNN y variantes · 2. Transformers y atención · 3. LLMs, BERT, DeBERTa, Hugging Face · 4. Clustering y Embeddings en NLP
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Las Redes Neuronales Recurrentes (RNNs) son fundamentales en el análisis de datos secuenciales, especialmente en NLP y predicción de series temporales. Su capacidad de incorporar "memoria" las hace útiles para tareas que requieren contexto previo. Los modelos Transformer, introducidos en 2017, marcaron un avance significativo al superar las limitaciones de las RNN mediante el mecanismo de atención.
        </p>

        <h2>Tema 1: Repaso de Redes Neuronales Recurrentes (RNN) y variantes</h2>

        <h3>1.1. RNN</h3>
        <p>
          Las Redes Neuronales Recurrentes (RNNs) son un tipo de red neuronal diseñado para manejar datos secuenciales. A diferencia de las redes tradicionales (feedforward), las RNNs poseen "memoria", permitiendo que la información previa en una secuencia influya en la salida actual.
        </p>
        <p>
          Sin embargo, las RNNs estándar enfrentan el problema del <strong>desvanecimiento del gradiente</strong>: al entrenarse mediante retropropagación en el tiempo, las actualizaciones en los pesos se debilitan progresivamente al retroceder en la secuencia, afectando la capacidad de recordar información lejana.
        </p>

        <h3>1.2. LSTM y GRU</h3>
        <p>
          Las <strong>Long Short-Term Memory (LSTM)</strong> son variantes de RNN diseñadas para resolver el problema del desvanecimiento del gradiente. Incorporan una "célula de memoria" que permite retener información durante múltiples pasos de tiempo. Su arquitectura se basa en tres tipos de puertas:
        </p>
        <ol>
          <li><strong>Puerta de Olvido:</strong> Decide cuánta información previa debe descartarse.</li>
          <li><strong>Puerta de Entrada:</strong> Controla la incorporación de nueva información a la célula de memoria.</li>
          <li><strong>Puerta de Salida:</strong> Determina qué parte de la memoria se usará en el estado oculto actual.</li>
        </ol>
        <p>
          Las <strong>GRU (Gated Recurrent Unit)</strong> son más simples que las LSTM: solo tienen dos puertas (actualización y reinicio), combinando funciones para mejorar la eficiencia computacional. Son más rápidas de entrenar y útiles cuando el tiempo de cálculo es crítico.
        </p>

        <h4>Comparación LSTM vs GRU</h4>
        <table>
          <thead>
            <tr><th>Aspecto</th><th>LSTM</th><th>GRU</th></tr>
          </thead>
          <tbody>
            <tr><td>Complejidad</td><td>Más compleja (3 puertas)</td><td>Más sencilla (2 puertas)</td></tr>
            <tr><td>Rendimiento</td><td>Mejor en secuencias muy extensas</td><td>Comparable en secuencias cortas</td></tr>
            <tr><td>Coste computacional</td><td>Mayor</td><td>Más eficiente</td></tr>
            <tr><td>Aplicaciones</td><td>Dependencias temporales fuertes</td><td>Secuencias cortas o menos complejas</td></tr>
          </tbody>
        </table>

        <h2>Tema 2: Redes basadas en atención y modelos Transformer</h2>

        <h3>1.3. Transformers</h3>
        <p>
          Los <strong>transformers</strong> son una arquitectura de aprendizaje profundo presentada en 2017 por Vaswani et al. en el artículo <em>"Attention is All You Need"</em>. Revolucionaron el NLP al sustituir las arquitecturas recurrentes y convolucionales por el mecanismo de <strong>atención</strong>, que asigna distintos niveles de importancia a las partes de la entrada, capturando relaciones a largo plazo de manera eficiente.
        </p>

        <h4>Características principales</h4>
        <ul>
          <li><strong>Paralelización:</strong> Procesan datos de forma paralela, a diferencia de las RNN, lo que mejora la eficiencia.</li>
          <li><strong>Codificación posicional:</strong> Añade información sobre la posición de las palabras para manejar secuencias.</li>
          <li><strong>Componentes:</strong> Constan de un encoder (procesa la entrada) y un decoder (genera la salida).</li>
        </ul>

        <h4>El mecanismo de Self-Attention</h4>
        <p>El <strong>self-attention</strong> permite que cada palabra "preste atención" a las demás, asignando un peso que mide su relevancia. Se basa en tres componentes clave:</p>
        <ul>
          <li><strong>Q (Query):</strong> Representa la palabra que se analiza, como si hiciera una "pregunta" sobre las demás.</li>
          <li><strong>K (Key):</strong> Define las características de todas las palabras de la secuencia.</li>
          <li><strong>V (Value):</strong> Contiene la información que se usa tras calcular las conexiones.</li>
        </ul>

        <h4>Capas de los transformers</h4>
        <ul>
          <li><strong>Atención multi-cabeza:</strong> Calcula las relaciones contextuales entre palabras usando múltiples matrices de atención.</li>
          <li><strong>Capas feedforward:</strong> Redes lineales que permiten aprender características complejas.</li>
          <li><strong>Mecanismos de normalización y residual:</strong> Las conexiones residuales estabilizan el flujo de gradientes.</li>
        </ul>

        <h4>Modelos destacados basados en transformers</h4>
        <ul>
          <li><strong>BERT:</strong> Modelo bidireccional que entiende el contexto de palabras en ambas direcciones. Útil para preguntas y respuestas.</li>
          <li><strong>GPT:</strong> Modelo generativo que sobresale en generación de texto y tareas diversas de NLP.</li>
          <li><strong>RoBERTa:</strong> Optimización de BERT que mejora el tiempo de entrenamiento.</li>
          <li><strong>DistilBERT:</strong> Versión ligera y eficiente de BERT.</li>
          <li><strong>XLNet:</strong> Combina autoregresión y bidireccionalidad.</li>
          <li><strong>T5:</strong> Unifica tareas de NLP bajo el enfoque de "texto a texto".</li>
          <li><strong>ALBERT:</strong> Variante más ligera y eficiente de BERT.</li>
        </ul>

        <h4>Evolución de los transformers</h4>
        <ul>
          <li><strong>Modelos más grandes:</strong> GPT-3, GPT-4 y T5 incrementaron significativamente parámetros para realizar múltiples tareas sin ajustes específicos.</li>
          <li><strong>Modelos compactos:</strong> DistilBERT y ALBERT reducen complejidad mediante destilación y compartición de parámetros.</li>
          <li><strong>Impacto más allá del NLP:</strong> Vision Transformer (ViT) para imágenes; bioinformática para predicción de proteínas; generación creativa de música y arte.</li>
        </ul>

        <h3>1.4. LLMs (Large Language Models)</h3>
        <p>
          Los <strong>Large Language Models (LLMs)</strong>, o Modelos de Lenguaje de Gran Tamaño, son herramientas avanzadas de IA diseñadas para procesar y generar texto en lenguaje natural. Son altamente versátiles y pueden responder preguntas, traducir textos, redactar historias y analizar documentos complejos. Ejemplos: GPT, BERT y Llama.
        </p>

        <h4>¿Cómo aprenden los LLMs?</h4>
        <ol>
          <li><strong>Preentrenamiento:</strong> En esta fase no supervisada, el modelo analiza enormes volúmenes de texto para identificar patrones lingüísticos, estructuras de oraciones y relaciones entre conceptos.</li>
          <li><strong>Afinación (fine-tuning):</strong> Posteriormente, se ajusta para tareas específicas, como generar resúmenes o responder preguntas, utilizando ejemplos supervisados.</li>
        </ol>

        <h4>Desafíos y limitaciones de los LLMs</h4>
        <ul>
          <li><strong>Falta de comprensión real:</strong> No entienden el mundo como los humanos, lo que puede ocasionar errores en situaciones ambiguas.</li>
          <li><strong>Sesgos en los datos:</strong> Reproducen los prejuicios presentes en los datos de entrenamiento.</li>
          <li><strong>Altos requerimientos computacionales:</strong> Demandas significativas de hardware y energía.</li>
          <li><strong>Riesgo de mal uso:</strong> Pueden facilitar la creación de desinformación o contenidos no éticos.</li>
        </ul>

        <h4>Características clave de los LLMs</h4>
        <ul>
          <li><strong>Preentrenamiento:</strong> Aprenden representaciones lingüísticas de datos masivos no etiquetados.</li>
          <li><strong>Transferencia de aprendizaje:</strong> Adaptan conocimientos generales a tareas específicas con datos etiquetados.</li>
          <li><strong>Arquitecturas Transformer:</strong> Manejan contextos complejos y dependencias a largo plazo.</li>
          <li><strong>Generación de texto:</strong> Producen texto coherente y relevante de manera contextual.</li>
        </ul>

        <h3>1.5. BERT y DeBERTa</h3>
        <p>
          <strong>BERT (Bidirectional Encoder Representations from Transformers)</strong>, presentado en 2018, es un modelo basado en la arquitectura Transformer que destaca por su capacidad de capturar el contexto bidireccional de las palabras en una oración. Durante su preentrenamiento en grandes cantidades de texto no etiquetado, BERT aprende representaciones profundas del lenguaje natural que pueden transferirse a tareas específicas como clasificación de texto, reconocimiento de entidades o análisis de sentimiento.
        </p>
        <p>
          El modelo <strong>DeBERTa</strong>, derivado de BERT y RoBERTa, introduce atención disentangled, donde cada palabra se representa con vectores separados para contenido y posición. Además, mejora el entrenamiento del decodificador usando menos datos, manteniendo un alto rendimiento en tareas de NLP.
        </p>

        <h3>1.6. Hugging Face</h3>
        <p>
          Hugging Face es una empresa especializada en IA, reconocida por su enfoque en NLP y por ofrecer herramientas accesibles para desarrolladores. Sus principales aportes incluyen:
        </p>
        <ul>
          <li><strong>Biblioteca "Transformers":</strong> Una colección de modelos de lenguaje preentrenados como BERT, GPT y RoBERTa.</li>
          <li><strong>Hugging Face Hub:</strong> Plataforma centralizada para compartir y colaborar en modelos de lenguaje, datos y recursos de IA.</li>
          <li><strong>Versatilidad de los modelos:</strong> Permiten realizar tareas como clasificación de texto, generación y traducción automática.</li>
          <li><strong>Código abierto:</strong> Gran parte de sus recursos son accesibles y modifiables por la comunidad.</li>
          <li><strong>Educación:</strong> Ofrecen cursos y tutoriales para guiar a los usuarios en la aplicación de modelos.</li>
        </ul>

        <h2>Tema 3: Generación y comprensión de lenguaje natural con modelos grandes</h2>

        <h3>1.7. Fine-tuning y pre-entrenamiento de modelos de lenguaje</h3>

        <h4>Pre-entrenamiento</h4>
        <p>El <strong>pre-entrenamiento</strong> es la fase inicial donde un modelo aprende representaciones generales del lenguaje utilizando grandes volúmenes de datos no etiquetados (libros, publicaciones en internet). Este proceso le permite adquirir conocimientos sobre sintaxis, semántica y contexto.</p>

        <h4>Ejemplos de tareas de pre-entrenamiento</h4>
        <ul>
          <li><strong>Modelado de lenguaje causal (CLM):</strong> El modelo predice la próxima palabra en una secuencia. Ejemplo: "El perro persigue al ___" → "gato". Usado en GPT.</li>
          <li><strong>Modelado de lenguaje enmascarado (MLM):</strong> Se ocultan palabras aleatorias y el modelo debe predecirlas. Ejemplo: "El [MASK] persigue al gato." → "perro". Implementado en BERT.</li>
          <li><strong>Next Sentence Prediction (NSP):</strong> Se evalúa si dos oraciones están relacionadas coherentemente. Parte del entrenamiento de BERT.</li>
          <li><strong>Contrastive Learning:</strong> Se entrena el modelo para distinguir entre pares de frases similares y diferentes.</li>
        </ul>

        <h4>Fine-tuning</h4>
        <p>El <strong>fine-tuning</strong> es la etapa posterior al pre-entrenamiento donde el modelo se ajusta a tareas específicas utilizando un conjunto de datos más pequeño y etiquetado. Aprovecha el conocimiento general adquirido para optimizar su rendimiento en problemas concretos.</p>

        <h4>Ejemplos de fine-tuning</h4>
        <ul>
          <li><strong>Clasificación de texto:</strong> Determinar si una reseña es positiva o negativa. Modelo: BERT fine-tuned en un conjunto de reseñas.</li>
          <li><strong>Respuesta a preguntas:</strong> Dado un texto, responder preguntas específicas. Modelo: RoBERTa entrenado en el dataset SQuAD.</li>
          <li><strong>Traducción automática:</strong> Modelo T5 ajustado para traducción inglés-español.</li>
          <li><strong>Generación de texto personalizado:</strong> GPT-3 ajustado para redacción publicitaria.</li>
        </ul>

        <h3>1.8. Ética y consideraciones de uso de modelos grandes</h3>

        <h4>Principales consideraciones éticas</h4>
        <ul>
          <li><strong>Bias y equidad:</strong> Los modelos pueden reflejar y amplificar sesgos de género, raza, idioma y cultura presentes en los datos de entrenamiento.</li>
          <li><strong>Privacidad y seguridad de datos:</strong> El uso de datos sensibles plantea riesgos de privacidad. Se requieren técnicas de anonimización y restricciones de acceso.</li>
          <li><strong>Impacto ambiental:</strong> El entrenamiento de modelos grandes consume recursos significativos, generando altas emisiones de carbono.</li>
        </ul>

        <h4>Uso responsable y riesgos</h4>
        <ul>
          <li><strong>Desinformación y manipulación:</strong> Pueden generar contenido falso y persuasivo como "deepfakes" o textos manipulativos.</li>
          <li><strong>Automatización y pérdida de empleos:</strong> La IA automatiza tareas en diversos sectores, desplazando trabajadores.</li>
          <li><strong>Acceso desigual a la tecnología:</strong> El desarrollo está concentrado en pocas organizaciones, ampliando la brecha tecnológica.</li>
        </ul>

        <h4>Principios de IA ética</h4>
        <ul>
          <li><strong>Justicia:</strong> Evitar discriminación y desigualdades.</li>
          <li><strong>Transparencia:</strong> Facilitar la comprensión de los modelos.</li>
          <li><strong>Responsabilidad:</strong> Definir responsables por los resultados generados.</li>
          <li><strong>Beneficio social:</strong> Promover impactos positivos para toda la sociedad.</li>
        </ul>

        <h2>Tema 4: Clustering y Embeddings en NLP</h2>

        <h3>1.9. Fundamentos de los Embeddings en NLP</h3>
        <p>
          Los <strong>embeddings</strong> son representaciones numéricas densas que transforman palabras, frases o documentos en vectores en un espacio continuo, capturando relaciones semánticas. A diferencia del <em>one-hot encoding</em>, posicionan elementos con significados similares cerca entre sí en el espacio vectorial.
        </p>

        <h4>Ejemplos comunes de embeddings</h4>
        <ul>
          <li><strong>Word2Vec:</strong> Utiliza técnicas CBOW y Skip-gram para basarse en el contexto local.</li>
          <li><strong>GloVe:</strong> Representa palabras según su co-ocurrencia global.</li>
          <li><strong>FastText:</strong> Extiende Word2Vec al incorporar información morfológica mediante n-gramas.</li>
          <li><strong>Transformers embeddings (BERT, GPT):</strong> Aprovechan el contexto completo mediante representaciones profundas.</li>
        </ul>

        <h3>1.10. Clustering en NLP: Un Enfoque No Supervisado</h3>
        <p>
          El <strong>clustering no supervisado en NLP</strong> organiza datos textuales en grupos (clústeres) basándose únicamente en sus características inherentes, sin necesidad de etiquetas.
        </p>

        <h4>Métodos comunes de clustering</h4>
        <ul>
          <li><strong>K-Means:</strong> Divide los datos en K clústeres minimizando la varianza intraclúster. Simple y efectivo, pero requiere definir K previamente.</li>
          <li><strong>DBSCAN:</strong> Agrupa puntos densamente conectados y detecta ruido. Funciona bien con formas no esféricas.</li>
          <li><strong>HDBSCAN:</strong> Extensión jerárquica de DBSCAN, selecciona automáticamente el número óptimo de clústeres.</li>
          <li><strong>Spectral Clustering:</strong> Basado en grafos, utiliza valores propios del laplaciano para particionar datos.</li>
        </ul>

        <h4>Ejemplo práctico</h4>
        <p>Imaginemos una colección de reseñas de productos. Usando BERT, generamos embeddings para cada reseña y aplicamos DBSCAN para identificar grupos de temas similares, como "calidad del producto", "servicio al cliente" o "entrega".</p>

        <h3>1.11. Reducción de Dimensionalidad en NLP</h3>
        <p>Los embeddings suelen tener alta dimensionalidad, complicando su análisis y visualización. La <strong>reducción de dimensionalidad</strong> facilita trabajar con estos datos:</p>
        <ul>
          <li><strong>t-SNE:</strong> Proyecta datos a 2D o 3D, preservando relaciones locales. Útil para visualizar clústeres, aunque es computacionalmente costoso.</li>
          <li><strong>UMAP:</strong> Similar a t-SNE pero más rápido y escalable. Captura relaciones locales y globales, siendo ideal para datos complejos.</li>
          <li><strong>PCA:</strong> Proyecta datos en componentes lineales que explican la mayor parte de la varianza.</li>
        </ul>

        <h4>Ejemplo</h4>
        <p>Al analizar tweets, UMAP puede ayudar a identificar grupos temáticos como "política", "deportes" o "entretenimiento". La visualización en 2D facilita la interpretación de los resultados.</p>

        <h3>1.12. Integración: Embeddings + Clustering + Reducción de Dimensionalidad</h3>
        <p>El flujo de trabajo completo para análisis de datos no estructurados incluye:</p>
        <ol>
          <li><strong>Preprocesamiento del texto:</strong> Tokenización, eliminación de palabras vacías y normalización.</li>
          <li><strong>Generación de embeddings:</strong> Mediante modelos preentrenados o ajustados.</li>
          <li><strong>Reducción de dimensionalidad:</strong> Usando técnicas como UMAP o t-SNE.</li>
          <li><strong>Clustering:</strong> Identificar grupos usando K-Means o DBSCAN.</li>
          <li><strong>Visualización e interpretación:</strong> En 2D o 3D para detectar patrones.</li>
        </ol>

        <h3>1.13. Desafíos y Consideraciones Prácticas</h3>
        <ul>
          <li><strong>Elección del modelo de embeddings:</strong> Modelos rápidos como Word2Vec ofrecen limitaciones en contexto, mientras que BERT brinda mayor precisión a un costo computacional elevado.</li>
          <li><strong>Determinación del número de clústeres:</strong> Herramientas como el silhouette score son útiles, pero a menudo se necesita experimentación.</li>
          <li><strong>Interpretación de clústeres:</strong> La comprensión de los resultados puede ser compleja sin un conocimiento profundo del dominio.</li>
          <li><strong>Escalabilidad:</strong> Manejar grandes volúmenes de texto exige optimización en memoria y tiempo.</li>
        </ul>
      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-no-estructurados/ud1" className="text-sm text-slate-500 hover:text-blue-600">← UD1: Fundamentos NLP</Link>
        <div className="flex gap-3">
          <Link href="/datos-no-estructurados/ud2/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD2</Link>
          <Link href="/datos-no-estructurados/ud3" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold">Siguiente: UD3 →</Link>
        </div>
      </div>

    </div>
  );
}
