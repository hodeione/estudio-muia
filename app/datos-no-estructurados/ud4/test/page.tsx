import InteractiveTest from "@/app/components/InteractiveTest";
import { ud4Questions } from "@/app/datos-no-estructurados/questions";

export default function TestUD4() {
  return (
    <InteractiveTest
      udNum={4}
      udTitle="Computer Vision"
      backHref="/datos-no-estructurados"
      backLabel="Datos No Estructurados"
      contentHref="/datos-no-estructurados/ud4"
      nextTestHref="/datos-no-estructurados/ud5/test"
      questions={ud4Questions}
    />
  );
}
