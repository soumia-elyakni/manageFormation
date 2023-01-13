import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login"
import { Dashboard } from "./components/pages/admin/Dashboard";
import {store} from "./store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/admin" element={<Dashboard />} />
       </Routes>
      </Router>
    </Provider>
  );
}

export default App;
