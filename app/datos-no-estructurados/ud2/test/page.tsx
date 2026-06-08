import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD2() {
  return (
    <TestPlaceholder
      udNum={2}
      udTitle="Modelos Profundos y Redes Neuronales para NLP"
      backHref="/datos-no-estructurados"
      backLabel="Datos No Estructurados"
      contentHref="/datos-no-estructurados/ud2"
      nextTestHref="/datos-no-estructurados/ud3/test"
    />
  );
}
