// import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '../../tools/AdminSidebar';
import { ActiveUser } from '../../tools/ActiveUser';

export const Dashboard = () => {
 
  return (
    <div className='d-flex flex-row w-100 p-3 pt-4'>

      <div className='d-flex flex-column col-3'>

      <div>
         <ActiveUser/>
      </div>

       <div>
        <AdminSidebar/>
      </div>

      </div>

      <div className='col-9 p-4 pt-5'>
        <Outlet/>
      </div>
      
    </div>

   

    

  )
}
