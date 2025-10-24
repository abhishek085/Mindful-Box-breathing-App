
export enum BreathingStep {
  In,
  HoldIn,
  Out,
  HoldOut,
}

export interface StepInfo {
  step: BreathingStep;
  instruction: string;
  scale: string;
}
