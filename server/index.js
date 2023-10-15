const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

// get User - GET
app.get("/", (req, res) => {
  UserModel.find({})
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

// get User By ID - GET
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((error) => res.json(error));
});

// Create User - POST
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Update User - PUT
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    { _id: id },
    { name: req.body.name, email: req.body.email, age: req.body.age }
  )
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Delete User - DELETE
app.delete("/deleteUser/:id", (req, res) => {
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
})

app.listen(3002, () => console.log("Server is Running"));
