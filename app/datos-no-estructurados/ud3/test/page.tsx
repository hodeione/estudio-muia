import InteractiveTest from "@/app/components/InteractiveTest";
import { ud3Questions } from "@/app/datos-no-estructurados/questions";

export default function TestUD3() {
  return (
    <InteractiveTest
      udNum={3}
      udTitle="Aplicaciones prácticas y avances en NLP"
      backHref="/datos-no-estructurados"
      backLabel="Datos No Estructurados"
      contentHref="/datos-no-estructurados/ud3"
      nextTestHref="/datos-no-estructurados/ud4/test"
      questions={ud3Questions}
    />
  );
}
