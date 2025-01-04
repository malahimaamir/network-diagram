import React from 'react';
import { DiagramProvider } from './context/DiagramContext';
import InputForm from './components/InputForm';
import Diagram from './components/Diagram';
import './styles/Diagram.css';

const App: React.FC = () => {
  return (
    <DiagramProvider>
      <div className="app">
        <h1>Network Diagram</h1>
        <InputForm />
        <Diagram />
      </div>
    </DiagramProvider>
  );
};

export default App;
