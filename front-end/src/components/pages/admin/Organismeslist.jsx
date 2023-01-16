import React from 'react'
import { OrganismeCard } from '../../tools/OrganismeCard'
import Button from '../../common/Button'
import { Link } from 'react-router-dom'

export const Organismeslist = () => {
  return (


    
    <div>

        <div>
            <Link to='/addOrganisme'>
           <Button type="button" value="Nouveau Organisme"/>
           </Link>
        </div>

        <div>
        <OrganismeCard />
        </div>
    </div>
  )
}
