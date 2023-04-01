import React from 'react';

function initialHeader(props){
   const username = window.localStorage.getItem('username');
   const handleContent = (e) => {
      e.preventDefault()
      props.handleContent();
   }
   return <div><nav>
      <ul>
         <li><h1>KeeperApp</h1></li>
          <li><h2  className="loginicon">Welcome {username}</h2></li>
      </ul>
   </nav>
   <div id="mybutton">
         <button onClick = {handleContent} className="feedback">+</button>
   </div>
   </div>
   
}

export default initialHeader;