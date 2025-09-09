"use client";

import { WorkflowDiagram } from "@/components/workflow/WorkflowDiagram";
import { IntegrationSearch } from "@/components/workflow/IntegrationSearch";
import { IntegrationTool } from "@/data/integrationTools";
import { useState } from "react";
import { Zap } from "lucide-react";

export function InteractiveWorkflowSection() {
  const [selectedTool, setSelectedTool] = useState<IntegrationTool | null>(null);

  const handleToolSelect = (tool: IntegrationTool) => {
    setSelectedTool(tool);
  };

  const handleToolAdded = () => {
    setSelectedTool(null);
  };

  const handleCrmSelect = (crm: IntegrationTool) => {
    setSelectedTool(crm);
  };

  return (
    <div className="w-full flex justify-center py-20">
      <section className="w-full max-w-6xl mx-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900/90 relative overflow-hidden rounded-3xl">
        {/* Dotted background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff05 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>

        <div className="container max-w-6xl px-4 mx-auto relative py-8">
          {/* Workflow Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-200">Build Your Own Workflow</h2>
            </div>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Tell us your current recruitment workflow and we&apos;ll build it for you. Browse our 300+ integrations,
              drag and drop to design your process, and let us handle all the complex setup and automation.
            </p>
          </div>

          {/* Interactive Workflow Box */}
          <div className="bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-800/40 backdrop-blur-sm rounded-2xl p-8 relative border border-white/[0.05] shadow-[0_0_1px_1px_rgba(255,255,255,0.05)]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          >
            {/* Integration Search */}
            <div className="mb-8">
              <IntegrationSearch onToolSelect={handleToolSelect} onCrmSelect={handleCrmSelect} />
            </div>

            {/* Interactive Workflow Diagram */}
            <WorkflowDiagram
              selectedTool={selectedTool}
              onToolAdded={handleToolAdded}
            />

            {/* Workflow Tips */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700/50">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-300 font-medium">Click and drag nodes to connect them</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
