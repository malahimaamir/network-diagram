/* eslint-disable react-refresh/only-export-components */
import  { createContext, useContext, useState, ReactNode } from 'react';
import { Node, Edge } from 'reactflow';

interface DiagramContextType {
  nodes: Node[];
  edges: Edge[];
  addNode: (label: string) => void;
  addEdge: (source: string, target: string) => void;
}

const DiagramContext = createContext<DiagramContextType | undefined>(undefined);

export const DiagramProvider = ({ children }: { children: ReactNode }) => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const addNode = (label: string) => {
    const id = `${nodes.length + 1}`;
    setNodes((prev) => [
      ...prev,
      { id, data: { label }, position: { x: Math.random() * 400, y: Math.random() * 400 } },
    ]);
  };

  const addEdge = (source: string, target: string) => {
    setEdges((prev) => [...prev, { id: `edge-${source}-${target}`, source, target }]);
  };

  return (
    <DiagramContext.Provider value={{ nodes, edges, addNode, addEdge }}>
      {children}
    </DiagramContext.Provider>
  );
};

export const useDiagramContext = () => {
  const context = useContext(DiagramContext);
  if (!context) {
    throw new Error('useDiagramContext must be used within a DiagramProvider');
  }
  return context;
};
