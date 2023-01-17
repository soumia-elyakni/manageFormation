import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router'


 const PrivateRoute = () => {
  const isLogged = useSelector((state)=> state.auth.isLogged)

  return (
    (!isLogged) ? <Navigate to='login'/> : <Outlet/>
  )
}

export {PrivateRoute}