import React from "react";


const Button = props => {
  return (
    <button
      
      type={props.type}
      className={
        `inline-flex items-center w-100 h-50 px-4 py-2  border border-transparent rounded-2 font-semibold text-xs my-2  text-black tracking-widest active:bg-green-900 transition ease-in-out duration-150 
           'opacity-25' ${props.className} ` 
      }
    >
      {props.value}
    </button>
  );
};

export default Button;
