import "./App.css";
import "./style/home.css";
import "./style/login.css";
import "./style/pagenotfound.css";

import Home from "./component/home";
import Login from "./component/login";
import Pagenotfound from "./component/pagenotfound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="*" Component={Pagenotfound} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
