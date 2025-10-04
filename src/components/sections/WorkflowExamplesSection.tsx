"use client";

import Image from "next/image";
import { AnimatedCard } from "@/components/ScrollAnimations";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function WorkflowExamplesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const workflowStages = [
    {
      id: 'stage1',
      title: 'Job Collection',
      subtitle: 'Automated Scrape + Sync',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      problem: {
        title: "Problem",
        content: "Manual research and data entry for company targeting is time-consuming and prone to errors, leading to incomplete candidate databases and missed opportunities.",
        cost: "£4,129",
        costLabel: "cost per unfilled position"
      },
      solution: {
        title: "Solution",
        content: "Transform your recruitment process with automated data collection. Build comprehensive, accurate candidate databases that never miss a target company or hiring manager.",
        savings: "15+ hours",
        savingsLabel: "saved/week",
        improvement: "300%",
        improvementLabel: "more qualified leads"
      }
    },
    {
      id: 'stage2',
      title: 'Candidate Sourcing',
      subtitle: 'Watchdog + Auto Upload',
      icon: (
        <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      problem: {
        title: "Problem",
        content: "Manual candidate sourcing and qualification is inefficient and time-consuming, leading to missed opportunities and inconsistent candidate quality that hurts your hiring pipeline.",
        cost: "30%",
        costLabel: "of recruiter time wasted filtering"
      },
      solution: {
        title: "Solution",
        content: "Never miss a great candidate again. Get a continuous stream of pre-qualified talent that meets your exact requirements, automatically delivered to your ATS without lifting a finger.",
        savings: "75%",
        savingsLabel: "less screening time",
        improvement: "",
        improvementLabel: ""
      }
    },
    {
      id: 'stage3',
      title: 'Outreach Sequencing',
      subtitle: 'Auto-Send Marketing Campaigns',
      icon: (
        <svg className="w-6 h-6 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      problem: {
        title: "Problem",
        content: "Manual outreach campaigns are disjointed and time-consuming, leading to poor candidate experience, missed follow-ups, and frustrated hiring managers who ghost your messages.",
        cost: "12 days",
        costLabel: "longer time-to-hire"
      },
      solution: {
        title: "Solution",
        content: "Turn every lead into a hire with automated outreach. Professional, consistent communication that nurtures relationships and converts prospects into scheduled interviews at scale.",
        savings: "5x",
        savingsLabel: "higher response rates",
        improvement: "",
        improvementLabel: ""
      }
    },
    {
      id: 'stage4',
      title: 'Job Advertising',
      subtitle: 'Automation',
      icon: (
        <svg className="w-6 h-6 text-orange-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      problem: {
        title: "Problem",
        content: "Manual job posting across multiple platforms is repetitive and time-consuming, leading to inconsistent content, formatting errors, and candidates who can't find your openings.",
        cost: "£4,129",
        costLabel: "cost per unfilled position"
      },
      solution: {
        title: "Solution",
        content: "Attract top talent everywhere they look. Consistent branding across all channels with optimized job descriptions that showcase your company culture and reach candidates wherever they search.",
        savings: "250%",
        savingsLabel: "more applications",
        improvement: "",
        improvementLabel: ""
      }
    },
    {
      id: 'stage5',
      title: 'Reporting & Analytics',
      subtitle: '',
      icon: (
        <svg className="w-6 h-6 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      problem: {
        title: "Problem",
        content: "Manual data compilation and reporting is slow and error-prone, leaving you blind to recruitment performance and unable to make data-driven decisions that could save thousands.",
        cost: "30–50%",
        costLabel: "of salary lost to bad hires"
      },
      solution: {
        title: "Solution",
        content: "Make every hire count with real-time insights. Turn data into dollars with automated reporting and visual dashboards that reveal your path to recruitment success and optimize your entire hiring strategy.",
        savings: "60%",
        savingsLabel: "fewer bad hires",
        improvement: "",
        improvementLabel: ""
      }
    }
  ];

  return (
    <div className="w-full flex justify-center bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-16">
      <div ref={containerRef} className="w-full max-w-6xl mx-4 relative">
        {/* Section Header - Static at top */}
        <div className="mb-16 relative">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-purple-50/50 to-white rounded-3xl p-6 sm:p-8 md:p-12 border-2 border-purple-100 shadow-lg">
            {/* Icon grid background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-8 grid-rows-4 gap-8 w-full h-full p-8">
                {[...Array(32)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-100/80 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <span className="text-purple-800 font-bold text-sm uppercase tracking-wider">5-Stage Process</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight text-center">
                Complete Recruitment Workflow Automation
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-center leading-relaxed">
                From job collection to final placement, our AI-powered platform automates every step of your recruitment process.
              </p>

              {/* Step indicators */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-center gap-2">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-purple-800 to-indigo-700 flex items-center justify-center text-white text-xs sm:text-sm font-bold shadow-md">
                      {num}
                    </div>
                    {num < 5 && <div className="w-4 sm:w-6 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Sections Container */}
        <div className="relative pb-[40vh]">
          {/* Progress Indicator */}
          <motion.div 
            className="fixed right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col gap-3 sm:gap-4"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0])
            }}
          >
            {workflowStages.map((_, index) => {
              const sectionStart = index / workflowStages.length;
              const sectionEnd = (index + 1) / workflowStages.length;
              
              const sectionProgress = useTransform(
                scrollYProgress,
                [sectionStart, sectionEnd],
                [0, 1]
              );

              const indicatorOpacity = useTransform(sectionProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
              const bgColor = useTransform(sectionProgress, [0, 0.3, 0.7, 1], ['#ffffff', '#6b21a8', '#6b21a8', '#ffffff']);
              const borderColor = useTransform(sectionProgress, [0, 0.3, 0.7, 1], ['#cbd5e1', '#6b21a8', '#6b21a8', '#cbd5e1']);
              const textColor = useTransform(sectionProgress, [0, 0.3, 0.7, 1], ['#64748b', '#ffffff', '#ffffff', '#64748b']);

              return (
                <motion.div
                  key={`indicator-${index}`}
                  className="flex items-center gap-3 group cursor-pointer"
                  onClick={() => {
                    const element = document.querySelectorAll('[data-stage-id]')[index];
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                >
                  <motion.div
                    className="relative"
                    style={{ opacity: indicatorOpacity }}
                  >
                    <motion.div
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center font-bold text-xs sm:text-sm transition-all"
                      style={{
                        backgroundColor: bgColor,
                        borderColor: borderColor,
                        color: textColor,
                      }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {workflowStages.map((stage, index) => {
            // Calculate which section should be visible based on scroll
            const sectionStart = index / workflowStages.length;
            const sectionEnd = (index + 1) / workflowStages.length;
            
            const sectionProgress = useTransform(
              scrollYProgress,
              [sectionStart, sectionEnd],
              [0, 1]
            );

            const opacity = useTransform(sectionProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
            const scale = useTransform(sectionProgress, [0, 0.15, 0.85, 1], [0.85, 1, 1, 0.85]);

            return (
              <motion.div
                  key={stage.id}
                data-stage-id={stage.id}
                className="sticky top-0 min-h-screen flex items-center justify-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8"
                style={{ opacity, scale }}
              >
                <div className="w-full max-w-5xl bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 relative border border-slate-200/60 shadow-xl hover:shadow-2xl transition-all"
                >
                  {/* Header with Icon and Title */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-6 mb-8 pb-6 border-b border-slate-200">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-purple-800 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <div className="w-full h-full flex items-center justify-center text-white scale-110">
                        {stage.icon}
                      </div>
                </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-1">{stage.title}</h3>
                      {stage.subtitle && (
                        <p className="text-slate-600 text-base sm:text-lg md:text-xl font-semibold">{stage.subtitle}</p>
              )}
            </div>
          </div>

                  {/* Problem and Solution Grid */}
                  <div className="grid md:grid-cols-2 gap-5">
                    {/* Problem Section */}
                    <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-col sm:flex-row items-start gap-2 mb-4 pb-3 border-b border-slate-200/60">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                        <h4 className="text-slate-900 font-bold text-base sm:text-lg tracking-tight">{stage.problem.title}</h4>
                  </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 font-medium">{stage.problem.content}</p>
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 border border-red-200/60 flex items-center gap-2">
                        <span className="text-red-600 font-bold text-lg sm:text-xl">{stage.problem.cost}</span>
                        <span className="text-slate-700 text-xs sm:text-sm font-semibold">{stage.problem.costLabel}</span>
                    </div>
                  </div>

                    {/* Solution Section */}
                    <div className="bg-white/60 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-slate-200/60 shadow-sm hover:shadow-md transition-all">
                      <div className="flex flex-col sm:flex-row items-start gap-2 mb-4 pb-3 border-b border-slate-200/60">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h4 className="text-slate-900 font-bold text-base sm:text-lg tracking-tight">{stage.solution.title}</h4>
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 font-medium">{stage.solution.content}</p>
                      <div className="flex flex-col sm:flex-row gap-2">
                        {stage.solution.savings && (
                          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 border border-emerald-200/60 flex items-center gap-2 flex-1">
                            <span className="text-emerald-600 font-bold text-base sm:text-lg">{stage.solution.savings}</span>
                            <span className="text-slate-700 text-xs font-semibold">{stage.solution.savingsLabel}</span>
                          </div>
                        )}
                        {stage.solution.improvement && (
                          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 border border-emerald-200/60 flex items-center gap-2 flex-1">
                            <span className="text-emerald-600 font-bold text-base sm:text-lg">{stage.solution.improvement}</span>
                            <span className="text-slate-700 text-xs font-semibold">{stage.solution.improvementLabel}</span>
                        </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Workflow Visualization */}
                  <div className="mt-8">
                    <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200/60 shadow-lg">
                      <h4 className="text-slate-900 font-bold mb-8 text-center text-xl tracking-tight">How It Works</h4>

                      {/* Job Collection Workflow */}
                      {stage.id === 'stage1' && (
                      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg border-2 border-blue-500/30">
                            <Image
                              src="https://logo.clearbit.com/jobfeed.com"
                              alt="JobFeed"
                              width={40}
                              height={40}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-blue-600 text-xs font-bold">JobFeed</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">JobFeed</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Searches & Scrapes<br/>Job Postings</span>
                        </div>

                        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-400 transform md:transform-none rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg border-2 border-purple-500/30">
                            <Image
                              src="https://logo.clearbit.com/zoominfo.com"
                              alt="ZoomInfo"
                              width={40}
                              height={40}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-purple-800 text-xs font-bold">ZoomInfo</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">ZoomInfo</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Enriches Contact<br/>Data</span>
                        </div>

                        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-400 transform md:transform-none rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg border-2 border-green-400/50">
                            <Image
                              src="https://logo.clearbit.com/greenhouse.io"
                              alt="Greenhouse"
                              width={40}
                              height={40}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-green-600 text-xs font-bold">Greenhouse</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Greenhouse</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Stores & Syncs<br/>Enriched Data</span>
                </div>
              </div>
            )}

                      {/* Candidate Sourcing Workflow */}
                      {stage.id === 'stage2' && (
                      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg border-2 border-blue-400/50">
                            <Image
                                src="https://logo.clearbit.com/cv-library.co.uk"
                                alt="CV Library"
                              width={40}
                              height={40}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-blue-600 text-xs font-bold">CV Library</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">CV Library</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Watchdog<br/>Monitors Jobs</span>
                        </div>

                        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-purple-400 transform md:transform-none rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg border-2 border-purple-400/50">
                            <Image
                              src="https://logo.clearbit.com/linkedin.com"
                              alt="LinkedIn"
                              width={40}
                              height={40}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-purple-800 text-xs font-bold">LinkedIn</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">LinkedIn</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Validates &<br/>Enriches Profiles</span>
                        </div>

                        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-green-400 transform md:transform-none rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 sm:mb-3 shadow-lg border-2 border-green-400/50">
                            <Image
                                src="https://logo.clearbit.com/bullhorn.com"
                                alt="Bullhorn"
                              width={40}
                              height={40}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-green-600 text-xs font-bold">Bullhorn</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Bullhorn</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Auto-Imports<br/>CVs</span>
                </div>
              </div>
            )}

                      {/* Outreach Sequencing Workflow */}
                      {stage.id === 'stage3' && (
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 border-2 border-blue-400/50">
                            <Image
                              src="https://logo.clearbit.com/bullhorn.com"
                              alt="Bullhorn"
                              width={32}
                              height={32}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-blue-600 text-xs font-bold">Bullhorn</span>';
                                }}
                              />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Bullhorn</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">New Contacts<br/>Detected</span>
                        </div>

                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 border-2 border-purple-400/50">
                            <Image
                                src="https://logo.clearbit.com/brevo.com"
                                alt="Brevo"
                              width={32}
                              height={32}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-purple-800 text-xs font-bold">Brevo</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Brevo</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Auto-Adds to<br/>Email Sequences</span>
                        </div>

                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 border-2 border-orange-400/50">
                            <Image
                              src="https://logo.clearbit.com/calendly.com"
                              alt="Calendly"
                              width={32}
                              height={32}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-orange-600 text-xs font-bold">Calendly</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Calendly</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Schedules<br/>Interviews</span>
                </div>
              </div>
            )}

                      {/* Job Advertising Workflow */}
                      {stage.id === 'stage4' && (
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 border-2 border-blue-400/50">
                            <Image
                                src="https://logo.clearbit.com/openai.com"
                                alt="ChatGPT"
                              width={32}
                              height={32}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-blue-600 text-xs font-bold">ChatGPT</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">ChatGPT</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">AI Generates<br/>Job Ad Content</span>
                        </div>

                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 border-2 border-purple-400/50">
                            <Image
                                src="https://logo.clearbit.com/broadbean.com"
                                alt="Broadbean"
                              width={32}
                              height={32}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-purple-800 text-xs font-bold">Broadbean</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Broadbean</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Auto-Posts to<br/>Job Boards</span>
                        </div>

                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 border-2 border-green-400/50">
                            <Image
                              src="https://logo.clearbit.com/indeed.com"
                              alt="Indeed"
                              width={32}
                              height={32}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-green-600 text-xs font-bold">Indeed</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Indeed</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Posts to<br/>Job Boards</span>
                </div>
              </div>
            )}

                      {/* Reporting & Analytics Workflow */}
                      {stage.id === 'stage5' && (
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 border-2 border-blue-400/50">
                            <Image
                              src="https://logo.clearbit.com/bullhorn.com"
                              alt="Bullhorn"
                              width={32}
                              height={32}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-blue-600 text-xs font-bold">Bullhorn</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Bullhorn</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Data<br/>Collection</span>
                        </div>

                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 border-2 border-purple-400/50">
                            <Image
                                src="https://logo.clearbit.com/brevo.com"
                                alt="Brevo"
                              width={32}
                              height={32}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-purple-800 text-xs font-bold">Brevo</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Brevo</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Campaign<br/>Metrics</span>
                        </div>

                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-lg sm:rounded-xl flex items-center justify-center mb-2 border-2 border-green-400/50">
                            <Image
                              src="https://logo.clearbit.com/tableau.com"
                              alt="Tableau"
                              width={32}
                              height={32}
                              className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                  if (parent) parent.innerHTML = '<span className="text-green-600 text-xs font-bold">Tableau</span>';
                              }}
                            />
                          </div>
                          <span className="text-slate-900 text-xs sm:text-sm font-bold mb-2">Tableau</span>
                          <span className="text-slate-600 text-xs sm:text-sm font-medium text-center">Creates<br/>Analytics Dashboard</span>
                        </div>
                      </div>
                      )}
                    </div>
          </div>

                  {/* CTA Button in each card */}
                  <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <button
              onClick={() => {
                const element = document.getElementById('build-workflows');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
                      className="text-white text-sm sm:text-base font-semibold bg-gradient-to-r from-purple-800 to-indigo-700 hover:from-purple-900 hover:to-indigo-800 rounded-xl px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 inline-flex items-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:scale-105"
            >
                      Build Your Workflow
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
            </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
          </div>
        </div>
    </div>
  );
}
