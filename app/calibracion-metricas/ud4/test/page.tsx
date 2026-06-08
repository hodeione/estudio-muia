import InteractiveTest from "@/app/components/InteractiveTest";
import { ud4Questions } from "@/app/calibracion-metricas/questions";

export default function TestUD4() {
  return (
    <InteractiveTest
      udNum={4}
      udTitle="Métricas de Rendimiento de los Modelos de Regresión"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud4"
      nextTestHref="/calibracion-metricas/ud5/test"
      questions={ud4Questions}
    />
  );
}
