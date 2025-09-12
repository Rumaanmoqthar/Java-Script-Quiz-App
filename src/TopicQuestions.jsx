export const JsTopicQuestions = [
  // Topic: Variables & Data Types
  {
    topic: "Variables & Data Types",
    question: "Which keyword is used to declare a variable that cannot be reassigned?",
    choices: ["var", "let", "const", "static"],
    correctAnswer: "const",
    example: "const myConst = 10;"
  },
  {
    topic: "Variables & Data Types",
    question: "Which of the following is NOT a primitive data type in JavaScript?",
    choices: ["String", "Number", "Array", "Boolean"],
    correctAnswer: "Array",
    example: "let numbers = [1, 2, 3];\nconsole.log(typeof numbers); // 'object'\n// Arrays are a type of object, not a primitive."
  },
  {
    topic: "Variables & Data Types",
    question: "What is the result of `typeof null`?",
    choices: ["'null'", "'undefined'", "'object'", "'string'"],
    correctAnswer: "'object'",
    example: "console.log(typeof null); // 'object'"
  },
  {
    topic: "Variables & Data Types",
    question: "What is the main difference between `==` and `===` operators?",
    choices: ["`===` is faster", "`==` performs type coercion", "`===` is for strings only", "There is no difference"],
    correctAnswer: "`==` performs type coercion",
    example: `console.log(5 == "5"); // true\nconsole.log(5 === "5"); // false`
  },
  {
    topic: "Variables & Data Types",
    question: "What will be logged to the console? `console.log(x); var x = 5;`",
    choices: ["5", "0", "ReferenceError", "undefined"],
    correctAnswer: "undefined",
    example: `console.log(x); // undefined\nvar x = 5;`
  },

  // Topic: Functions
  {
    topic: "Functions",
    question: "How do you call a function named `myFunction`?",
    choices: ["call myFunction;", "myFunction()", "call function myFunction", "myFunction"],
    correctAnswer: "myFunction()",
    example: `function myFunction() {\n  console.log('Called!');\n}\nmyFunction();`
  },
  {
    topic: "Functions",
    question: "What does the `return` statement do in a function?",
    choices: ["Stops the function's execution and returns a value", "Prints a value to the console", "Declares a new variable", "Restarts the function"],
    correctAnswer: "Stops the function's execution and returns a value",
    example: `function add(a, b) {\n  return a + b;\n}\nlet result = add(2, 3); // result is 5`
  },
  {
    topic: "Functions",
    question: "Which syntax is used for an arrow function?",
    choices: ["function = () => {}", "() => {}", "=> function() {}", "function => {}"],
    correctAnswer: "() => {}",
    example: `const add = (a, b) => a + b;`
  },
  {
    topic: "Functions",
    question: "What is the difference between a function declaration and a function expression?",
    choices: ["Function expressions are not hoisted", "Function declarations are anonymous", "They are exactly the same", "Function expressions cannot have parameters"],
    correctAnswer: "Function expressions are not hoisted",
    example: `// Hoisted\nmyFuncDecl();\nfunction myFuncDecl() {}\n\n// Not hoisted\n// myFuncExpr(); // Throws an error\nconst myFuncExpr = function() {};`
  },
  {
    topic: "Functions",
    question: "What is a 'closure' in JavaScript?",
    choices: ["A way to close a memory leak", "A function having access to the parent scope, even after the parent function has closed", "The last function called in a script", "A built-in function to close browser windows"],
    correctAnswer: "A function having access to the parent scope, even after the parent function has closed",
    example: `function outer() {\n  const name = 'John';\n  function inner() {\n    console.log(name);\n  }\n  return inner;\n}\n\nconst greet = outer();\ngreet(); // 'John'`
  },

  // Topic: Arrays & Objects
  {
    topic: "Arrays & Objects",
    question: "How do you access the first element of an array named `myArray`?",
    choices: ["myArray[0]", "myArray.first", "myArray(1)", "myArray[1]"],
    correctAnswer: "myArray[0]",
    example: `const myArray = ["apple", "banana"];\nconsole.log(myArray[0]); // "apple"`
  },
  {
    topic: "Arrays & Objects",
    question: "How do you add a new property `color` with value `'blue'` to an object `myObject`?",
    choices: ["myObject.add('color', 'blue')", "myObject.color = 'blue'", "myObject['color'] = 'blue'", "Both B and C"],
    correctAnswer: "Both B and C",
    example: `const myObject = {};\nmyObject.color = "blue";\nmyObject["size"] = "large";`
  },
  {
    topic: "Arrays & Objects",
    question: "Which array method creates a new array with the results of calling a provided function on every element?",
    choices: ["forEach()", "filter()", "map()", "reduce()"],
    correctAnswer: "map()",
    example: `const numbers = [1, 2, 3];\nconst doubled = numbers.map(num => num * 2);\n// doubled is now [2, 4, 6]`
  },
  {
    topic: "Arrays & Objects",
    question: "What is object destructuring?",
    choices: ["A way to delete properties from an object", "A way to extract properties from an object into distinct variables", "A method to combine two objects", "A way to loop through an object's properties"],
    correctAnswer: "A way to extract properties from an object into distinct variables",
    example: `const person = { name: 'Alice', age: 30 };\nconst { name, age } = person;\nconsole.log(name); // 'Alice'`
  },
  {
    topic: "Arrays & Objects",
    question: "Which array method executes a reducer function on each element of the array, resulting in a single output value?",
    choices: ["map()", "reduce()", "concat()", "slice()"],
    correctAnswer: "reduce()",
    example: `const numbers = [1, 2, 3];\nconst sum = numbers.reduce((acc, current) => acc + current, 0);\n// sum is 6`
  },

  // Topic: Asynchronous JavaScript
  {
    topic: "Asynchronous JavaScript",
    question: "What is the purpose of `setTimeout`?",
    choices: ["To set a timer on the webpage", "To pause the entire browser", "To execute a function after a specified delay", "To measure the execution time of a function"],
    correctAnswer: "To execute a function after a specified delay",
    example: `setTimeout(() => {\n  console.log("This message appears after 1 second");\n}, 1000);`
  },
  {
    topic: "Asynchronous JavaScript",
    question: "What is a JavaScript `Promise`?",
    choices: ["A guarantee that a function will execute without errors", "An object representing the eventual completion or failure of an asynchronous operation", "A callback function", "A way to handle synchronous code"],
    correctAnswer: "An object representing the eventual completion or failure of an asynchronous operation",
    example: `const myPromise = new Promise((resolve, reject) => {\n  // async code here\n});`
  },
  {
    topic: "Asynchronous JavaScript",
    question: "What does the `async` keyword do when placed before a function?",
    choices: ["It makes the function run synchronously", "It ensures the function returns a Promise", "It automatically handles all errors", "It makes the function run faster"],
    correctAnswer: "It ensures the function returns a Promise",
    example: `async function fetchData() {\n  const response = await fetch('...');\n  return response.json();\n}`
  },
  {
    topic: "Asynchronous JavaScript",
    question: "What is the role of the 'event loop' in JavaScript?",
    choices: ["To handle user interface events like clicks and keypresses", "To execute code in a loop continuously", "To move operations from the call stack to the callback queue when complete", "To optimize loops in the code"],
    correctAnswer: "To move operations from the call stack to the callback queue when complete",
    example: `console.log(1);\nsetTimeout(() => console.log(2), 0);\nconsole.log(3);\n// Output: 1, 3, 2 (due to event loop)`
  },
  {
    topic: "Asynchronous JavaScript",
    question: "What is the difference between a microtask and a macrotask in the event loop?",
    choices: ["Microtasks always run before macrotasks in the same event loop cycle", "Macrotasks have higher priority", "Microtasks include `setTimeout` and macrotasks include `Promise.then`", "There is no difference"],
    correctAnswer: "Microtasks always run before macrotasks in the same event loop cycle",
    example: `console.log('sync');\nPromise.resolve().then(() => console.log('microtask'));\nsetTimeout(() => console.log('macrotask'), 0);\n// Output: sync, microtask, macrotask`
  },

  // Topic: DOM Manipulation
  {
    topic: "DOM Manipulation",
    question: "How do you select an HTML element by its ID?",
    choices: ["document.querySelector('#id')", "document.getElementById()", "document.selectById()", "Both A and B"],
    correctAnswer: "Both A and B",
    example: `const el = document.getElementById('my-id');\nconst el2 = document.querySelector('#my-id');`
  },
  {
    topic: "DOM Manipulation",
    question: "Which property is used to change the text content of an HTML element?",
    choices: ["textContent", "innerHTML", "text", "Both A and B"],
    correctAnswer: "Both A and B",
    example: `const el = document.getElementById('my-id');\nel.textContent = "New text";\nel.innerHTML = "<b>New</b> HTML";`
  },
  {
    topic: "DOM Manipulation",
    question: "How do you add the class 'highlight' to an element `el`?",
    choices: ["el.class = 'highlight'", "el.addClass('highlight')", "el.className += ' highlight'", "el.classList.add('highlight')"],
    correctAnswer: "el.classList.add('highlight')",
    example: `const el = document.getElementById('my-id');\nel.classList.add('highlight');`
  },
  {
    topic: "DOM Manipulation",
    question: "What is the difference between `innerHTML` and `textContent`?",
    choices: ["They are the same", "innerHTML can be used to insert HTML tags, while textContent treats them as text", "textContent is faster", "innerHTML is deprecated"],
    correctAnswer: "innerHTML can be used to insert HTML tags, while textContent treats them as text",
    example: `// Example HTML: <div id="my-div"><b>Hello</b></div>\nconst el = document.getElementById('my-div');\nconsole.log(el.innerHTML); // "<b>Hello</b>"\nconsole.log(el.textContent); // "Hello"`
  },
  {
    topic: "DOM Manipulation",
    question: "What is 'event bubbling'?",
    choices: ["A memory leak caused by events", "An event on an element is handled first by its most nested ancestor", "An event on an element propagates up to its parent elements", "The process of creating custom events"],
    correctAnswer: "An event on an element propagates up to its parent elements",
    example: `// A click on <li> triggers event on <li>, then <ul>, then <body>, etc.\n<body onclick="alert('body')">\n  <ul onclick="alert('ul')">\n    <li onclick="alert('li')">Click me</li>\n  </ul>\n</body>`
  },

  // Topic: ES6+ Features
  {
    topic: "ES6+ Features",
    question: "What do template literals (using backticks ``) allow you to do?",
    choices: ["Create multi-line strings", "Embed expressions inside a string", "Define templates for web components", "Both A and B"],
    correctAnswer: "Both A and B",
    example: `const name = "World";\nconst greeting = \`Hello, \${name}!\`;\n// Multi-line string\nconst message = \`Line 1\nLine 2\`;`
  },
  {
    topic: "ES6+ Features",
    question: "What is the syntax for the spread operator for arrays?",
    choices: ["***", "...", "&&&", "|||"],
    correctAnswer: "...",
    example: `const arr1 = [1, 2];\nconst arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]`
  },
  {
    topic: "ES6+ Features",
    question: "What is the primary advantage of `let` and `const` over `var`?",
    choices: ["They are shorter to type", "They have block scope", "They can be used in strict mode only", "They are hoisted"],
    correctAnswer: "They have block scope",
    example: `if (true) {\n  let x = 10;\n}\nconsole.log(x); // ReferenceError`
  },
  {
    topic: "ES6+ Features",
    question: "What does the `?.` (optional chaining) operator do?",
    choices: ["It creates a new property if one doesn't exist", "It safely accesses nested properties without causing an error if a property is null or undefined", "It chains multiple promises together", "It converts a value to a boolean"],
    correctAnswer: "It safely accesses nested properties without causing an error if a property is null or undefined",
    example: `const user = null;\nconsole.log(user?.name); // undefined (no error)`
  },
  {
    topic: "ES6+ Features",
    question: "What is the difference between `Promise.all()` and `Promise.race()`?",
    choices: ["There is no difference", "`Promise.all` returns a single value, `Promise.race` returns an array", "`Promise.all` waits for all promises to resolve, `Promise.race` waits for the first promise to settle", "`Promise.race` is a newer syntax for `Promise.all`"],
    correctAnswer: "`Promise.all` waits for all promises to resolve, `Promise.race` waits for the first promise to settle",
    example: `// Promise.all waits for all to complete.\n// Promise.race returns as soon as one completes.`
  },

  // Topic: Error Handling
  {
    topic: "Error Handling",
    question: "Which statement is used to handle exceptions in JavaScript?",
    choices: ["if...else", "switch", "try...catch", "for...in"],
    correctAnswer: "try...catch",
    example: `try {\n  throw new Error("Oops!");\n} catch (error) {\n  console.log(error.message); // "Oops!"\n}`
  },
  {
    topic: "Error Handling",
    question: "What is the purpose of the `finally` block in a `try...catch` statement?",
    choices: ["To declare final variables", "To execute code only if an error occurs", "To execute code regardless of whether an error occurred", "To stop the script execution"],
    correctAnswer: "To execute code regardless of whether an error occurred",
    example: `try {\n  // ...\n} catch (error) {\n  // ...\n} finally {\n  console.log("This always runs");\n}`
  },
  {
    topic: "Error Handling",
    question: "How do you create and throw a custom error in JavaScript?",
    choices: ["throw 'My error message'", "throw new Error('My error message')", "error('My error message')", "Both A and B"],
    correctAnswer: "Both A and B",
    example: `try {\n  throw "My error";\n} catch (e) {\n  console.log(e); // "My error"\n}\n\n// Or, the preferred way:\nthrow new Error("My error message");`
  },
  {
    topic: "Error Handling",
    question: "What is the difference between a `SyntaxError` and a `ReferenceError`?",
    choices: ["They are interchangeable", "SyntaxError is for misspelled code; ReferenceError is for using an undeclared variable", "ReferenceError is for math errors", "SyntaxError is a warning, not an error"],
    correctAnswer: "SyntaxError is for misspelled code; ReferenceError is for using an undeclared variable",
    example: `// SyntaxError\nconst a; \n\n// ReferenceError\nconsole.log(b);`
  },
  {
    topic: "Error Handling",
    question: "What does the global `unhandledrejection` event listen for?",
    choices: ["Network requests that fail", "Functions that return `undefined`", "Promises that are rejected but do not have a `.catch()` handler", "Errors that occur outside of a `try...catch` block"],
    correctAnswer: "Promises that are rejected but do not have a `.catch()` handler",
    example: `// This will trigger an unhandledrejection event\nnew Promise((_, reject) => reject('error'));`
  }
];