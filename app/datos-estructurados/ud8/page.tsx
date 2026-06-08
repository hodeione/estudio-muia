import Link from "next/link";

export default function UD8() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-estructurados" className="text-sm text-blue-600 hover:underline">← Datos Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-indigo-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">8</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD8: Sistemas Recomendadores</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso en entornos con datos estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-estructurados/ud7" className="text-sm text-slate-500 hover:text-blue-600">← UD7</Link>
          <Link href="/datos-estructurados/ud9" className="text-sm text-slate-500 hover:text-blue-600">Siguiente: UD9 →</Link>
          <Link href="/datos-estructurados/ud8/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 mb-8 text-sm text-indigo-800">
        <strong>Temas:</strong> 1. Tipos de sistemas recomendadores · 2. Fenómeno Long Tail · 3. Entradas del sistema · 4. Memory-based vs Model-based
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Introducción</h2>
        <p>
          Los <strong>sistemas recomendadores</strong> son algoritmos de filtrado de información que predicen las preferencias de un usuario y sugieren ítems relevantes (películas, productos, canciones, artículos). Son uno de los sistemas de IA más impactantes económicamente: la recomendación personalizada es responsable de una fracción significativa de los ingresos de las mayores plataformas digitales del mundo.
        </p>
        <ul>
          <li><strong>Amazon:</strong> el 35% de sus ventas proviene de recomendaciones</li>
          <li><strong>YouTube:</strong> el 70% del tiempo de visionado viene de recomendaciones</li>
          <li><strong>Netflix:</strong> el 75% de lo que se ve proviene del sistema de recomendación</li>
        </ul>

        <h2>Tema 1: Tipos de Sistemas Recomendadores</h2>

        <h3>1.1 Popular Based (Basado en popularidad)</h3>
        <p>
          El sistema más simple: recomienda los ítems más populares globalmente (los más vistos, comprados o valorados). No requiere datos del usuario y es efectivo para nuevos usuarios (cold start).
        </p>
        <ul>
          <li><strong>Ventajas:</strong> simple, no necesita datos del usuario, muy escalable</li>
          <li><strong>Limitaciones:</strong> no personalizado, tiende a recomendar siempre los mismos ítems populares, ignora el nicho</li>
          <li><strong>Casos de uso:</strong> secciones "Tendencias", "Los más vistos esta semana"</li>
        </ul>

        <h3>1.2 Content-Based Filtering (Filtrado por contenido)</h3>
        <p>
          Recomienda ítems similares a los que el usuario ha consumido o valorado positivamente. La similitud se calcula sobre los <strong>atributos del ítem</strong> (género, director, tags, descripción...).
        </p>
        <p>
          El proceso típico es: representar cada ítem como un vector de características (usando TF-IDF, embeddings, etc.), calcular similitud coseno entre ítems, recomendar los K más similares a los que le gustaron al usuario.
        </p>
        <ul>
          <li><strong>Ventajas:</strong> no necesita datos de otros usuarios, buena explicabilidad ("te recomendamos esto porque viste X")</li>
          <li><strong>Limitaciones:</strong> sobrespecialización (el usuario queda atrapado en sus gustos actuales), no descubre ítems de categorías nuevas</li>
        </ul>

        <h3>1.3 Collaborative Filtering (Filtrado colaborativo)</h3>
        <p>
          Recomienda ítems basándose en el comportamiento de <strong>usuarios similares</strong>. La hipótesis es que si dos usuarios han valorado muchos ítems de forma similar en el pasado, seguirán teniendo gustos similares en el futuro.
        </p>
        <p>
          Existen dos variantes principales:
        </p>
        <ul>
          <li><strong>User-User CF:</strong> "usuarios que se parecen a ti también vieron esto"</li>
          <li><strong>Item-Item CF:</strong> "los que vieron esto también vieron aquello"</li>
        </ul>
        <ul>
          <li><strong>Ventajas:</strong> descubre ítems nuevos fuera del perfil de contenido, efecto serendipia</li>
          <li><strong>Limitaciones:</strong> problema del cold start (nuevos usuarios/ítems), escalabilidad con millones de usuarios</li>
        </ul>

        <h3>1.4 Hybrid Systems (Sistemas Híbridos)</h3>
        <p>
          Combinan múltiples enfoques para aprovechar sus fortalezas y mitigar sus debilidades. Netflix, por ejemplo, combina Collaborative Filtering con Content-Based y con datos contextuales (hora del día, dispositivo, etc.).
        </p>
        <table>
          <thead>
            <tr><th>Tipo</th><th>Basado en</th><th>Problema cold start</th><th>Personalización</th></tr>
          </thead>
          <tbody>
            <tr><td>Popular Based</td><td>Popularidad global</td><td>No aplica</td><td>Ninguna</td></tr>
            <tr><td>Content-Based</td><td>Atributos del ítem</td><td>Usuarios nuevos solo</td><td>Media</td></tr>
            <tr><td>Collaborative</td><td>Comportamiento de usuarios</td><td>Ambos (usuarios e ítems)</td><td>Alta</td></tr>
            <tr><td>Hybrid</td><td>Combinación</td><td>Mitigado</td><td>Muy alta</td></tr>
          </tbody>
        </table>

        <h2>Tema 2: El Fenómeno Long Tail</h2>

        <h3>2.1 Distribución de popularidad</h3>
        <p>
          La popularidad de los ítems en plataformas digitales sigue una <strong>distribución de ley de potencias</strong> (similar a la ley de Zipf): unos pocos ítems concentran la mayoría de las interacciones, mientras que la gran mayoría tienen muy pocas.
        </p>
        <p>
          La <strong>Long Tail</strong> es la "cola larga" de esta distribución: los miles de ítems nicho con poca popularidad individual pero que en conjunto representan un volumen enorme. Amazon y Netflix descubrieron que la suma de las ventas de ítems de nicho supera las ventas de los blockbusters.
        </p>

        <h3>2.2 Implicaciones para los sistemas recomendadores</h3>
        <ul>
          <li>Un buen sistema recomendador debe ser capaz de recomendar ítems de la Long Tail (diversidad)</li>
          <li>Los sistemas basados solo en popularidad refuerzan los hits y matan el nicho</li>
          <li>El Collaborative Filtering y los modelos de factores latentes son buenos para explorar la Long Tail</li>
          <li>Se busca el equilibrio entre <strong>relevancia</strong> (dar lo que al usuario le gustará) y <strong>diversidad</strong> (ampliar sus horizontes)</li>
        </ul>

        <h2>Tema 3: Entradas del Sistema Recomendador</h2>

        <h3>3.1 Rating Matrix (Matriz de valoraciones)</h3>
        <p>
          La fuente de datos principal es la <strong>Rating Matrix</strong> U×I: una matriz donde las filas son usuarios, las columnas son ítems, y las celdas contienen la valoración (explícita: 1-5 estrellas; implícita: click, visualización, compra). Esta matriz es extremadamente <strong>sparse</strong> (dispersa): la mayoría de las celdas están vacías porque cada usuario solo ha interactuado con una fracción mínima del catálogo.
        </p>

        <h3>3.2 Catalog (Catálogo de ítems)</h3>
        <p>
          Los metadatos de los ítems: título, género, director, actores, descripción, precio, categoría, etiquetas, etc. Son la base del Filtrado por Contenido.
        </p>

        <h3>3.3 User Data (Datos del usuario)</h3>
        <p>
          Información demográfica y de perfil del usuario: edad, género, ubicación, historial de compras, preferencias declaradas. Útil para el arranque en frío y para personalización.
        </p>

        <h3>3.4 Context (Contexto)</h3>
        <p>
          Información sobre el contexto de la interacción: hora del día, día de la semana, dispositivo usado, ubicación geográfica, evento (Black Friday, Navidad). Los sistemas conscientes del contexto mejoran significativamente la relevancia.
        </p>

        <h2>Tema 4: Memory-Based vs Model-Based</h2>

        <h3>4.1 Memory-Based (Basado en memoria)</h3>
        <p>
          Trabaja directamente con la Rating Matrix sin aprender un modelo. Calcula similitudes en tiempo real usando todos los datos disponibles.
        </p>
        <ul>
          <li><strong>Algoritmo:</strong> KNN (K-Nearest Neighbors) con similitud coseno o correlación de Pearson</li>
          <li><strong>Ventajas:</strong> simple, interpretable, no requiere entrenamiento previo</li>
          <li><strong>Limitaciones:</strong> no escala bien (O(U·I) en espacio, O(U²) en tiempo), problemas con sparse matrices</li>
        </ul>
        <div className="formula">sim(u, v) = (rᵤ · rᵥ) / (‖rᵤ‖ · ‖rᵥ‖)  [similitud coseno]</div>

        <h3>4.2 Model-Based (Basado en modelo)</h3>
        <p>
          Aprende un modelo compacto de las preferencias a partir de los datos, que luego se usa para hacer predicciones. La técnica más importante es la <strong>factorización matricial</strong>.
        </p>

        <h4>Matrix Factorization (SVD / Factores Latentes)</h4>
        <p>
          La Rating Matrix R ≈ P · Qᵀ se aproxima como el producto de dos matrices de menor rango: P (usuarios × k factores latentes) y Q (ítems × k factores latentes). Los factores latentes capturan preferencias abstractas no explicitadas (por ejemplo, "le gustan las comedias románticas independientes").
        </p>
        <div className="formula">r̂ᵤᵢ = pᵤ · qᵢᵀ = Σₖ pᵤₖ · qᵢₖ</div>
        <p>
          Se minimiza el error sobre los valores conocidos de R con regularización:
        </p>
        <div className="formula">min Σ_{"{(u,i)∈R}"} (rᵤᵢ − pᵤ·qᵢᵀ)² + λ(‖pᵤ‖² + ‖qᵢ‖²)</div>

        <h4>Ventajas del Model-Based</h4>
        <ul>
          <li>Escala bien a millones de usuarios e ítems</li>
          <li>Maneja bien la sparsity de la Rating Matrix</li>
          <li>Los factores latentes pueden capturar patrones sutiles de preferencia</li>
          <li>Permite añadir información adicional (side information)</li>
        </ul>

        <h3>4.3 Deep Learning para recomendación</h3>
        <p>
          Las redes neuronales profundas permiten aprender representaciones no lineales de usuarios e ítems. Modelos como <strong>Neural Collaborative Filtering (NCF)</strong>, <strong>Wide &amp; Deep</strong> (Google) o las <strong>redes de atención</strong> (Transformer-based recommenders) representan el estado del arte actual.
        </p>

      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-estructurados/ud7" className="text-sm text-slate-500 hover:text-blue-600">← UD7: Redes Neuronales</Link>
        <div className="flex gap-3">
          <Link href="/datos-estructurados/ud8/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD8</Link>
          <Link href="/datos-estructurados/ud9" className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 font-semibold">Siguiente: UD9 →</Link>
        </div>
      </div>
    </div>
  );
}
