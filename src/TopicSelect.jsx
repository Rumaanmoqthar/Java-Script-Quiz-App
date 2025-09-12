import React from 'react';
import { JsTopicQuestions } from './TopicQuestions';

// The component now takes onSelectTopic and coreQuizScore as props
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
  
  // Determine if the topics should be unlocked
  const isUnlocked = coreQuizScore >= 60;

  return (
    <div className="topic-select-container text-center">
      <h2 className="text-2xl font-bold mb-4">Select a Topic to Start</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {topics.map(topic => {
          const isCoreTopic = topic === "Core JavaScript Concepts";
          const isLocked = !isCoreTopic && !isUnlocked;
          
          return (
            <div key={topic} className="relative group">
              <button 
                onClick={() => onSelectTopic(topic)}
                disabled={isLocked}
                className={`
                  font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105
                  focus:outline-none focus:ring-4
                  ${isLocked 
                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                    : 'bg-cyan-500 hover:bg-cyan-600 text-white focus:ring-cyan-300'
                  }
                `}
              >
                {topic}
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