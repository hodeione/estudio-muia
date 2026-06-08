import InteractiveTest from "@/app/components/InteractiveTest";
import { ud1Questions } from "@/app/calibracion-metricas/questions";

export default function TestUD1() {
  return (
    <InteractiveTest
      udNum={1}
      udTitle="XAI. Definición, Conceptos y Propiedades"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud1"
      nextTestHref="/calibracion-metricas/ud2/test"
      questions={ud1Questions}
    />
  );
}
