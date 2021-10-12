import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/context";
import {
  auth,
  createUserWithEmailAndPassword,
  setDoc,
  db,
  doc,
} from "../routes/fire";

export default function Signup() {
  const { state, dispatch } = useContext(GlobalContext);

  let history = useHistory();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  async function signup() {
    try {
      let { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch({ type: "AUTH_USER", payload: user.uid });
      console.log(user);
      await setDoc(doc(db, "users", user.uid), {
        username,
        email,
        uid: user.uid,
      });
      history.push("/");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div id="signup">
      <br />
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
            signup();
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
