import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedButton } from "@/components/ScrollAnimations";

export function CtaSection() {
  return (
    <section className="py-20">
      <div className="container max-w-screen-xl px-4 mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            Ready to Transform Your Recruitment Process?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of recruitment teams already using M3 Recruit to scale their hiring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <AnimatedButton className="h-10 px-6 text-base bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </AnimatedButton>
            </Link>
            <Link href="/contact">
              <AnimatedButton className="h-10 px-6 text-base border border-primary text-primary hover:bg-primary/5 rounded-lg">
                Contact Sales
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
