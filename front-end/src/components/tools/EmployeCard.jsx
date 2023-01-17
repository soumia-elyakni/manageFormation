import React from "react";
import { Button } from "../common/Button";
import { SelectFormations } from "../common/SelectFormations";
import { getFormationsByStatus } from '../../services/admin-services'
import { useState, useEffect } from "react";

export const EmployeCard = (props) => {
  const [selectFormation, setSelect] = useState(false)
  const [formations, setFormations] = useState([])

  useEffect(()=>{
    const status = 'Prévue'
    getFormationsByStatus(status)
    .then((res)=>{
        setFormations(res.data)
        console.log(res.data)
    })
},[])

  return (
    <div className="card p-4" style={{ width: "18rem" }}>
      <div className="d-flex flex-row">
      <h4 className="me-1">
         {props.lastName} 
      </h4>
      <h4 className="ms-1">
        {props.firstName} 
      </h4>
      </div>
      <h6> {props.organisme} </h6>
      <h6> {props.email} </h6>

      <div className="float-end">
        <Button
          value=" assigner une formation"
          type="button"
          className={!selectFormation ? "bg-info" : "d-none"}
          onClick={() => setSelect(true)}
        />
        <form className={!selectFormation ? "d-none" : "w-100"} onSubmit="">
          {
            formations.map((formation)=>{
              return(
                <SelectFormations key={formation.id} value={formation.title} />
              )
            })
          }
          <Button
            value="send"
            className="bg-success"
            type="submit"
            onClick={() => {
              setSelect(false);
            }}
          />
        </form>
      </div>
    </div>
  );
};
