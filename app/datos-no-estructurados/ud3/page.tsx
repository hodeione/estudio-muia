import Link from "next/link";

export default function UD3() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-no-estructurados" className="text-sm text-blue-600 hover:underline">← Datos No Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">3</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD3: Aplicaciones prácticas y avances en NLP</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso entornos con datos no estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-no-estructurados/ud2" className="text-sm text-slate-500 hover:text-blue-600">← UD2</Link>
          <Link href="/datos-no-estructurados/ud4" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD4 →</Link>
          <Link href="/datos-no-estructurados/ud3/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
        <strong>Temas:</strong> 1. Frameworks y Cloud · 2. Infraestructura y Hardware · 3. Aplicaciones NLP en la vida real · 4. Futuro del NLP · 5. LangChain, Agentes y extensiones
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Tema 1: Frameworks y Cloud</h2>

        <h3>Conceptos de la Nube</h3>
        <p>
          La computación en la nube permite acceder a recursos computacionales (servidores, almacenamiento, redes, software) a través de internet, bajo demanda y con pago por uso. Elimina la necesidad de infraestructura física propia y permite escalabilidad instantánea.
        </p>

        <h3>Principales proveedores Cloud</h3>
        <ul>
          <li><strong>AWS (Amazon Web Services):</strong> El proveedor más grande del mercado. Ofrece más de 200 servicios: EC2 (cómputo), S3 (almacenamiento), SageMaker (ML), Lambda (serverless), etc.</li>
          <li><strong>Azure (Microsoft):</strong> Fuerte integración con productos Microsoft. Servicios como Azure OpenAI Service, Azure ML, Azure Cognitive Services.</li>
          <li><strong>GCP (Google Cloud Platform):</strong> Especializado en IA y datos. Vertex AI, BigQuery, TPUs exclusivas para modelos de ML.</li>
          <li><strong>Alibaba Cloud:</strong> Líder en Asia. Fuerte en comercio electrónico y datos a gran escala.</li>
        </ul>

        <h3>Modelos de servicio en la nube</h3>
        <ul>
          <li><strong>IaaS (Infrastructure as a Service):</strong> Infraestructura virtualizada. El usuario gestiona SO, middleware y aplicaciones. Ejemplo: EC2, Azure VMs.</li>
          <li><strong>PaaS (Platform as a Service):</strong> Plataforma completa para desarrollo. El proveedor gestiona la infraestructura subyacente. Ejemplo: Google App Engine, Azure App Service.</li>
          <li><strong>SaaS (Software as a Service):</strong> Software listo para usar vía navegador. Ejemplo: Gmail, Microsoft 365, Salesforce.</li>
        </ul>

        <h3>Modelos de despliegue cloud</h3>
        <ul>
          <li><strong>Nube Pública:</strong> Recursos compartidos gestionados por el proveedor. Mayor escalabilidad y menor coste.</li>
          <li><strong>Nube Privada:</strong> Infraestructura exclusiva para una organización. Mayor control y seguridad.</li>
          <li><strong>Nube Híbrida:</strong> Combinación de pública y privada. Flexibilidad para gestionar cargas de trabajo sensibles localmente.</li>
          <li><strong>Nube Comunitaria:</strong> Compartida por organizaciones con objetivos comunes (sectores regulados como salud o finanzas).</li>
        </ul>

        <h3>Virtualización y contenedores</h3>
        <p>
          La <strong>virtualización</strong> permite ejecutar múltiples sistemas operativos en un único servidor físico mediante hipervisores (VMware, Hyper-V, KVM). Los <strong>contenedores</strong> (Docker) son más ligeros: comparten el kernel del SO del host, ofreciendo portabilidad y arranque rápido.
        </p>
        <ul>
          <li><strong>Docker:</strong> Empaqueta aplicaciones con todas sus dependencias en contenedores portables.</li>
          <li><strong>Kubernetes:</strong> Orquestador de contenedores. Automatiza despliegue, escalado y gestión de contenedores en clústeres. Garantiza alta disponibilidad y balanceo de carga.</li>
        </ul>

        <h3>Edge Computing</h3>
        <p>
          El <strong>edge computing</strong> lleva el procesamiento de datos cerca de donde se generan (dispositivos IoT, smartphones, sensores) en lugar de enviarlo todo a la nube central. Ventajas: menor latencia, reducción de ancho de banda, mayor privacidad. Aplicaciones: vehículos autónomos, ciudades inteligentes, industria 4.0.
        </p>

        <h2>Tema 2: Infraestructura y Hardware para IA</h2>

        <h3>CPU, GPU y TPU</h3>
        <ul>
          <li><strong>CPU (Central Processing Unit):</strong> Procesador de propósito general con pocos núcleos potentes. Ideal para tareas secuenciales. Limitada para entrenamiento de modelos grandes.</li>
          <li><strong>GPU (Graphics Processing Unit):</strong> Miles de núcleos paralelos. Ideal para operaciones matriciales del deep learning. NVIDIA (CUDA) domina el mercado IA. Modelos: A100, H100, RTX series.</li>
          <li><strong>TPU (Tensor Processing Unit):</strong> ASICs diseñados por Google específicamente para operaciones tensoriales. Extremadamente eficientes para TensorFlow y JAX. Disponibles en GCP.</li>
        </ul>

        <h3>Tipos de memoria</h3>
        <ul>
          <li><strong>DDR (Double Data Rate):</strong> RAM de propósito general. Rápida pero con ancho de banda limitado para IA.</li>
          <li><strong>HBM (High Bandwidth Memory):</strong> Memoria de alta capacidad integrada en GPUs de alto rendimiento (A100, H100). Ancho de banda muy superior a DDR.</li>
          <li><strong>SSD (Solid State Drive):</strong> Almacenamiento rápido para datasets. NVMe ofrece velocidades de lectura de hasta 7 GB/s.</li>
          <li><strong>HDD:</strong> Almacenamiento masivo y económico para datos fríos (archivos, backups).</li>
        </ul>

        <h3>Consumo energético y sostenibilidad</h3>
        <p>
          El entrenamiento de modelos grandes como GPT-3 consume millones de kWh. El impacto de carbono es equivalente a varios vuelos transatlánticos. Tendencias para reducir el impacto:
        </p>
        <ul>
          <li>Uso de energías renovables en data centers.</li>
          <li>Destilación de modelos (modelos más pequeños y eficientes).</li>
          <li>Cuantización y pruning de redes neuronales.</li>
          <li>Reutilización de calor residual de los servidores.</li>
        </ul>

        <h3>Protección de datos y privacidad</h3>
        <ul>
          <li><strong>Federated Learning:</strong> Entrenamiento distribuido donde los datos nunca salen del dispositivo local.</li>
          <li><strong>Differential Privacy:</strong> Añade ruido estadístico para proteger datos individuales en conjuntos de entrenamiento.</li>
          <li><strong>Cifrado homomórfico:</strong> Permite realizar cómputos sobre datos cifrados sin descifrarlos.</li>
        </ul>

        <h2>Tema 3: Aplicaciones NLP en la vida real</h2>

        <h3>Análisis de sentimiento</h3>
        <p>
          El análisis de sentimiento determina la polaridad emocional (positivo, negativo, neutro) de un texto. Aplicaciones: monitorización de marca, análisis de reseñas, detección de crisis en redes sociales. Modelos: BERT fine-tuned, RoBERTa, modelos específicos de dominio.
        </p>

        <h3>T5 y Tokenización</h3>
        <p>
          <strong>T5 (Text-to-Text Transfer Transformer)</strong> convierte todas las tareas NLP en un problema de texto a texto. Tokenización: proceso de dividir el texto en unidades procesables. T5 usa SentencePiece como tokenizador, permitiendo vocabularios multilingües eficientes.
        </p>

        <h3>Traducción automática</h3>
        <p>
          Los sistemas modernos de traducción automática neuronal (NMT) usan arquitecturas encoder-decoder con atención. Google Translate, DeepL y Meta's NLLB (No Language Left Behind, con soporte para 200 idiomas) representan el estado del arte.
        </p>

        <h3>BART y Sumarización</h3>
        <p>
          <strong>BART (Bidirectional and Auto-Regressive Transformers)</strong> es un modelo de denoising pre-entrenado para generación de texto. Combina el encoder bidireccional de BERT con el decoder autoregresivo de GPT. Ideal para sumarización: dado un documento largo, genera un resumen coherente.
        </p>

        <h3>GPT y OpenAI</h3>
        <p>
          La familia GPT (Generative Pre-trained Transformer) de OpenAI ha evolucionado desde GPT-1 (2018) hasta GPT-4 (2023). GPT-3 con 175B parámetros demostró capacidades emergentes sorprendentes. GPT-4 es multimodal (texto e imágenes) y muestra razonamiento más complejo.
        </p>

        <h3>Embeddings y búsqueda semántica</h3>
        <p>
          Los embeddings permiten la búsqueda semántica: en lugar de buscar por palabras clave exactas, se busca por similitud de significado. Aplicaciones: motores de búsqueda inteligentes, sistemas de recomendación, RAG (Retrieval-Augmented Generation).
        </p>

        <h3>ChatGPT y arquitecturas de chat</h3>
        <p>
          ChatGPT combina GPT con RLHF (Reinforcement Learning from Human Feedback) para alinear el modelo con preferencias humanas. La arquitectura de chat mantiene un historial de conversación para coherencia contextual. InstructGPT demostró que el fine-tuning con RLHF mejora significativamente la utilidad y seguridad.
        </p>

        <h3>Prompting</h3>
        <ul>
          <li><strong>Zero-shot prompting:</strong> El modelo responde sin ejemplos previos.</li>
          <li><strong>Few-shot prompting:</strong> Se proporcionan 2-5 ejemplos antes de la tarea.</li>
          <li><strong>Chain-of-thought (CoT):</strong> Se pide al modelo que razone paso a paso.</li>
          <li><strong>Prompt engineering:</strong> Diseño cuidadoso de instrucciones para maximizar la calidad de la respuesta.</li>
        </ul>

        <h3>Voz y texto a imagen</h3>
        <p>
          <strong>ASR (Automatic Speech Recognition):</strong> Convierte audio en texto. Modelos como Whisper de OpenAI ofrecen transcripción multilingüe robusta. <strong>TTS (Text-to-Speech):</strong> Genera voz sintética a partir de texto. <strong>Texto a imagen:</strong> DALL-E, Midjourney y Stable Diffusion generan imágenes a partir de descripciones textuales.
        </p>

        <h2>Tema 4: Futuro del NLP</h2>

        <h3>Modelos de lenguaje multimodal</h3>
        <p>
          Los modelos multimodales integran múltiples modalidades: texto, imagen, audio, video. GPT-4V, Gemini (Google) y Claude (Anthropic) son ejemplos de modelos multimodales de última generación. Permiten razonamiento visual, descripción de imágenes, análisis de documentos complejos.
        </p>

        <h3>NLP para idiomas con pocos recursos</h3>
        <p>
          La mayoría de los modelos NLP están entrenados principalmente en inglés. Iniciativas como mBERT (BERT multilingüe), XLM-R y NLLB buscan extender capacidades a más de 100 idiomas, especialmente lenguas con pocos recursos digitales.
        </p>

        <h3>Modelos multilingües</h3>
        <p>
          Los modelos multilingües aprenden representaciones compartidas entre idiomas, permitiendo transferencia de conocimiento cruzada. Un modelo entrenado en inglés puede aplicar conocimientos a otras lenguas con menos datos de entrenamiento.
        </p>

        <h2>Tema 5: Extensión de conceptos</h2>

        <h3>Semantic Kernel</h3>
        <p>
          <strong>Semantic Kernel (SK)</strong> es un SDK de código abierto creado por <strong>Microsoft</strong> (lanzado en marzo de 2023) que actúa como <strong>orquestador</strong> para integrar modelos de lenguaje en aplicaciones empresariales. Soporta lenguajes <strong>C#, Java y Python</strong>.
        </p>
        <p>Instalación:</p>
        <pre><code>pip install semantic-kernel</code></pre>

        <h4>Arquitectura de Semantic Kernel</h4>
        <p>SK se estructura en dos grandes bloques:</p>
        <ul>
          <li><strong>Servicios:</strong> conectores a modelos de lenguaje (OpenAI, Azure OpenAI, Hugging Face) y servicios externos.</li>
          <li><strong>Plugins:</strong> funciones reutilizables que el kernel puede invocar. Pueden ser funciones semánticas (prompts) o nativas (código).</li>
        </ul>

        <h4>Plugins nativos incluidos</h4>
        <ul>
          <li><strong>TimePlugin:</strong> obtiene fecha y hora actual.</li>
          <li><strong>MathPlugin:</strong> operaciones matemáticas básicas.</li>
          <li><strong>FileIOPlugin:</strong> lectura y escritura de ficheros.</li>
          <li><strong>HttpPlugin:</strong> peticiones HTTP a APIs externas.</li>
          <li><strong>TextMemoryPlugin:</strong> almacenamiento y recuperación de memoria semántica.</li>
          <li><strong>WaitPlugin:</strong> introduce pausas en el flujo de ejecución.</li>
        </ul>

        <h4>Planners (Planificadores)</h4>
        <p>
          Los <strong>planners</strong> son el componente central de SK. Permiten que el modelo genere un plan de ejecución automáticamente a partir de un objetivo en lenguaje natural, encadenando plugins según sea necesario. Esto se denomina <strong>meta-prompting</strong>: el propio LLM decide qué funciones invocar y en qué orden.
        </p>

        <h4>Memoria y Vector Stores soportados</h4>
        <p>SK soporta memoria a corto y largo plazo mediante bases de datos vectoriales:</p>
        <ul>
          <li>Chroma, DuckDB, SQLite</li>
          <li>Pinecone, Azure Cosmos DB, Azure PostgreSQL</li>
        </ul>

        <h4>Document Loaders</h4>
        <p>SK puede cargar documentos en formatos: PDF, TXT, Word, MSGraph.</p>

        <h4>Secuencias y pipelines</h4>
        <p>
          SK organiza el flujo de trabajo como <strong>pipelines o cadenas</strong> donde las funciones comparten datos entre sí. Una función puede tomar la salida de la anterior como entrada, manteniendo un contexto compartido a lo largo del pipeline.
        </p>

        <h3>LangChain</h3>
        <p>
          <strong>LangChain</strong> es un framework open-source para construir aplicaciones con LLMs, lanzado en <strong>octubre de 2022</strong> por <strong>Harrison Chase</strong> y más de 2.200 contribuidores. Licencia MIT. Soporta <strong>Python, Java, JavaScript y TypeScript</strong>. Cuenta con más de <strong>11.800 forks en GitHub</strong>.
        </p>

        <h4>Ecosistema LangChain</h4>
        <ul>
          <li><strong>LangChain Core:</strong> el framework principal con cadenas, agentes y memoria.</li>
          <li><strong>LangSmith:</strong> plataforma DevOps para monitorización, depuración y evaluación de aplicaciones LLM.</li>
          <li><strong>LangServe:</strong> permite desplegar cadenas LangChain como APIs REST fácilmente.</li>
        </ul>

        <h4>Orquestación — componentes clave</h4>
        <ul>
          <li><strong>Cadenas (Chains):</strong> secuencias de llamadas a LLMs y herramientas.</li>
          <li><strong>Memoria:</strong> historial conversacional, corto y largo plazo via vectores.</li>
          <li><strong>Agentes:</strong> el LLM decide qué herramienta usar en cada paso.</li>
          <li><strong>Input/Output parsers:</strong> estructuran las entradas y salidas del modelo.</li>
        </ul>

        <h4>Tipos de cadenas</h4>
        <ul>
          <li><strong>LLM Chain:</strong> prompt → LLM → salida. La más básica.</li>
          <li><strong>Sequential Chain:</strong> encadena varias LLM Chains en serie.</li>
          <li><strong>Router Chain:</strong> enruta la consulta a la cadena más apropiada según el contexto.</li>
          <li><strong>Retrieval QA Chain:</strong> combina búsqueda en vectorstore con generación (base del patrón RAG).</li>
        </ul>

        <h4>Document Loaders (más de 100 formatos)</h4>
        <p>
          LangChain puede cargar documentos desde: HTML, PDF, código fuente, JSON, Word, CSV, Markdown, PowerPoint, Amazon S3, YouTube (transcripciones), arXiv, y muchos más.
        </p>

        <h4>Herramientas (Tools) disponibles</h4>
        <ul>
          <li>Alpha Vantage (datos financieros), Apify (web scraping)</li>
          <li>ArXiv (papers científicos), Wikipedia</li>
          <li>AWS Lambda, Shell (ejecución de comandos)</li>
          <li>Bearly Code Interpreter (ejecución de código Python)</li>
          <li>Bing Search, Google Search</li>
        </ul>

        <h4>Vector Stores soportados (más de 50)</h4>
        <p>Chroma, Pinecone, Weaviate, FAISS, Qdrant, Milvus, Redis, Elasticsearch, y más de 40 adicionales.</p>

        <h4>Memoria</h4>
        <p>LangChain soporta memoria a corto y largo plazo mediante bases de datos vectoriales, permitiendo recuperar conversaciones o documentos relevantes del pasado.</p>

        <h3>LangChain vs Semantic Kernel — tabla comparativa completa</h3>
        <table>
          <thead>
            <tr><th>Característica</th><th>LangChain</th><th>Semantic Kernel</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Lanzamiento</strong></td><td>Octubre 2022</td><td>Marzo 2023</td></tr>
            <tr><td><strong>Creador</strong></td><td>Harrison Chase + 2.200 contribuidores</td><td>Microsoft + 200 contribuidores</td></tr>
            <tr><td><strong>Lenguajes</strong></td><td>Python, Java, JS, TypeScript</td><td>C#, Java, Python</td></tr>
            <tr><td><strong>Licencia</strong></td><td>MIT</td><td>MIT</td></tr>
            <tr><td><strong>GitHub forks</strong></td><td>11.800</td><td>2.500</td></tr>
            <tr><td><strong>Orquestación</strong></td><td>Cadenas, memoria, input/output, datos</td><td>Plugins + Planners + Agente (meta-prompting)</td></tr>
            <tr><td><strong>Memoria</strong></td><td>Corto y largo plazo via vectores</td><td>Corto y largo plazo via vectores</td></tr>
            <tr><td><strong>Document loaders</strong></td><td>+100 (HTML, PDF, JSON, Word, CSV, YouTube, arXiv, S3…)</td><td>PDF, TXT, Word, MSGraph</td></tr>
            <tr><td><strong>Vector stores</strong></td><td>+50 (Chroma, Pinecone, FAISS, Weaviate…)</td><td>Chroma, DuckDB, SQLite, Pinecone, Azure Cosmos DB, Azure PostgreSQL</td></tr>
            <tr><td><strong>Secuencias</strong></td><td>Sequential / Router / Retrieval QA / LLM Chain</td><td>Pipeline / cadena con datos compartidos entre funciones</td></tr>
            <tr><td><strong>DevOps / Deploy</strong></td><td>LangSmith (monitorización) + LangServe (REST API)</td><td>—</td></tr>
            <tr><td><strong>Integración Azure</strong></td><td>Buena</td><td>Nativa (Azure OpenAI)</td></tr>
            <tr><td><strong>Enfoque</strong></td><td>Comunidad open-source, amplio ecosistema</td><td>Empresarial, Microsoft stack</td></tr>
          </tbody>
        </table>

        <h3>Modelos open-source vs privados</h3>
        <ul>
          <li><strong>Open-source:</strong> Llama (Meta), Mistral, Falcon, Phi. Ventajas: personalización, privacidad de datos, sin costes de API. Desventajas: requieren infraestructura propia.</li>
          <li><strong>Privados:</strong> GPT-4 (OpenAI), Claude (Anthropic), Gemini (Google). Ventajas: rendimiento superior, fácil acceso vía API. Desventajas: coste, dependencia del proveedor, privacidad de datos.</li>
        </ul>

        <h3>Azure OpenAI Service</h3>
        <p>
          Azure OpenAI Service permite acceder a los modelos de OpenAI (GPT-4, DALL-E, Whisper, Embeddings) desde la infraestructura de Azure, con garantías de cumplimiento normativo, privacidad de datos y SLAs empresariales. Especialmente relevante para organizaciones con regulaciones de datos estrictas (sector financiero, salud).
        </p>

        <h3>Mixture of Experts (MoE)</h3>
        <p>
          <strong>Mixture of Experts (MoE)</strong> es una arquitectura de red neuronal que divide el modelo en múltiples subredes especializadas llamadas <strong>"expertos"</strong>. Para cada token de entrada, solo se activa un subconjunto de expertos, haciendo el modelo <strong>esparsamente activado</strong>.
        </p>

        <h4>Cómo funciona MoE</h4>
        <ul>
          <li><strong>Expertos:</strong> subredes independientes (normalmente capas FFN — Feed-Forward Networks) especializadas en diferentes tipos de datos o tareas.</li>
          <li><strong>Router / Gating Network:</strong> red pequeña que, para cada token, calcula qué expertos deben activarse. Generalmente selecciona los <strong>top-K expertos</strong> (típicamente K=1 o K=2) de entre todos los disponibles.</li>
          <li><strong>Activación dispersa (Sparse Activation):</strong> solo los K expertos seleccionados procesan cada token. El resto queda inactivo para ese token específico.</li>
          <li><strong>Combinación de salidas:</strong> las salidas de los expertos activos se combinan ponderadas según las probabilidades asignadas por el router.</li>
        </ul>

        <h4>MoE vs Modelos Densos</h4>
        <table>
          <thead>
            <tr><th>Aspecto</th><th>Modelo Denso</th><th>Modelo MoE</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Parámetros totales</strong></td><td>Todos activos por token</td><td>Muchos más, pero pocos activos por token</td></tr>
            <tr><td><strong>Coste inferencia</strong></td><td>Proporcional a todos los parámetros</td><td>Solo los expertos activados (mucho menor)</td></tr>
            <tr><td><strong>Coste entrenamiento</strong></td><td>Moderado</td><td>Mayor (comunicación entre expertos)</td></tr>
            <tr><td><strong>Capacidad</strong></td><td>Limitada por parámetros activos</td><td>Alta (muchos expertos especializados)</td></tr>
            <tr><td><strong>Memoria RAM/VRAM</strong></td><td>Proporcional</td><td>Alta (todos los pesos deben estar cargados)</td></tr>
          </tbody>
        </table>

        <h4>Ventajas de MoE</h4>
        <ul>
          <li><strong>Eficiencia computacional en inferencia:</strong> se procesan muchos menos parámetros por token → mayor velocidad con el mismo presupuesto de cómputo.</li>
          <li><strong>Mayor capacidad de representación:</strong> al tener más parámetros totales, puede aprender representaciones más ricas y especializadas.</li>
          <li><strong>Escalabilidad:</strong> se puede aumentar el número de expertos sin aumentar linealmente el coste de inferencia.</li>
        </ul>

        <h4>Desafíos de MoE</h4>
        <ul>
          <li><strong>Load balancing:</strong> el router tiende a enviar tokens siempre a los mismos expertos. Se necesitan pérdidas auxiliares para forzar distribución uniforme.</li>
          <li><strong>Alta memoria:</strong> aunque la inferencia es eficiente en cómputo, todos los pesos deben estar en VRAM simultáneamente.</li>
          <li><strong>Complejidad de entrenamiento:</strong> la comunicación entre expertos en sistemas distribuidos es costosa.</li>
          <li><strong>Sensibilidad al router:</strong> si el gating network falla, la calidad del modelo se degrada significativamente.</li>
        </ul>

        <h4>Ejemplos de modelos MoE</h4>
        <ul>
          <li><strong>GPT-4 (OpenAI):</strong> se especula que usa arquitectura MoE (no confirmado oficialmente).</li>
          <li><strong>Mixtral 8x7B (Mistral AI):</strong> 8 expertos FFN, activa 2 por token. Parámetros activos por inferencia: ~13B de 47B totales.</li>
          <li><strong>Gemini (Google):</strong> arquitectura MoE a gran escala.</li>
          <li><strong>Switch Transformer (Google, 2021):</strong> paper fundacional de MoE moderno, simplificó el routing a top-1.</li>
        </ul>

        <h3>Agentes de IA</h3>
        <p>
          Un <strong>agente de IA</strong> es un sistema autónomo que percibe su entorno, planifica acciones y las ejecuta para alcanzar un objetivo. A diferencia de una llamada simple a un LLM, un agente puede iterar, usar herramientas, corregir errores y tomar decisiones en múltiples pasos.
        </p>

        <h4>Componentes de un agente</h4>
        <ul>
          <li><strong>LLM como "cerebro":</strong> decide qué acción tomar en cada paso.</li>
          <li><strong>Herramientas (Tools):</strong> funciones que el agente puede invocar (búsqueda web, ejecución de código, consulta a bases de datos, APIs).</li>
          <li><strong>Memoria:</strong> almacena el contexto de la conversación y resultados previos.</li>
          <li><strong>Loop de acción:</strong> ciclo Observación → Pensamiento → Acción (patrón ReAct).</li>
        </ul>

        <h4>5 tipos principales de agentes</h4>
        <ul>
          <li>
            <strong>1. ReAct (Reasoning + Acting):</strong> el modelo alterna entre razonamiento en lenguaje natural y ejecución de acciones. Genera un "pensamiento" antes de cada acción. Es el patrón base más común.
          </li>
          <li>
            <strong>2. Reflexion:</strong> el agente genera una respuesta, luego la evalúa críticamente ("reflexiona") y la mejora de forma iterativa antes de entregarla.
          </li>
          <li>
            <strong>3. Plan-and-Execute:</strong> primero genera un plan completo de pasos, luego ejecuta cada paso secuencialmente. Separación explícita entre planificación y ejecución.
          </li>
          <li>
            <strong>4. OpenAI Functions:</strong> el modelo llama a funciones definidas mediante un esquema JSON. La API de OpenAI devuelve qué función invocar y con qué argumentos. Enfoque más estructurado y predecible.
          </li>
          <li>
            <strong>5. MRKL (Modular Reasoning, Knowledge and Language):</strong> sistema modular que combina LLMs con módulos especializados (calculadoras, buscadores, bases de datos). El LLM actúa como enrutador que decide qué módulo usar.
          </li>
        </ul>

        <h4>Flujo de ejecución de un agente ReAct</h4>
        <ol>
          <li>El usuario envía una pregunta o tarea.</li>
          <li>El LLM genera un <em>pensamiento</em> ("Necesito buscar información sobre X").</li>
          <li>El agente ejecuta una <em>acción</em> (llama a la herramienta de búsqueda).</li>
          <li>Recibe una <em>observación</em> (resultado de la búsqueda).</li>
          <li>Repite hasta que tiene suficiente información para responder.</li>
          <li>Genera la respuesta final.</li>
        </ol>

        <h4>Retos de los agentes</h4>
        <ul>
          <li><strong>Alucinaciones en la planificación:</strong> el LLM puede generar planes incoherentes o acciones inválidas.</li>
          <li><strong>Bucles infinitos:</strong> el agente puede quedarse atascado sin llegar a una conclusión.</li>
          <li><strong>Seguridad:</strong> agentes con acceso a shell o APIs pueden causar daños si no están bien limitados.</li>
          <li><strong>Coste:</strong> múltiples llamadas al LLM aumentan la latencia y el coste por tarea.</li>
        </ul>

        <h3>AutoGen (Microsoft)</h3>
        <p>
          <strong>AutoGen</strong> es un framework open-source de Microsoft para construir aplicaciones con <strong>múltiples agentes conversacionales</strong> que colaboran entre sí. La idea central es que diferentes agentes especializados pueden comunicarse y coordinarse para resolver tareas complejas.
        </p>

        <h4>Arquitectura de AutoGen</h4>
        <ul>
          <li><strong>ConversableAgent:</strong> clase base de todos los agentes. Puede enviar y recibir mensajes, invocar herramientas y llamar a LLMs.</li>
          <li><strong>AssistantAgent:</strong> agente impulsado por un LLM (GPT-4, Claude…). Genera respuestas, escribe código, planifica.</li>
          <li><strong>UserProxyAgent:</strong> representa al usuario o ejecuta código automáticamente. Puede ejecutar código Python o Bash generado por el AssistantAgent.</li>
          <li><strong>GroupChat:</strong> permite que múltiples agentes participen en una conversación compartida. Un GroupChatManager modera los turnos.</li>
        </ul>

        <h4>Patrón básico de AutoGen</h4>
        <p>
          El patrón más habitual es: <strong>AssistantAgent + UserProxyAgent</strong>. El asistente propone código o soluciones; el proxy las ejecuta y devuelve el resultado; el asistente corrige o mejora según el feedback. Este ciclo se repite hasta resolver la tarea.
        </p>

        <h4>Casos de uso de AutoGen</h4>
        <ul>
          <li>Generación y ejecución automática de código (Data Science, automatización).</li>
          <li>Pipelines de investigación: un agente busca papers, otro los resume, otro extrae conclusiones.</li>
          <li>Sistemas de revisión de código: agente escritor + agente revisor.</li>
          <li>Automatización de flujos de trabajo empresariales con múltiples roles especializados.</li>
        </ul>
      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-no-estructurados/ud2" className="text-sm text-slate-500 hover:text-blue-600">← UD2: Modelos Profundos</Link>
        <div className="flex gap-3">
          <Link href="/datos-no-estructurados/ud3/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD3</Link>
          <Link href="/datos-no-estructurados/ud4" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold">Siguiente: UD4 →</Link>
        </div>
      </div>

    </div>
  );
}
