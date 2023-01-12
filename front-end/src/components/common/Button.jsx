import React from "react";

const Button = ({ onClick, value, type, className = "" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        `inline-flex items-center px-4 py-2 bg-gray-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 
           'opacity-25'
           ` + className
      }
    >
      {value}
    </button>
  );
};

export default Button;
