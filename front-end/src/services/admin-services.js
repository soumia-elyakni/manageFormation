import axios from "axios";

const API_URL = "/api/admin/";

const getAllOrganisme = () => {
    return axios.get(API_URL + "get-organismes", {
        headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`
        }
    });
  };

const addOrganisme = async (organisme) => {
    return await axios.post(API_URL + "add-organisme", organisme)
};

const addEmploye = () => {
    return axios.post(API_URL + "add-employe")
};

const getEmployes = () => {
    return axios.get(API_URL + "get-employes")
};

const getFormationsByStatus = () => {
    return axios.post(API_URL + "get-formations")
};

const getAllFormations = () => {
    return axios.get(API_URL + "get-allformations")
}


  export {getAllOrganisme,
          addOrganisme,
          addEmploye,
          getEmployes,
          getFormationsByStatus,
          getAllFormations
        }