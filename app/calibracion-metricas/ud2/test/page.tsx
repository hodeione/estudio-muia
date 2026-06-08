import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD2() {
  return (
    <TestPlaceholder
      udNum={2}
      udTitle="Estabilidad y Sesgos"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud2"
      nextTestHref="/calibracion-metricas/ud3/test"
    />
  );
}
