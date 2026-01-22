'use client';

import { useState } from 'react';
import SpectrumSelector from '@/components/SpectrumSelector';
import QuestionInput from '@/components/QuestionInput';
import ResponseDisplay from '@/components/ResponseDisplay';
import { PerspectiveId } from '@/lib/types';
import { perspectives } from '@/lib/prompts';

export default function ExplorePage() {
  const [selectedPerspective, setSelectedPerspective] = useState<PerspectiveId | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [lastQuestion, setLastQuestion] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleAskQuestion = async (question: string) => {
    if (!selectedPerspective) return;
    
    setIsLoading(true);
    setError(null);
    setLastQuestion(question);

    try {
      const res = await fetch('/api/generate-response', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          perspectiveId: selectedPerspective,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to generate response');
      }

      setResponse(data.response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setResponse(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAskAnother = () => {
    setResponse(null);
    setError(null);
  };

  const handleTryDifferent = () => {
    setResponse(null);
    setError(null);
    setSelectedPerspective(null);
  };

  const selectedPerspectiveData = selectedPerspective 
    ? perspectives.find(p => p.id === selectedPerspective)
    : null;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Explore Political Perspectives
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Select a perspective from the spectrum, then ask any question to see how 
            someone with that worldview might respond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Spectrum Selector */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-gray-900 text-center mb-6">
                1. Choose a Perspective
              </h2>
              <SpectrumSelector 
                selectedPerspective={selectedPerspective}
                onSelectPerspective={setSelectedPerspective}
              />
            </div>
          </div>

          {/* Right Column: Question Input or Response */}
          <div className="flex flex-col">
            {!response ? (
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 h-full">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  2. Ask Your Question
                </h2>
                
                {/* Selected perspective indicator */}
                {selectedPerspectiveData && (
                  <div 
                    className="mb-6 p-4 rounded-lg border-l-4"
                    style={{ 
                      borderColor: selectedPerspectiveData.color,
                      backgroundColor: selectedPerspectiveData.color + '10'
                    }}
                  >
                    <p className="text-sm text-gray-600">
                      Responding from the perspective of:
                    </p>
                    <p 
                      className="font-semibold text-lg"
                      style={{ color: selectedPerspectiveData.color }}
                    >
                      {selectedPerspectiveData.name}
                    </p>
                  </div>
                )}

                <QuestionInput 
                  onSubmit={handleAskQuestion}
                  isLoading={isLoading}
                  disabled={!selectedPerspective}
                />

                {/* Error display */}
                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-red-500 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-red-800 font-medium">Error</p>
                        <p className="text-red-600 text-sm">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tips */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">
                    💡 Tips for great questions:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ask about current events or policy issues</li>
                    <li>• Try &quot;What do you think about...&quot; questions</li>
                    <li>• Explore controversial topics for diverse perspectives</li>
                    <li>• Compare the same question across different perspectives</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  3. Explore the Response
                </h2>
                {selectedPerspectiveData && (
                  <ResponseDisplay 
                    response={response}
                    perspective={selectedPerspectiveData}
                    question={lastQuestion}
                    onAskAnother={handleAskAnother}
                    onTryDifferent={handleTryDifferent}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Educational sidebar */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Why This Matters</h3>
              <p className="mt-2 text-gray-600">
                Understanding how different political perspectives frame issues is crucial for productive 
                dialogue in a democracy. By exploring these perspectives, you can better understand the 
                values, concerns, and reasoning that drive different viewpoints—even ones you disagree with.
                This tool is designed for education and empathy-building, not to advocate for any particular position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
