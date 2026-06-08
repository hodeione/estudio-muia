import InteractiveTest from "@/app/components/InteractiveTest";
import { ud9Questions } from "@/app/datos-estructurados/questions";

export default function TestUD9() {
  return (
    <InteractiveTest
      udNum={9}
      udTitle="VaR y Expected Shortfall"
      backHref="/datos-estructurados"
      backLabel="Datos Estructurados"
      contentHref="/datos-estructurados/ud9"
      questions={ud9Questions}
    />
  );
}
