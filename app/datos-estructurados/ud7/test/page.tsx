import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD7() {
  return (
    <TestPlaceholder
      udNum={7}
      udTitle="Redes Neuronales y Aprendizaje Profundo"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud7"
      nextTestHref="/datos-estructurados/ud8/test"
    />
  );
}
