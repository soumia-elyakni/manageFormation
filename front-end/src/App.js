import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login"
import { Dashboard } from "./components/pages/admin/Dashboard";

import PrivateRoutes from "./components/private/privateRoute";
import { EmployeBoard } from "./components/pages/employe/EmployeBoard";


function App() {
  return (
    
      <Router>
        <Routes>

      <Route path="" element={<Login />} />
      <Route path="login" element={<Login />} />

      
      <Route element={<PrivateRoutes role="admin" />}>
      <Route path="/admin" element={<Dashboard />}>
              
      </Route>
      </Route>

      <Route element={<PrivateRoutes role="employe" />}>
      <Route path="/employe" element={<EmployeBoard />}>
              
      </Route>
      </Route>

       </Routes>
      </Router>
    
  );
}

export default App;
