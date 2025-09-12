import React from "react";
function PreviousQuestion ({onPreviousQuestion}){
    return(
        <button 
            onClick={onPreviousQuestion}
            className="bg-transparent hover:bg-slate-700 text-slate-300 font-bold py-2 px-6 rounded-lg border border-slate-600 transition-colors focus:outline-none focus:ring-4 focus:ring-slate-600"
        >
            Previous Question
        </button>
    )
}
export default PreviousQuestion;
