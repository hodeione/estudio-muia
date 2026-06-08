import InteractiveTest from "@/app/components/InteractiveTest";
import { ud5Questions } from "@/app/datos-estructurados/questions";

export default function TestUD5() {
  return (
    <InteractiveTest
      udNum={5}
      udTitle="Facebook Prophet"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud5"
      nextTestHref="/datos-estructurados/ud6/test"
      questions={ud5Questions}
    />
  );
}
