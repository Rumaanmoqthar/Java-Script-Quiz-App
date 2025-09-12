import React from 'react';

// The component now receives a prop, which we've named onStartQuiz
function StartQuiz({ onStartQuiz }) {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 text-cyan-400">Welcome to the JavaScript Quiz</h1>
      <p className="text-slate-400 mb-8">Test your knowledge and see how you score!</p>
      <button 
        onClick={onStartQuiz}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default StartQuiz;
