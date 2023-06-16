import React, { useState, useEffect } from "react";

function Note({ isContentUpdated }) {
  const userName = window.localStorage.getItem("username");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://keeper-server-3het.onrender.com/api1/LoadNotes", {
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
  }, [isContentUpdated , userName]);

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
