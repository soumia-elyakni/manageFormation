import React from 'react'


export const SelectFormations = (props) => {
    

  return (
    <select name="formations">
         <option key={props.key} value={props.value}>{props.value}</option>
    </select>
  )
}
