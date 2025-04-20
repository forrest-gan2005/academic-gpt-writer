// Type definitions for the generation request
export interface GenerationRequest {
  topic: string;
  type: GenerationType;
  tone: Tone;
  wordCount: number;
}

// Available generation types
export type GenerationType = 'introduction' | 'summary' | 'email' | 'conclusion';

// Available tone options
export type Tone = 'academic' | 'formal' | 'friendly';

// API response type
export interface GenerationResponse {
  result: string;
}

// Error response type
export interface GenerationError {
  message: string;
  code?: string;
} 