import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD5() {
  return (
    <TestPlaceholder
      udNum={5}
      udTitle="Facebook Prophet"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud5"
      nextTestHref="/datos-estructurados/ud6/test"
    />
  );
}
