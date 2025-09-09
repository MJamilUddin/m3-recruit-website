"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type WorkflowStage = 'stage1' | 'stage2' | 'stage3' | 'stage4' | 'stage5';

export function WorkflowExamplesSection() {
  const [activeWorkflow, setActiveWorkflow] = useState<WorkflowStage>('stage1');
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const workflowTabs = [
    { id: 'stage1', title: 'Job Collection', active: activeWorkflow === 'stage1' },
    { id: 'stage2', title: 'Candidate Sourcing', active: activeWorkflow === 'stage2' },
    { id: 'stage3', title: 'Outreach Sequencing', active: activeWorkflow === 'stage3' },
    { id: 'stage4', title: 'Job Advertising', active: activeWorkflow === 'stage4' },
    { id: 'stage5', title: 'Reporting & Analytics', active: activeWorkflow === 'stage5' }
  ];

  return (
    <div className="w-full flex justify-center">
      <section className="w-full max-w-6xl mx-4 pt-10 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900/90 relative overflow-hidden rounded-3xl">
        {/* Dotted background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff05 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="container max-w-6xl px-4 mx-auto relative">
          {/* Workflow Navigation */}
          <div className="mb-8">
            {/* Desktop Tabs */}
            <div className="hidden md:flex flex-wrap gap-2 justify-center">
              {workflowTabs.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => {
                    setActiveWorkflow(stage.id as WorkflowStage);
                  }}
                  className={`px-6 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                    stage.active
                      ? 'bg-purple-600 text-white shadow-lg'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/30'
                  }`}
                >
                  {stage.title}
                </button>
              ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="w-full bg-slate-800/50 border border-slate-600/30 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-slate-200 font-semibold">
                  {workflowTabs.find(tab => tab.active)?.title || 'Select Workflow'}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                    isMobileDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Options */}
              {isMobileDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800/95 backdrop-blur-sm border border-slate-600/30 rounded-lg shadow-xl z-10">
                  {workflowTabs.map((stage) => (
                    <button
                      key={stage.id}
                      onClick={() => {
                        setActiveWorkflow(stage.id as WorkflowStage);
                        setIsMobileDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-slate-700/50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                        stage.active
                          ? 'bg-purple-600/20 text-purple-300 border-l-4 border-purple-500'
                          : 'text-slate-300'
                      }`}
                    >
                      {stage.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

            {/* Workflow Content */}
            <div className="bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-800/40 backdrop-blur-sm rounded-2xl p-4 md:p-8 relative border border-white/[0.05] shadow-[0_0_1px_1px_rgba(255,255,255,0.05)]"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
              }}
            >
            {/* Visual Workflow Diagrams */}

            {activeWorkflow === 'stage1' && (
              <div className="space-y-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Job Collection</h3>
                    <p className="text-slate-300 text-sm">Automated Scrape + Sync</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-3 md:p-4 border border-slate-600/20">
                      <h4 className="text-purple-200 font-semibold mb-2 text-sm md:text-base">Problem</h4>
                      <p className="text-slate-200 text-xs md:text-sm leading-relaxed mb-2">Manual research and data entry for company targeting is time-consuming and prone to errors, leading to incomplete candidate databases and missed opportunities.</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-red-300 font-bold text-xs md:text-sm">
                        <span className="text-red-400">£4,129</span>
                        <span className="text-slate-400 text-xs">cost per unfilled position</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-3 md:p-4 border border-slate-600/20">
                      <h4 className="text-green-200 font-semibold mb-2 text-sm md:text-base">Solution</h4>
                      <p className="text-slate-200 text-xs md:text-sm leading-relaxed mb-2">Transform your recruitment process with automated data collection. Build comprehensive, accurate candidate databases that never miss a target company or hiring manager.</p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-green-300">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                          <span className="text-green-400 font-bold text-xs md:text-sm">15+ hours</span>
                          <span className="text-slate-400 text-xs">saved/week</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                          <span className="text-green-400 font-bold text-xs md:text-sm">300%</span>
                          <span className="text-slate-400 text-xs">more qualified leads</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Workflow Diagram */}
                  <div className="md:col-span-2">
                    <div className="bg-gradient-to-br from-slate-800/35 to-slate-900/25 rounded-lg p-4 md:p-6 border border-slate-600/20">
                      <h4 className="text-cyan-300 font-semibold mb-4 text-center text-sm md:text-base">How It Works</h4>

                      {/* Job Collection Visual Flow */}
                      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 md:space-x-8">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-blue-400/50">
                            <Image
                              src="https://logo.clearbit.com/jobfeed.com"
                              alt="JobFeed"
                              width={32}
                              height={32}
                              className="w-8 h-8 md:w-10 md:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-blue-300 text-xs font-bold">JobFeed</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">JobFeed</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Searches & Scrapes<br/>Job Postings</span>
                        </div>

                        <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-400 transform md:transform-none rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-purple-400/50">
                            <Image
                              src="https://logo.clearbit.com/zoominfo.com"
                              alt="ZoomInfo"
                              width={32}
                              height={32}
                              className="w-8 h-8 md:w-10 md:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-purple-300 text-xs font-bold">ZoomInfo</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">ZoomInfo</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Enriches Contact<br/>Data</span>
                        </div>

                        <svg className="w-6 h-6 md:w-8 md:h-8 text-green-400 transform md:transform-none rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-green-400/50">
                            <Image
                              src="https://logo.clearbit.com/greenhouse.io"
                              alt="Greenhouse"
                              width={32}
                              height={32}
                              className="w-8 h-8 md:w-10 md:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-cyan-300 text-xs font-bold">Greenhouse</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Greenhouse</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Stores & Syncs<br/>Enriched Data</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflow === 'stage2' && (
              <div className="space-y-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Candidate Sourcing</h3>
                    <p className="text-slate-300 text-sm">Watchdog + Auto Upload</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-3 md:p-4 border border-slate-600/20">
                      <h4 className="text-purple-200 font-semibold mb-2 text-sm md:text-base">Problem</h4>
                      <p className="text-slate-200 text-xs md:text-sm leading-relaxed mb-2">Manual candidate sourcing and qualification is inefficient and time-consuming, leading to missed opportunities and inconsistent candidate quality that hurts your hiring pipeline.</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-red-300 font-bold text-xs md:text-sm">
                        <span className="text-red-400">30%</span>
                        <span className="text-slate-400 text-xs">of recruiter time wasted filtering</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-3 md:p-4 border border-slate-600/20">
                      <h4 className="text-green-200 font-semibold mb-2 text-sm md:text-base">Solution</h4>
                      <p className="text-slate-200 text-xs md:text-sm leading-relaxed mb-2">Never miss a great candidate again. Get a continuous stream of pre-qualified talent that meets your exact requirements, automatically delivered to your ATS without lifting a finger.</p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-green-300">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                          <span className="text-green-400 font-bold text-xs md:text-sm">75%</span>
                          <span className="text-slate-400 text-xs">less screening time</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Workflow Diagram */}
                  <div className="md:col-span-2">
                    <div className="bg-gradient-to-br from-slate-800/35 to-slate-900/25 rounded-lg p-4 md:p-6 border border-slate-600/20">
                      <h4 className="text-cyan-300 font-semibold mb-4 text-center text-sm md:text-base">How It Works</h4>

                      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 md:space-x-8">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-blue-400/50">
                            <Image
                              src="https://logo.clearbit.com/cv-library.co.uk"                               alt="CV Library"
                              width={32}
                              height={32}
                              className="w-8 h-8 md:w-10 md:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-blue-300 text-xs font-bold">CV Library</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">CV Library</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Watchdog<br/>Monitors Jobs</span>
                        </div>

                        <svg className="w-6 h-6 md:w-8 md:h-8 text-purple-400 transform md:transform-none rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-purple-400/50">
                            <Image
                              src="https://logo.clearbit.com/linkedin.com"
                              alt="LinkedIn"
                              width={32}
                              height={32}
                              className="w-8 h-8 md:w-10 md:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-purple-300 text-xs font-bold">LinkedIn</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">LinkedIn</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Validates &<br/>Enriches Profiles</span>
                        </div>

                        <svg className="w-6 h-6 md:w-8 md:h-8 text-green-400 transform md:transform-none rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-green-400/50">
                            <Image
                              src="https://logo.clearbit.com/bullhorn.com"                               alt="Bullhorn"
                              width={32}
                              height={32}
                              className="w-8 h-8 md:w-10 md:h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-green-300 text-xs font-bold">Bullhorn</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Bullhorn</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Auto-Imports<br/>CVs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflow === 'stage3' && (
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Outreach Sequencing</h3>
                    <p className="text-slate-300">Auto-Send Marketing Campaigns</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-4 border border-slate-600/20">
                      <h4 className="text-purple-200 font-semibold mb-2 text-base">Problem</h4>
                      <p className="text-slate-200 text-sm leading-relaxed mb-2">Manual outreach campaigns are disjointed and time-consuming, leading to poor candidate experience, missed follow-ups, and frustrated hiring managers who ghost your messages.</p>
                      <div className="flex items-center gap-2 text-red-300 font-bold text-sm">
                        <span className="text-red-400">12 days</span>
                        <span className="text-slate-400 text-xs">longer time-to-hire</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-4 border border-slate-600/20">
                      <h4 className="text-green-200 font-semibold mb-2 text-base">Solution</h4>
                      <p className="text-slate-200 text-sm leading-relaxed mb-2">Turn every lead into a hire with automated outreach. Professional, consistent communication that nurtures relationships and converts prospects into scheduled interviews at scale.</p>
                      <div className="flex items-center gap-2 text-green-300 font-bold text-sm">
                        <span className="text-green-400">5x</span>
                        <span className="text-slate-400 text-xs">higher response rates</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Workflow Diagram */}
                  <div className="md:col-span-2">
                    <div className="bg-gradient-to-br from-slate-800/35 to-slate-900/25 rounded-lg p-6 border border-slate-600/20">
                      <h4 className="text-cyan-300 font-semibold mb-4 text-center">How It Works</h4>

                      <div className="flex items-center justify-center space-x-8">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-blue-400/50">
                            <Image
                              src="https://logo.clearbit.com/bullhorn.com"
                              alt="Bullhorn"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) parent.innerHTML = '<span className="text-blue-300 text-xs font-bold">Bullhorn</span>';
                            }} />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Bullhorn</span>
                          <span className="text-slate-300 text-xs font-medium text-center">New Contacts<br/>Detected</span>
                        </div>

                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-purple-400/50">
                            <Image
                              src="https://logo.clearbit.com/brevo.com"                               alt="Brevo"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-purple-300 text-xs font-bold">Brevo</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Brevo</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Auto-Adds to<br/>Email Sequences</span>
                        </div>

                        <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-orange-400/50">
                            <Image
                              src="https://logo.clearbit.com/calendly.com"
                              alt="Calendly"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-orange-300 text-xs font-bold">Calendly</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Calendly</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Schedules<br/>Interviews</span>
                        </div>

                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-green-400/50">
                            <Image
                              src="https://logo.clearbit.com/mailchimp.com"
                              alt="Mailchimp"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-green-300 text-xs font-bold">Mailchimp</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Mailchimp</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Sends Follow-up<br/>Communications</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflow === 'stage4' && (
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Job Advertising</h3>
                    <p className="text-slate-300">Automation</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-4 border border-slate-600/20">
                      <h4 className="text-purple-200 font-semibold mb-2 text-base">Problem</h4>
                      <p className="text-slate-200 text-sm leading-relaxed mb-2">Manual job posting across multiple platforms is repetitive and time-consuming, leading to inconsistent content, formatting errors, and candidates who can&apos;t find your openings.</p>
                      <div className="flex items-center gap-2 text-red-300 font-bold text-sm">
                        <span className="text-red-400">£4,129</span>
                        <span className="text-slate-400 text-xs">cost per unfilled position</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-4 border border-slate-600/20">
                      <h4 className="text-green-200 font-semibold mb-2 text-base">Solution</h4>
                      <p className="text-slate-200 text-sm leading-relaxed mb-2">Attract top talent everywhere they look. Consistent branding across all channels with optimized job descriptions that showcase your company culture and reach candidates wherever they search.</p>
                      <div className="flex items-center gap-2 text-green-300 font-bold text-sm">
                        <span className="text-green-400">250%</span>
                        <span className="text-slate-400 text-xs">more applications</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Workflow Diagram */}
                  <div className="md:col-span-2">
                    <div className="bg-gradient-to-br from-slate-800/35 to-slate-900/25 rounded-lg p-6 border border-slate-600/20">
                      <h4 className="text-cyan-300 font-semibold mb-4 text-center">How It Works</h4>

                      <div className="flex items-center justify-center space-x-8">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-blue-400/50">
                            <Image
                              src="https://logo.clearbit.com/openai.com"                               alt="ChatGPT"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-blue-300 text-xs font-bold">ChatGPT</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">ChatGPT</span>
                          <span className="text-slate-300 text-xs font-medium text-center">AI Generates<br/>Job Ad Content</span>
                        </div>

                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-purple-400/50">
                            <Image
                              src="https://logo.clearbit.com/broadbean.com"                               alt="Broadbean"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-purple-300 text-xs font-bold">Broadbean</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Broadbean</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Auto-Posts to<br/>Job Boards</span>
                        </div>

                        <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-orange-400/50">
                            <Image
                              src="https://logo.clearbit.com/linkedin.com"
                              alt="LinkedIn"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-orange-300 text-xs font-bold">LinkedIn</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">LinkedIn</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Shares on<br/>Social Media</span>
                        </div>

                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-green-400/50">
                            <Image
                              src="https://logo.clearbit.com/indeed.com"
                              alt="Indeed"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-green-300 text-xs font-bold">Indeed</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Indeed</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Posts to<br/>Job Boards</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflow === 'stage5' && (
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-cyan-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Reporting & Analytics</h3>
                    <p className="text-slate-300"></p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-4 border border-slate-600/20">
                      <h4 className="text-purple-200 font-semibold mb-2 text-base">Problem</h4>
                      <p className="text-slate-200 text-sm leading-relaxed mb-2">Manual data compilation and reporting is slow and error-prone, leaving you blind to recruitment performance and unable to make data-driven decisions that could save thousands.</p>
                      <div className="flex items-center gap-2 text-red-300 font-bold text-sm">
                        <span className="text-red-400">30–50%</span>
                        <span className="text-slate-400 text-xs">of salary lost to bad hires</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-800/40 to-slate-800/20 rounded-lg p-4 border border-slate-600/20">
                      <h4 className="text-green-200 font-semibold mb-2 text-base">Solution</h4>
                      <p className="text-slate-200 text-sm leading-relaxed mb-2">Make every hire count with real-time insights. Turn data into dollars with automated reporting and visual dashboards that reveal your path to recruitment success and optimize your entire hiring strategy.</p>
                      <div className="flex items-center gap-2 text-green-300 font-bold text-sm">
                        <span className="text-green-400">60%</span>
                        <span className="text-slate-400 text-xs">fewer bad hires</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Workflow Diagram */}
                  <div className="md:col-span-2">
                    <div className="bg-gradient-to-br from-slate-800/35 to-slate-900/25 rounded-lg p-6 border border-slate-600/20">
                      <h4 className="text-cyan-300 font-semibold mb-4 text-center">How It Works</h4>

                      <div className="flex items-center justify-center space-x-8">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-blue-400/50">
                            <Image
                              src="https://logo.clearbit.com/bullhorn.com"
                              alt="Bullhorn"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) parent.innerHTML = '<span className="text-blue-300 text-xs font-bold">Bullhorn</span>';
                            }} />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Bullhorn</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Data<br/>Collection</span>
                        </div>

                        <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-purple-400/50">
                            <Image
                              src="https://logo.clearbit.com/brevo.com"                               alt="Brevo"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-purple-300 text-xs font-bold">Brevo</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Brevo</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Campaign<br/>Metrics</span>
                        </div>

                        <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-orange-400/50">
                            <Image
                              src="https://logo.clearbit.com/microsoft.com"
                              alt="Excel"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-orange-300 text-xs font-bold">Excel</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Excel</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Processes &<br/>Analyzes Data</span>
                        </div>

                        <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-2 border-2 border-green-400/50">
                            <Image
                              src="https://logo.clearbit.com/tableau.com"
                              alt="Tableau"
                              width={40}
                              height={40}
                              className="w-10 h-10 object-contain"
                              onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) parent.innerHTML = '<span className="text-green-300 text-xs font-bold">Tableau</span>';
                              }}
                            />
                          </div>
                          <span className="text-white text-xs font-bold mb-1">Tableau</span>
                          <span className="text-slate-300 text-xs font-medium text-center">Creates<br/>Analytics Dashboard</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="text-center mt-8">
            <p className="text-white text-sm font-medium bg-purple-600 rounded-lg px-4 py-2 inline-block">
              Build your own workflows below
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
