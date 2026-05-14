import Link from "next/link";

export default function UD5() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-no-estructurados" className="text-sm text-blue-600 hover:underline">← Datos No Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">5</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD5: Redes GAN y Stable Diffusion</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso entornos con datos no estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-no-estructurados/ud4" className="text-sm text-slate-500 hover:text-blue-600">← UD4</Link>
          <Link href="/datos-no-estructurados/ud6" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD6 →</Link>
          <Link href="/datos-no-estructurados/ud5/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
        <strong>Temas:</strong> 1. Redes Generativas (historia y evolución) · 2. GAN: fundamentos, variantes, desafíos y aplicaciones · 3. Stable Diffusion
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Tema 1: Introducción a las Redes Generativas</h2>

        <h3>¿Qué son las redes generativas?</h3>
        <p>
          Las <strong>redes generativas</strong> son una clase de modelos de inteligencia artificial diseñados para <strong>aprender la distribución subyacente de un conjunto de datos</strong> y, posteriormente, generar nuevos ejemplos que sigan esa misma distribución. En otras palabras, son modelos capaces de crear contenido nuevo que parece similar a los datos en los que fueron entrenados.
        </p>
        <p>
          Este enfoque contrasta con los <strong>modelos discriminativos</strong>, que se enfocan en clasificar o predecir etiquetas a partir de los datos. Un modelo generativo busca entender los <strong>patrones intrínsecos de los datos</strong>, como las relaciones entre píxeles en una imagen o las correlaciones entre palabras en un texto.
        </p>
        <p>
          Una vez que estos patrones son capturados, el modelo puede generar contenido único: desde imágenes y música hasta textos y videos. Por ejemplo, un modelo generativo entrenado en un conjunto de datos de rostros humanos puede producir imágenes de caras que parecen reales, pero que <strong>no corresponden a personas existentes</strong>.
        </p>

        <h4>Impacto y desafíos</h4>
        <p>El avance en las redes generativas ha tenido un impacto significativo en:</p>
        <ul>
          <li><strong>Creatividad artística:</strong> generación de obras visuales, musicales y textuales originales.</li>
          <li><strong>Generación de datos sintéticos:</strong> para entrenar otros modelos cuando los datos reales son escasos o costosos.</li>
          <li><strong>Mejora de sistemas de recomendación:</strong> modelando mejor las preferencias de los usuarios.</li>
        </ul>
        <p>
          Sin embargo, también plantea <strong>desafíos relacionados con la ética y el uso indebido</strong>, como la creación de contenidos falsos (<em>deepfakes</em>), que pueden manipular la percepción de la realidad.
        </p>

        <h3>Historia y evolución de las redes generativas</h3>
        <p>
          El desarrollo de las redes generativas se remonta a los inicios del aprendizaje automático, cuando los investigadores comenzaron a explorar cómo los modelos podrían no solo clasificar datos, sino también generarlos.
        </p>
        <ul>
          <li>
            <strong>Años 90 — HMM y Redes Bayesianas:</strong> Los Modelos Ocultos de Markov (HMM) y las Redes Bayesianas permitieron avances en tareas como el reconocimiento de voz. Sin embargo, tenían limitaciones significativas en la capacidad de generar datos complejos y de alta dimensionalidad.
          </li>
          <li>
            <strong>2014 — GAN (Ian Goodfellow):</strong> El verdadero punto de inflexión. Introdujo un paradigma innovador: dos redes neuronales (un generador y un discriminador) que compiten entre sí en un proceso de entrenamiento adversarial. Mientras el generador intenta crear datos que engañen al discriminador, este último busca identificar si los datos son reales o sintéticos. Revolucionó el campo al permitir la generación de datos realistas en síntesis de imágenes, videos y audio.
          </li>
          <li>
            <strong>Post-2014 — Variantes GAN:</strong> StyleGAN y CycleGAN mejoraron la calidad y la versatilidad de los datos generados.
          </li>
          <li>
            <strong>VAE (Variational Autoencoders):</strong> Otro enfoque generativo que aprende un espacio latente continuo y estructurado.
          </li>
          <li>
            <strong>Modelos de Difusión (actualidad):</strong> Han ganado popularidad reciente por su capacidad de generar datos con un nivel de detalle y control sin precedentes, como se observa en modelos como <em>Stable Diffusion</em>. Son menos propensos a inestabilidades que las GAN.
          </li>
        </ul>
        <p>
          Hoy en día, las redes generativas están en el centro de avances clave en inteligencia artificial, allanando el camino para nuevas aplicaciones en diseño, entretenimiento, salud y más.
        </p>

        <h2>Tema 2: GAN (Generative Adversarial Networks)</h2>

        <h3>Fundamentos de las GAN</h3>
        <p>
          Las <strong>GAN</strong> consisten en dos redes neuronales que se entrenan simultáneamente en un proceso adversarial:
        </p>
        <ul>
          <li><strong>Generador (G):</strong> Toma como entrada un vector de ruido aleatorio del espacio latente (z ~ N(0,1)) y genera datos sintéticos (e.g., imágenes). Su objetivo: engañar al discriminador.</li>
          <li><strong>Discriminador (D):</strong> Clasifica si una muestra es real (del dataset) o falsa (generada por G). Su objetivo: distinguir correctamente entre reales y falsas.</li>
        </ul>

        <h4>Pérdida minimax</h4>
        <p>El entrenamiento se formula como un juego minimax:</p>
        <div className="formula">min_G max_D [E[log D(x)] + E[log(1 - D(G(z)))]]</div>
        <p>
          El discriminador maximiza la probabilidad de clasificar correctamente. El generador minimiza la probabilidad de que el discriminador detecte sus falsificaciones. El equilibrio teórico es el <strong>Equilibrio de Nash</strong>.
        </p>

        <h3>Espacio latente</h3>
        <p>
          El <strong>espacio latente</strong> es la representación comprimida de los datos donde opera el generador. Puntos cercanos en el espacio latente corresponden a muestras similares. Es posible hacer aritmética semántica: "cara con gafas" - "cara sin gafas" + "cara hombre" = "cara hombre con gafas".
        </p>

        <h3>Variantes de GAN</h3>
        <ul>
          <li><strong>DCGAN (Deep Convolutional GAN, 2015):</strong> Primera GAN estable usando capas convolucionales transpuestas. Sentó las bases de las GAN modernas.</li>
          <li><strong>CycleGAN (2017):</strong> Traducción imagen-a-imagen sin pares. Usa dos GANs con pérdidas de ciclo-consistencia para mantener coherencia.</li>
          <li><strong>StyleGAN/StyleGAN2 (2019-2020):</strong> Genera imágenes con control estilístico a múltiples escalas. Introduce AdaIN (Adaptive Instance Normalization). Produce imágenes ultrarrealistas de 1024×1024.</li>
          <li><strong>BigGAN (2018 - DeepMind):</strong> GAN a gran escala entrenada en ImageNet. Genera imágenes de alta calidad con condicionamiento de clase.</li>
          <li><strong>Progressive GAN (2018):</strong> Empieza con resoluciones bajas (4×4) y las aumenta progresivamente durante el entrenamiento.</li>
          <li><strong>cGAN (Conditional GAN):</strong> El generador y discriminador reciben información adicional (etiqueta de clase). Permite generar imágenes de categorías específicas.</li>
          <li><strong>Pix2Pix:</strong> GAN supervisada para traducción imagen-imagen con pares de entrenamiento (e.g., boceto → foto, mapa → satélite).</li>
        </ul>

        <h3>Desafíos en el entrenamiento de GANs</h3>
        <ul>
          <li>
            <strong>Mode collapse (colapso de modos):</strong> El generador aprende a producir solo un subconjunto limitado de muestras (e.g., siempre la misma cara). Soluciones: Mini-batch discrimination, Wasserstein GAN, técnicas de regularización.
          </li>
          <li>
            <strong>Inestabilidad en el entrenamiento:</strong> El equilibrio entre G y D es difícil de mantener. Si D es demasiado fuerte, G no aprende; si es demasiado débil, G no mejora.
          </li>
          <li>
            <strong>Sensibilidad a hiperparámetros:</strong> Tasa de aprendizaje, arquitectura, batch size afectan enormemente la estabilidad. Se requiere ajuste fino cuidadoso.
          </li>
          <li>
            <strong>Problemas de convergencia:</strong> No existe una función de pérdida que indique claramente cuando el entrenamiento ha convergido.
          </li>
          <li>
            <strong>Coste computacional:</strong> Entrenar GANs de alta calidad requiere días o semanas en múltiples GPUs.
          </li>
          <li>
            <strong>Equilibrio G-D:</strong> Si el discriminador mejora demasiado rápido, el generador recibe gradientes no informativos (problema del gradiente desvaneciente).
          </li>
        </ul>

        <h3>Aplicaciones de las GANs</h3>
        <ul>
          <li><strong>Generación de imágenes realistas:</strong> Caras, paisajes, objetos que no existen en la realidad.</li>
          <li><strong>Traducción entre estilos:</strong> Foto → pintura artística, día → noche, verano → invierno.</li>
          <li><strong>Generación de datos sintéticos:</strong> Para aumentar datasets de entrenamiento cuando los datos reales son escasos o costosos.</li>
          <li><strong>Super-resolución (SRGAN):</strong> Aumentar la resolución de imágenes de baja calidad.</li>
          <li><strong>Síntesis de video y audio:</strong> Generación de video realista, clonación de voz.</li>
          <li><strong>Detección de anomalías:</strong> El discriminador puede detectar muestras atípicas.</li>
          <li><strong>Deepfakes:</strong> Sustitución de caras en video. Aplicación controvertida con implicaciones éticas serias.</li>
          <li><strong>Diseño y moda:</strong> Generación de nuevos diseños de ropa, muebles, arquitectura.</li>
          <li><strong>Realidad virtual:</strong> Generación de entornos y avatares sintéticos.</li>
        </ul>

        <h2>Tema 2: Stable Diffusion</h2>

        <h3>5.1 Introducción a los modelos de difusión</h3>
        <p>
          Los <strong>modelos de difusión</strong> representan una clase emergente de modelos generativos que han demostrado capacidades sobresalientes en la síntesis de datos, especialmente en la generación de imágenes. A diferencia de las GAN, emplean un <strong>enfoque basado en procesos probabilísticos iterativos</strong> para modelar y generar datos.
        </p>
        <p>
          El principio subyacente se centra en un proceso de dos fases:
        </p>
        <ol>
          <li>
            <strong>Primera fase — añadir ruido progresivamente:</strong> Los datos reales (como una imagen) son perturbados repetidamente con <strong>ruido gaussiano</strong> hasta que se convierten en ruido puro.
          </li>
          <li>
            <strong>Segunda fase — proceso inverso:</strong> Un modelo entrenado en redes neuronales profundas aprende a revertir este proceso de ruidización <strong>paso a paso</strong>, eliminando progresivamente el ruido para generar nuevos datos sintéticos.
          </li>
        </ol>

        <h4>Ventajas frente a las GAN</h4>
        <p>
          Una de las principales ventajas de los modelos de difusión es su capacidad para generar datos <strong>altamente realistas y diversificados</strong> sin sufrir los problemas comunes en otras arquitecturas, como los <strong>modos colapsados</strong> de las GAN. Además, su formulación probabilística proporciona un marco teórico sólido.
        </p>
        <p>
          En comparación con las GAN, los modelos de difusión presentan un enfoque <strong>más estable durante el entrenamiento</strong>, ya que no dependen de un equilibrio adversarial entre dos redes. Esto los hace menos propensos a inestabilidades y permite un entrenamiento más robusto en una amplia variedad de aplicaciones.
        </p>
        <p>
          Entre estos modelos, <strong>Stable Diffusion</strong> se ha destacado como un modelo líder debido a su capacidad para combinar precisión, control y escalabilidad en la generación de contenido visual.
        </p>

        <h3>5.2 Fundamentos de modelos de difusión</h3>
        <p>
          El modelo <em>Stable Diffusion</em> es una implementación sobresaliente dentro de los modelos de difusión, diseñado para generar imágenes de alta calidad mediante un enfoque probabilístico iterativo. Destaca por combinar <strong>eficiencia computacional, flexibilidad y precisión</strong> en la síntesis de datos, gracias a los siguientes <strong>5 fundamentos clave</strong>:
        </p>

        <ol>
          <li>
            <strong>Proceso de ruido progresivo y eliminación controlada</strong>
            <p>
              En el núcleo de Stable Diffusion se encuentra un procedimiento iterativo que <strong>añade ruido gaussiano de forma progresiva</strong> a los datos originales hasta convertirlos en ruido puro. Posteriormente, el modelo invierte este proceso de manera controlada, <strong>eliminando el ruido paso a paso</strong> para reconstruir los datos originales o generar nuevos ejemplos sintéticos. Este enfoque permite al modelo capturar distribuciones complejas de datos, generando imágenes con un alto grado de realismo.
            </p>
          </li>
          <li>
            <strong>Uso de un espacio latente comprimido</strong>
            <p>
              A diferencia de otros modelos que operan directamente sobre datos de alta dimensionalidad, Stable Diffusion <strong>transforma los datos originales a un espacio latente comprimido</strong> antes de realizar el proceso de difusión. Esto <strong>reduce significativamente los requisitos computacionales</strong> sin comprometer la calidad del resultado, haciendo que el modelo sea más eficiente y escalable.
            </p>
          </li>
          <li>
            <strong>Arquitectura U-Net adaptada</strong>
            <p>
              El modelo emplea una <strong>arquitectura U-Net modificada</strong>, que combina características de diferentes niveles de resolución durante el proceso de generación. Esto permite capturar tanto <strong>detalles finos como patrones globales</strong> en las imágenes, mejorando la coherencia visual y la calidad de los resultados generados.
            </p>
          </li>
          <li>
            <strong>Integración de embeddings de texto</strong>
            <p>
              Una de las innovaciones clave de Stable Diffusion es su capacidad para generar imágenes a partir de <strong>descripciones textuales</strong>. Mediante el uso de modelos de lenguaje preentrenados, como <strong>CLIP</strong>, el texto se transforma en embeddings que representan características semánticas latentes. Estos embeddings <strong>guían el proceso de generación</strong>, permitiendo al modelo producir imágenes que reflejan con precisión las descripciones proporcionadas.
            </p>
          </li>
          <li>
            <strong>Flexibilidad en la personalización</strong>
            <p>
              El diseño modular de Stable Diffusion permite <strong>ajustar parámetros clave</strong> del modelo, como el nivel de detalle deseado o el estilo visual. Esta flexibilidad facilita la adaptación del modelo a diversas aplicaciones, desde arte generativo hasta tareas científicas.
            </p>
          </li>
        </ol>

        <h3>Aplicaciones de Stable Diffusion</h3>
        <ul>
          <li><strong>Arte generativo:</strong> Creación de obras artísticas únicas con prompts textuales.</li>
          <li><strong>Prototipado de diseño:</strong> Generación rápida de conceptos visuales para productos, publicidad, videojuegos.</li>
          <li><strong>Multimedia y entretenimiento:</strong> Ilustración de libros, concept art, producción cinematográfica.</li>
          <li><strong>Educación:</strong> Generación de material visual educativo personalizado.</li>
          <li><strong>Investigación:</strong> Generación de datos sintéticos para entrenamiento.</li>
          <li><strong>E-commerce:</strong> Visualización de productos en diferentes contextos sin sesiones fotográficas.</li>
          <li><strong>Edición de imágenes:</strong> Retoque fotográfico asistido, corrección y mejora.</li>
          <li><strong>Accesibilidad:</strong> Generación de imágenes desde descripciones para personas con discapacidad visual.</li>
        </ul>

        <h3>5.4 Stable Diffusion y DALL-E</h3>

        <h4>Qué es DALL-E</h4>
        <p>
          <strong>DALL-E</strong> es un modelo generativo desarrollado por <strong>OpenAI</strong> que utiliza <strong>arquitecturas de transformadores</strong> para generar imágenes a partir de descripciones textuales. Se distingue por su capacidad de comprender relaciones complejas entre palabras y conceptos, lo que le permite producir imágenes que combinan elementos visuales de manera creativa e inesperada.
        </p>
        <p>
          Su nombre está inspirado en el artista <strong>Salvador Dalí</strong> y el robot <strong>WALL-E</strong>, reflejando su enfoque en la creatividad y la originalidad. Ha demostrado ser especialmente útil en la creación de <strong>composiciones abstractas</strong> y visualizaciones innovadoras que van más allá de lo que tradicionalmente se espera de un modelo generativo.
        </p>

        <h4>Diferencia arquitectónica fundamental</h4>
        <p>
          Stable Diffusion y DALL-E representan dos enfoques avanzados en la generación de contenido visual, pero lo hacen de formas <strong>notablemente diferentes</strong>:
        </p>
        <ul>
          <li><strong>Stable Diffusion:</strong> basa su funcionamiento en <strong>modelos de difusión</strong> — proceso iterativo para añadir y eliminar ruido en un espacio latente comprimido.</li>
          <li><strong>DALL-E:</strong> se apoya en <strong>arquitecturas de transformadores</strong> para relacionar directamente las palabras con los píxeles de las imágenes generadas, operando en alta dimensionalidad.</li>
        </ul>

        <h4>Comparativa detallada</h4>
        <table>
          <thead>
            <tr><th>Dimensión</th><th>Stable Diffusion</th><th>DALL-E (OpenAI)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Arquitectura base</strong></td>
              <td>Modelos de difusión — proceso iterativo de ruido/denoising en espacio latente</td>
              <td>Transformadores — relaciona directamente palabras con píxeles</td>
            </tr>
            <tr>
              <td><strong>Fortaleza principal</strong></td>
              <td>Genera imágenes <strong>realistas con precisión en los detalles</strong>, capturando texturas y estilos complejos</td>
              <td>Sobresale en la creación de <strong>composiciones abstractas y conceptos innovadores</strong> a partir de descripciones complejas</td>
            </tr>
            <tr>
              <td><strong>Personalización</strong></td>
              <td>Gran flexibilidad — permite ajustar nivel de detalle y estilo visual. Ideal para artistas y diseñadores con control granular</td>
              <td>Enfoque más generalizado — facilita resultados sorprendentes sin necesidad de ajustar numerosos parámetros</td>
            </tr>
            <tr>
              <td><strong>Eficiencia computacional</strong></td>
              <td>Opera en <strong>espacio latente comprimido</strong> → reduce considerablemente los requisitos computacionales → implementable en dispositivos más accesibles</td>
              <td>Requiere infraestructura más robusta debido a su enfoque en <strong>datos de alta dimensionalidad</strong> → uso en entornos más equipados</td>
            </tr>
            <tr>
              <td><strong>Calidad de imagen</strong></td>
              <td>Resultados altamente detallados y realistas, ideal para aplicaciones industriales y creativas</td>
              <td>Destaca en interpretar descripciones complejas y combinar conceptos inusuales en composiciones visuales únicas</td>
            </tr>
            <tr>
              <td><strong>Acceso y disponibilidad</strong></td>
              <td><strong>Código abierto</strong> → adopción masiva, comunidad activa que impulsa su desarrollo y personalización</td>
              <td><strong>Servicio propietario</strong> → acceso limitado a través de su API → uso restringido en ciertos contextos</td>
            </tr>
            <tr>
              <td><strong>Audiencia principal</strong></td>
              <td>Comunidades académicas, proyectos de código abierto, desarrolladores que necesitan control</td>
              <td>Usuarios que buscan solución sencilla y rápida para explorar ideas creativas sin configuración</td>
            </tr>
          </tbody>
        </table>

        <h4>Otros modelos destacados en el ecosistema</h4>
        <p>
          Además de Stable Diffusion y DALL-E, han emergido otros modelos generativos relevantes:
        </p>
        <ul>
          <li>
            <strong>Imagen (Google):</strong> Utiliza técnicas similares a las de DALL-E, pero con un enfoque aún más avanzado en la <strong>calidad y coherencia de las imágenes generadas</strong>.
          </li>
          <li>
            <strong>MidJourney:</strong> Muy popular en la creación de arte digital. Se posiciona como una herramienta accesible para creadores, <strong>centrada en producir obras artísticas estilizadas y llamativas</strong>. Interfaz a través de Discord.
          </li>
        </ul>
        <p>
          La aparición de estos modelos refleja la diversidad y la competencia en el ámbito de la generación de imágenes, ofreciendo a los usuarios una variedad de opciones según sus necesidades específicas.
        </p>

        <h4>Conclusión del PDF</h4>
        <p>
          Las GAN y los modelos de difusión como Stable Diffusion son fundamentales en la generación de contenido visual, adaptándose a diferentes necesidades. Las GAN destacan en producir imágenes realistas mediante la interacción adversarial, mientras que Stable Diffusion emplea un <strong>enfoque iterativo eficiente y preciso, con gran capacidad de personalización</strong>. Gracias a su código abierto, Stable Diffusion fomenta la experimentación, mientras que DALL-E sobresale en la creación de composiciones abstractas desde texto.
        </p>
      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-no-estructurados/ud4" className="text-sm text-slate-500 hover:text-blue-600">← UD4: Computer Vision</Link>
        <div className="flex gap-3">
          <Link href="/datos-no-estructurados/ud5/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD5</Link>
          <Link href="/datos-no-estructurados/ud6" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold">Siguiente: UD6 →</Link>
        </div>
      </div>

    </div>
  );
}
