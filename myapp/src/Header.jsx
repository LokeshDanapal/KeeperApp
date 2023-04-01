import React from "react";

function Header(props) {
  const handleLogin = (e) => {
    e.preventDefault();
    props.handleLoginClick();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    props.handleSignUpLink();
  };

  // const handleContent = (e) => {
  //    e.preventDefault()
  //    props.handleContent();
  // }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <h1>KeeperApp</h1>
          </li>
          <li>
            <button onClick={handleLogin} className="loginicon">
              Login
            </button>
          </li>
          <li>
            <button onClick={handleSignUp} className="loginicon">
              SignUp
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

/* <div id="mybutton">
         <button onClick = {handleContent} className="feedback">+</button>
   </div> */
