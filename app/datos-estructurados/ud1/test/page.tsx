import InteractiveTest from "@/app/components/InteractiveTest";
import { ud1Questions } from "@/app/datos-estructurados/questions";

export default function TestUD1() {
  return (
    <InteractiveTest
      udNum={1}
      udTitle="Introducción a las Series Temporales"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud1"
      nextTestHref="/datos-estructurados/ud2/test"
      questions={ud1Questions}
    />
  );
}
