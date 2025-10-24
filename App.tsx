import React, { useState, useEffect, useCallback } from 'react';
import { BREATHING_CYCLE, DEFAULT_DURATION } from './constants';
import Visualizer from './components/Visualizer';
import Controls from './components/Controls';

const App: React.FC = () => {
  const [duration, setDuration] = useState<number>(DEFAULT_DURATION);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [roundsCompleted, setRoundsCompleted] = useState<number>(0);

  const currentStepInfo = BREATHING_CYCLE[stepIndex];

  useEffect(() => {
    let timer: number | undefined;

    if (isActive) {
      timer = window.setTimeout(() => {
        setStepIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % BREATHING_CYCLE.length;
          // A round is complete when we loop back to the first step
          if (nextIndex === 0) {
            setRoundsCompleted(prevRounds => prevRounds + 1);
          }
          return nextIndex;
        });
      }, duration * 1000);
    } else {
      // Reset to the beginning when stopped
      setStepIndex(0);
      setRoundsCompleted(0);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isActive, stepIndex, duration]);

  const handleToggle = useCallback(() => {
    setIsActive(prev => !prev);
  }, []);

  const handleDurationChange = useCallback((newDuration: number) => {
    setDuration(newDuration);
  }, []);

  return (
    <main className="bg-slate-900 min-h-screen flex flex-col items-center justify-center text-slate-200 font-sans p-4 overflow-hidden">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-400">Box Breathing</h1>
        <p className="text-slate-400 mt-2 text-lg">Calm your mind, one breath at a time.</p>
        <p className="text-xl text-slate-300 mt-4" aria-live="polite">
          Rounds: <span className="font-bold">{roundsCompleted}</span>
        </p>
      </div>

      <Visualizer
        stepInfo={currentStepInfo}
        duration={duration}
        isActive={isActive}
      />

      <Controls
        duration={duration}
        isActive={isActive}
        onDurationChange={handleDurationChange}
        onToggle={handleToggle}
      />
    </main>
  );
};

export default App;