import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD3() {
  return (
    <TestPlaceholder
      udNum={3}
      udTitle="Aplicaciones prácticas y avances en NLP"
      backHref="/datos-no-estructurados"
      contentHref="/datos-no-estructurados/ud3"
      nextTestHref="/datos-no-estructurados/ud4/test"
    />
  );
}
