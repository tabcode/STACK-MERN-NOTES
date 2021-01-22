const { Router } = require('express');
const router = Router();
const { getNotes, postNote, getNote, deleteNote, putNote } = require('../controllers/notes.controllers')

router.route('/')
    .get(getNotes)
    .post(postNote);

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(putNote);

module.exports = router;