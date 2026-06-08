import InteractiveTest from "@/app/components/InteractiveTest";
import { ud8Questions } from "@/app/datos-estructurados/questions";

export default function TestUD8() {
  return (
    <InteractiveTest
      udNum={8}
      udTitle="Sistemas Recomendadores"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud8"
      nextTestHref="/datos-estructurados/ud9/test"
      questions={ud8Questions}
    />
  );
}
