import React from 'react'
import { Link } from "react-router-dom";

export const OrganismeCard = (props) => {
  return (

<div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.ville}</h6>
    <p className="card-text"> {props.adress}</p>
    <p>{props.phone}</p>
    <Link to="#" className="card-link">voir les employés</Link>
  </div>
</div>

  )
}
