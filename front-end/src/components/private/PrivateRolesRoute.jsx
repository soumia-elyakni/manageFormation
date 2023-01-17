import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router'

const PrivateRolesRoute = (params) => {
    const role = useSelector((state)=> state.auth.user.role)
    return (role === params.role) ? (
        <Outlet />
      ) : (
        <Navigate to="login" />
      );
    
}

export { PrivateRolesRoute }