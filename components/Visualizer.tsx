
import React from 'react';
import { StepInfo } from '../types';
import { BreathingStep } from '../types';

interface VisualizerProps {
  stepInfo: StepInfo;
  duration: number;
  isActive: boolean;
}

const Visualizer: React.FC<VisualizerProps> = ({ stepInfo, duration, isActive }) => {
  const { instruction, scale, step } = stepInfo;

  const isGrowing = step === BreathingStep.In;
  const isShrinking = step === BreathingStep.Out;

  // Set transition duration only when changing size, not during holds
  const transitionDuration = (isGrowing || isShrinking) ? duration : 0.5;

  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-8 md:mb-12">
      <div
        className={`absolute inset-0 bg-slate-800 border-2 rounded-3xl transition-all ease-in-out ${
          isActive ? 'border-sky-500 shadow-2xl shadow-sky-500/30' : 'border-slate-600'
        } ${scale}`}
        style={{ transitionDuration: `${transitionDuration}s` }}
      ></div>
      <div className="relative z-10 text-center">
        <span
          className={`text-3xl font-semibold text-slate-100 transition-opacity duration-500 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {instruction}
        </span>
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold text-slate-100 transition-opacity duration-500 ${
            !isActive ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Ready?
        </span>
      </div>
    </div>
  );
};

export default Visualizer;
