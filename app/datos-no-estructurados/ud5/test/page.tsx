import InteractiveTest from "@/app/components/InteractiveTest";
import { ud5Questions } from "@/app/datos-no-estructurados/questions";

export default function TestUD5() {
  return (
    <InteractiveTest
      udNum={5}
      udTitle="Redes GAN y Stable Diffusion"
      backHref="/datos-no-estructurados"
      backLabel="Datos No Estructurados"
      contentHref="/datos-no-estructurados/ud5"
      nextTestHref="/datos-no-estructurados/ud6/test"
      questions={ud5Questions}
    />
  );
}
