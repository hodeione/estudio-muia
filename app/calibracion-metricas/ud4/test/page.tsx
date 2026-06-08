import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD4() {
  return (
    <TestPlaceholder
      udNum={4}
      udTitle="Métricas de Rendimiento de los Modelos de Regresión"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud4"
      nextTestHref="/calibracion-metricas/ud5/test"
    />
  );
}
