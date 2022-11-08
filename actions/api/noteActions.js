const Note = require("../../db/models/note");

class NoteActions {
  getAllNotes(req, res) {
    // Download notes
    // Return notes
    res.send("API works");
  }

  getNote(req, res) {
    // Download specific note
    // Return notes
    res.send("Info o notatce");
  }

  saveNote(req, res) {
    // const newNote = new Note({
    //   title: "Zrobić zakupy",
    //   body: "mleko jajka etc",
    // });
    // newNote.save().then(() => {
    //   console.log("Note saved");
    // });
    const title = req.body.title;
    const body = req.body.body;

    res.send(`Note created Title: ${title}, Body: ${body}`);
  }

  updateNote(req, res) {
    // Update note
    // Return notes
    res.send("");
  }

  deleteNote(req, res) {
    // Delete note
    // Return notes
    res.send("");
  }
}

module.exports = new NoteActions();
