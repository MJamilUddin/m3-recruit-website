"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Users, TrendingUp, Target } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HeroSection() {
  const { scrollYProgress } = useScroll();

  // Scroll-based transforms for parallax effect
  const icon1Y = useTransform(scrollYProgress, [0, 0.3, 1], [0, -20, -100]);
  const icon1X = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, -200]);

  const icon2Y = useTransform(scrollYProgress, [0, 0.3, 1], [0, 15, 80]);
  const icon2X = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 150]);

  const icon3Y = useTransform(scrollYProgress, [0, 0.3, 1], [0, -15, -120]);
  const icon3X = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, 180]);

  const icon4Y = useTransform(scrollYProgress, [0, 0.3, 1], [0, 10, 60]);
  const icon4X = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0, -160]);

  // Background shape transforms
  const shape1X = useTransform(scrollYProgress, [0, 0.3, 1], [0, -15, -100]);
  const shape1Y = useTransform(scrollYProgress, [0, 0.3, 1], [0, -10, -50]);
  const shape2X = useTransform(scrollYProgress, [0, 0.3, 1], [0, 15, 80]);
  const shape2Y = useTransform(scrollYProgress, [0, 0.3, 1], [0, 10, 40]);

  // Floating icons configuration with scroll transforms
  const floatingIcons = [
    { Icon: Zap, x: 15, y: 20, delay: 0, scrollY: icon1Y, scrollX: icon1X },
    { Icon: Users, x: 85, y: 15, delay: 0.5, scrollY: icon2Y, scrollX: icon2X },
    { Icon: TrendingUp, x: 75, y: 80, delay: 1, scrollY: icon3Y, scrollX: icon3X },
    { Icon: Target, x: 25, y: 75, delay: 1.5, scrollY: icon4Y, scrollX: icon4X },
  ];

  return (
    <section className="relative pt-12 pb-8 lg:pt-16 lg:pb-16 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes with scroll parallax */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl"
          style={{
            x: shape1X,
            y: shape1Y,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          style={{
            x: shape2X,
            y: shape2Y,
          }}
          animate={{
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating Icons with Scroll Parallax */}
        {floatingIcons.map(({ Icon, x, y, delay, scrollY, scrollX }, index) => (
          <motion.div
            key={index}
            className="absolute hidden lg:block z-10"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              y: scrollY,
              x: scrollX,
            }}
            animate={{
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay * 2,
            }}
          >
            <motion.div
              className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
              whileHover={{
                scale: 1.2,
                backgroundColor: "rgba(139, 92, 246, 0.2)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon className="w-4 h-4 text-purple-800/70" />
            </motion.div>
          </motion.div>
        ))}

        {/* Static gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-transparent to-blue-50/20 opacity-60" />
      </div>

      <div className="container max-w-screen-xl px-4 mx-auto relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-purple-800 to-blue-700 rounded-lg flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    "0 10px 15px -3px rgba(139, 92, 246, 0.3)",
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white font-bold text-sm">M3</span>
              </motion.div>
              <span className="text-xl font-bold text-slate-900">Recruit</span>
            </motion.div>
          </motion.div>

          {/* Animated Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight lg:text-6xl mb-6"
          >
            Automate Your
            <motion.span
              className="bg-gradient-to-r from-purple-800 to-blue-700 bg-clip-text text-transparent block mt-2"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Recruitment Workflows
            </motion.span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Save 15+ hours weekly with AI-powered workflows. Connect 300+ integration tools and automate
            your entire recruitment process from sourcing to onboarding.
          </motion.p>

          {/* Animated CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 bg-purple-800 hover:bg-purple-900 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Free Trial
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/contact">
                <Button variant="outline" size="lg" className="text-lg px-8 border-purple-800 text-purple-800 hover:bg-purple-50 shadow-md hover:shadow-lg transition-all duration-300">
                  Contact Sales
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

