import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {
  const role = useSelector(state => state.auth.user.role);
  const isLogged = useSelector(state => state.auth.isLogged)

  if (!isLogged) {
    return <Navigate to="/login" />;
  } else if (role === 'admin') {
    return <Outlet />;
  } else if (role === 'employe') {
    return <Outlet />;
  } 
}