"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkflowExamplesSection } from "@/components/sections/WorkflowExamplesSection";
import { CrmIntegrationShowcase } from "@/components/sections/CrmIntegrationShowcase";
import { InteractiveWorkflowSection } from "@/components/sections/InteractiveWorkflowSection";
import { IntegrationToolsShowcase } from "@/components/sections/IntegrationToolsShowcase";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";
import { AnimatedSection, AnimatedFeatureGrid } from "@/components/ScrollAnimations";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Subtle gradient blobs positioned strategically */}
        {/* Hero section blob */}
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-br from-purple-800/20 to-blue-700/15 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>

        {/* Additional header-style blobs for visual continuity */}
        <div className="absolute top-10 -left-32 w-[400px] h-[300px] bg-gradient-to-br from-purple-800/15 to-indigo-700/10 rounded-full blur-[80px]"></div>
        <div className="absolute top-[30vh] -right-20 w-[350px] h-[350px] bg-gradient-to-br from-blue-700/15 to-purple-800/10 rounded-full blur-[70px]"></div>

        {/* Workflow section blobs */}
        <div className="absolute top-[80vh] -left-20 w-[500px] h-[500px] bg-gradient-to-br from-indigo-700/25 to-purple-800/20 rounded-full blur-[100px]"></div>
        <div className="absolute top-[90vh] right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-700/20 to-cyan-700/15 rounded-full blur-[80px] translate-x-1/4"></div>

        {/* Mid-page accent blobs */}
        <div className="absolute top-[120vh] left-1/3 w-[300px] h-[300px] bg-gradient-to-br from-purple-800/18 to-violet-700/12 rounded-full blur-[60px]"></div>
        <div className="absolute top-[140vh] right-1/4 w-[250px] h-[250px] bg-gradient-to-br from-indigo-700/20 to-blue-700/15 rounded-full blur-[50px]"></div>

        {/* Features section accent */}
        <div className="absolute top-[160vh] left-1/2 w-[450px] h-[450px] bg-gradient-to-br from-purple-800/20 to-indigo-700/15 rounded-full blur-[90px] -translate-x-1/2"></div>

        {/* Lower section blobs */}
        <div className="absolute top-[200vh] -left-16 w-[400px] h-[400px] bg-gradient-to-br from-violet-700/16 to-purple-800/12 rounded-full blur-[70px]"></div>
        <div className="absolute top-[220vh] right-1/5 w-[350px] h-[350px] bg-gradient-to-br from-blue-700/18 to-indigo-700/14 rounded-full blur-[60px]"></div>

        {/* Bottom section subtle glow */}
        <div className="absolute bottom-[20vh] right-1/4 w-[350px] h-[350px] bg-gradient-to-br from-purple-800/15 to-indigo-700/10 rounded-full blur-[80px]"></div>
        
        {/* Visible grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}></div>
        
        {/* Light gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90"></div>
      </div>

      <Navbar />

      <HeroSection />

      <AnimatedSection className="py-12 md:py-20">
        <WorkflowExamplesSection />
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <CrmIntegrationShowcase />
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <InteractiveWorkflowSection />
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <IntegrationToolsShowcase />
      </AnimatedSection>

      <AnimatedSection className="py-12 md:py-20">
        <FeaturesSection />
      </AnimatedSection>

      <AnimatedSection className="py-20">
        <CtaSection />
      </AnimatedSection>

      <Footer />
    </div>
  );
}