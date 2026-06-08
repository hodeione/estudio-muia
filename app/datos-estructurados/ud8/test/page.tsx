import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD8() {
  return (
    <TestPlaceholder
      udNum={8}
      udTitle="Sistemas Recomendadores"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud8"
      nextTestHref="/datos-estructurados/ud9/test"
    />
  );
}
