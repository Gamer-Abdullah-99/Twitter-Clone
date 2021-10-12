import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Nav from "../components/navbar";
import Signup from "../screens/signup";
import Login from "../screens/login";
import Home from "../screens/home";
import LeftSidebar from "../components/sidebar-left";
import RightSidebar from "../components/sidebar-right";
import MyTweets from "../screens/my-tweets";
import MyProfile from "../screens/my-profile";
// import { auth, onAuthStateChanged } from "./fire";

export default function Routes() {
  const { state, dispatch } = useContext(GlobalContext);

  let history = useHistory();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       dispatch({ type: "AUTH_USER", payload: uid });
  //       history.push("/");
  //     }
  //   });
  // }, []);

  return (
    <Router>
      <div>
        {/* {Object.entries(state.authUser).length !== 0 &&
          ((<Nav />), (<LeftSidebar />))} */}
        <Nav />
        <LeftSidebar />
        <RightSidebar />
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
          <Route exact path="/my-tweets">
            <MyTweets />
          </Route>
          <Route exact path="/my-profile">
            <MyProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
