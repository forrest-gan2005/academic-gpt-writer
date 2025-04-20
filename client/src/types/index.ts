export interface GenerationRequest {
  topic: string;
  type: GenerationType;
  tone: Tone;
  wordCount: number;
}

export type GenerationType = 'introduction' | 'summary' | 'email' | 'conclusion';
export type Tone = 'academic' | 'formal' | 'friendly';

export interface GenerationResponse {
  result: string;
}

export interface GenerationError {
  message: string;
  code?: string;
} 