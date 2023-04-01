const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const KeepNotes = new Schema({
  userName: { type: String },
  title: { type: String },
  content: { type: String },
});

module.exports = mongoose.model("KeepNotes", KeepNotes);
