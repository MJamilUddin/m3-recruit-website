import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Users, Shield, BarChart3, CheckCircle, Star } from "lucide-react";

export function FeaturesSection() {
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
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 - Blue Theme */}
          <Card className="border-0 shadow-lg w-full">
            <CardHeader className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Automated Workflows</CardTitle>
              <CardDescription className="text-base">
                Create custom workflows that handle repetitive tasks automatically,
                from initial screening to final interviews.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Column 2 - Purple Theme */}
          <Card className="border-0 shadow-lg w-full">
            <CardHeader className="p-6">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-purple-600 mb-3 md:mb-4">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Candidate Management</CardTitle>
              <CardDescription className="text-base">
                Centralized candidate database with advanced filtering,
                scoring, and collaboration tools for your team.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Column 3 - Indigo Theme */}
          <Card className="border-0 shadow-lg w-full">
            <CardHeader className="p-6">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-indigo-600 mb-3 md:mb-4">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Compliance & Security</CardTitle>
              <CardDescription className="text-base">
                Enterprise-grade security with GDPR compliance,
                data encryption, and audit trails for all activities.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Column 1 - Blue Theme */}
          <Card className="border-0 shadow-lg w-full">
            <CardHeader className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 mb-4">
                <BarChart3 className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Analytics & Insights</CardTitle>
              <CardDescription className="text-base">
                Comprehensive dashboards and reports to track recruitment
                metrics, time-to-hire, and team performance.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Column 2 - Purple Theme */}
          <Card className="border-0 shadow-lg w-full">
            <CardHeader className="p-6">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-purple-600 mb-3 md:mb-4">
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xl">Integration Ready</CardTitle>
              <CardDescription className="text-base">
                Connect with your favorite ATS, HR systems, and job boards
                through our extensive API and integration library.
              </CardDescription>
            </CardHeader>
          </Card>
          {/* Column 3 - Indigo Theme */}
          <Card className="border-0 shadow-lg w-full">
            <CardHeader className="p-6">
              <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-indigo-600 mb-3 md:mb-4">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xl">AI-Powered Matching</CardTitle>
              <CardDescription className="text-base">
                Leverage AI to match candidates with job requirements,
                predict candidate success, and optimize your hiring process.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
