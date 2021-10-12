import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { auth, signOut, onAuthStateChanged } from "../routes/fire";

export default function Nav() {
  const { state, dispatch } = useContext(GlobalContext);

  let history = useHistory();

  async function logout() {
    try {
      await signOut(auth);
      dispatch({ type: "SIGNOUT_USER" });
      history.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div id="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/my-tweets"> My Tweets</Link>
      </li>
      <li>
        <Link to="/my-profie">My Profile</Link>
      </li>
      <li>
        <button onClick={logout}>Sign Out</button>
      </li>
    </div>
  );
}
