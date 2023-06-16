import React,{useState} from "react";

const SignUpForm = (isShowSignUp) => {
  const [username , setUserName] = useState("");
  const[password , setPassWord] = useState("");
  const [cpassword , setCPassword] = useState("");
  const [email , setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(password === cpassword){
    console.log(username,password,email);
    fetch("https://keeper-server-3het.onrender.com/api/signup",{
       method : "POST",
       crossDomain: true,
       headers: {
         "Content-Type" : "application/json",
         Accept : "application/json",
         "Access-Control-Allow-Origin" : "*",
       },
       body: JSON.stringify({
         username,
         email,
         password
      })
    }).then((res) => res.json()).then((data) => {
      if(data.status === "ok"){
        window.localStorage.setItem("username",username);
        isShowSignUp.onSignUpStatus(true);
      }
    })
    }else{
      alert("Confirm Password Mismatch");
    }
  }
  return (
    <div className={`${!isShowSignUp ? "active" : ""} show1`}>
      <div className="loginform">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">SignUp</h1>
            <label className = "login-label">Username</label>
            <br></br>
            <input type="text" name="username" className="login-box" onChange = {(e) => setUserName(e.target.value)}></input>
            <br></br>
            <label className = "login-label">Email</label>
            <br></br>
            <input type="email" name="email" className="login-box" onChange = {(e) => setEmail(e.target.value)}></input>
            <br></br>
            <label className = "login-label">Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              className="login-box"
              onChange = {(e) => setPassWord(e.target.value)}
            ></input>
            <br></br>
            <label className = "login-label">Confirm Password</label>
            <br></br>
            <input
              type="password"
              name="cpassword"
              className="login-box"
              onChange = {(e) => setCPassword(e.target.value)}
            ></input>
            <br></br>
            <input type="submit" value="SignUp" className="login-btn" onClick = {handleSubmit}/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;