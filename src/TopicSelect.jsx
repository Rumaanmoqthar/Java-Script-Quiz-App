import React from 'react';
import { JsTopicQuestions } from './TopicQuestions';

function TopicSelect({ onSelectTopic, coreQuizScore }) {
  const topics = [
    "Core JavaScript Concepts",
    "Variables & Data Types",
    "Functions",
    "Arrays & Objects",
    "Asynchronous JavaScript",
    "DOM Manipulation",
    "ES6+ Features",
    "Error Handling"
  ];
  
  const isUnlocked = coreQuizScore >= 60;

  return (
    <div className="topic-select-container text-center p-6 bg-slate-800 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold mb-8 text-cyan-400">Select a Topic</h2>
      
      {/* Use a CSS Grid for a clean, professional layout with even gaps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {topics.map(topic => {
          const isCoreTopic = topic === "Core JavaScript Concepts";
          const isLocked = !isCoreTopic && !isUnlocked;
          
          return (
            <div key={topic} className="relative group">
              <button 
                onClick={() => onSelectTopic(topic)}
                disabled={isLocked}
                className={`
                  w-full h-full p-6 text-left rounded-lg transition-all duration-300 transform 
                  ${isLocked 
                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed border-2 border-slate-600'
                    : 'bg-slate-700 hover:bg-slate-600 border-2 border-slate-600 text-slate-200'
                  }
                  ${!isLocked && 'hover:scale-105'}
                `}
              >
                <div className="flex items-center space-x-4">
                    {/* Add a simple icon for professional look */}
                    <span className="text-3xl">
                        {isCoreTopic ? '🌟' : isLocked ? '🔒' : '📚'}
                    </span>
                    <span className="text-lg font-semibold">{topic}</span>
                </div>
              </button>
              {isLocked && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-sm font-semibold p-2 bg-slate-900/80 rounded-lg whitespace-nowrap z-10 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-yellow-400">Locked!</span><br/>
                  Get 60 points in "Core JavaScript Concepts" to unlock.
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopicSelect;