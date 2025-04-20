import { useState } from 'react';
import axios from 'axios';
import { GenerationRequest, GenerationResponse, GenerationError } from '../types';

const API_URL = 'http://localhost:8888/generate';

export const useGeneration = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<GenerationError | null>(null);

  const generate = async (request: GenerationRequest) => {
    setLoading(true);
    setError(null);
    setResult('');

    try {
      const response = await axios.post<GenerationResponse>(API_URL, request);
      setResult(response.data.result);
    } catch (err) {
      const error: GenerationError = {
        message: 'Error generating text',
        code: err instanceof Error ? err.message : 'UNKNOWN_ERROR'
      };
      setError(error);
      setResult('');
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, generate };
}; 