import React from "react";
import { Navigate } from "react-router-dom"
import { logout } from "../../services/auth-sercives";
import { logoutAction } from "../../actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import Button from "../common/Button";

export const ActiveUser = () => {
       const dispatch = useDispatch()
       const isLogged = useSelector((state)=> state.auth.isLogged)
       const user = useSelector((state)=> state.auth.user)
       if (isLogged === false) return <Navigate to="/" />

      

const logaout = () => {
  
  logout();
  dispatch(logoutAction())
  .then(()=>{
    <Navigate to="/login" />
  })
}


  return (
    <div>
      <div className="card text-center mb-3" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{user.role}</h5>
          <h6>{user.name}</h6>
          <div className="card-text">
            <h6>{user.email}</h6>
            {
              (user.role === 'employe')?
                 <>
                  <h6>{user.organisme}</h6>
                  <h6>{user.formation? user.formation:''}</h6>
                </> : null

            }

          </div>
          <div className="w-50 d-flex float-end">
          <Button type="button" onClick={logaout} className="bg-secondary w-25" value="Logout"/>
          </div>
        </div>
      </div>
      
    </div>
  );
};
