import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD1() {
  return (
    <TestPlaceholder
      udNum={1}
      udTitle="Introducción a las Series Temporales"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud1"
      nextTestHref="/datos-estructurados/ud2/test"
    />
  );
}
