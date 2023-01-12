import React from 'react'
// import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { login } from '../../../services/auth-sercives'
import Button from '../../common/Button'
import { Input } from '../../common/Input'

const Login = () => {
  const [data,setData] = useState({
    email:"",
    password:""
});

const changeHandler = e => {

  setData({...data,[e.target.name]:[e.target.value]});
  
  }


    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password)
        .then((response) => {
          if (!response.data.authorisation) {
            dispatch(loginFailed(response.data.message));
          } else {
            const token = response.data.token;
            const decode = decodeJWT(token);
            const payload = {
              id: decode.id,
              user: response.data,
            };
            if (!payload) {
              dispatch(loginFailed("Token is not valid"));
            } else {
              dispatch(loginSuccess(payload));
            }
          }
        })
        .catch((error) => {
          console.error(error);
          dispatch(loginFailed(error.message));
        });
    }

  return (
      <form action="">
      <Input
      type = 'email'
      className='border-grey m-[5px]'
      value = {email}
      onChange = {changeHandler}
      name = 'email'

      ></Input>

    <Input
      type = 'password'
      className='border-grey m-[5px]'
      value = {password}
      onChange = {changeHandler}
      name = 'password'

      ></Input>

      <Button 
        type= "submit"
        className='bg-blue-500'
        onClick={handleSubmit}
        > Login </Button>
      </form>
  )
}

export default Login
