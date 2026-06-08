import InteractiveTest from "@/app/components/InteractiveTest";
import { ud4Questions } from "@/app/datos-estructurados/questions";

export default function TestUD4() {
  return (
    <InteractiveTest
      udNum={4}
      udTitle="Regresión con Errores de Series Temporales"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud4"
      nextTestHref="/datos-estructurados/ud5/test"
      questions={ud4Questions}
    />
  );
}
