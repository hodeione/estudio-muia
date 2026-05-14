import Link from "next/link";

const uds = [
  {
    n: 1,
    title: "Fundamentos del Procesamiento del Lenguaje Natural",
    temas: ["Introducción a NLP y sus aplicaciones", "Representación del texto", "Modelos clásicos de NLP"],
  },
  {
    n: 2,
    title: "Modelos Profundos y Redes Neuronales para NLP",
    temas: ["Redes Neuronales Recurrentes (RNN) y variantes", "Redes basadas en atención y modelos Transformer", "Generación y comprensión con modelos grandes", "Clustering y Embeddings en NLP"],
  },
  {
    n: 3,
    title: "Aplicaciones prácticas y avances en NLP",
    temas: ["Frameworks y Cloud", "Infraestructura y Hardware", "Aplicaciones NLP en la vida real", "Futuro del NLP", "Extensión de conceptos (LangChain, Agentes...)"],
  },
  {
    n: 4,
    title: "Computer Vision",
    temas: ["Introducción a Computer Vision", "Redes Neuronales Convolucionales", "Arquitecturas CNN", "Data Augmentation", "Transfer Learning", "Vision Transformers (ViT)"],
  },
  {
    n: 5,
    title: "Redes GAN y Stable Diffusion",
    temas: ["Redes Generativas", "GAN: fundamentos, variantes y desafíos", "Stable Diffusion"],
  },
  {
    n: 6,
    title: "Impacto y futuro de la IA Generativa",
    temas: ["Impacto ético y regulatorio de la IA Generativa", "Futuro de la IA: KAN, AGI, Agentic AI, Computación Cuántica"],
  },
];

export default function DatosNoEstructurados() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <Link href="/" className="text-sm text-blue-600 hover:underline">← Inicio</Link>
        <h1 className="text-3xl font-bold text-[#1e3a5f] mt-2">Datos No Estructurados</h1>
        <p className="text-slate-500 mt-1">Áreas de aplicación y casos de uso en entornos con datos no estructurados</p>
      </div>

      <div className="space-y-4">
        {uds.map((ud) => (
          <div key={ud.n} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                {ud.n}
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-[#1e3a5f] text-base mb-2">UD{ud.n}: {ud.title}</h2>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ud.temas.map((t, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/datos-no-estructurados/ud${ud.n}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Estudiar contenido
                  </Link>
                  <Link
                    href={`/datos-no-estructurados/ud${ud.n}/test`}
                    className="border border-blue-200 text-blue-700 hover:bg-blue-50 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    Test
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
