const Note = require("../../db/models/note");

module.exports = {
  saveNote(req, res) {
    const newNote = new Note({
      title: "Zrobić zakupy",
      body: "mleko jajka etc",
    });
    newNote.save().then(() => {
      console.log("Note saved");
    });
    res.send("Main page works!");
  },
};
