import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD6() {
  return (
    <TestPlaceholder
      udNum={6}
      udTitle="Datos Balanceados"
      backHref="/calibracion-metricas"
      backLabel="Calibración y Métricas"
      contentHref="/calibracion-metricas/ud6"
    />
  );
}
