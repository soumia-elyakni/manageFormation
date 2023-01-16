import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/auth/";

const login = async(email, password) => {
  const log = await axios
    .post(API_URL + "login", {
      email,
      password,
    })
      localStorage.setItem('user', JSON.stringify(log.data))
      return log;
};

const logout = async () => {
   
  return await localStorage.removeItem('user')
  
}

export { login ,
         logout};
