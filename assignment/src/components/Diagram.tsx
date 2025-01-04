import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { useDiagramContext } from '../context/DiagramContext';

const Diagram: React.FC = () => {
  const { nodes, edges } = useDiagramContext();

  return (
    <div className="diagram">
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        fitView 
        nodesDraggable={true} // Enable node dragging here
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Diagram;