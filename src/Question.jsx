import React, { useState, useEffect } from 'react';
import OptionSelect from './OptionSelect.jsx';

// quizQuestions array remains the same...
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


function Question({ currentQuestion, onAnswerSelected, currentQuestionIndex, totalQuestions, timeLeft, isExpired }) { 
  const [selectedOption, setSelectedOption] = useState(null);

  // This effect resets the selected option when the question changes.
  useEffect(() => {
    setSelectedOption(null);
  }, [currentQuestion]);

  function handleOptionSelect(option) {
    // Prevent selecting an option if the time has expired.
    if (isExpired) return;

    setSelectedOption(option);
    if (onAnswerSelected) {
      onAnswerSelected(option);
    }
  }

  return (
    <div className="question-container">
      <div className="flex justify-between items-center mb-4">
        <h2 
          className={`timer text-2xl font-bold px-4 py-2 rounded-lg shadow-md transition-colors duration-500 
            ${timeLeft <= 10 ? 'bg-red-500 text-white animate-pulse' : 'bg-blue-100 text-blue-700'}`}
        >
          Time Left: {timeLeft}s
        </h2>
        <span className="text-lg font-bold text-green-500 bg-green-100 px-4 py-2 rounded-lg">
          +10 Points
        </span>
      </div>
      
      <h3 className="text-xl text-slate-400 mb-2">Question {currentQuestionIndex + 1} of {totalQuestions}</h3>

      <h2 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-6 leading-relaxed">
        {currentQuestion.question}
      </h2>
      
      {/* Inform the user that time is up and they cannot answer */}
      {isExpired && (
        <div className="text-center p-3 mb-4 bg-red-900 border border-red-700 rounded-lg">
          <p className="font-bold text-red-300">Time's up for this question!</p>
        </div>
      )}
      
      <div>
        {currentQuestion.choices.map((choice, index) => (
          <OptionSelect 
            key={index} 
            option={choice} 
            selectedOption={selectedOption}
            onSelect={handleOptionSelect}
            // Pass the disabled status to the OptionSelect component
            isDisabled={isExpired}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;