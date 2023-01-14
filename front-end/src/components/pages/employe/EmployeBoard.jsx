import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { Navigate } from 'react-router-dom'

export const EmployeBoard = () => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const name = useSelector((state)=> state.auth.user.first_name)

    if (!currentUser) {
        return <Navigate to="/login" />;
      }


  return (
    <div>Hello collab {name}</div>
  )
}
