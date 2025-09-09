"use client";

import React, { useCallback, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  NodeTypes,
  BackgroundVariant,
  Panel,
  Handle,
  Position,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FaTrash } from 'react-icons/fa';

// Import integration tools data
import { IntegrationTool } from '../../data/integrationTools';

// Custom node component for workflow tools
const WorkflowNode = ({ data, id, onDelete }: { data: any; id: string; onDelete?: (nodeId: string) => void }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.(id);
  };

  return (
    <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg p-4 min-w-[200px] max-w-[280px] shadow-lg hover:border-purple-400 hover:shadow-xl hover:shadow-purple-400/20 hover:-translate-y-0.5 transition-all duration-300 relative group">
      {/* Connection Handles */}
      <Handle
        type="target"
        position={Position.Left}
        id="target-handle"
        style={{
          background: '#7c3aed',
          border: '2px solid white',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          boxShadow: '0 3px 8px rgba(0,0,0,0.4)',
          zIndex: 20,
          left: '-8px'
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="source-handle"
        style={{
          background: '#7c3aed',
          border: '2px solid white',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          boxShadow: '0 3px 8px rgba(0,0,0,0.4)',
          zIndex: 20,
          right: '-8px'
        }}
      />

      {/* Delete Button */}
      <button
        aria-label="Delete tool"
        className="absolute top-2 right-2 p-1.5 text-red-400 hover:text-red-600 hover:bg-red-50/80 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 z-30"
        onClick={handleDelete}
      >
        <FaTrash className="w-3.5 h-3.5" />
      </button>

      <div className="flex flex-col space-y-3">
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0">
            <img
              src={data.logoUrl}
              alt={`${data.name} logo`}
              className="w-7 h-7 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.style.display = 'flex';
                  parent.style.alignItems = 'center';
                  parent.style.justifyContent = 'center';
                  parent.style.backgroundColor = '#f1f5f9';
                  parent.style.borderRadius = '8px';
                  parent.innerHTML = `<div style="font-size: 18px; font-weight: bold; color: #475569;">${data.name.charAt(0).toUpperCase()}</div>`;
                }
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 truncate">
              {data.name}
            </h3>
            <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded-full">
              {data.category}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {data.description}
        </p>
      </div>
    </div>
  );
};

// Define node types - will be created dynamically
let nodeTypes: NodeTypes = {};

// Start with empty workflow
const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];

interface WorkflowDiagramProps {
  selectedTool?: IntegrationTool | null;
  onToolAdded?: () => void;
}

export const WorkflowDiagram: React.FC<WorkflowDiagramProps> = ({ selectedTool, onToolAdded }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Create node types with delete callback
  const deleteNode = useCallback((nodeId: string) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  }, [setNodes, setEdges]);

  // Define node types with delete functionality
  const WorkflowNodeWithDelete = (props: any) => (
    <WorkflowNode {...props} onDelete={deleteNode} />
  );

  nodeTypes = {
    workflowNode: WorkflowNodeWithDelete,
  };

  // Automatically add selected tool to workflow
  useEffect(() => {
    if (selectedTool) {
      const newNode: Node = {
        id: `${Date.now()}`, // Use timestamp for unique ID
        type: 'workflowNode',
        position: {
          x: Math.random() * 250 + 50,
          y: Math.random() * 100 + 50
        },
        data: {
          name: selectedTool.name,
          description: selectedTool.description,
          category: selectedTool.category,
          logoUrl: selectedTool.logoUrl
        },
      };

      setNodes((nds) => [...nds, newNode]);
      onToolAdded?.();
    }
  }, [selectedTool, setNodes, onToolAdded]);

  const onConnect = useCallback(
    (params: Connection | Edge) => {
      console.log('Connection attempt:', params);
      const newEdges = addEdge(params, edges);
      console.log('New edges after connection:', newEdges);
      setEdges(newEdges);
    },
    [edges, setEdges]
  );

  const clearWorkflow = useCallback(() => {
    setNodes([]);
    setEdges([]);
  }, [setNodes, setEdges]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden relative h-[400px] md:h-[450px] w-full shadow-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        snapToGrid={false}
        snapGrid={[15, 15]}
        defaultEdgeOptions={{
          style: {
            strokeWidth: 2,
            stroke: '#7c3aed',
            zIndex: 0
          },
          type: 'bezier',
          zIndex: 0
        }}
      >
        <MiniMap
          nodeColor="#7c3aed"
          maskColor="rgba(255, 255, 255, 0.2)"
        />
        <Controls />
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />

        {/* Control Panel */}
        <Panel position="top-right">
          <button
            className="px-3 py-2 text-sm font-medium text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-sm transition-colors duration-200"
            onClick={clearWorkflow}
            disabled={nodes.length === 0}
          >
            <FaTrash className="w-4 h-4" />
            <span>Clear Workflow</span>
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
};
