import React from "react";
import { EmployeCard } from "../../tools/EmployeCard";
import { getEmployes } from "../../../services/admin-services";
import {Button} from "../../common/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const EmployeList = () => {
  const [employes, setEmployes] = useState([]);

  useEffect(() => {
    getEmployes()
      .then((res) => {
        setEmployes(res.data);
        console.log(res.data); //return array of objects
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="d-flex flex-row justify-content-end">
        <Link to="/admin/addEmploye" className="w-25 h-50 ">
          <Button type="button" value="Ajouter un Employe" />
        </Link>
      </div>

      <div className="row py-4 justify-content-between">
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
      </div>
    </div>
  );
};
