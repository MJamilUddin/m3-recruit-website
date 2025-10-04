"use client";

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CheckCircle } from "lucide-react";
import { integrationTools } from '@/data/integrationTools';

// Get unique categories for filtering
const categories = [...new Set(integrationTools.map(tool => tool.category))].sort();

export default function IntegrationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(20); // Show 20 integrations initially

  // Filter integrations based on search and category
  const filteredIntegrations = useMemo(() => {
    return integrationTools.filter(integration => {
      const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          integration.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Reset visible count when filters change
  useEffect(() => {
    setVisibleCount(20);
  }, [searchTerm, selectedCategory]);

  // Get visible integrations
  const visibleIntegrations = filteredIntegrations.slice(0, visibleCount);
  const hasMoreIntegrations = visibleCount < filteredIntegrations.length;

  const loadMore = () => {
    setVisibleCount(prev => prev + 20); // Load 20 more at a time
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container max-w-6xl px-4 mx-auto py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All Integrations
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect M3 Recruit with your favorite tools and platforms. Over 300 integrations available.
            </p>
          </div>
        </div>
      </div>

      {/* CRM/ATS Systems Section */}
      <section className="py-12 bg-slate-50/50">
        <div className="container max-w-6xl px-4 mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-white border border-slate-200">
              <span className="text-sm font-medium text-slate-600">Major Platforms</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Supported CRM & ATS Systems
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Seamlessly integrate with the most popular recruitment platforms
            </p>
          </div>

          {/* CRM/ATS Grid - Compact Design */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {integrationTools
              .filter(tool => tool.category === 'CRM / ATS')
              .map((crm) => (
                <div key={crm.id} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src={crm.logoUrl}
                        alt={crm.name}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<span className="text-xs font-bold text-gray-600">Logo</span>';
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm truncate">{crm.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-600 text-sm mb-4">
              Plus integration support for BambooHR, UKG, SAP SuccessFactors, and many more...
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-full">
              <CheckCircle className="w-4 h-4 text-slate-600" />
              <span className="font-medium text-sm text-slate-700">All Major ATS & CRM Platforms Supported</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl px-4 mx-auto py-8">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400 w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-lg hover:border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400/20 transition-all duration-200 text-sm"
              />
            </div>

            {/* Category Filter Dropdown */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-slate-200 rounded-lg px-3 py-2 pr-8 hover:border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-400/20 transition-all duration-200 text-sm min-w-[180px]"
              >
                <option value="All">All Categories ({integrationTools.length})</option>
                {categories.map(category => {
                  const count = integrationTools.filter(tool => tool.category === category).length;
                  return (
                    <option key={category} value={category}>
                      {category} ({count})
                    </option>
                  );
                })}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing {visibleIntegrations.length} of {filteredIntegrations.length} integrations
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Integrations Grid */}
        {filteredIntegrations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {visibleIntegrations.map((integration) => (
              <div
                key={integration.id}
                className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-all duration-200 hover:border-slate-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-slate-50 rounded-md flex items-center justify-center p-1 group-hover:bg-slate-100 transition-colors">
                    <Image
                      src={integration.logoUrl}
                      alt={integration.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<span className="text-xs font-bold text-gray-600">Logo</span>';
                        }
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm truncate">{integration.name}</h3>
                    <span className="inline-block px-1.5 py-0.5 bg-slate-100 text-slate-700 text-xs font-medium rounded">
                      {integration.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaSearch className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No integrations found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or category filter
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-white hover:bg-slate-50 text-slate-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm border border-slate-200 shadow-sm hover:shadow"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More Button */}
        {hasMoreIntegrations && visibleIntegrations.length > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-white hover:bg-slate-50 text-slate-900 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-sm border border-slate-200 shadow-sm hover:shadow"
            >
              Load More Integrations ({filteredIntegrations.length - visibleCount} remaining)
            </button>
          </div>
        )}

        {/* Footer Stats */}
        {visibleIntegrations.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Over 300 Integrations Available
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                M3 Recruit seamlessly integrates with your existing tech stack. From ATS systems to productivity tools,
                we make it easy to connect everything you need for successful recruitment.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {categories.length}+
                  </div>
                  <div className="text-sm text-slate-600">Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {filteredIntegrations.filter(t => t.category === 'CRM').length + 10}+
                  </div>
                  <div className="text-sm text-slate-600">ATS Systems</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {filteredIntegrations.filter(t => t.category === 'HRIS').length +6}+
                  </div>
                  <div className="text-sm text-slate-600">HR Systems</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {filteredIntegrations.filter(t => t.category.includes('Communication')).length}+
                  </div>
                  <div className="text-sm text-slate-600">Communication Tools</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
