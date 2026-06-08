import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD4() {
  return (
    <TestPlaceholder
      udNum={4}
      udTitle="Regresión con Errores de Series Temporales"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud4"
      nextTestHref="/datos-estructurados/ud5/test"
    />
  );
}
