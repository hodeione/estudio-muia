import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD1() {
  return (
    <TestPlaceholder
      udNum={1}
      udTitle="XAI. Definición, Conceptos y Propiedades"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud1"
      nextTestHref="/calibracion-metricas/ud2/test"
    />
  );
}
