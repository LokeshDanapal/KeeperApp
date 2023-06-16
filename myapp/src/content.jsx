import React, { useState } from "react";

export default function Content(isShowSignUp) {
  const [title, validateTitle] = useState("");
  const [content, validateContent] = useState("");
  const userName = window.localStorage.getItem('username');
  console.log(userName);
  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log(title, content);
    fetch("https://keeper-server-3het.onrender.com/api1/addNotes", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName,
        title,
        content
      })
    }).then((res) => res.json()).then((data) => {
      if(data.status === "ok"){
        isShowSignUp.onContentUpdation(true);
      }
    }).catch((e)=>console.log(e));
  };
  return (
    <div className="container">
      <form>
        <h3 className="login-text">Type Your Notes Here !!</h3>
        <label for="title" className="login-label">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => {
            validateTitle(e.target.value);
          }}
        ></input>
        <label for="subject" className="login-label">
          Subject
        </label>
        <textarea
          id="subject"
          name="subject"
          style={{ height: "150px" }}
          onChange={(e) => {
            validateContent(e.target.value);
          }}
        ></textarea>
        <input type="submit" value="Submit" className="login-btn" onClick={handleSubmit1}></input>
      </form>
    </div>
  );
}
