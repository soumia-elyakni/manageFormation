import { useSelector, useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../../services/auth-sercives'
import { loginFailed, loginSuccess } from '../../../actions/auth-actions'
import { Input } from '../../common/Input'
import {Button} from '../../common/Button'


function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const error = useSelector(state => state.auth.error)
  const isLogged = useSelector(state => state.auth.isLogged)
  const user = useSelector(state => state.auth.user)

  if(isLogged && user.role === 'admin' ) return <Navigate to="/admin" />
  else if(isLogged && user.role === 'employe' ) return <Navigate to="/employe" />
  
  

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
       login(formData.email, formData.password)
      .then(response => {
        if (response.status === 200) {
           dispatch(loginSuccess(response.data))
           console.log(response.data)
          if (response.data.role === 'admin') {
             <Navigate to="/admin" />
          } else { 
             <Navigate to="/employe" />
          }
       } else {
          dispatch(loginFailed(response.data.message))
          
        }
      })
      .catch(error => {
        dispatch(loginFailed(error.message))
      
      })
  }


  
  return (
    <div className='d-flex w-50 mx-auto align-content-center'>
    <form onSubmit={handleSubmit} className="w-100 d-flex flex-column bg-light">
    <Input type="email" name="email" placeholder="your email here" value={formData.email} onChange={handleChange} />
    <Input type="password" name="password" placeholder="your password here" value={formData.password} onChange={handleChange} />
    <Button type="submit"  className="bg-success" value="Login"/>
     
     <div className='text-danger'>{error && <div>{error}</div>} </div> 
  </form>
  </div>
  )
}

export default Login
