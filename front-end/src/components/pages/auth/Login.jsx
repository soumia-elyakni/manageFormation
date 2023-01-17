import { useSelector, useDispatch } from 'react-redux'
import { Navigate ,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../../services/auth-sercives'
import { loginFailed, loginSuccess } from '../../../actions/auth-actions'
import { Input } from '../../common/Input'
import {Button} from '../../common/Button'


function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const error = useSelector((state)=> state.auth.error);
  
  
  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

       login(formData.email, formData.password)
      .then(res => {
        if(res.data.user.role){
          dispatch(loginSuccess(res.data.user))
          if (res.data.role === 'admin') {
             navigate("/admin")
          } else { 
             navigate("/employe")
          }
        } else {
          dispatch(loginFailed(res.data))
          alert(res.data)
        }


  })
}


  
  return (
    <div className='d-flex w-50 mx-auto align-content-center'>
    <form onSubmit={handleSubmit} className="w-100 d-flex flex-column bg-light">
    <Input type="email" name="email" placeholder="your email here" value={formData.email} onChange={handleChange} />
    <Input type="password" name="password" placeholder="your password here" value={formData.password} onChange={handleChange} />
    <Button type="submit"  className="bg-success" value="Login"/>
     
     
  </form>
  </div>
  )

}

export default Login
