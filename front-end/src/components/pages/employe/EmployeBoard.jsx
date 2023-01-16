import React from 'react'
import { useSelector } from 'react-redux/es/exports';
import { Navigate } from 'react-router-dom'
import { ActiveUser } from '../../tools/ActiveUser';
import { AdminSidebar } from '../../tools/AdminSidebar';
import { Outlet } from 'react-router-dom';

export const EmployeBoard = () => {
    // const { user: currentUser } = useSelector((state) => state.auth);
    // const role = useSelector((state)=> state.auth.user.role)

    // if (!currentUser) {
    //     return <Navigate to="/login" />;
    //   }


  return (
    <div className='d-flex flex-row'>

      <div className='d-flex flex-column'>

      <div>
         <ActiveUser/>
      </div>

  

      </div>

      <div>
        <Outlet/>
      </div>
      
    </div>
  )
}
