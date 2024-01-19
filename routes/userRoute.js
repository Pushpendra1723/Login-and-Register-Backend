const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
  res.send("My Name is Pushpendra Kumar");
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.send({ message: "User Already Registered" });
    } else {
      const newUser = new User({
        name: name,
        email: email,
        password: password,
      });

      await newUser.save();
      res.send({ message: "Successfully Registered" });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    if (password === existingUser.password) {
      res.send({ message: "Login Successfull", user: existingUser });
    } else {
      res.send({ message: "Password not matched" });
    }
  } else {
    res.send({ message: "User Not Register" });
  }
});

module.exports = router;
