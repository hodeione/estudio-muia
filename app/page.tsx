import Link from "next/link";

const subjects = [
  {
    id: "datos-no-estructurados",
    title: "Datos No Estructurados",
    subtitle: "Áreas de aplicación y casos de uso",
    status: "active",
    color: "bg-blue-600",
    uds: 6,
    description: "NLP, Computer Vision, Redes Generativas e Impacto de la IA Generativa",
  },
  {
    id: "datos-estructurados",
    title: "Datos Estructurados",
    subtitle: "Próximamente",
    status: "soon",
    color: "bg-slate-400",
    uds: 0,
    description: "Contenido en preparación",
  },
  {
    id: "calibracion-metricas",
    title: "Calibración y Métricas",
    subtitle: "Próximamente",
    status: "soon",
    color: "bg-slate-400",
    uds: 0,
    description: "Contenido en preparación",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1e3a5f] mb-3">Plataforma de Estudio</h1>
        <p className="text-slate-500 text-lg">Máster en Inteligencia Artificial · Universidad Alfonso X el Sabio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div
            key={subject.id}
            className={`rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col ${subject.status === "soon" ? "opacity-70" : ""}`}
          >
            <div className={`${subject.color} h-2`} />
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-1">{subject.title}</h2>
              <p className="text-sm text-slate-500 mb-3">{subject.subtitle}</p>
              <p className="text-sm text-slate-600 mb-5 flex-1">{subject.description}</p>
              {subject.status === "active" ? (
                <Link
                  href={`/${subject.id}`}
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors"
                >
                  Estudiar ({subject.uds} UDs)
                </Link>
              ) : (
                <button
                  disabled
                  className="block w-full text-center bg-slate-200 text-slate-400 font-semibold py-2.5 px-4 rounded-lg cursor-not-allowed"
                >
                  Disponible próximamente
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Acceso rápido — Datos No Estructurados</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <Link
              key={n}
              href={`/datos-no-estructurados/ud${n}`}
              className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-blue-300 hover:bg-blue-50 transition-all group"
            >
              <span className="bg-blue-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                {n}
              </span>
              <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">
                {n === 1 && "Fundamentos NLP"}
                {n === 2 && "Modelos Profundos"}
                {n === 3 && "Aplicaciones NLP"}
                {n === 4 && "Computer Vision"}
                {n === 5 && "Redes GAN"}
                {n === 6 && "Futuro GenAI"}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
