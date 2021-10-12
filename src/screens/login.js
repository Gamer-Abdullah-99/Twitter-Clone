import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/context";
import { auth, signInWithEmailAndPassword } from "../routes/fire";

export default function Login() {
  const { state, dispatch } = useContext(GlobalContext);

  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function login() {
    try {
      let data = await signInWithEmailAndPassword(auth, email, password);
      dispatch({ type: "AUTH_USER", payload: data.user.uid });
      console.log(data);
      history.push("/");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div id="login">
      <br />
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
            login();
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
