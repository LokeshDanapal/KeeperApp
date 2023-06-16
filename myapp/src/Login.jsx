import React, { useState } from "react";

const LoginForm = (isShowLogin) => {
  const [username, validateUser] = useState("");
  const [password, validatePassword] = useState("");
  //const [LoggedIn , checkLoginStatus] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    fetch("https://keeper-server-3het.onrender.com/api/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.status)
        if (data.status === "ok") {
          console.log(data.msg.username);
          window.localStorage.setItem("username",data.msg.username);
          window.localStorage.setItem("isLoggedIn",true);
          isShowLogin.onChildData(true);
        }
      });
  };

  return (
    <div className={`${!isShowLogin ? "active" : ""} show`}>
      <div className="loginform">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Login</h1>
            <label className="login-label">Username</label>
            <br></br>
            <input
              type="text"
              name="username"
              className="login-box"
              onChange={(e) => {
                validateUser(e.target.value);
              }}
            ></input>
            <br></br>
            <label className="login-label">Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              onChange={(e) => {
                validatePassword(e.target.value);
              }}
            ></input>
            <br></br>
            <input
              type="submit"
              value="Submit"
              className="login-btn"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
