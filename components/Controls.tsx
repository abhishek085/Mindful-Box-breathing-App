
import React from 'react';
import { MIN_DURATION, MAX_DURATION } from '../constants';

interface ControlsProps {
  duration: number;
  isActive: boolean;
  onDurationChange: (duration: number) => void;
  onToggle: () => void;
}

const Controls: React.FC<ControlsProps> = ({ duration, isActive, onDurationChange, onToggle }) => {
  return (
    <div className="w-full max-w-sm flex flex-col items-center gap-6">
      <button
        onClick={onToggle}
        className={`px-12 py-4 text-xl font-bold text-white rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 ${
          isActive
            ? 'bg-red-600 hover:bg-red-500 focus:ring-red-400'
            : 'bg-sky-600 hover:bg-sky-500 focus:ring-sky-400'
        }`}
      >
        {isActive ? 'Stop' : 'Start'}
      </button>

      <div className="w-full flex flex-col items-center">
        <label htmlFor="duration-slider" className="mb-2 text-slate-400">
          Duration: <span className="font-bold text-slate-200">{duration} seconds</span>
        </label>
        <input
          id="duration-slider"
          type="range"
          min={MIN_DURATION}
          max={MAX_DURATION}
          step="1"
          value={duration}
          onChange={(e) => onDurationChange(parseInt(e.target.value, 10))}
          disabled={isActive}
          className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
};

export default Controls;
