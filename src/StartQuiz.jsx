import React from 'react';

function StartQuiz({ onStartQuiz }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-slate-800 rounded-lg">
      
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold mb-2 text-cyan-400 leading-tight">
          Welcome to the<br />JavaScript Quiz!
        </h1>
        <p className="text-xl text-slate-300">
          Sharpen your skills with our comprehensive quiz.
        </p>
      </div>

      {/* Feature List Section */}
      <div className="w-full max-w-md p-6 bg-slate-700 rounded-xl shadow-inner mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-white border-b border-slate-600 pb-2">
          What You'll Experience:
        </h2>
        <ul className="space-y-3 text-left text-slate-200">
          <li className="flex items-center">
            <span className="text-cyan-400 text-2xl mr-3">🚀</span>
            <span className="text-lg">Interactive, topic-based quizzes</span>
          </li>
          <li className="flex items-center">
            <span className="text-yellow-300 text-2xl mr-3">💡</span>
            <span className="text-lg">Detailed answers with code examples</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-400 text-2xl mr-3">✅</span>
            <span className="text-lg">Instant feedback and a live points system</span>
          </li>
          <li className="flex items-center">
            <span className="text-purple-400 text-2xl mr-3">⏳</span>
            <span className="text-lg">A timer for each question to test your speed</span>
          </li>
        </ul>
      </div>

      {/* Call to Action Button */}
      <button 
        onClick={onStartQuiz}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-12 rounded-lg text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300 shadow-xl"
      >
        Start Quiz
      </button>

      {/* Footer / Credit */}
      <p className="text-sm text-slate-500 mt-8">
        A project by Rumaan Moqthar
      </p>

    </div>
  );
}

export default StartQuiz;