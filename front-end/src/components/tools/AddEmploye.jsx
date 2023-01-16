import React from 'react'
import {Input} from '../common/Input'
import Button from '../common/Button'
// import { useState, useEffect } from 'react'
// import { getAllOrganisme } from '../../services/admin-services'

export const AddEmploye = () => {
    // const [organismes, setOrganisme] = useState({})

    // useEffect(()=> {
    //     getAllOrganisme()
    //     .then((res) => {
    //         setOrganisme(res.data);
    //       })
    //       .catch((err) => {
    //         console.log(err.msg);
    //       });
    // }, [])

    // console.log(organismes)

  return (

    <div className='d-flex w-50 mx-auto align-content-center'>

    <form className="w-100 d-flex flex-column bg-light" onSubmit="">
        <Input type="text" placeholder="First name"/>
        <Input type="text" placeholder="Last name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />

        <select  placeholder="Organisme" >
            {/* {
                organismes.forEach((organisme) => {
                    <option>{organisme.name}</option>
                  })
             
            } */}
        </select>

        <Button type="submit"  className="bg-success" value="Send"/>

    </form>
    </div>
  )
}
