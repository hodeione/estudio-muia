import TestPlaceholder from "@/app/components/TestPlaceholder";

export default function TestUD5() {
  return (
    <TestPlaceholder
      udNum={5}
      udTitle="Redes GAN y Stable Diffusion"
      backHref="/datos-no-estructurados"
      contentHref="/datos-no-estructurados/ud5"
      nextTestHref="/datos-no-estructurados/ud6/test"
    />
  );
}
