const Notes = require("../models/KeepNotes");

const alert = require("alert");

createNotes = async function (req, res) {
  const { userName, title, content } = req.body;
  const NewNote = new Notes({ userName, title, content });
  console.log(1);
  console.log(userName, title, content);
  console.log(2);
  NewNote.save((err) => {
    if (err) {
      console.log(err);
    } else {
      alert("New note saved!");
      return res.json({status : "ok"})
    }
  });
};

LoadNotes = async function (req, res) {
  console.log("insideLoadNotes");
  try {
    const AllNotes = await Notes.find({ userName: req.body.userName });
    res.json({status : "ok" , data : AllNotes});
  } catch (error) {
    res.json(error);
  }
};

module.exports = { createNotes, LoadNotes };
