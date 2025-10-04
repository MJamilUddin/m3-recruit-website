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
    <div id="build-workflows" className="w-full flex justify-center bg-gradient-to-br from-slate-50 via-white to-purple-50/30 py-20">
      <section className="w-full max-w-6xl mx-4">
        <div className="container max-w-6xl px-4 mx-auto relative">
          {/* Workflow Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-800 to-indigo-700 rounded-xl shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Build Your Own Workflow</h2>
            </div>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
              Tell us your current recruitment workflow and we&apos;ll build it for you. Browse our 300+ integrations,
              drag and drop to design your process, and let us handle all the complex setup and automation.
            </p>
          </div>

          {/* Interactive Workflow Box */}
          <div className="bg-white rounded-3xl p-8 md:p-10 relative border border-slate-200 shadow-xl">
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
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full border-2 border-slate-200">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-700 font-semibold">Click and drag nodes to connect them</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
