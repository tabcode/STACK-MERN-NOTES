const User = require('../models/users.models');
const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
    let users = await User.find();
    res.json(users);
};

usersCtrl.postUser = async (req, res) => {
    let newUser = new User({
        username:req.body.username
    });
    await newUser.save();
    res.json(newUser);
};

usersCtrl.getUser = async (req, res) => {
    let getUser = await User.findById(req.params.id);
    res.json(getUser);
};

usersCtrl.deleteUser = async(req, res) => {
    let deleteUser = await User.findByIdAndDelete(req.params.id);
    res.json(deleteUser);
};

usersCtrl.putUser = async(req, res) => {
    let putUser = await User.findOneAndUpdate(req.params.id,req.body);
    res.json(putUser);
};

module.exports = usersCtrl;