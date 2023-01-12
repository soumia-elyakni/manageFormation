import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <h1>hello</h1>
      </div>
      </Router>
    </Provider>
  );
}

export default App;
