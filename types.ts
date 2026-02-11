
export interface TimelineEntry {
  time: string;
  title: string;
  description: string;
  touchpoint?: string;
  type: 'home' | 'school' | 'social' | 'creative';
}

export interface ProblemNeed {
  title: string;
  problem: string;
  urgency: string;
  impact: string[];
  underlyingNeed: string;
}

export interface Touchpoint {
  category: 'Analoog' | 'Digitaal' | 'Sociaal';
  items: string[];
}
