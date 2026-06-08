import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD3() {
  return (
    <TestPlaceholder
      udNum={3}
      udTitle="Introducción a las Métricas de Rendimiento"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud3"
      nextTestHref="/calibracion-metricas/ud4/test"
    />
  );
}
