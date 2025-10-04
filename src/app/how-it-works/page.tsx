import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Settings, Rocket, TrendingUp, ArrowRight, Clock, Zap, Shield } from "lucide-react";
import Link from "next/link";

const stages = [
  {
    id: 1,
    title: "Onboarding & Setup",
    description: "Get started with a personalized onboarding session where our team helps configure your account and workflows.",
    icon: Users,
    color: "bg-indigo-600",
    details: [
      "Account setup and configuration",
      "Team member invitations",
      "Workflow template selection",
      "Integration setup assistance"
    ],
    duration: "1-2 hours"
  },
  {
    id: 2,
    title: "Workflow Configuration",
    description: "Customize and build recruitment workflows that match your specific hiring processes and requirements.",
    icon: Settings,
    color: "bg-purple-800",
    details: [
      "Custom workflow creation",
      "Integration connections",
      "Automation rule setup",
      "Testing and validation"
    ],
    duration: "2-4 hours"
  },
  {
    id: 3,
    title: "Training & Optimization",
    description: "Comprehensive training for your team and optimization of workflows for maximum efficiency.",
    icon: TrendingUp,
    color: "bg-cyan-600",
    details: [
      "Team training sessions",
      "Performance optimization",
      "Best practices implementation",
      "Analytics setup"
    ],
    duration: "1-3 hours"
  },
  {
    id: 4,
    title: "Go-Live & Support",
    description: "Launch your automated recruitment system with ongoing support and monitoring.",
    icon: Rocket,
    color: "bg-emerald-600",
    details: [
      "System activation",
      "24/7 monitoring",
      "Performance tracking",
      "Continuous optimization"
    ],
    duration: "Ongoing"
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50/30 via-white to-purple-50/20">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl mb-6">
              How It Works
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              From onboarding to full implementation, our streamlined process ensures you&apos;re up and running with
              automated recruitment workflows in no time.
            </p>
          </div>
        </div>
      </section>

      {/* Process Diagram */}
      <section className="py-20">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-4">
              Implementation Timeline
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto">
              Our proven 4-stage process takes you from setup to full automation in just days, not weeks.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-emerald-200 transform -translate-y-1/2"></div>

            {/* Timeline Items */}
            <div className="relative flex justify-between items-center">
              {stages.map((stage, index) => {
                const IconComponent = stage.icon;
                return (
                  <div key={stage.id} className="flex flex-col items-center max-w-xs">
                    {/* Timeline Dot */}
                    <div className={`w-16 h-16 ${stage.color} rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Card */}
                    <Card className="w-full border-0 shadow-lg">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-purple-800 bg-purple-100 px-2 py-1 rounded">
                            Stage {stage.id}
                          </span>
                          <span className="text-sm text-slate-500 flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {stage.duration}
                          </span>
                        </div>
                        <CardTitle className="text-lg">{stage.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {stage.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <ul className="space-y-2">
                          {stage.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Arrow (except for last item) */}
                    {index < stages.length - 1 && (
                      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-20">
                        <ArrowRight className="h-6 w-6 text-purple-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {stages.map((stage, index) => {
              const IconComponent = stage.icon;
              return (
                <div key={stage.id} className="relative">
                  {/* Timeline Line (except for first item) */}
                  {index > 0 && (
                    <div className="absolute -top-4 left-8 w-0.5 h-8 bg-purple-200"></div>
                  )}

                  <div className="flex gap-4">
                    {/* Timeline Dot */}
                    <div className={`w-12 h-12 ${stage.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-semibold text-purple-800 bg-purple-100 px-2 py-1 rounded">
                          Stage {stage.id}
                        </span>
                        <span className="text-sm text-slate-500 flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {stage.duration}
                        </span>
                      </div>

                      <Card className="border-0 shadow-lg">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">{stage.title}</CardTitle>
                          <CardDescription className="text-sm">
                            {stage.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <ul className="space-y-2">
                            {stage.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                                <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Implementation Process?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our streamlined approach ensures you get maximum value from M3 Recruit with minimal disruption to your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Rapid Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get up and running in days, not weeks. Our efficient process minimizes downtime and maximizes productivity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-800" />
                </div>
                <CardTitle className="text-lg">Expert Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Work with recruitment automation specialists who understand your unique challenges and requirements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Proven Results</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Join hundreds of companies that have successfully automated their recruitment processes with our platform.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Ongoing Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Continuous monitoring, optimization, and support ensure your workflows deliver maximum ROI over time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container max-w-screen-xl px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Join the growing number of recruitment teams that have transformed their hiring process with M3 Recruit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 bg-purple-800 hover:bg-purple-900">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 border-purple-800 text-purple-800 hover:bg-purple-50">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
