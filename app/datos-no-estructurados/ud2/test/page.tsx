import InteractiveTest from "@/app/components/InteractiveTest";
import { ud2Questions } from "@/app/datos-no-estructurados/questions";

export default function TestUD2() {
  return (
    <InteractiveTest
      udNum={2}
      udTitle="Modelos Profundos y Redes Neuronales para NLP"
      backHref="/datos-no-estructurados"
      backLabel="Datos No Estructurados"
      contentHref="/datos-no-estructurados/ud2"
      nextTestHref="/datos-no-estructurados/ud3/test"
      questions={ud2Questions}
    />
  );
}
