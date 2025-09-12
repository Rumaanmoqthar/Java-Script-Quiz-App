import React from "react";

// Reusable component for a single quiz option button
function OptionSelect({ option, onSelect, isSelected }) {
  const baseClasses = "w-full p-4 border-2 rounded-lg text-left transition-colors duration-200 focus:outline-none focus:ring-4";
  const selectedClasses = "bg-cyan-500 border-cyan-400 text-white font-semibold focus:ring-cyan-300";
  const defaultClasses = "bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-slate-500 focus:ring-slate-500";
  
  return (
    <button 
      onClick={() => onSelect(option)}
      className={`${baseClasses} ${isSelected ? selectedClasses : defaultClasses}`}
    >
      {option}
    </button>
  );
}
export default OptionSelect;