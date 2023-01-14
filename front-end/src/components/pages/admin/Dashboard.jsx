import React, { useEffect } from 'react'
import { useSelector } from 'react-redux/es/exports';
import { Navigate } from 'react-router-dom'
import { useState } from 'react';
import getAdminBoard from '../../../services/user-services'

export const Dashboard = () => {
  const isLogged = useSelector((state)=> state.auth.isLogged)
  const role = useSelector((state)=> state.auth.user.role)
  

  const [content, setContent] = useState({})

  useEffect(()=>{
    getAdminBoard()
    .then((Response)=>{
      setContent(Response.data)
    },
    (error) => {

    }
    )
  })
   
  if(!isLogged) return  <Navigate to="/login" />

  return (
    <div>Hello {content}  </div>
  )
}
