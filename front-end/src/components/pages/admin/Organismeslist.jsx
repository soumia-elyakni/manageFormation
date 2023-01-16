import React from "react";
import { OrganismeCard } from "../../tools/OrganismeCard";
import { getAllOrganisme } from "../../../services/admin-services";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Organismeslist = () => {
  const [organismes, setOrganismes] = useState([]);

  useEffect(() => {
    getAllOrganisme().then((res) => {
      console.log(res.data);
      setOrganismes(res.data);
    }).catch((err) => console.log(`errrrrrrrrrrr ${err}`) )
  }, []);

  return (
    <div>
      <div className="d-flex flex-row justify-content-end">
        <Link to="/admin/addOrganisme" className="w-25 h-50 ">
          <Button type="button" value="Ajouter un Organisme" />
        </Link>
      </div>
      <div>
        {
          organismes.map((organisme)=>{
            return (
              <OrganismeCard name={organisme.name} ville={organisme.ville} adress={organisme.adress} phone={organisme.phone} />
            )
          })
        }
      </div>
    </div>
  )
}
