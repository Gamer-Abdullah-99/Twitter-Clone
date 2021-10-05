import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/navbar";
import Signup from "../screens/signup";
import Login from "../screens/login";
import Home from "../screens/home";

export default function Routes() {
  //   const { state, dispatch } = useContext(GlobalContext);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
