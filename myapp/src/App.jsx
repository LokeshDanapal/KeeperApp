import React, { useState } from "react";
import Axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//import notes from "./notes";
import Login from "./Login";
import SignUp from "./SignUp";
import Content from "./content";
import InitialHeader from "./InitialHeader";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Axios.get("http://localhost:5000/getData")
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  }, []);
  const LoggedIn = window.localStorage.getItem('isLoggedIn');
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowSignUp, setIsShowSignUp] = useState(false);
  const [isShowContent, setIsShowContent] = useState(false);
  const [isLoggedIn, setLoginStatus] = useState(false);
  const [isSignedUp, setSignUpStatus] = useState(false);
  const [isContentUpdated , setContentStatus] = useState(false);
  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
    setIsShowSignUp(isShowSignUp ? !isShowSignUp : null);
    setIsShowContent(isShowContent ? !isShowContent : null);
    //setIsShowLogin(isLoggedIn ? (isShowLogin) => !isShowLogin : true);
  };

  const handleSignUpLink = () => {
    setIsShowSignUp((isShowSignUp) => !isShowSignUp);
    setIsShowLogin(isShowLogin ? !isShowLogin : null);
    setIsShowContent(isShowContent ? !isShowContent : null);
  };

  const handleContent = () => {
    setIsShowContent((isShowContent) => !isShowContent);
    setIsShowLogin(isShowLogin ? !isShowLogin : null);
    setIsShowSignUp(isShowSignUp ? !isShowSignUp : null);
  };

  const handleLogin = (data) => {
    console.log(data);
    setLoginStatus(data);
  };

  const handleSignUp = (data) => {
    setSignUpStatus(data);
  };

  const handleContentStatus = (data) => {
    setContentStatus(data);
  };
  return (
    <div>
      {(isLoggedIn || isSignedUp ) ? (
        <InitialHeader handleContent={handleContent}/>
      ) : (
        <Header
          handleLoginClick={handleLoginClick}
          handleSignUpLink={handleSignUpLink}
          handleContent={handleContent}
        />
      )}
      {(isContentUpdated || !isShowContent ) ? null : <Content onContentUpdation = {handleContentStatus}/>}
      {(isLoggedIn || !isShowLogin )? null : <Login onChildData={handleLogin} />}
      {(isSignedUp || !isShowSignUp) ? null : (
        <SignUp onSignUpStatus={handleSignUp} />
      )}
      {isLoggedIn || isSignedUp ? (
        <Note />
      ) : (
        <h1  style={{ textAlign: 'center', fontFamily : 'sans-serif' }}> Login/SignUp to see Your Notes </h1>
      )}

      <Footer />
    </div>
  );
}

export default App;
