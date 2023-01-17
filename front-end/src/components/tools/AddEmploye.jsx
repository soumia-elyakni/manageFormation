import React from "react";
import { Input } from "../common/Input";
import {Button} from "../common/Button";
import { SelectOrganismes } from "../common/SelectOrganismes";
import { useState } from "react";
// import { addEmploye } from "../../services/admin-services";

export const AddEmploye = () => {
  const [employe, setEmploye] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    organisme: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEmploye({
      ...employe,
      [e.target.name]: value,
    });
  };

    const newEmploye = (e) => {
      e.preventDefault()
      console.log(employe)
      newEmploye(employe)
        .then((res) => {
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
 

  return (
    <div className="d-flex w-50 mx-auto align-content-center">
      <form className="w-100 d-flex flex-column bg-light" onSubmit={newEmploye}>
        <Input
          type="text"
          name="first_name"
          onChange={handleChange}
          placeholder="First name"
        />
        <Input
          type="text"
          name="last_name"
          onChange={handleChange}
          placeholder="Last name"
        />
        <Input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />

        <SelectOrganismes onChange={handleChange} name="organisme" />

        <Button type="submit" className="bg-success" value="Send" />
      </form>
    </div>
  );
};
