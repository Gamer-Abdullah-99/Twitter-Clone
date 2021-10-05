import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/context";

export default function Login() {
  const { state, dispatch } = useContext(GlobalContext);

  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function verifyUser(x) {
    let userData = state.users;
    userData.map((a) => {
      if (a.email === x.email && a.password === x.password) {
        console.log("User Verified");
        dispatch({ type: "LOGIN_USER", payload: a });
      } else if (a.email !== x.email && a.password !== x.password) {
        setEmailError("Email Address Not Registered");
        setTimeout(() => {
          setEmailError("");
        }, 3000);
      }
    });
  }

  return (
    <div id="login">
      <h2 id="signup-heading">Login</h2>
      <br />
      <h4 id="signup-sub-heading">Email Address : </h4>
      <input
        type="email"
        required
        value={email}
        placeholder="Email Address"
        onChange={(a) => {
          setEmail(a.target.value);
        }}
      />
      <span id="form-error">{emailError}</span>
      <br />
      <h4 id="signup-sub-heading">Password : </h4>
      <input
        type="password"
        required
        value={password}
        placeholder="Password"
        onChange={(a) => {
          setPassword(a.target.value);
        }}
      />
      <span id="form-error">{passwordError}</span>
      <br />
      <button
        id="form-btn"
        onClick={() => {
          if (email === "") {
            setEmailError("Enter Email Address");
            setTimeout(() => {
              setEmailError("");
            }, 3000);
          } else if (password === "") {
            setPasswordError("Enter Password");
            setTimeout(() => {
              setPasswordError("");
            }, 3000);
          } else if (email !== "" && password !== "") {
            let newUser = {
              email,
              password,
            };
            verifyUser(newUser);
          }
        }}
      >
        Login
      </button>
      <br />
      <h5 id="toLogin">
        Don't have an account? <Link to="/signup">Sign Up</Link> Here
      </h5>
      <br />
    </div>
  );
}
