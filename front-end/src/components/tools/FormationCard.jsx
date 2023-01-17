import { Button } from '../common/Button'
import React from 'react'

export const FormationCard = (props) => {
  //span status couleur a condition warning pour prévue success pour en cours danger pour terminé
  return (
    <div className="card" style={{width :"18rem"}}>
  {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
  <div className="card-body">
    <h5 className="card-title">formation title</h5>
    <p className="card-text">description</p>
    <div>
      <p>date</p>
      <p>date</p>
      <span className=''>status</span> 
    </div>
    <div>
      <Button type="button" onClick="" value="reLance" className="bg-info"/>
    </div>
  </div>
</div>
  )
}
