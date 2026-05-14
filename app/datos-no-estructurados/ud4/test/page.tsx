import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD4() {
  return (
    <TestPlaceholder
      udNum={4}
      udTitle="Computer Vision"
      backHref="/datos-no-estructurados"
      contentHref="/datos-no-estructurados/ud4"
      nextTestHref="/datos-no-estructurados/ud5/test"
    />
  );
}
