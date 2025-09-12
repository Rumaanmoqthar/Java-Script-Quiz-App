import React from "react";

function NextQuestion ({onNextQuestion}){
    return(
        <button 
            onClick={onNextQuestion}
            className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-500"
        >
            Next Question
        </button>
    )
}
export default NextQuestion;
