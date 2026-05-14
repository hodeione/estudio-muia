import Link from "next/link";

export default function UD4() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-no-estructurados" className="text-sm text-blue-600 hover:underline">← Datos No Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">4</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD4: Computer Vision</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso entornos con datos no estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-no-estructurados/ud3" className="text-sm text-slate-500 hover:text-blue-600">← UD3</Link>
          <Link href="/datos-no-estructurados/ud5" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD5 →</Link>
          <Link href="/datos-no-estructurados/ud4/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
        <strong>Temas:</strong> 1. Introducción a Computer Vision · 2. Redes Neuronales Convolucionales (CNN) · 3. Arquitecturas CNN · 4. Data Augmentation · 5. Transfer Learning · 6. Vision Transformers (ViT)
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Tema 1: Introducción a Computer Vision</h2>

        <h3>Contexto histórico</h3>
        <p>
          La visión por computador (Computer Vision) es el campo de la IA que permite a las máquinas interpretar y comprender el contenido visual del mundo. Su historia se divide en varias etapas:
        </p>

        <h4>Métodos heurísticos (pre-deep learning)</h4>
        <ul>
          <li><strong>Detector de bordes Canny:</strong> Algoritmo de 1986 para detectar bordes en imágenes mediante gradientes.</li>
          <li><strong>Detector de bordes Sobel:</strong> Operador de gradiente para resaltar bordes verticales y horizontales.</li>
          <li><strong>Detector de esquinas Harris:</strong> Identifica puntos de interés (esquinas) en imágenes para matching y seguimiento.</li>
          <li><strong>SIFT (Scale-Invariant Feature Transform):</strong> Extrae características robustas a escala, rotación e iluminación. Base de muchos sistemas de reconocimiento clásicos.</li>
          <li><strong>Bag of Visual Words (BoW visual):</strong> Adaptación del BoW de NLP para clasificar imágenes mediante histogramas de características visuales.</li>
          <li><strong>SVM para clasificación de imágenes:</strong> Combinado con características HOG (Histogram of Oriented Gradients) o SIFT para clasificación.</li>
        </ul>

        <h4>Primeras redes convolucionales y el cambio de paradigma</h4>
        <p>
          <strong>ImageNet:</strong> Base de datos de más de 14 millones de imágenes etiquetadas en 20.000 categorías. Creada por Fei-Fei Li (Stanford, 2009). Su existencia fue fundamental para el desarrollo del deep learning en visión.
        </p>
        <p>
          <strong>ILSVRC (ImageNet Large Scale Visual Recognition Challenge):</strong> Competición anual desde 2010. En 2012, <strong>AlexNet</strong> (Krizhevsky, Sutskever, Hinton) ganó con un error del 15.3%, vs 26% del segundo mejor método tradicional. Este resultado marcó el inicio de la era del deep learning en computer vision.
        </p>

        <h2>Tema 2: Redes Neuronales Convolucionales (CNN)</h2>

        <h3>Inspiración biológica</h3>
        <p>
          Las CNNs están inspiradas en el córtex visual del cerebro humano, donde diferentes neuronas responden a diferentes regiones del campo visual. Las primeras neuronas detectan características simples (bordes, colores) y las capas superiores combinan estas para reconocer objetos complejos.
        </p>

        <h3>La operación de convolución</h3>
        <p>
          La convolución aplica un filtro (kernel) sobre la imagen deslizándolo por todas las posiciones. El kernel es una pequeña matriz de pesos aprendidos durante el entrenamiento. Para cada posición, se calcula el producto punto entre el kernel y la región de la imagen.
        </p>
        <p>
          <strong>Ejemplo:</strong> Imagen 32×32 RGB (3 canales) con kernel 3×3 → Se aplica el kernel sobre cada píxel de cada canal, generando un mapa de características (feature map).
        </p>

        <h3>Tipos de kernels</h3>
        <ul>
          <li><strong>Detección de bordes:</strong> Kernels que resaltan cambios bruscos de intensidad (verticales, horizontales, diagonales).</li>
          <li><strong>Desenfoque (Blur):</strong> Kernels gaussianos que promedian píxeles vecinos, suavizando la imagen.</li>
          <li><strong>Realce:</strong> Kernels que amplifican detalles de alta frecuencia.</li>
          <li><strong>Detección de texturas:</strong> Kernels sensibles a patrones repetitivos.</li>
          <li><strong>Afilado (Sharpening):</strong> Kernels que incrementan el contraste local.</li>
          <li><strong>Kernels aprendidos:</strong> En redes profundas, los kernels se optimizan automáticamente durante el entrenamiento mediante backpropagation.</li>
        </ul>

        <h2>Tema 3: Arquitecturas CNN</h2>

        <h3>Capas de convolución</h3>
        <p>
          Cada capa convolucional aplica múltiples filtros, generando múltiples mapas de características. Los hiperparámetros clave son:
        </p>
        <ul>
          <li><strong>Stride:</strong> Paso del filtro al deslizarse. Stride=1: se mueve píxel a píxel. Stride=2: reduce la resolución a la mitad.</li>
          <li><strong>Padding válido (valid):</strong> Sin relleno. La salida es más pequeña que la entrada.</li>
          <li><strong>Padding mismo (same):</strong> Se añaden ceros alrededor de la imagen para que la salida tenga el mismo tamaño que la entrada.</li>
        </ul>
        <p>Fórmula de tamaño de salida: <strong>((W - K + 2P) / S) + 1</strong>, donde W=tamaño entrada, K=kernel size, P=padding, S=stride.</p>

        <h3>Capas de Pooling</h3>
        <p>
          Las capas de pooling, también conocidas como capas de agrupamiento o submuestreo, reducen progresivamente la <strong>dimensión espacial (ancho y alto, NO la profundidad)</strong> de los mapas de características. Esto reduce la cantidad de parámetros y cálculos en la red.
        </p>
        <p>
          El proceso se realiza de forma independiente en cada profundidad del mapa de características. Se aplica una <strong>ventana</strong> (usualmente 2×2 o 3×3 píxeles) que se desplaza sobre cada mapa de características. En cada posición, se realiza una operación que resume la información de esa región.
        </p>

        <h4>Tipos de Pooling</h4>
        <ul>
          <li>
            <strong>Max Pooling:</strong> Toma el valor máximo dentro de la ventana de pooling. Es la forma más común. Efectivo para capturar la presencia de características en regiones de la imagen, independientemente de las variaciones menores en esas regiones. Ej: ventana 2×2 → selecciona el valor más alto de los 4 píxeles.
          </li>
          <li>
            <strong>Average Pooling:</strong> Calcula el promedio de los valores dentro de la ventana. Menos común que Max Pooling. Suaviza las características y puede ser útil cuando la uniformidad de la información es más relevante.
          </li>
        </ul>

        <h4>Hiperparámetros del Pooling</h4>
        <ul>
          <li><strong>Tamaño de ventana:</strong> Típicamente 2×2. Una ventana más grande produce una reducción más significativa de la dimensión espacial.</li>
          <li><strong>Stride:</strong> Distancia entre aplicaciones consecutivas de la ventana. Un stride mayor reduce más la dimensión espacial.</li>
        </ul>

        <h4>Ventajas de las capas de Pooling</h4>
        <ul>
          <li><strong>Reducción de dimensionalidad:</strong> Disminuye la cantidad de parámetros y cálculos en capas subsiguientes → mayor eficiencia computacional.</li>
          <li><strong>Reducción del sobreajuste:</strong> Menos parámetros → la red es menos propensa a memorizar detalles específicos de los datos de entrenamiento.</li>
          <li><strong>Invariancia a la traslación:</strong> Al agrupar características similares, permite que la red detecte características independientemente de su posición exacta en la imagen. Esto es especialmente valioso en reconocimiento y clasificación de imágenes, donde el objeto puede no estar en el mismo lugar en todas las imágenes.</li>
        </ul>

        <h3>Capa de Flattening</h3>
        <p>
          La capa de flattening (aplanamiento) juega un papel crucial en la transición entre las capas de convolución y pooling y las capas completamente conectadas (fully-connected). Actúa como un <strong>puente</strong> entre el procesamiento tensorial y la clasificación final.
        </p>
        <p>
          Las capas completamente conectadas esperan <strong>vectores de entrada 1D</strong>, no tensores 3D. Por tanto, la salida de las capas de convolución y pooling debe transformarse de un formato tridimensional a uno unidimensional.
        </p>

        <h4>Cómo funciona</h4>
        <p>
          El proceso es conceptualmente simple: toma un tensor 3D y lo reorganiza en un vector 1D. <strong>No implica ninguna computación compleja ni cambio en los valores</strong>; simplemente cambia la forma en que se organizan los datos.
        </p>
        <p>
          <strong>Ejemplo del PDF:</strong> Si la salida de la última capa de pooling es un tensor de dimensiones <strong>5×5×32</strong>, la capa de flattening lo reorganiza en un vector 1D de <strong>800 elementos</strong> (5×5×32 = 800).
        </p>

        <h4>Impacto en la red</h4>
        <p>
          El tamaño del vector aplanado influye directamente en el número de conexiones (y por tanto, en el número de pesos) en la siguiente capa completamente conectada. Una salida de pooling más grande dará como resultado un vector aplanado más largo y, en consecuencia, más parámetros en las capas subsiguientes. Esto tiene implicaciones en la capacidad de la red, su propensión al sobreajuste y sus requisitos computacionales.
        </p>
        <p>
          Sin la capa de flattening, sería imposible conectar las capas de convolución y pooling (que manejan tensores 3D) con las capas completamente conectadas (que requieren vectores 1D).
        </p>

        <h3>Arquitecturas CNN clásicas destacadas</h3>
        <ul>
          <li><strong>LeNet-5 (1998):</strong> Primera CNN moderna. Diseñada para reconocimiento de dígitos escritos a mano (MNIST).</li>
          <li><strong>AlexNet (2012):</strong> 5 capas conv + 3 FC. ReLU como activación. Dropout para regularización. Ganó ILSVRC 2012.</li>
          <li><strong>VGGNet (2014):</strong> Arquitectura simple con kernels 3×3. Demostró que la profundidad es clave.</li>
          <li><strong>Inception/GoogLeNet (2014):</strong> Módulos inception con múltiples tamaños de kernel en paralelo.</li>
          <li><strong>ResNet (2015):</strong> Conexiones residuales (skip connections) para entrenar redes muy profundas (50, 101, 152 capas). Resuelve el problema de degradación del gradiente.</li>
          <li><strong>EfficientNet (2019):</strong> Escala eficientemente profundidad, anchura y resolución. Estado del arte en relación parámetros/rendimiento.</li>
        </ul>

        <h2>Tema 4: Data Augmentation</h2>

        <h3>¿Qué es la Data Augmentation?</h3>
        <p>
          El <strong>Data Augmentation</strong> (aumento de datos) es una técnica esencial en el aprendizaje automático, particularmente en visión por computadora. Su caso de uso principal es <strong>enriquecer los conjuntos de datos de entrenamiento sin necesidad de recopilar datos adicionales</strong>. Al transformar las imágenes de maneras diversas, el aumento de datos simula la variabilidad que un modelo encontrará en el mundo real.
        </p>
        <p>
          Es especialmente valiosa cuando los datos son escasos o costosos de obtener. Las CNN son propensas al sobreajuste con datasets pequeños o poco variados: el Data Augmentation aborda este problema creando versiones modificadas de las imágenes existentes.
        </p>

        <h3>Tipos de Data Augmentation para CNN</h3>

        <h4>Transformaciones Geométricas</h4>
        <p>Ayudan al modelo a reconocer objetos desde diferentes perspectivas y escalas:</p>
        <ul>
          <li><strong>Rotación:</strong> Girar la imagen en un ángulo (ej. ±45°).</li>
          <li><strong>Traslación:</strong> Desplazar la imagen en el espacio horizontal o verticalmente.</li>
          <li><strong>Escalado:</strong> Cambiar el tamaño de la imagen.</li>
          <li><strong>Volteo (flip):</strong> Invertir la imagen horizontal o verticalmente.</li>
          <li><strong>Deformaciones:</strong> Distorsiones locales que simulan variaciones naturales.</li>
        </ul>

        <h4>Ajustes de Color</h4>
        <p>Hacen al modelo más robusto a variaciones de iluminación y color del mundo real:</p>
        <ul>
          <li><strong>Brillo:</strong> Aumentar (Brighter) o disminuir (Darker) aleatoriamente.</li>
          <li><strong>Contraste:</strong> Ajustar el rango dinámico de la imagen.</li>
          <li><strong>Saturación:</strong> Modificar la intensidad de los colores.</li>
          <li><strong>Escala de grises (Grayscale):</strong> Convertir a blanco y negro con cierta probabilidad.</li>
        </ul>

        <h4>Recorte Aleatorio (Random Crop)</h4>
        <p>
          Recortar aleatoriamente secciones de la imagen. Ayuda al modelo a enfocarse en diferentes características y a aprender a reconocer objetos que están parcialmente ocultos o fuera de centro.
        </p>

        <h4>Ruido Gaussiano</h4>
        <p>
          Añadir diferentes tipos de ruido (Noise added) hace al modelo más resistente a variaciones y artefactos en las imágenes, comunes en situaciones del mundo real.
        </p>

        <h4>Oclusión</h4>
        <p>
          Cubrir partes de la imagen. Simula situaciones donde los objetos de interés están parcialmente bloqueados.
        </p>

        <h3>Data Augmentation vs Synthetic Data</h3>
        <p>
          Son dos técnicas para mejorar la calidad y cantidad de datos disponibles para entrenar modelos, pero operan de manera diferente:
        </p>

        <table>
          <thead>
            <tr><th>Aspecto</th><th>Data Augmentation</th><th>Synthetic Data</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Definición</strong></td>
              <td>Toma datos existentes y aplica transformaciones para crear nuevas variaciones</td>
              <td>Datos generados completamente por algoritmos o simulaciones, sin ser recolectados del mundo real</td>
            </tr>
            <tr>
              <td><strong>Método de generación</strong></td>
              <td>Transformaciones geométricas, ajustes de color, ruido, oclusión…</td>
              <td>Gráficos por computadora (CGI), simuladores para datos sensoriales, GANs</td>
            </tr>
            <tr>
              <td><strong>Coste</strong></td>
              <td>Bajo — se aplica en tiempo de entrenamiento</td>
              <td>Alto — la generación puede ser computacionalmente costosa</td>
            </tr>
            <tr>
              <td><strong>Ventajas</strong></td>
              <td>Mejora la robustez del modelo, previene sobreajuste, fácil de implementar</td>
              <td>Puede generar grandes cantidades de datos, cubrir escenarios raros o peligrosos, control total sobre las condiciones</td>
            </tr>
            <tr>
              <td><strong>Desventajas</strong></td>
              <td>No puede cubrir todos los escenarios posibles; las transformaciones deben seleccionarse cuidadosamente</td>
              <td>Compleja de generar; riesgo de no representar con precisión la realidad (domain gap)</td>
            </tr>
            <tr>
              <td><strong>Uso típico</strong></td>
              <td>Estándar en todos los proyectos CV</td>
              <td>Casos con escasez severa de datos reales (medicina, seguridad, vehículos autónomos)</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Uso complementario:</strong> ambas técnicas pueden usarse de manera complementaria — el Data Augmentation mejora la robustez del modelo utilizando el conjunto de datos real, y el Synthetic Data expande el conjunto con ejemplos que podrían no estar presentes en los datos originales.
        </p>

        <h2>Tema 5: Transfer Learning</h2>

        <h3>¿Qué es el Transfer Learning?</h3>
        <p>
          El <strong>Transfer Learning</strong> consiste en reutilizar un modelo preentrenado en una tarea o dataset grande (generalmente ImageNet con 1.2M imágenes y 1000 clases) como punto de partida para una nueva tarea con menos datos. Las capas iniciales aprenden características generales (bordes, texturas, formas simples) que son útiles en muchos dominios visuales.
        </p>

        <h3>Estrategias de Transfer Learning</h3>
        <ul>
          <li>
            <strong>Feature extraction (extracción de características):</strong> Se congela toda la red preentrenada y solo se entrena la nueva cabeza de clasificación. Rápido y requiere pocos datos. Ideal cuando el nuevo dominio es similar a ImageNet.
          </li>
          <li>
            <strong>Fine-tuning (ajuste fino):</strong> Se descongela parte o toda la red preentrenada y se reentrenan con una tasa de aprendizaje muy pequeña. Mayor adaptación al nuevo dominio. Requiere más datos y tiempo.
          </li>
          <li>
            <strong>Fine-tuning progresivo:</strong> Se descongelan capas gradualmente de arriba hacia abajo (primeras las capas finales, luego las iniciales). Más estable y eficiente.
          </li>
        </ul>

        <h3>Modelos preentrenados populares</h3>
        <ul>
          <li><strong>ResNet (50, 101, 152):</strong> Ampliamente usado como backbone. Buen equilibrio entre rendimiento y eficiencia.</li>
          <li><strong>EfficientNet (B0-B7):</strong> Escalado eficiente. Excelente relación parámetros/accuracy.</li>
          <li><strong>MobileNet:</strong> Diseñado para dispositivos móviles y edge computing. Uso de depthwise separable convolutions.</li>
          <li><strong>ConvNeXt:</strong> CNN moderna que incorpora ideas de ViT. Estado del arte en CNNs puras.</li>
          <li><strong>CLIP (OpenAI):</strong> Preentrenado con texto e imagen. Permite zero-shot classification con descripciones textuales.</li>
        </ul>

        <h2>Tema 6: Transformers Visuales</h2>

        <h3>Qué son los Transformers</h3>
        <p>
          Los transformers han revolucionado el aprendizaje profundo. Introducidos por primera vez en el paper <strong>"Attention is All You Need" (Vaswani et al., 2017)</strong>, se basan en el mecanismo de atención. Aunque nacieron para NLP, su éxito llevó a explorar su uso en visión por computadora.
        </p>
        <p>
          Los <strong>transformers visuales</strong> representan un cambio de paradigma: mientras las CNN tienen limitaciones para capturar relaciones a largo plazo entre diferentes partes de una imagen, los transformers pueden modelar directamente las <strong>relaciones globales</strong> entre los píxeles gracias a su mecanismo de autoatención.
        </p>

        <h3>El mecanismo de autoatención (Self-Attention)</h3>
        <p>
          El mecanismo de autoatención es el componente central de los transformers. A diferencia de las RNN (que procesan datos secuencialmente) y las CNN (que se enfocan en patrones locales), los transformers <strong>consideran todas las partes de la entrada simultáneamente</strong>.
        </p>
        <p>
          Esto permite asignar diferentes niveles de importancia a las distintas partes de una entrada. En el contexto de imágenes, un transformer puede enfocarse en regiones específicas más relevantes para una tarea (clasificación, detección de objetos).
        </p>

        <h4>Cómo funciona matemáticamente</h4>
        <p>El mecanismo de autoatención utiliza tres matrices principales derivadas de la entrada:</p>
        <ul>
          <li><strong>Query (Q):</strong> representa "qué estoy buscando".</li>
          <li><strong>Key (K):</strong> representa "qué información tengo".</li>
          <li><strong>Value (V):</strong> representa "cuál es el contenido de esa información".</li>
        </ul>
        <p>
          Se calcula un <strong>puntaje de similitud</strong> entre cada Query y todas las Keys. Estos puntajes determinan la influencia relativa de cada elemento en los demás. Los resultados se combinan para generar una <strong>representación ponderada</strong> de la entrada, que captura tanto relaciones locales como globales.
        </p>
        <p>Fórmula: <strong>Atención(Q, K, V) = softmax(QKᵀ / √d_k) × V</strong></p>

        <h4>Arquitectura de un bloque Transformer (para visión)</h4>
        <p>ViT utiliza solo el componente de codificador. Cada bloque incluye:</p>
        <ul>
          <li><strong>Capa de autoatención multi-cabezal:</strong> Permite al modelo considerar simultáneamente diferentes aspectos de la información.</li>
          <li><strong>Capa feedforward totalmente conectada:</strong> Procesa las características extraídas por la autoatención e introduce no linealidad.</li>
          <li><strong>Normalización:</strong> Estabiliza el proceso de entrenamiento.</li>
          <li><strong>Conexiones residuales:</strong> Mejoran la estabilidad y facilitan el flujo de gradientes.</li>
        </ul>

        <h3>Vision Transformers (ViT)</h3>
        <p>
          El <strong>Vision Transformer (ViT)</strong>, introducido por <strong>Dosovitskiy et al. en 2020</strong>, fue uno de los primeros modelos en adaptar la arquitectura de los transformers a la visión por computadora. Marcó un punto de inflexión al demostrar que los transformers pueden igualar o superar el rendimiento de las CNN en clasificación de imágenes.
        </p>

        <h4>Tokenización de imágenes — cómo ViT procesa imágenes</h4>
        <p>
          El principal desafío al aplicar transformers a datos visuales es la naturaleza bidimensional de las imágenes. ViT lo resuelve:
        </p>
        <ol>
          <li><strong>División en parches:</strong> La imagen se divide en parches de tamaño fijo (ej. 16×16 píxeles). Para una imagen de 224×224 se obtienen 196 parches.</li>
          <li><strong>Aplanamiento:</strong> Cada parche se aplana en un vector 1D.</li>
          <li><strong>Proyección lineal (Linear Projection of Flattened Patches):</strong> Los parches aplanados se transforman en vectores mediante una capa de embedding.</li>
          <li><strong>Embeddings posicionales (Patch + Position Embedding):</strong> Se añade información posicional para preservar la estructura espacial, crucial para las tareas de visión.</li>
          <li><strong>Token [CLS]:</strong> Se añade un token de clasificación especial extra aprendible que recoge la información global para la predicción final.</li>
          <li><strong>Transformer Encoder:</strong> La secuencia de embeddings pasa por múltiples bloques de codificador con autoatención multi-cabezal.</li>
          <li><strong>MLP Head:</strong> El token [CLS] alimenta una cabeza de clasificación MLP (Multi-Layer Perceptron) para la predicción de clase final.</li>
        </ol>

        <h3>Variantes de ViT</h3>

        <h4>Swin Transformers</h4>
        <p>
          Los Swin Transformers representan una evolución significativa al introducir un enfoque <strong>jerárquico</strong> que divide las imágenes en <strong>ventanas deslizantes (swins)</strong>. Este diseño permite modelar relaciones locales y globales de manera eficiente.
        </p>
        <ul>
          <li>Los parches de imagen se agrupan y procesan progresivamente en diferentes niveles de resolución.</li>
          <li>Mejoran la eficiencia computacional y permiten capturar tanto patrones locales como globales.</li>
          <li>Arquitectura escalable para imágenes de alta resolución con menos requisitos computacionales que ViT original.</li>
          <li>Efectivos más allá de la clasificación: <strong>segmentación semántica y detección de objetos</strong>.</li>
        </ul>

        <h4>DeiT (Data-Efficient Image Transformers)</h4>
        <p>
          DeiT se centra en abordar una de las principales limitaciones de los Vision Transformers: la <strong>dependencia de grandes conjuntos de datos</strong> para el entrenamiento efectivo.
        </p>
        <ul>
          <li>Introduce técnicas de regularización y <strong>destilación de conocimiento desde redes convolucionales como profesores</strong> durante el entrenamiento.</li>
          <li>Permite que DeiT aprenda eficientemente incluso en escenarios con recursos limitados.</li>
          <li>Alto rendimiento con conjuntos de datos más pequeños.</li>
          <li>Mantiene la simplicidad arquitectónica y la eficiencia de los transformers visuales.</li>
          <li>Abre posibilidades para combinar lo mejor de las CNN y los ViT.</li>
        </ul>

        <h3>CNNs vs Vision Transformers</h3>
        <p>
          Son dos enfoques distintos para resolver problemas en visión por computadora, cada uno con sus propias fortalezas y limitaciones. <strong>La elección no depende de cuál tecnología sea inherentemente mejor, sino de su adecuación al contexto de la tarea.</strong>
        </p>
        <table>
          <thead>
            <tr><th>Aspecto</th><th>CNN</th><th>Vision Transformer (ViT)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Relaciones que captura</strong></td>
              <td>Patrones locales (por tamaño del kernel)</td>
              <td>Relaciones globales a largo plazo entre diferentes regiones</td>
            </tr>
            <tr>
              <td><strong>Rendimiento con datos</strong></td>
              <td>Bueno con datasets pequeños o limitados</td>
              <td>Mejora considerablemente a medida que crece el dataset; supera a CNN en gran escala</td>
            </tr>
            <tr>
              <td><strong>Requisitos computacionales</strong></td>
              <td>Eficientes, optimizadas para operaciones convolucionales</td>
              <td>Elevados — demandan considerable memoria y capacidad de procesamiento</td>
            </tr>
            <tr>
              <td><strong>Flexibilidad arquitectónica</strong></td>
              <td>Limitada a operaciones convolucionales locales</td>
              <td>Alta — facilita la adaptación a tareas específicas</td>
            </tr>
            <tr>
              <td><strong>Uso en dispositivos limitados</strong></td>
              <td>Adecuadas — eficiencia computacional</td>
              <td>Difícil — implementación compleja en recursos restringidos</td>
            </tr>
            <tr>
              <td><strong>Cuándo usar</strong></td>
              <td>Recursos limitados, datos escasos, patrones locales importantes</td>
              <td>Grandes datasets, relaciones globales complejas, escenarios de gran escala</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>Conclusión del PDF:</strong> Los transformers visualales son ideales para problemas que requieren modelar relaciones globales complejas y trabajar con grandes conjuntos de datos. Las CNN siguen siendo una opción confiable y eficiente para aplicaciones donde los recursos son limitados o los datos disponibles son escasos.
        </p>
      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-no-estructurados/ud3" className="text-sm text-slate-500 hover:text-blue-600">← UD3: Aplicaciones NLP</Link>
        <div className="flex gap-3">
          <Link href="/datos-no-estructurados/ud4/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD4</Link>
          <Link href="/datos-no-estructurados/ud5" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold">Siguiente: UD5 →</Link>
        </div>
      </div>

    </div>
  );
}
