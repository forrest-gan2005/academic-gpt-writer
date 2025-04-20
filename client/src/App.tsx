import { useState } from 'react';
import { useGeneration } from './hooks/useGeneration';
import { InputField } from './components/InputField';
import { SelectField } from './components/SelectField';
import { GenerationType, Tone } from './types';
import './App.css';

const GENERATION_TYPES: { value: GenerationType; label: string }[] = [
  { value: 'introduction', label: 'Introduction' },
  { value: 'summary', label: 'Summary' },
  { value: 'email', label: 'Email' },
  { value: 'conclusion', label: 'Conclusion' }
];

const TONES: { value: Tone; label: string }[] = [
  { value: 'academic', label: 'Academic' },
  { value: 'formal', label: 'Formal' },
  { value: 'friendly', label: 'Friendly' }
];

function App() {
  const [topic, setTopic] = useState('');
  const [type, setType] = useState<GenerationType>('introduction');
  const [tone, setTone] = useState<Tone>('academic');
  const [wordCount, setWordCount] = useState(150);
  const { result, loading, error, generate } = useGeneration();

  const handleGenerate = () => {
    generate({ topic, type, tone, wordCount });
  };

  return (
    <div className="app-container">
      <h1>🎓 Academic Writing Assistant</h1>

      <div className="form-container">
        <InputField
          label="📝 Topic"
          value={topic}
          onChange={setTopic}
          placeholder="Enter your topic"
        />

        <SelectField
          label="📄 Type"
          value={type}
          onChange={(value) => setType(value as GenerationType)}
          options={GENERATION_TYPES}
        />

        <SelectField
          label="🎭 Tone"
          value={tone}
          onChange={(value) => setTone(value as Tone)}
          options={TONES}
        />

        <InputField
          label="🔢 Word Count"
          value={wordCount}
          onChange={(value) => setWordCount(Number(value))}
          type="number"
        />

        <button
          onClick={handleGenerate}
          disabled={loading || !topic.trim()}
          className="generate-button"
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error.message}
        </div>
      )}

      {result && (
        <div className="result-container">
          {result}
        </div>
      )}
    </div>
  );
}

export default App;
