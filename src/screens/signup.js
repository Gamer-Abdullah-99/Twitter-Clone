import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/context";

export default function Signup() {
  const { state, dispatch } = useContext(GlobalContext);

  let history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function addUser(a) {
    console.log(a);
    dispatch({ type: "SIGNUP_USER", payload: a });
    history.push("/login")
  }

  return (
    <div id="signup">
      <h2 id="signup-heading">Sign Up</h2>
      <br />
      <h4 id="signup-sub-heading">User Name : </h4>
      <input
        type="text"
        required
        value={username}
        placeholder="User Name"
        onChange={(a) => {
          setUsername(a.target.value);
        }}
      />
      <span id="form-error">{usernameError}</span>
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
          if (username === "") {
            setUsernameError("Enter User Name");
            setTimeout(() => {
              setUsernameError("");
            }, 3000);
          } else if (email === "") {
            setEmailError("Enter Email Address");
            setTimeout(() => {
              setEmailError("");
            }, 3000);
          } else if (password === "") {
            setPasswordError("Enter Password");
            setTimeout(() => {
              setPasswordError("");
            }, 3000);
          } else if (username !== "" && email !== "" && password !== "") {
            let newUser = {
              username,
              email,
              password,
            };
            addUser(newUser);
          }
        }}
      >
        SignUp
      </button>
      <br />
      <h5 id="toLogin">
        Already have an account? <Link to="/login">Login</Link> Here
      </h5>
      <br />
    </div>
  );
}
