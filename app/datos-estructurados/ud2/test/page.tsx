import InteractiveTest from "@/app/components/InteractiveTest";
import { ud2Questions } from "@/app/datos-estructurados/questions";

export default function TestUD2() {
  return (
    <InteractiveTest
      udNum={2}
      udTitle="Modelos ARIMA y Metodología Box-Jenkins"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud2"
      nextTestHref="/datos-estructurados/ud3/test"
      questions={ud2Questions}
    />
  );
}
