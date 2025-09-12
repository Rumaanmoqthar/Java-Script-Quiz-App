import React, { useState } from "react";
import Question from "./Question.jsx";
import StartQuiz from "./StartQuiz.jsx";
import NextQuestion from "./NextQuestion.jsx";
import PreviousQuestion from "./PreviousQuestion.jsx";
import ScoreResult from "./ScoreResult.jsx";
import TopicSelect from "./TopicSelect.jsx";
import { quizQuestions } from "./Question.jsx";
import { JsTopicQuestions } from './TopicQuestions.jsx';

// The main application component
function App() {
  // Manages the main application state to control which screen is visible
  const [quizPhase, setQuizPhase] = useState('start');
  // Tracks the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Stores the user's score for the current quiz
  const [score, setScore] = useState(0);
  // Holds the questions for the current topic
  const [currentTopicQuestions, setCurrentTopicQuestions] = useState([]);
  // Stores the name of the current topic
  const [currentTopic, setCurrentTopic] = useState("");
  // Stores the final score from the Core JavaScript quiz to manage unlocking
  const [coreQuizScore, setCoreQuizScore] = useState(0);

  // A Set to track which questions have already been answered correctly
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

  // Function to start the quiz and transition to topic selection
  function handleStartz() {
    setQuizPhase('topic-select');
  }

  // Function to filter questions based on the selected topic
  function handleTopicSelect(topic) {
    let filteredQuestions = [];
    if (topic === "Core JavaScript Concepts") {
      filteredQuestions = quizQuestions;
    } else {
      filteredQuestions = JsTopicQuestions.filter(q => q.topic === topic);
    }
    
    console.log("Selected topic:", topic);
    console.log("Number of questions found:", filteredQuestions.length);

    setCurrentTopicQuestions(filteredQuestions);
    setCurrentTopic(topic);
    setQuizPhase('in-progress');
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions(new Set());
  }

  // Function to check the user's answer and update the score
  function handleAnswerSelected(selectedOption) {
    // Prevents the score from being updated more than once per question
    if (answeredQuestions.has(currentQuestionIndex)) {
      return;
    }

    const currentQuestion = currentTopicQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 10);
      // Adds the question index to the Set of answered questions
      setAnsweredQuestions(prev => new Set(prev.add(currentQuestionIndex)));
    }
  }

  // Function to advance to the next question
  function handleNextQuestion() {
    if (currentQuestionIndex < currentTopicQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // If it's the last question of the Core quiz, store the final score
      if (currentTopic === "Core JavaScript Concepts") {
        setCoreQuizScore(score);
      }
      // Transition to the results page
      setQuizPhase('results');
    }
  }

  // Function to go back to the previous question
  function handlePreviousQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  }

  // Function to reset the quiz and return to topic selection
  function handleRestart() {
    setQuizPhase('topic-select');
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center font-sans p-4 bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        {/* Conditional score display at the top of the app */}
        {quizPhase !== 'start' && (
          <div className="flex justify-end mb-4">
            {quizPhase === 'results' ? (
              <span className="text-xl font-bold text-yellow-300">
                Final Score: {score} Points
              </span>
            ) : (
              <span className="text-sm italic text-gray-400">
                Score will be updated after you answer all questions
              </span>
            )}
          </div>
        )}
        
        {/* Main conditional rendering block for the quiz phases */}
        {quizPhase === 'start' && (
          <StartQuiz onStartQuiz={handleStartz} />
        )}

        {quizPhase === 'topic-select' && (
          <TopicSelect onSelectTopic={handleTopicSelect} coreQuizScore={coreQuizScore} />
        )}

        {quizPhase === 'in-progress' && (
          <>
            {currentTopicQuestions.length > 0 ? (
                <>
                <Question 
                  currentQuestion={currentTopicQuestions[currentQuestionIndex]} 
                  onAnswerSelected={handleAnswerSelected}
                  onNextQuestion={handleNextQuestion}
                />
                <div className="mt-8 flex justify-between items-center">
                  {currentQuestionIndex > 0 ? (
                    <PreviousQuestion onPreviousQuestion={handlePreviousQuestion} />
                  ) : (
                    <div />
                  )}
                  {currentQuestionIndex < currentTopicQuestions.length - 1 ? (
                    <NextQuestion onNextQuestion={handleNextQuestion} />
                  ) : (
                    <button 
                      onClick={handleNextQuestion}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                    >
                      Submit Answers
                    </button>
                  )}
                </div>
                </>
            ) : (
                <div className="text-center p-4">
                    <h2 className="text-xl font-bold mb-4 text-red-400">Error: No questions found for this topic.</h2>
                    <p className="text-sm text-gray-300 mb-6">
                        Please go back and select a different topic.
                    </p>
                    <button 
                      onClick={() => setQuizPhase('topic-select')}
                      className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg"
                    >
                      Back to Topics
                    </button>
                </div>
            )}
          </>
        )}
        {quizPhase === 'results' && (
          <ScoreResult 
            score={score} 
            totalQuestions={currentTopicQuestions.length} 
            onRestart={handleRestart} 
            quizQuestions={currentTopicQuestions}
            currentTopic={currentTopic} 
          />
        )}
      </div>
    </div>
  );
}

export default App;