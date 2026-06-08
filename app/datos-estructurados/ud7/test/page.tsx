import InteractiveTest from "@/app/components/InteractiveTest";
import { ud7Questions } from "@/app/datos-estructurados/questions";

export default function TestUD7() {
  return (
    <InteractiveTest
      udNum={7}
      udTitle="Redes Neuronales y Aprendizaje Profundo"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud7"
      nextTestHref="/datos-estructurados/ud8/test"
      questions={ud7Questions}
    />
  );
}
