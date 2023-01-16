import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/";


const getEmployeBoard = () => {
  return axios.get(API_URL + "emp", { headers: authHeader() });
};


const getAdminBoard = () => {
  return axios.get(API_URL + "admin/get-user", { headers: authHeader() });
};

export  {
  getEmployeBoard,
  getAdminBoard
};