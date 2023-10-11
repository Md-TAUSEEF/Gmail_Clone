import React from "react";
import "./Login.css";
import gmail from "./Image/gmail.png";
import { getAuth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { Signin } from "./fature/useSlice";

export default function Login() {
  const dispatch = useDispatch();
  const Login = () => {
    getAuth().signInWithPopup(provider).then(({ user }) => {
      dispatch(
        Signin({
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        })
      );
    }).catch(error => {
      alert(error);
    });
  }

  return (
    <div className="body1">
      <div className="loginwrapper">
        <div className="login">
          <img src={gmail} alt="this is gmailimage" />
        </div>
        <button className="gmail_login" onClick={Login}><i class="bi bi-google" style={{fontSize: "20px", padding: "15px"}}></i>Login with google</button>
      </div>
    </div>
  );
}
