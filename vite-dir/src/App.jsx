import { useState } from 'react';
import ElementImages from "./ElementImages.jsx"
import ControlButtons from "./ControlButtons.jsx"
import './App.css';

function App() {
  const [start, setStart] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleStart = () => {
    setStart(true);
    setTimeout(() => setFinished(true), 1000);
  };

  const handleReset = () => {
    setStart(false);
    setFinished(false);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
      <ElementImages start={start} finished={finished} />
      <ControlButtons onStart={handleStart} onReset={handleReset} disabled={start} />
    </div>
  );
}

export default App;
