import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Shield, BarChart3, CheckCircle, Star } from "lucide-react";
import { AnimatedCard, AnimatedFeatureGrid } from "@/components/ScrollAnimations";

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Create custom workflows that handle repetitive tasks automatically, from initial screening to final interviews.",
      color: "indigo",
      bgColor: "bg-indigo-600"
    },
    {
      icon: Users,
      title: "Candidate Management",
      description: "Centralized candidate database with advanced filtering, scoring, and collaboration tools for your team.",
      color: "purple",
      bgColor: "bg-purple-800"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Enterprise-grade security with GDPR compliance, data encryption, and audit trails for all activities.",
      color: "blue",
      bgColor: "bg-blue-700"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive dashboards and reports to track recruitment metrics, time-to-hire, and team performance.",
      color: "cyan",
      bgColor: "bg-cyan-600"
    },
    {
      icon: CheckCircle,
      title: "Integration Ready",
      description: "Connect with your favorite ATS, HR systems, and job boards through our extensive API and integration library.",
      color: "purple",
      bgColor: "bg-purple-800"
    },
    {
      icon: Star,
      title: "AI-Powered Matching",
      description: "Leverage AI to match candidates with job requirements, predict candidate success, and optimize your hiring process.",
      color: "emerald",
      bgColor: "bg-emerald-600"
    }
  ];

  return (
    <section id="features" className="py-12 md:py-20 bg-gradient-to-br from-purple-50/30 via-background to-purple-50/20">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="mx-auto text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Everything You Need to Scale Recruitment
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Powerful features designed to transform your recruitment process
          </p>
        </div>
        <AnimatedFeatureGrid>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1}>
                <Card className="border-0 shadow-lg w-full h-full">
                  <CardHeader className="p-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${feature.bgColor} mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedCard>
            );
          })}
        </AnimatedFeatureGrid>
      </div>
    </section>
  );
}
