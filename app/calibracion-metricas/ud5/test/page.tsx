import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD5() {
  return (
    <TestPlaceholder
      udNum={5}
      udTitle="Métricas de Rendimiento de los Modelos de Clasificación"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud5"
      nextTestHref="/calibracion-metricas/ud6/test"
    />
  );
}
