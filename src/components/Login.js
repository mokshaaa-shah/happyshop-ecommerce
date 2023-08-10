/* import React, { useState } from "react";
import Home from "../Home";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginResult, setLoginResult] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const CompareValues = () => {
    const presentEmail = ["mokshashah@gmail.com"];
    const presentPassword = ["moksha"];
    if (
      presentEmail.includes(email.toLocaleLowerCase()) &&
      presentPassword.includes(password.toLocaleLowerCase())
    ) {
      setLoginResult("logged in ");
      setIsLoggedIn(true);
    } else {
      setLoginResult("invalid credentionals");
    }
  };
  if (isLoggedIn) {
    return <Home />;
  }
  /* const signin = (e) => {
    const adminEmail = "mokshashah@gmail.com";
    const adminPassword = "moksha";
    if (userEmail === adminEmail) {
      alert("you logged in");
    } else {
      alert("invalid credentails");
    }
  }; */
/*  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  return (
    <div className="sign-in-container">
      <form>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChangePassword}
        ></input>

        <button type="submit" onClick={CompareValues}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
 */
/* import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
 */
