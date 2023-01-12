import React from 'react'

export const Input = (type, value, className, onChange) => {
  return (
    <input type={type} value={value} onChange={onChange} className={`w-full px-2 pb-1.5 text-primary outline-none text-base font-light rounded-md` + className } />
  )
}
