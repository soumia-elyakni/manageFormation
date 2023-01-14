import React from 'react'


export const Input = props => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder= {props.placeholder}
      name={props.name}
      className={`w-full px-2 pb-3 text-primary outline-none text-base font-light rounded-2 my-2 mx-1 ${props.className}`}
    />
  )
}


