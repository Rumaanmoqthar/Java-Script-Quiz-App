import React from 'react';

function OptionSelect({ option, selectedOption, onSelect, isDisabled }) {
  const isSelected = selectedOption === option;

  // Define base classes for the button
  const baseClasses = "w-full text-left p-4 my-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2";

  // Define classes for different states
  const defaultClasses = "bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-cyan-500 focus:ring-cyan-400";
  const selectedClasses = "bg-cyan-600 border-cyan-400 ring-2 ring-cyan-400";
  const disabledClasses = "bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed";

  // Combine classes based on the current state
  const buttonClasses = `${baseClasses} ${
    isDisabled ? disabledClasses : (isSelected ? selectedClasses : defaultClasses)
  }`;

  return (
    <button
      onClick={() => onSelect(option)}
      disabled={isDisabled}
      className={buttonClasses}
    >
      {option}
    </button>
  );
}

export default OptionSelect;