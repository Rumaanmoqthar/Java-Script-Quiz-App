import React from 'react';

// === CHANGE IS HERE ===
// Array of quotes to be displayed randomly on the results screen
const quotes = [
  { text: "The only way to learn a new programming language is by writing programs in it.", author: "Dennis Ritchie" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Knowledge is power.", author: "Francis Bacon" }
];

function ScoreResult({ score, totalQuestions, onRestart, quizQuestions, currentTopic }) {
  const isPassingScore = score >= 60;
  
  // Select a random quote to display
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
        Quiz Complete!
      </h2>
      
      <p className="text-6xl font-extrabold mb-4 text-cyan-400">
        {score} <span className="text-3xl text-slate-400">/ {totalQuestions * 10}</span>
      </p>
      
      {/* === CHANGE IS HERE === */}
      {/* This new block displays the randomly selected quote */}
      <div className="my-6 italic text-slate-400 border-l-4 border-slate-600 pl-4">
        <p>"{randomQuote.text}"</p>
        <p className="text-right mt-1 text-sm font-semibold">- {randomQuote.author}</p>
      </div>
      
      {currentTopic === "Core JavaScript Concepts" ? (
        isPassingScore ? (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-400 rounded-lg">
            <h3 className="text-xl font-bold text-green-400">Congratulations! 🎉</h3>
            <p className="text-sm text-green-200 mt-2">
              You have unlocked other important topics of the JavaScript question quiz.
              Please click the "Restart Quiz" button to see the unlocked topics.
            </p>
          </div>
        ) : (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-400 rounded-lg">
            <h3 className="xl font-bold text-red-400">Please Try Again</h3>
            <p className="text-sm text-red-200 mt-2">
              You need a score of at least 60 points to unlock new topics.
              Click "Restart Quiz" to give it another shot!
            </p>
          </div>
        )
      ) : (
        <div className="mb-6 p-4 bg-purple-500/20 border border-purple-400 rounded-lg">
          <h3 className="text-xl font-bold text-purple-400">Great Job! 👍</h3>
          <p className="text-sm text-purple-200 mt-2">
            You have completed the quiz for the {currentTopic} topic.
            Click "Restart Quiz" to try another!
          </p>
        </div>
      )}

      <button 
        onClick={onRestart}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 mb-10 focus:outline-none focus:ring-4 focus:ring-cyan-300"
      >
        Restart Quiz
      </button>
           
      <div className="text-left">
        <h3 className="text-2xl font-semibold mb-4 border-b border-slate-700 pb-2">Review Your Answers:</h3>
        <ul className="space-y-6 max-h-80 overflow-y-auto pr-2">
          {quizQuestions.map((question, index) => (
            <li key={index} className="bg-slate-700/50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg text-slate-200">{index + 1}. {question.question}</h4>
              <p className="mt-2 text-green-400">
                <strong>Correct Answer:</strong> {question.correctAnswer}
              </p>
              <div className="bg-slate-900/70 p-3 rounded-md mt-3 text-sm">
                <pre><code className="text-cyan-300 font-mono">
                    {question.example}
                </code></pre>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ScoreResult;