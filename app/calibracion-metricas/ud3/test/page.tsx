import InteractiveTest from "@/app/components/InteractiveTest";
import { ud3Questions } from "@/app/calibracion-metricas/questions";

export default function TestUD3() {
  return (
    <InteractiveTest
      udNum={3}
      udTitle="Introducción a las Métricas de Rendimiento"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud3"
      nextTestHref="/calibracion-metricas/ud4/test"
      questions={ud3Questions}
    />
  );
}
