import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../../tools/AdminSidebar";
import { ActiveUser } from "../../tools/ActiveUser";

export const Dashboard = () => {

  const role = useSelector((state)=> state.auth.user.role)
  const isLogged = useSelector((state)=> state.auth.isLogged)

  if(!isLogged ){ return <Navigate to="/login"/>}
  if(role === "employe"){ return <Navigate to="/employe"/>}


  return (
    <div className="d-flex flex-row w-100 p-3 pt-4">
      <div className="d-flex flex-column col-3">
        <div>
          <ActiveUser />
        </div>

        <div>
          <AdminSidebar />
        </div>
      </div>

      <div className="col-9 p-4 pt-5">
        <Outlet />
      </div>
    </div>
  );
};
