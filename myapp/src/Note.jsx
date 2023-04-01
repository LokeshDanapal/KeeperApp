import React, { useState, useEffect } from "react";

function Note(props) {
  const userName = window.localStorage.getItem("username");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api1/LoadNotes", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userName,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "NoteData");
        setData(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div >
      {data && data.length > 0 ? (
        data.map((i) => {
          return (
            <div key={i._id} className="note">
              <h1>{i.title}</h1>
              <p>{i.content}</p>
            </div>
          );
        })
      ) : (
        <h1>No notes found.Please add some Notes to Keep</h1>
      )}
    </div>
  );
}

export default Note;
