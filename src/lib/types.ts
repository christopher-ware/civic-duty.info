// Political perspective types
export type PerspectiveId = 
  | 'far-right'
  | 'center-right'
  | 'moderate-conservative'
  | 'far-left'
  | 'progressive'
  | 'center-left'
  | 'cynical';

export type SpectrumType = 'blue' | 'red' | 'black';

export interface Perspective {
  id: PerspectiveId;
  name: string;
  spectrum: SpectrumType;
  description: string;
  color: string;
  hoverColor: string;
  angle: number; // Position on the circular dial (degrees)
}

export interface GenerateResponseRequest {
  question: string;
  perspectiveId: PerspectiveId;
}

export interface GenerateResponseResponse {
  response: string;
  perspective: string;
  perspectiveId: PerspectiveId;
}

export interface ApiError {
  error: string;
  message: string;
}
