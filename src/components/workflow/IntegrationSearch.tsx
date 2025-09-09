"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IntegrationTool, integrationTools } from '../../data/integrationTools';

interface IntegrationSearchProps {
  onToolSelect?: (tool: IntegrationTool) => void;
  onCrmSelect?: (tool: IntegrationTool) => void;
}

export const IntegrationSearch: React.FC<IntegrationSearchProps> = ({
  onToolSelect,
  onCrmSelect
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTools, setFilteredTools] = useState<IntegrationTool[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isCrmDropdownOpen, setIsCrmDropdownOpen] = useState(false);
  const [selectedCrm, setSelectedCrm] = useState<IntegrationTool | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get all CRM/ATS systems
  const crmSystems = integrationTools.filter(tool => tool.category === 'CRM / ATS');

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setIsCrmDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter tools based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredTools([]);
      setVisibleCount(10);
      setIsDropdownOpen(false);
    } else {
      const filtered = integrationTools.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTools(filtered);
      setVisibleCount(10); // Reset visible count for new search
      setIsDropdownOpen(filtered.length > 0);
    }
  }, [searchTerm]);

  const handleToolSelect = (tool: IntegrationTool) => {
    onToolSelect?.(tool);
    setSearchTerm('');
    setIsDropdownOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleInputFocus = () => {
    if (searchTerm.trim() && filteredTools.length > 0) {
      setIsDropdownOpen(true);
    }
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 10, filteredTools.length));
  };

  const handleCrmSelect = (crm: IntegrationTool) => {
    setSelectedCrm(crm);
    setIsCrmDropdownOpen(false);
    onCrmSelect?.(crm);
  };

  return (
    <div className="w-full relative" ref={containerRef}>
      {/* CRM Dropdown and Search Bar */}
      <div className="flex gap-4">
        {/* CRM Dropdown - 1/3 width */}
        <div className="flex-1/3 relative">
          <button
            onClick={() => setIsCrmDropdownOpen(!isCrmDropdownOpen)}
            className="w-full px-4 py-3 md:py-4 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 text-sm md:text-base font-normal tracking-wide flex items-center justify-between"
          >
            <span className="flex items-center gap-3">
              {selectedCrm ? (
                <>
                  <img
                    src={selectedCrm.logoUrl}
                    alt={selectedCrm.name}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = selectedCrm.name.charAt(0).toUpperCase();
                      }
                    }}
                  />
                  <span className="truncate">{selectedCrm.name}</span>
                </>
              ) : (
                <span className="text-gray-500">Select CRM/ATS</span>
              )}
            </span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* CRM Dropdown */}
          {isCrmDropdownOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto z-50 mt-1">
              <div className="flex flex-col">
                {crmSystems.map((crm, index) => (
                  <div
                    key={crm.id}
                    className={`p-3 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
                      index === 0 ? 'rounded-t-lg' :
                      index === crmSystems.length - 1 ? 'rounded-b-lg' : ''
                    }`}
                    onClick={() => handleCrmSelect(crm)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0">
                        <img
                          src={crm.logoUrl}
                          alt={`${crm.name} logo`}
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.style.display = 'flex';
                              parent.style.alignItems = 'center';
                              parent.style.justifyContent = 'center';
                              parent.style.backgroundColor = '#f1f5f9';
                              parent.style.borderRadius = '4px';
                              parent.innerHTML = `<div style="font-size: 12px; font-weight: bold; color: #475569;">${crm.name.charAt(0).toUpperCase()}</div>`;
                            }
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-800 truncate">
                          {crm.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Bar - 2/3 width */}
        <div className="flex-2/3 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400 w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search for integration tools..."
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            className="w-full pl-12 pr-4 py-3 md:py-4 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 text-sm md:text-base font-normal tracking-wide"
            style={{
              fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              letterSpacing: "0.2px"
            }}
          />

          {/* Dropdown Results */}
          {isDropdownOpen && filteredTools.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 md:max-h-80 overflow-y-auto z-50 mt-1" style={{ width: 'calc(100% + 32px)', marginLeft: '-16px' }}>
            <div className="flex flex-col">
              {filteredTools.slice(0, visibleCount).map((tool, index) => (
                <div
                  key={tool.id}
                  className={`p-3 cursor-pointer hover:bg-gray-50 transition-all duration-200 ${
                    index === 0 ? 'rounded-t-lg' :
                    index === filteredTools.slice(0, visibleCount).length - 1 ? 'rounded-b-lg' : ''
                  }`}
                  onClick={() => handleToolSelect(tool)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0">
                      <img
                        src={tool.logoUrl}
                        alt={`${tool.name} logo`}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.style.display = 'flex';
                            parent.style.alignItems = 'center';
                            parent.style.justifyContent = 'center';
                            parent.style.backgroundColor = '#f1f5f9';
                            parent.style.borderRadius = '4px';
                            parent.innerHTML = `<div style="font-size: 12px; font-weight: bold; color: #475569;">${tool.name.charAt(0).toUpperCase()}</div>`;
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-sm font-medium text-gray-800 truncate">
                          {tool.name}
                        </h4>
                        <span className="inline-block px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 truncate">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleCount < filteredTools.length && (
              <div className="p-3 text-center border-t border-gray-100 bg-gray-25 rounded-b-lg">
                <button
                  className="px-4 py-2 text-xs font-medium text-purple-600 bg-white border border-purple-200 rounded-lg hover:bg-purple-50 hover:border-purple-300 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    loadMore();
                  }}
                >
                  Load More ({filteredTools.length - visibleCount} remaining)
                </button>
              </div>
            )}
          </div>
        )}

        {/* No results message */}
        {searchTerm && !isDropdownOpen && filteredTools.length === 0 && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 mt-1 p-4 text-center" style={{ width: 'calc(100% + 32px)', marginLeft: '-16px' }}>
            <p className="text-sm text-gray-500">
              No tools found matching "{searchTerm}"
            </p>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
