import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/context";

export default function Nav() {

  const { state, dispatch } = useContext(GlobalContext);

  let history = useHistory();

  function signOut() {
    dispatch({ type: "SIGNOUT_USER" });
    history.push('/signup')
  }

  return (
    <div id="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>My Tweets</li>
      <li>My Profile</li>
      <li>
        <a onClick={signOut}>Sign Out</a>
      </li>
    </div>
  );
}
