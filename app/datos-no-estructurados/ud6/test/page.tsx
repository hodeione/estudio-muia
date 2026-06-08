import InteractiveTest from "@/app/components/InteractiveTest";
import { ud6Questions } from "@/app/datos-no-estructurados/questions";

export default function TestUD6() {
  return (
    <InteractiveTest
      udNum={6}
      udTitle="Impacto y futuro de la IA Generativa"
      backHref="/datos-no-estructurados"
      backLabel="Datos No Estructurados"
      contentHref="/datos-no-estructurados/ud6"
      questions={ud6Questions}
    />
  );
}
