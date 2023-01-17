import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import { PrivateRoute } from "./components/private/PrivateRoute";
import { PrivateRolesRoute } from "./components/private/PrivateRolesRoute";
import { Dashboard } from "./components/pages/admin/Dashboard";
import { EmployeBoard } from "./components/pages/employe/EmployeBoard";
import { AddEmploye } from "./components/tools/AddEmploye";
import { AddOrganisme } from "./components/tools/AddOrganisme";
import { Organismeslist } from "./components/pages/admin/Organismeslist";
import { EmployeList } from "./components/pages/admin/EmployeList";
import { FormationList } from "./components/pages/admin/FormationList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route element={<PrivateRolesRoute role="admin" />}>
          <Route path="/admin" element={<Dashboard />}>
            <Route path="addEmploye" element={<AddEmploye />} />
            <Route path="addOrganisme" element={<AddOrganisme />} />
            <Route path="organismes" element={<Organismeslist />} />
            <Route path="employes" element={<EmployeList />} />
            <Route path="formations" element={<FormationList />} />
          </Route>
        </Route>

        <Route element={<PrivateRolesRoute role="employe" />}>
          <Route path="/employe" element={<EmployeBoard />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
