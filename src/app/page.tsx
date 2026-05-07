import Hero from "@/components/home/Hero";
import Marquee from "@/components/Marquee";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import AreaSection from "@/components/home/AreaSection";
import CtaSection from "@/components/home/CtaSection";
import QuoteSection from "@/components/home/QuoteSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <StatsSection />
      <AboutSection />
      <TestimonialsSection />
      <AreaSection />
      <CtaSection />
      <QuoteSection />
    </>
  );
}
