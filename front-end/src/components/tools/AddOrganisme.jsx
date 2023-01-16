import React from 'react'
import { Input } from '../common/Input'
import Button  from '../common/Button'
import { useState } from 'react'
import { addOrganisme } from '../../services/admin-services'

export const AddOrganisme = () => {
   const [organisme, setOrganisme] = useState({
    name : "",
    ville : "",
    adress : "",
    phone : ""
   })

  const save = (e) => {
    e.preventDefault()
    addOrganisme(organisme)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value

    setOrganisme({
      ...organisme,
      [e.target.name] :value
    })
  }
  

  return (
    
      <div className='d-flex fex-column w-100 mx-auto justify-content-center '>   
        <form className="w-50 d-flex flex-column bg-light  " onSubmit={save}>
          <Input type="text" name="name" placeholder="name" onChange={handleChange}/>
          <Input type="text" name="ville" placeholder="ville" onChange={handleChange} />
          <Input type="text" name="adress" placeholder="address" onChange={handleChange} />
          <Input type="tel"  name="phone" placeholder="phone" onChange={handleChange} />
          <Button type="submit" className="bg-success" value="Save"/>
        </form>
      </div>
    
  )
}
