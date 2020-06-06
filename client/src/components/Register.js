import React, { useState } from 'react';
import { Link } from "react-router-dom";
import  {axiosWithAuth}  from "./AxiosWithAuth";


const Signup = (props) => {

  const [signUp, setsignUp] = useState(
    {
     username: '',
     password: '',
   }
  );

  const handleInput = e => {
    setsignUp({
        ...signUp,
        [e.target.name]: e.target.value
    });
    console.log(signUp)
  };

  const handelSignUp = e => {
    e.preventDefault()

        axiosWithAuth()
            .post("/api/auth/register")
            .then(res => {
                window.localStorage.setItem("token", res.data.payload)

                this.props.history.push("/login")
            })
            .catch(error => console.log(error))
  };

    return (
    <div>
        <div>
          <h1>Sign Up</h1>
        <form onSubmit={handelSignUp}>
          <input
              type="text"
              name="username"
              placeholder="username"
              value={signUp.username}
              onChange={handleInput}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={signUp.password}
              onChange={handleInput}
              required
              />
          <button onClick={e => {e.target.style.background = "#FEBDC0";}}
          onMouseOver={e => {e.target.style.cursor = "pointer";}}>Create Account</button>
      </form>
        </div>
    </div>
    )
}

export default Signup;