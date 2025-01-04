import React, { useState } from 'react';
import { useDiagramContext } from '../context/DiagramContext';

const InputForm: React.FC = () => {
  const [label, setLabel] = useState('');
  const [source, setSource] = useState('');
  const [target, setTarget] = useState('');
  const { addNode, addEdge } = useDiagramContext();

  const handleAddNode = () => {
    if (label) {
      addNode(label);
      setLabel('');
    }
  };

  const handleAddEdge = () => {
    if (source && target) {
      addEdge(source, target);
      setSource('');
      setTarget('');
    }
  };

  return (
    <div className="input-form">
      <h3>Add a Node</h3>
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Node Label"
      />
      <button onClick={handleAddNode}>Add Node</button>

      <h3>Add an Edge<br></br>(to join the edges use node id your node id is your node adding number like '1' and '2')</h3>
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Source Node ID"
      />
      <input
        type="text"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Target Node ID"
      />
      <button onClick={handleAddEdge}>Add Edge</button>
    </div>
  );
};

export default InputForm;
