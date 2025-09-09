import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-12 pb-8 lg:pt-16 lg:pb-16">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 border-purple-200">
            🚀 Now in Beta
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight lg:text-6xl mb-6">
            Automate Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Recruitment</span> Workflows
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Save 15+ hours weekly with AI-powered workflows. Connect 300+ integration tools and automate
            your entire recruitment process from sourcing to onboarding.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 bg-purple-600 hover:bg-purple-700">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 border-purple-300 text-purple-600 hover:bg-purple-50">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
