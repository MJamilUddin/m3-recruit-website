import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkflowExamplesSection } from "@/components/sections/WorkflowExamplesSection";
import { CrmIntegrationShowcase } from "@/components/sections/CrmIntegrationShowcase";
import { InteractiveWorkflowSection } from "@/components/sections/InteractiveWorkflowSection";
import { IntegrationToolsShowcase } from "@/components/sections/IntegrationToolsShowcase";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />
      <WorkflowExamplesSection />
      <CrmIntegrationShowcase />
      <InteractiveWorkflowSection />
      <IntegrationToolsShowcase />
      <FeaturesSection />
      <CtaSection />
      <Footer />
    </div>
  );
}