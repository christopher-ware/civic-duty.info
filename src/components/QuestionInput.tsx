'use client';

import { useState } from 'react';

interface QuestionInputProps {
  onSubmit: (question: string) => void;
  isLoading: boolean;
  disabled: boolean;
}

export default function QuestionInput({ 
  onSubmit, 
  isLoading, 
  disabled 
}: QuestionInputProps) {
  const [question, setQuestion] = useState('');
  const maxLength = 500;
  const remaining = maxLength - question.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question.trim() && !isLoading && !disabled) {
      onSubmit(question.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value.slice(0, maxLength))}
          placeholder="Ask a question about any political or social issue..."
          className={`w-full p-4 pr-20 border rounded-xl resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
            disabled 
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed border-gray-200' 
              : 'bg-white border-gray-300 hover:border-gray-400'
          }`}
          rows={4}
          disabled={disabled || isLoading}
          aria-label="Question input"
        />
        
        {/* Character counter */}
        <div className={`absolute bottom-3 right-3 text-sm ${
          remaining < 50 ? 'text-amber-600' : 'text-gray-400'
        }`}>
          {remaining}
        </div>
      </div>

      {/* Disabled message */}
      {disabled && (
        <p className="mt-2 text-amber-600 text-sm flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Please select a perspective from the dial first
        </p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={disabled || isLoading || !question.trim()}
        className={`mt-4 w-full py-3 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center ${
          disabled || isLoading || !question.trim()
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg'
        }`}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Response...
          </>
        ) : (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Ask Question
          </>
        )}
      </button>
    </form>
  );
}
