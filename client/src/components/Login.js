import React, { useState } from "react";
import { Link }from "react-router-dom";
import axios from "axios";



const Login = props => {
    const [login, setLogin] = useState({
      username: "",
      password: ""
    });
  
    const handleInput = e => {
      setLogin({
        ...login,
        [e.target.name]: e.target.value
      });
      console.log(login);
    };
  
    const handelLogin = e => {
      e.preventDefault();
      axios
        .post("https://localhost:3300/login", login)
        .then(res => {
          console.log(res);
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", login.username);
          props.history.push("/protected");
        })
        .catch(err =>
          console.log(
            err.message
          )
        );
    };
    return (
      <div>
        <div>
          <h1>Login</h1>
          <form onSubmit={handelLogin}>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={login.username}
              onChange={handleInput}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={login.password}
              onChange={handleInput}
              required
            />
            <button
              onClick={e => {
                e.target.style.background = "#FEBDC0";
              }}
              onMouseOver={e => {
                e.target.style.cursor = "pointer";
              }}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;
  