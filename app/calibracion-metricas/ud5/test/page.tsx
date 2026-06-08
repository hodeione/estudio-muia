import InteractiveTest from "@/app/components/InteractiveTest";
import { ud5Questions } from "@/app/calibracion-metricas/questions";

export default function TestUD5() {
  return (
    <InteractiveTest
      udNum={5}
      udTitle="Métricas de Rendimiento de los Modelos de Clasificación"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud5"
      nextTestHref="/calibracion-metricas/ud6/test"
      questions={ud5Questions}
    />
  );
}
