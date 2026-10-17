import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import {
  BusinessSection,
  CtaSection,
  EsgSection,
  ProblemSection,
  ProcessSection,
  PublicPrivateSection,
  SolutionSection,
} from "@/components/LandingSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PublicPrivateSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <EsgSection />
        <BusinessSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
