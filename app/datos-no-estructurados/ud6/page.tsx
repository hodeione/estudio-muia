import Link from "next/link";

export default function UD6() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/datos-no-estructurados" className="text-sm text-blue-600 hover:underline">← Datos No Estructurados</Link>
        <div className="flex items-center gap-3 mt-2">
          <span className="bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">6</span>
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a5f]">UD6: Impacto y futuro de la IA Generativa</h1>
            <p className="text-slate-500 text-sm">Áreas de aplicación y casos de uso entornos con datos no estructurados</p>
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Link href="/datos-no-estructurados/ud5" className="text-sm text-slate-500 hover:text-blue-600">← UD5</Link>
          <Link href="/datos-no-estructurados/ud6/test" className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200">Ir al test</Link>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
        <strong>Temas:</strong> 1. Impacto ético y regulatorio de la IA Generativa · 2. Futuro de la IA: KAN, AGI, Agentic AI y Computación Cuántica
      </div>

      <article className="prose bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-2">

        <h2>Tema 1: Impacto de la IA Generativa</h2>

        <h3>Consideraciones éticas de la IA Generativa</h3>

        <h4>Deepfakes y desinformación</h4>
        <p>
          Los modelos generativos (GANs, modelos de difusión) permiten crear videos, imágenes y audio ultrarrealistas de personas que no existen o que dicen cosas que nunca dijeron. Esto tiene graves implicaciones para:
        </p>
        <ul>
          <li>Manipulación política y electoral mediante noticias falsas verificadas visualmente.</li>
          <li>Daño a la reputación de personas públicas y privadas.</li>
          <li>Fraudes financieros mediante suplantación de identidad en videollamadas.</li>
          <li>Erosión de la confianza en los medios de comunicación.</li>
        </ul>
        <p>
          Soluciones en desarrollo: herramientas de detección de deepfakes (DeepFace, FaceForensics++), marcas de agua digitales (watermarking), C2PA (Coalition for Content Provenance and Authenticity).
        </p>

        <h4>Propiedad intelectual</h4>
        <p>
          Los modelos generativos son entrenados con datos de internet, incluyendo obras protegidas por derechos de autor. Debates abiertos:
        </p>
        <ul>
          <li>¿Quién tiene los derechos sobre las obras generadas por IA?</li>
          <li>¿Es el entrenamiento sobre obras protegidas un uso justo (fair use)?</li>
          <li>Demandas: Getty Images vs Stability AI, artistas vs Midjourney.</li>
          <li>Regulaciones emergentes: la UE exige transparencia sobre datos de entrenamiento.</li>
        </ul>

        <h4>Sesgos algorítmicos</h4>
        <p>
          Los modelos generativos aprenden y amplían los sesgos presentes en sus datos de entrenamiento:
        </p>
        <ul>
          <li>Representación sesgada de géneros, etnias, culturas.</li>
          <li>Estereotipos perpetuados en imágenes generadas (e.g., médicos como hombres, enfermeras como mujeres).</li>
          <li>Sesgos lingüísticos que favorecen idiomas y perspectivas occidentales.</li>
        </ul>
        <p>Mitigación: curación de datos, técnicas de debiasing, auditorías de equidad.</p>

        <h4>Impacto en el empleo</h4>
        <p>
          La IA Generativa automatiza tareas creativas e intelectuales previamente exclusivas de humanos:
        </p>
        <ul>
          <li>Diseño gráfico: DALL-E, Midjourney, Stable Diffusion.</li>
          <li>Redacción y copywriting: GPT-4, Claude.</li>
          <li>Programación: GitHub Copilot, Claude, Cursor.</li>
          <li>Traducción: DeepL, Google Translate.</li>
          <li>Voz y locución: ElevenLabs, Replica Studios.</li>
        </ul>
        <p>
          Perspectiva: La historia tecnológica sugiere creación de nuevos empleos a largo plazo, pero la transición puede ser disruptiva a corto plazo. Se requieren políticas de reskilling y upskilling.
        </p>

        <h4>Privacidad y datos personales</h4>
        <ul>
          <li>Los modelos pueden memorizar y reproducir datos de entrenamiento (incluyendo datos personales).</li>
          <li>Ataques de extracción de datos (data extraction attacks) pueden obtener información sensible.</li>
          <li>Necesidad de técnicas como differential privacy y machine unlearning.</li>
        </ul>

        <h4>Autonomía y responsabilidad</h4>
        <p>
          ¿Quién es responsable cuando un sistema de IA toma una decisión dañina? El debate incluye: creadores del modelo, empresa que lo despliega, usuario final. La falta de explicabilidad (caja negra) complica la atribución de responsabilidad.
        </p>

        <h3>Marco legal: regulación de la IA</h3>

        <h4>AI Act de la Unión Europea</h4>
        <p>
          El <strong>AI Act</strong> (aprobado en 2024) es la primera regulación comprehensiva de IA del mundo. Clasifica los sistemas de IA por nivel de riesgo:
        </p>
        <ul>
          <li><strong>Riesgo inaceptable:</strong> Prohibidos. Sistemas de puntuación social gubernamental, manipulación subliminal, reconocimiento facial en tiempo real en espacios públicos (con excepciones).</li>
          <li><strong>Riesgo alto:</strong> Regulados. Infraestructura crítica, educación, empleo, servicios esenciales, justicia, seguridad. Requieren evaluación de conformidad, transparencia, supervisión humana.</li>
          <li><strong>Riesgo limitado:</strong> Obligaciones de transparencia. Chatbots deben indicar que son IA.</li>
          <li><strong>Riesgo mínimo:</strong> Sin obligaciones específicas. Filtros de spam, videojuegos con IA.</li>
        </ul>
        <p><strong>Para modelos de IA de propósito general (GPT, Gemini, Claude):</strong> Obligaciones de transparencia sobre datos de entrenamiento, pruebas adversariales y publicación de resúmenes de entrenamiento.</p>

        <h4>Regulación en EE.UU.</h4>
        <p>
          EE.UU. ha apostado por un enfoque más fragmentado y sectorial:
        </p>
        <ul>
          <li><strong>Executive Order on AI (Biden, 2023):</strong> Directrices sobre seguridad, privacidad y equidad en IA. Requiere pruebas de "red-teaming" para modelos de alto riesgo.</li>
          <li>Regulación sectorial: FDA (salud), FTC (protección consumidores), NIST AI Risk Management Framework.</li>
          <li>Regulación a nivel estatal: California (SB 1047, sobre modelos de frontier AI).</li>
        </ul>

        <h4>Asia</h4>
        <ul>
          <li><strong>China:</strong> Regulación específica para IA generativa (2023). Contenido generado por IA debe ser identificable. Los modelos deben registrarse con las autoridades.</li>
          <li><strong>Japón:</strong> Enfoque más permisivo, fomentando la adopción de IA. El copyright no aplica a datos de entrenamiento de IA.</li>
          <li><strong>Corea del Sur:</strong> Regulación en desarrollo, centrada en sectores específicos.</li>
        </ul>

        <h3>Gobernanza de la IA</h3>

        <p>
          La gobernanza de la IA se refiere a los <strong>principios, políticas y mecanismos</strong> necesarios para garantizar que la inteligencia artificial sea desarrollada, implementada y utilizada de manera ética, transparente y responsable. Su objetivo es establecer un marco que equilibre los beneficios de la IA con la protección de los derechos individuales y el bien común.
        </p>

        <h4>Estrategias de gobernanza</h4>
        <ul>
          <li><strong>Autorregulación del sector:</strong> Las empresas y organizaciones establecen sus propios códigos de conducta y límites éticos. Más flexible y adaptable, pero con menor accountability externo (ej. OpenAI, Google DeepMind, Anthropic).</li>
          <li><strong>Regulación estatal:</strong> Normativas legales vinculantes que incluyen requisitos de transparencia, auditorías obligatorias y sanciones por incumplimiento. Mayor protección pero posible freno a la innovación.</li>
          <li><strong>Colaboración público-privada:</strong> Gobierno, sector privado y sociedad civil co-diseñan las normas. Modelo preferido por muchos expertos por combinar flexibilidad con responsabilidad. Incluye estándares técnicos del NIST y foros internacionales.</li>
        </ul>

        <h4>Modelos de gobernanza</h4>
        <ul>
          <li><strong>Enfoque basado en riesgo:</strong> Regular proporcionalmente al nivel de riesgo potencial de cada sistema de IA. Es el enfoque del AI Act de la UE, que clasifica sistemas por riesgo inaceptable, alto, limitado y mínimo.</li>
          <li><strong>Gobernanza distribuida:</strong> Múltiples actores (gobierno, industria, sociedad civil, academia) participan en el diseño de normas. Busca representatividad y legitimidad amplia.</li>
          <li><strong>Auditorías algorítmicas:</strong> Organismos independientes evalúan los sistemas de IA de forma periódica para verificar cumplimiento, equidad y transparencia.</li>
        </ul>

        <h4>Organismos internacionales clave</h4>
        <ul>
          <li><strong>UE:</strong> AI Act (primera regulación comprehensiva de IA, 2024) y Carta de Derechos Digitales. Clasificación por niveles de riesgo con obligaciones específicas.</li>
          <li><strong>UNESCO:</strong> Principios éticos de la IA: transparencia, justicia y sostenibilidad. Recomendación sobre Ética de la IA (2021), 193 países signatarios.</li>
          <li><strong>OCDE:</strong> Marco de referencia internacional centrado en equidad y responsabilidad. Principios de IA de la OCDE adoptados por G20.</li>
          <li><strong>G7/G20 y AI Safety Institutes:</strong> Discusiones sobre gobernanza global; institutos de seguridad IA en UK, EE.UU., Japón y Corea del Sur.</li>
        </ul>

        <h4>Principios de gobernanza de la IA</h4>
        <ul>
          <li><strong>Transparencia:</strong> Los sistemas de IA deben ser comprensibles y explicables para los usuarios y la sociedad.</li>
          <li><strong>Responsabilidad:</strong> Claridad sobre quién es responsable de las decisiones tomadas por sistemas de IA y sus consecuencias.</li>
          <li><strong>Inclusión:</strong> Los beneficios de la IA deben ser accesibles para todos, evitando sesgos y discriminación.</li>
          <li><strong>Innovación responsable:</strong> Promover el avance tecnológico sin comprometer la seguridad, los derechos fundamentales ni el bien común.</li>
        </ul>

        <h4>Desafíos de la gobernanza de la IA</h4>
        <ul>
          <li><strong>Falta de consenso global:</strong> Diferentes países y regiones adoptan marcos regulatorios incompatibles, dificultando la cooperación internacional y creando "refugios regulatorios".</li>
          <li><strong>Ritmo acelerado de la innovación:</strong> La tecnología avanza más rápido que la capacidad legislativa y regulatoria, dejando vacíos normativos en sistemas ya desplegados.</li>
          <li><strong>Transparencia limitada:</strong> Las empresas a menudo no revelan detalles técnicos de sus modelos por razones comerciales, dificultando la supervisión externa y las auditorías.</li>
          <li><strong>Resistencia del sector privado:</strong> Las grandes empresas tecnológicas pueden oponerse a regulaciones que perciben como barreras a la innovación o que afectan su competitividad.</li>
        </ul>

        <h2>Tema 2: Futuro de la IA</h2>

        <h3>Redes KAN</h3>
        <p>
          El nombre <strong>KAN</strong> proviene de <em>conocimiento asociativo</em>: una arquitectura neuronal que imita la capacidad del cerebro humano para manejar conceptos simbólicos y relaciones complejas. A diferencia de las redes neuronales tradicionales (puramente conexionistas), las KAN combinan el aprendizaje conexionista con el razonamiento simbólico, buscando superar las limitaciones de interpretabilidad de los modelos actuales.
        </p>

        <h4>Características de las KAN</h4>
        <ul>
          <li><strong>Nodos de conocimiento:</strong> Cada nodo representa conceptos, hechos o reglas, no simples valores numéricos. El conocimiento es explícito y estructurado.</li>
          <li><strong>Conexiones dinámicas:</strong> Las conexiones entre nodos son modificables según el contexto, adaptándose dinámicamente a nueva información sin necesidad de reentrenamiento completo.</li>
          <li><strong>Razonamiento simbólico + conexionista:</strong> Integran el aprendizaje estadístico de patrones (conexionista) con la manipulación de reglas y conceptos explícitos (simbólico), permitiendo razonamiento más complejo.</li>
          <li><strong>Alta interpretabilidad:</strong> A diferencia de las redes neuronales tradicionales, las KAN permiten inspeccionar y comprender el razonamiento interno del modelo, clave para aplicaciones críticas.</li>
        </ul>

        <h4>KAN vs Redes Neuronales Tradicionales (MLP)</h4>
        <table>
          <thead>
            <tr><th>Aspecto</th><th>Redes Neuronales Tradicionales (MLP)</th><th>Redes KAN</th></tr>
          </thead>
          <tbody>
            <tr><td>Estructura</td><td>Fija, organizada en capas profundas de nodos numéricos</td><td>Modular, con nodos de conocimiento estructurado</td></tr>
            <tr><td>Razonamiento</td><td>Conexionista puro (estadístico)</td><td>Híbrido simbólico + conexionista</td></tr>
            <tr><td>Interpretabilidad</td><td>Limitada (caja negra)</td><td>Alta, el razonamiento es inspeccionable</td></tr>
            <tr><td>Adaptación</td><td>Lenta, requiere reentrenamiento completo</td><td>Rápida, aprendizaje continuo sin olvidar</td></tr>
            <tr><td>Gestión del conocimiento</td><td>Implícita en pesos numéricos</td><td>Explícita y actualizable</td></tr>
          </tbody>
        </table>

        <h4>Aplicaciones potenciales de KAN</h4>
        <ul>
          <li><strong>PLN avanzado:</strong> Resolución de preguntas complejas, resumen de texto y razonamiento lógico con mayor comprensión del contexto.</li>
          <li><strong>IA Explicable (XAI):</strong> Sistemas que deben justificar sus decisiones de forma comprensible para humanos, especialmente en medicina y derecho.</li>
          <li><strong>Aprendizaje continuo y mantenimiento predictivo:</strong> Capacidad de actualizar conocimiento sin olvidar lo aprendido previamente (evita el olvido catastrófico).</li>
          <li><strong>Sistemas de toma de decisiones complejas:</strong> En entornos donde se combinan reglas formales con aprendizaje de patrones (finanzas, logística, diagnóstico clínico).</li>
        </ul>

        <h4>Desafíos de las KAN</h4>
        <ul>
          <li><strong>Complejidad de diseño:</strong> Diseñar la estructura de nodos y conexiones de conocimiento es notablemente más complejo que las arquitecturas MLP estándar.</li>
          <li><strong>Escalabilidad:</strong> Aplicar KAN a problemas de gran escala (millones de conceptos, datasets masivos) sigue siendo un reto abierto.</li>
          <li><strong>Falta de herramientas estandarizadas:</strong> El ecosistema de librerías, frameworks y metodologías de entrenamiento para KAN está aún en etapas tempranas de madurez.</li>
        </ul>

        <h4>Futuro de las KAN</h4>
        <p>
          Las KAN representan una convergencia prometedora entre el paradigma conexionista (que domina la IA actual) y el simbólico (más interpretable). Su evolución futura se proyecta en dos ejes: la integración con <strong>LLMs</strong> para dotar a los modelos de lenguaje de razonamiento simbólico más robusto, y la sinergia con la <strong>computación cuántica</strong>, que podría acelerar drásticamente el procesamiento de grafos de conocimiento complejos.
        </p>

        <h3>AGI (Inteligencia Artificial General)</h3>
        <p>
          La <strong>AGI</strong>, o <em>inteligencia artificial fuerte</em>, es un sistema capaz de realizar cualquier tarea intelectual que un ser humano puede hacer, con la misma capacidad de aprendizaje autónomo, razonamiento y adaptación. A diferencia de la IA actual (IA estrecha), que destaca en dominios muy específicos pero falla fuera de ellos, la AGI debería poder transferir conocimiento entre dominios, comprender el contexto del mundo real y actuar de forma flexible ante situaciones completamente nuevas.
        </p>

        <h4>Capacidades definitorias de la AGI</h4>
        <ul>
          <li><strong>Aprender de forma autónoma</strong> a partir de experiencias sin supervisión explícita.</li>
          <li><strong>Razonar y tomar decisiones</strong> en entornos complejos y ambiguos.</li>
          <li><strong>Transferir conocimientos</strong> entre dominios distintos (como hacen los humanos).</li>
          <li><strong>Comprender y adaptarse</strong> al contexto del mundo real de forma dinámica.</li>
        </ul>

        <h4>Fases de desarrollo hacia la AGI</h4>
        <table>
          <thead>
            <tr><th>Fase</th><th>Descripción</th><th>Estado</th></tr>
          </thead>
          <tbody>
            <tr><td>Below Human Level</td><td>IA estrecha: supera humanos en tareas específicas pero falla fuera de su dominio</td><td>Actual (GPT-4, Gemini, etc.)</td></tr>
            <tr><td>Human Level</td><td>Rendimiento equivalente al humano en cualquier tarea intelectual</td><td>Objetivo próximo (estimado 2025–2030)</td></tr>
            <tr><td>Moderately Superhuman</td><td>Supera consistentemente a los mejores humanos en todos los dominios</td><td>Fase futura</td></tr>
            <tr><td>Super-Intelligent</td><td>Inteligencia cualitativamente superior a la humana en todos los aspectos</td><td>Hipotético</td></tr>
          </tbody>
        </table>

        <h4>Enfoques para lograr AGI</h4>
        <ul>
          <li>
            <strong>Conexionistas avanzados:</strong> Escalar modelos transformer con más datos, parámetros y cómputo (Scaling Hypothesis de OpenAI con GPT-4/5).
            <br/><em>Ventaja:</em> Aprovecha la tecnología y la inversión actuales.
            <br/><em>Desafío:</em> Falta de razonamiento simbólico robusto y dificultad de transferencia entre dominios.
          </li>
          <li>
            <strong>Híbridos simbólico + conexionistas:</strong> Combinar redes neuronales con razonamiento lógico formal. Ejemplo: un sistema que aprende patrones visuales mediante deep learning y aplica reglas lógicas explícitas para el razonamiento.
            <br/><em>Ventaja:</em> Mayor interpretabilidad y robustez fuera de la distribución de entrenamiento.
            <br/><em>Desafío:</em> Integración efectiva entre los dos paradigmas, que tienen representaciones y mecanismos muy distintos.
          </li>
          <li>
            <strong>Neuromórficos:</strong> Hardware y algoritmos inspirados directamente en la arquitectura del cerebro biológico (Intel Loihi, IBM NorthPole).
            <br/><em>Ventaja:</em> Modelo más realista de la cognición humana, con potencial para eficiencia energética radical.
            <br/><em>Desafío:</em> El cerebro humano es extremadamente complejo; replicarlo fielmente implica desafíos técnicos aún no resueltos.
          </li>
        </ul>

        <h4>Desafíos técnicos para la AGI</h4>
        <ul>
          <li><strong>Transferencia de aprendizaje:</strong> Los sistemas actuales no generalizan bien fuera de su distribución de entrenamiento. La AGI necesita aplicar lo aprendido en un dominio a problemas de otro.</li>
          <li><strong>Escalabilidad y eficiencia:</strong> El scaling actual tiene rendimientos decrecientes en razonamiento complejo. Entrenar y operar una AGI requeriría recursos computacionales y energéticos sin precedentes.</li>
          <li><strong>Comprensión del contexto del mundo real:</strong> Los LLMs realizan predicción estadística sofisticada, pero no "comprenden" genuinamente el contexto, las relaciones causales ni el mundo físico y social.</li>
        </ul>

        <h4>Riesgos de la AGI</h4>
        <ul>
          <li><strong>Control y alineación de objetivos:</strong> Una AGI mal diseñada o con objetivos incorrectamente especificados podría actuar de forma imprevista y potencialmente dañina. El problema de la alineación (alignment) es central en AI Safety.</li>
          <li><strong>Impacto en economía y empleo:</strong> Una AGI podría automatizar prácticamente todos los trabajos intelectuales, generando desigualdad económica masiva si los beneficios no se distribuyen adecuadamente.</li>
          <li><strong>Riesgos existenciales:</strong> Una AGI con capacidad de auto-mejora fuera de control humano podría superar rápidamente la inteligencia humana y actuar con objetivos incompatibles con el bienestar humano.</li>
        </ul>

        <h4>Beneficios potenciales de AGI</h4>
        <ul>
          <li><strong>Solución de problemas globales:</strong> Cambio climático, enfermedades, hambre, pobreza — problemas que superan la capacidad cognitiva humana colectiva.</li>
          <li><strong>Avances en ciencia y tecnología:</strong> Aceleración radical del descubrimiento científico en medicina, física, materiales y energía.</li>
          <li><strong>Mejora de la calidad de vida:</strong> Automatización que libera a los humanos de tareas repetitivas, peligrosas o indeseadas, con potencial de abundancia económica generalizada.</li>
        </ul>

        <h3>Agentic AI (IA Agéntica)</h3>
        <p>
          La <strong>Agentic AI</strong> es una IA capaz de actuar como un <strong>agente autónomo proactivo orientado a objetivos</strong>, tomando decisiones complejas de manera independiente y adaptándose a entornos cambiantes sin requerir instrucciones específicas en cada paso. Opera de forma proactiva: identifica oportunidades y desafíos por sí misma y ajusta sus acciones en tiempo real.
        </p>
        <p>
          Es importante distinguir: <strong>Agentic AI no es lo mismo que AGI</strong>. Representa un paso intermedio entre la IA actual (altamente dependiente de instrucciones específicas y procesos predefinidos) y una futura AGI (con comprensión y generalización humana completa). La IA agéntica puede ser muy capaz dentro de dominios específicos sin poseer inteligencia general.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 my-4">
          <p className="text-sm font-semibold text-slate-700 mb-2">Contraste clave:</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium text-slate-600 mb-1">IA actual (reactiva)</p>
              <p className="text-slate-500">Altamente dependiente de instrucciones específicas y procesos predefinidos. Responde cuando se le pregunta.</p>
            </div>
            <div>
              <p className="font-medium text-blue-700 mb-1">Agentic AI (proactiva)</p>
              <p className="text-slate-500">Identifica oportunidades y desafíos de forma autónoma. Actúa sin esperar instrucciones paso a paso.</p>
            </div>
          </div>
        </div>

        <h4>Características de la IA Agéntica</h4>
        <ul>
          <li><strong>Autonomía:</strong> Toman decisiones y realizan acciones sin instrucciones paso a paso.</li>
          <li><strong>Proactividad:</strong> Anticipan necesidades, identifican oportunidades y actúan sin ser explícitamente instruidas.</li>
          <li><strong>Orientación a objetivos:</strong> Persiguen metas a largo plazo, descomponiéndolas en sub-tareas y ajustando el plan según los resultados.</li>
          <li><strong>Uso de herramientas:</strong> Navegan por internet, ejecutan código, llaman APIs, leen y escriben archivos de forma autónoma.</li>
          <li><strong>Memoria y contexto:</strong> Mantienen contexto a largo plazo (memoria episódica, semántica, procedimental) para decisiones coherentes.</li>
          <li><strong>Adaptación en tiempo real:</strong> Ajustan acciones según el estado del entorno y los resultados obtenidos, sin intervención humana.</li>
        </ul>

        <h4>Ejemplos de sistemas agénticos</h4>
        <ul>
          <li><strong>AutoGPT:</strong> Primer agente popular que usa GPT-4 para descomponer y ejecutar tareas complejas de forma autónoma.</li>
          <li><strong>CrewAI:</strong> Framework para orquestar equipos de agentes con roles especializados que colaboran en tareas complejas.</li>
          <li><strong>Claude Computer Use (Anthropic):</strong> Agente que puede controlar un ordenador (navegar, hacer clic, escribir) como un humano.</li>
          <li><strong>Devin (Cognition):</strong> Agente de software que escribe, testea y despliega código de forma completamente autónoma.</li>
          <li><strong>OpenAI Operator:</strong> Agente para automatizar tareas en navegadores web (formularios, reservas, compras).</li>
        </ul>

        <h3>Computación Cuántica e IA (QAI)</h3>
        <p>
          La <strong>Computación Cuántica e IA (QAI)</strong> explora cómo los ordenadores cuánticos pueden acelerar y mejorar los algoritmos de aprendizaje automático.
        </p>

        <h4>Principios de la computación cuántica relevantes para IA</h4>
        <ul>
          <li><strong>Qubits:</strong> Unidades de información cuántica que pueden estar en superposición (0 y 1 simultáneamente), a diferencia de los bits clásicos.</li>
          <li><strong>Superposición:</strong> Un qubit puede representar múltiples estados a la vez, permitiendo procesar exponencialmente más información.</li>
          <li><strong>Entrelazamiento:</strong> Correlación cuántica entre qubits que permite paralelismo masivo.</li>
          <li><strong>Interferencia:</strong> Amplifica estados solución y cancela estados no solución.</li>
        </ul>

        <h4>Aplicaciones de QAI</h4>
        <ul>
          <li><strong>Optimización cuántica:</strong> Resolver problemas de optimización (rutas, carteras, scheduling) exponencialmente más rápido.</li>
          <li><strong>Quantum Machine Learning (QML):</strong> Algoritmos de ML en hardware cuántico (QSVM, Quantum PCA, Quantum Neural Networks).</li>
          <li><strong>Simulación molecular:</strong> Modelar sistemas químicos complejos para diseño de medicamentos y materiales.</li>
          <li><strong>Criptografía post-cuántica:</strong> Los ordenadores cuánticos romperán RSA; necesidad de nuevos algoritmos criptográficos.</li>
        </ul>

        <h4>Estado actual y perspectivas</h4>
        <p>
          Actualmente estamos en la era NISQ (Noisy Intermediate-Scale Quantum): ordenadores de 50-1000 qubits, pero con alta tasa de error. Empresas líderes: IBM Quantum (Eagle, Osprey), Google Quantum AI (Sycamore, Willow), IonQ, Quantinuum.
        </p>
        <p>
          <strong>Supremacía cuántica:</strong> Google demostró en 2019 que Sycamore realizó un cálculo específico en 200 segundos que tomaría 10.000 años a los mejores supercomputadores clásicos. En 2024, el procesador Willow resolvió un problema de referencia en 5 minutos que tomaría 10^25 años a supercomputadores clásicos.
        </p>
        <p>
          La computación cuántica práctica para IA general se estima aún a 10-20 años de distancia, pero el campo avanza rápidamente.
        </p>
      </article>

      <div className="flex justify-between mt-8">
        <Link href="/datos-no-estructurados/ud5" className="text-sm text-slate-500 hover:text-blue-600">← UD5: Redes GAN</Link>
        <div className="flex gap-3">
          <Link href="/datos-no-estructurados/ud6/test" className="text-sm bg-green-100 text-green-700 px-4 py-2 rounded-lg hover:bg-green-200 font-semibold">Test UD6</Link>
          <Link href="/datos-no-estructurados" className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold">Ver todas las UDs</Link>
        </div>
      </div>

    </div>
  );
}
