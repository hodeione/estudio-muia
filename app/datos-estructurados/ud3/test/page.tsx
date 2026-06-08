import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD3() {
  return (
    <TestPlaceholder
      udNum={3}
      udTitle="Modelos SARIMA"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud3"
      nextTestHref="/datos-estructurados/ud4/test"
    />
  );
}
