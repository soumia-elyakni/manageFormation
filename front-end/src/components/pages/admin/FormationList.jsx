import React from 'react'
import {Button} from '../../common/Button';
import {Link} from 'react-router-dom'
import { FormationCard } from '../../tools/FormationCard';


export const FormationList = () => {
    return (
        <div>
          <div className="d-flex flex-row justify-content-end">
            <Link to="/admin/addFormation" className="w-25 h-50 ">
              <Button type="button" value="Ajouter une Formation" />
            </Link>
          </div>
          <div>
            <FormationCard/>
          </div>
    
          {/* <div className="row py-4 justify-content-between">
            {employes.map((employe) => {
              return (
                <EmployeCard
                  firstName={employe.first_name}
                  lastName={employe.last_name}
                  email={employe.email}
                  organisme={employe.organisme}
                />
              );
            })}
          </div> */}
        </div>
      );
}
