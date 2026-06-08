import InteractiveTest from "@/app/components/InteractiveTest";
import { ud6Questions } from "@/app/calibracion-metricas/questions";

export default function TestUD6() {
  return (
    <InteractiveTest
      udNum={6}
      udTitle="Datos Balanceados"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud6"
      questions={ud6Questions}
    />
  );
}
