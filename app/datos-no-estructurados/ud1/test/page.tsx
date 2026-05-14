import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD1() {
  return (
    <TestPlaceholder
      udNum={1}
      udTitle="Fundamentos del Procesamiento del Lenguaje Natural"
      backHref="/datos-no-estructurados"
      contentHref="/datos-no-estructurados/ud1"
      nextTestHref="/datos-no-estructurados/ud2/test"
    />
  );
}
