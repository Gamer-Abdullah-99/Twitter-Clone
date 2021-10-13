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
import { auth, onAuthStateChanged, doc, db, getDoc } from "./fire";

export default function Routes() {
  const { state, dispatch } = useContext(GlobalContext);

  let history = useHistory();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserInfo(user.uid);
      }
      else {
        console.log('user not found');
      }
    })
  }, []);

  const fetchUserInfo = async (uid) => {
    let userRef = doc(db, 'users', uid);
    let userInfo = await getDoc(userRef);
    userInfo = userInfo.data();
    console.log(userInfo);
    dispatch({ type: "AUTH_USER", payload: userInfo });
  }

  return (
    <Router>
      <div>
        {Object.entries(state.authUser).length !== 0 &&
          (
            <>
              <Nav />
              <LeftSidebar />
              <RightSidebar />
            </>
          )}
        {/* <Nav />
        <LeftSidebar />
        <RightSidebar /> */}
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* {Object.entries(state.authUser).length !== 0 ?
            ( */}
          <>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/my-tweets">
              <MyTweets />
            </Route>
            <Route exact path="/my-profile">
              <MyProfile />
            </Route>
          </>
          {/* // ) : (
            //   history.push("/login")
            // )} */}
        </Switch>
      </div>
    </Router>
  );
}
