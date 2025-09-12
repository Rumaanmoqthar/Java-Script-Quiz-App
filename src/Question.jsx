import React, { useState, useEffect, useRef } from 'react';
import OptionSelect from './OptionSelect.jsx';

// Data for the Core JavaScript quiz
export const quizQuestions = [
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    choices: ["var", "let", "const", "all of the above"],
    correctAnswer: "all of the above",
    example: "var myVar = 1;\nlet myLet = 2;\nconst myConst = 3;"
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    choices: ["var colors = (1:'red', 2:'green', 3:'blue')", 
              "var colors = ['red', 'green', 'blue']", 
              "var colors = 'red', 'green', 'blue'", 
              "var colors = {1:'red', 2:'green', 3:'blue'}"],
    correctAnswer: "var colors = ['red', 'green', 'blue']",
    example: "let colors = ['red', 'green', 'blue'];"
  },
  {
    question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
    choices: ["last()", "put()", "push()", "append()"],
    correctAnswer: "push()",
    example: "let arr = [1, 2];\narr.push(3);\n// arr is now [1, 2, 3]"
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["*", "-", "=", "+"],
    correctAnswer: "=",
    example: "let x = 10; // The '=' is the assignment operator"
  },
  {
    question: "How do you write a comment in JavaScript?",
    choices: [`""`, "// This is a comment", "' This is a comment", "# This is a comment"],
    correctAnswer: "// This is a comment",
    example: "// This is a single-line comment"
  },
  {
    question: "Which method can be used to convert a string to an integer in JavaScript?",
    choices: ["parseInt()", "parseFloat()", "Number()", "All of the above"],
    correctAnswer: "All of the above",
    example: `let str = "123";\nlet num1 = parseInt(str);\nlet num2 = Number(str);`
  },
  {
    question: "What is the output of: console.log(typeof null);",
    choices: ["'object'", "'null'", "'undefined'", "'number'"],
    correctAnswer: "'object'",
    example: "console.log(typeof null); // 'object'"
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    choices: ["Boolean", "Undefined", "Float", "Symbol"],
    correctAnswer: "Float",
    example: "// Float is not a data type in JS.\n// All numbers (including decimals) are of type 'number'."
  },
  {
    question: "How do you define a function in JavaScript?",
    choices: ["function myFunc() {}", "def myFunc() {}", "func myFunc() {}", "function:myFunc() {}"],
    correctAnswer: "function myFunc() {}",
    example: "function greet() {\n  console.log('Hello');\n}"
  },
  {
    question: "Which statement is used to stop a loop in JavaScript?",
    choices: ["stop", "exit", "break", "return"],
    correctAnswer: "break",
    example: "for (let i = 0; i < 5; i++) {\n  if (i === 3) {\n    break; // Loop will stop here\n  }\n}"
  }
];

// This component renders a single quiz question and its options.
function Question({ currentQuestion, onAnswerSelected, onNextQuestion }) { 
  // State to track the currently selected option
  const [selectedOption, setSelectedOption] = useState(null);
  // State for the question timer
  const [timeLeft, setTimeLeft] = useState(60); 
  // Ref to store the timer ID, which persists across renders
  const timerRef = useRef(null);

  // Effect to reset the timer and selected option when the question changes
  useEffect(() => {
    setSelectedOption(null);
    setTimeLeft(60);
    timerRef.current = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);
    // Cleanup function to clear the interval on unmount or dependency change
    return () => clearInterval(timerRef.current);
  }, [currentQuestion]);

  // Effect to handle the time-out logic
  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerRef.current);
      if (onNextQuestion) {
        onNextQuestion();
      }
    }
  }, [timeLeft, onNextQuestion]);

  // Handler for when a user selects an option
  function handleOptionSelect(option) {
    setSelectedOption(option);
    if (onAnswerSelected) {
      onAnswerSelected(option);
    }
  }

  return (
    <div className="question-container">
      <div className="flex justify-between items-center mb-4">
        <h2 className="timer text-2xl font-bold text-blue-700">Time Left: {timeLeft}s</h2>
        <span className="text-lg font-semibold text-green-500">
          +10 Points
        </span>
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-slate-100 mb-6">
        {currentQuestion.question}
      </h2>
      {selectedOption && <h2>You selected: {selectedOption}</h2>}
      <div>
        {currentQuestion.choices.map((choice, index) => (
          <OptionSelect 
            key={index} 
            option={choice} 
            selectedOption={selectedOption}
            onSelect={handleOptionSelect} 
          />
        ))}
      </div>
    </div>
  );
}

export default Question;