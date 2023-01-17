import React from "react";
import { useState, useEffect } from "react";
import { getAllOrganisme } from "../../services/admin-services";

export const SelectOrganismes = (props) => {

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    props.onChange(value);
  }

  const [organismes, setOrganismes] = useState([]);

  useEffect(() => {
    getAllOrganisme()
      .then((res) => {
        setOrganismes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <select
      className="h-25 w-75 m-auto mt-3 float-center form-select "
      onChange={handleChange}
      name={props.name}
    >
      {organismes.map((organisme) => (
        <option key={organisme.id} value={organisme.name}> {organisme.name} </option>
      ))}
    </select>
  );
};
