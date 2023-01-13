import React from 'react'

export const Input = props => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md ${props.className}`}
    />
  )
}


