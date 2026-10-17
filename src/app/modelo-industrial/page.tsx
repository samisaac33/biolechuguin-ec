import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FlowSummary } from "@/components/industrial/FlowSummary";
import { IndustrialHero } from "@/components/industrial/IndustrialHero";
import { PlantAreasDiagram } from "@/components/industrial/PlantAreasDiagram";
import { ProcessTimeline } from "@/components/industrial/ProcessTimeline";

export const metadata: Metadata = {
  title: "Modelo industrial (referencia) | BioLechuguín EC",
  description:
    "Flujo de planta, áreas y equipamiento de referencia para valorización de lechuguín en productos compostables.",
};

export default function ModeloIndustrialPage() {
  return (
    <>
      <Header />
      <main>
        <IndustrialHero />
        <FlowSummary />
        <PlantAreasDiagram />
        <ProcessTimeline />
      </main>
      <Footer />
    </>
  );
}
