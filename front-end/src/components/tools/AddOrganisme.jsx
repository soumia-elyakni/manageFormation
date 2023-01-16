import React from 'react'
import { Input } from '../common/Input'
import Button  from '../common/Button'
import { addOrganisme } from '../../services/admin-services'

export const AddOrganisme = () => {



  return (
    <div>
      <div className='d-flex w-50 mx-auto align-content-center'>   
        <form className="w-100 d-flex flex-column bg-light" onSubmit="">
          <Input type="text" name="name" placeholder="name" onChange=""/>
          <Input type="text" name="ville" placeholder="ville" onChange="" />
          <Input type="text" name="adress" placeholder="address" onChange="" />
          <Input type="tel"  name="phone" placeholder="phone" onChange="" />
          <Button type="submit"  className="bg-success" value="Save"/>
        </form>
      </div>
    </div>
  )
}
