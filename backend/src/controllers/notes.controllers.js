const Note = require('../models/notes.models');
const notesCtrl = {};

notesCtrl.getNotes = async (req, res) => {
    let notes = await Note.find();
    res.json(notes);
};

notesCtrl.postNote = async (req, res) => {
    let newNote = new Note({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        date: req.body.date
    });
    await newNote.save();
    res.json(newNote);
};

notesCtrl.getNote = async (req, res) => {
    let getNote = await Note.findById(req.params.id, {
        author: 1,
        content: 1,
        title: 1,
        date: 1
    });
    res.json(getNote);
};

notesCtrl.deleteNote = async (req, res) => {
    let deleteNote = await Note.findByIdAndDelete(req.params.id);
    res.json(deleteNote);
};

notesCtrl.putNote = async (req, res) => {
    let putNote = await Note.findOneAndUpdate(req.params.id, req.body);
    res.json(putNote);
};

module.exports = notesCtrl;