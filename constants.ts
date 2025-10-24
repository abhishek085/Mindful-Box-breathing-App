import { BreathingStep, StepInfo } from './types';

export const DEFAULT_DURATION = 4;
export const MIN_DURATION = 2;
export const MAX_DURATION = 10;

export const BREATHING_CYCLE: StepInfo[] = [
  {
    step: BreathingStep.In,
    instruction: 'Breathe In (Nose)',
    scale: 'scale-100',
  },
  {
    step: BreathingStep.HoldIn,
    instruction: 'Hold',
    scale: 'scale-100',
  },
  {
    step: BreathingStep.Out,
    instruction: 'Breathe Out (Mouth)',
    scale: 'scale-50',
  },
  {
    step: BreathingStep.HoldOut,
    instruction: 'Hold',
    scale: 'scale-50',
  },
];