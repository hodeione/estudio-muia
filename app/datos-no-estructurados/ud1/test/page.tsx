import InteractiveTest from "@/app/components/InteractiveTest";
import { ud1Questions } from "@/app/datos-no-estructurados/questions";

export default function TestUD1() {
  return (
    <InteractiveTest
      udNum={1}
      udTitle="Fundamentos del Procesamiento del Lenguaje Natural"
      backHref="/datos-no-estructurados"
      backLabel="Datos No Estructurados"
      contentHref="/datos-no-estructurados/ud1"
      nextTestHref="/datos-no-estructurados/ud2/test"
      questions={ud1Questions}
    />
  );
}
