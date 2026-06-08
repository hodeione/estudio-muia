import InteractiveTest from "@/app/components/InteractiveTest";
import { ud2Questions } from "@/app/calibracion-metricas/questions";

export default function TestUD2() {
  return (
    <InteractiveTest
      udNum={2}
      udTitle="Estabilidad y Sesgos"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud2"
      nextTestHref="/calibracion-metricas/ud3/test"
      questions={ud2Questions}
    />
  );
}
