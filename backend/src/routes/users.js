const { Router } = require('express');
const router = Router();
const { getUsers, postUser, getUser, deleteUser, putUser } = require('../controllers/users.controllers')

router.route('/')
    .get(getUsers)
    .post(postUser);

router.route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .put(putUser);

module.exports = router;