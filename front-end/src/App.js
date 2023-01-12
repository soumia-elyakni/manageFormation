import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/pages/auth/Login"

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Route path="/login" element={<Login />} />
      </Router>
    </Provider>
  );
}

export default App;
