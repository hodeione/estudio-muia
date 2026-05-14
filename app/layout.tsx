import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plataforma de Estudio - MUIA UAX",
  description: "Plataforma de estudio para el Máster en IA de la UAX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50">
        <header className="bg-[#1e3a5f] text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <div className="bg-white text-[#1e3a5f] font-bold text-lg px-2 py-1 rounded">UAX</div>
              <span className="font-semibold text-base hidden sm:block">Plataforma de Estudio · MUIA</span>
            </Link>
            <nav className="flex items-center gap-1 text-sm">
              <Link href="/" className="px-3 py-1.5 rounded hover:bg-white/10 transition-colors">
                Inicio
              </Link>
              <Link href="/datos-no-estructurados" className="px-3 py-1.5 rounded hover:bg-white/10 transition-colors">
                Datos No Estructurados
              </Link>
              <Link href="/datos-estructurados" className="px-3 py-1.5 rounded hover:bg-white/10 transition-colors">
                Datos Estructurados
              </Link>
              <Link href="/calibracion-metricas" className="px-3 py-1.5 rounded hover:bg-white/10 transition-colors">
                Calibración y Métricas
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-[#1e3a5f] text-white/60 text-center text-xs py-3 mt-8">
          © Universidad Alfonso X el Sabio · MUIA · Material de estudio
        </footer>
      </body>
    </html>
  );
}
