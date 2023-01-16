import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login"
import { Dashboard } from "./components/pages/admin/Dashboard";

import PrivateRoutes from "./components/private/privateRoute";
import { EmployeBoard } from "./components/pages/employe/EmployeBoard";
import { AddEmploye } from "./components/tools/AddEmploye";
import { AddOrganisme } from "./components/tools/AddOrganisme";
import { Organismeslist } from "./components/pages/admin/Organismeslist";


function App() {
  return (
    
      <Router>
        <Routes>

      <Route path="" element={<Login />} />
      <Route path="login" element={<Login />} />

      <Route path="/admin" element={<Dashboard />}>
        <Route path="addEmploye" element={<AddEmploye/>} />
        <Route path="addOrganisme" element={<AddOrganisme/>} />
        <Route path="organismes" element={<Organismeslist/>} />
      </Route>


      
      {/* <Route element={<PrivateRoutes role="admin" />}>
      <Route path="/admin" element={<Dashboard />}>
             
      </Route>
      </Route> */}

      <Route element={<PrivateRoutes role="employe" />}>
      <Route path="/employe" element={<EmployeBoard />}>
              
      </Route>
      </Route>

       </Routes>
      </Router>
    
  );
}

export default App;
