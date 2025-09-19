import React, { useState, useEffect, useRef } from "react";
import Question from "./Question.jsx";
import StartQuiz from "./StartQuiz.jsx";
import NextQuestion from "./NextQuestion.jsx";
import PreviousQuestion from "./PreviousQuestion.jsx";
import ScoreResult from "./ScoreResult.jsx";
import TopicSelect from "./TopicSelect.jsx";
import { quizQuestions } from "./Question.jsx";
import { JsTopicQuestions } from './TopicQuestions.jsx';

function App() {
  const [quizPhase, setQuizPhase] = useState('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentTopicQuestions, setCurrentTopicQuestions] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("");
  const [coreQuizScore, setCoreQuizScore] = useState(0);
  
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());
  const [expiredQuestions, setExpiredQuestions] = useState(new Set());
  
  // State to hold the timers for each question individually
  const [questionTimers, setQuestionTimers] = useState({});

  // NOTE: The audioRef has been removed from here.

  // This is the master timer effect. It runs only for the current question.
  useEffect(() => {
    if (quizPhase !== 'in-progress') {
      return;
    }

    if (questionTimers[currentQuestionIndex] === undefined) {
      setQuestionTimers(prevTimers => ({
        ...prevTimers,
        [currentQuestionIndex]: 60,
      }));
    }

    const timerId = setInterval(() => {
      setQuestionTimers(prevTimers => {
        const currentTime = prevTimers[currentQuestionIndex];
        
        if (currentTime <= 1) {
          clearInterval(timerId);
          setExpiredQuestions(prev => new Set(prev).add(currentQuestionIndex));
          return { ...prevTimers, [currentQuestionIndex]: 0 };
        }
        
        return { ...prevTimers, [currentQuestionIndex]: currentTime - 1 };
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [quizPhase, currentQuestionIndex, currentTopicQuestions]);

  // NOTE: The useEffect for handling audio has been removed from here.
  // It is now handled inside Question.jsx

  function handleStartz() {
    setQuizPhase('topic-select');
  }

  function handleTopicSelect(topic) {
    let filteredQuestions = [];
    if (topic === "Core JavaScript Concepts") {
      filteredQuestions = quizQuestions;
    } else {
      filteredQuestions = JsTopicQuestions.filter(q => q.topic === topic);
    }

    setCurrentTopicQuestions(filteredQuestions);
    setCurrentTopic(topic);
    setQuizPhase('in-progress');
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnsweredQuestions(new Set());
    setExpiredQuestions(new Set());
    setQuestionTimers({});
  }

  function handleAnswerSelected(selectedOption) {
    if (answeredQuestions.has(currentQuestionIndex) || expiredQuestions.has(currentQuestionIndex)) {
      return;
    }

    const currentQuestion = currentTopicQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(prevScore => prevScore + 10);
    }
    setAnsweredQuestions(prev => new Set(prev).add(currentQuestionIndex));
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < currentTopicQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      if (currentTopic === "Core JavaScript Concepts") {
        setCoreQuizScore(score);
      }
      setQuizPhase('results');
    }
  }

  function handlePreviousQuestion() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  }

  function handleRestart() {
    setQuizPhase('topic-select');
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center font-sans p-4 bg-slate-900">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        {quizPhase !== 'start' && (
          <div className="flex justify-end mb-4 h-8 items-center">
            {quizPhase === 'results' ? (
              <span className="text-xl font-bold text-yellow-300">
                Final Score: {score} Points
              </span>
            ) : (
              <span className="text-sm italic text-gray-400">
                Score will be revealed at the end.
              </span>
            )}
          </div>
        )}
        
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
                  currentQuestionIndex={currentQuestionIndex}
                  totalQuestions={currentTopicQuestions.length}
                  timeLeft={questionTimers[currentQuestionIndex] ?? 60}
                  isExpired={expiredQuestions.has(currentQuestionIndex)}
                  answered={answeredQuestions.has(currentQuestionIndex)}
                  selectedAnswer={currentTopicQuestions[currentQuestionIndex].selectedAnswer}
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