import InteractiveTest from "@/app/components/InteractiveTest";
import { ud3Questions } from "@/app/datos-estructurados/questions";

export default function TestUD3() {
  return (
    <InteractiveTest
      udNum={3}
      udTitle="Modelos SARIMA"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud3"
      nextTestHref="/datos-estructurados/ud4/test"
      questions={ud3Questions}
    />
  );
}
