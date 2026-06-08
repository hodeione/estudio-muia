import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD2() {
  return (
    <TestPlaceholder
      udNum={2}
      udTitle="Modelos ARIMA y Metodología Box-Jenkins"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud2"
      nextTestHref="/datos-estructurados/ud3/test"
    />
  );
}
