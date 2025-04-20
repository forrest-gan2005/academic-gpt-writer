import { Request, Response, NextFunction } from 'express';
import { GenerationRequest } from '../types';

// Request validation middleware for generation endpoint
export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { topic, type, tone, wordCount } = req.body as GenerationRequest;

  // Validate topic
  if (!topic || typeof topic !== 'string' || topic.trim().length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Topic is required and must be a non-empty string'
    });
  }

  // Validate type
  if (!type || !['introduction', 'summary', 'email', 'conclusion'].includes(type)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid type. Must be one of: introduction, summary, email, conclusion'
    });
  }

  // Validate tone
  if (!tone || !['academic', 'formal', 'friendly'].includes(tone)) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid tone. Must be one of: academic, formal, friendly'
    });
  }

  // Validate word count
  if (!wordCount || typeof wordCount !== 'number' || wordCount < 50 || wordCount > 1000) {
    return res.status(400).json({
      status: 'error',
      message: 'Word count must be a number between 50 and 1000'
    });
  }

  next();
}; 