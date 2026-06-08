import InteractiveTest from "@/app/components/InteractiveTest";
import { ud6Questions } from "@/app/datos-estructurados/questions";

export default function TestUD6() {
  return (
    <InteractiveTest
      udNum={6}
      udTitle="Modelos GARCH y ARCH"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud6"
      nextTestHref="/datos-estructurados/ud7/test"
      questions={ud6Questions}
    />
  );
}
