import React from 'react'
import { Link } from "react-router-dom";

export const OrganismeCard = () => {
  return (

<div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Organisme name</h5>
    <h6 className="card-subtitle mb-2 text-muted">Ville</h6>
    <p className="card-text"> Address</p>
    <Link to="#" className="card-link">voir les employés</Link>
  </div>
</div>

  )
}
