import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from "react-router-dom";
import { useState } from 'react'
import { login } from '../../../services/auth-sercives'
import { loginFailed, loginSuccess } from '../../../actions/auth-actions'
import { Input } from '../../common/Input'
import Button from '../../common/Button'

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const newError = useSelector(state => state.auth.error)
  let dash

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
             dash = ('/admin')
          } else { 
             dash = ('/employe')
          }
       } else {
          dispatch(loginFailed(response.error.message))
          
        }
      })
      .catch(error => {
        dispatch(loginFailed(error.message))
      
      })
  }

  return (
    <form onSubmit={handleSubmit} Redirect to={dash}>
    <Input type="email" name="email" value={formData.email} onChange={handleChange} />
    <Input type="password" name="password" value={formData.password} onChange={handleChange} />
    <Button type="submit" className="bg-green-500" value="Login"/>
     
     <div>{newError && <div>{newError}</div>} </div> 
  </form>
  )
}

export default Login
