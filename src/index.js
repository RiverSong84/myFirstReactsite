import { StrictMode } from "react";
import { Navbar } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Restoran from "./pages/Restoran";
import Room from "./pages/Room";
import Spa from "./pages/Spa";
import Teretana from "./pages/Teretana";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/room" component={Room} />
        <Route path="/restoran" component={Restoran} />
        <Route path="/spa" component={Spa} />
        <Route path="/teretana" component={Teretana} />
      </Switch>
    </Router>
  </StrictMode>,
  rootElement
);
