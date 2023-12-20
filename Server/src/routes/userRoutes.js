const express = require('express');
const router = express.Router();
const UserModel = require('../Models/AddUser');

// Body parsing middleware

router.use(express.json());

// Getting User From DateBase

router.get("/readuser", async (req, res) => {
    const users = await UserModel.find()
    res.send(users)
})


// Adding new Todo in Database

router.post("/adduser", async (req, res) => {
    let user = req.body;
    const newUser = new UserModel(user);
    try {
        await newUser.save();
        res.json(user);
    } catch (err) {
        res.json(err);
    }
});


// Delete Todo in DataBase

router.post("/deleteuser", async (req, res) => {
    let user = req.body
    await UserModel.findByIdAndDelete(user._id)

    res.send("User Deleted Successfully")
})


module.exports = router;
