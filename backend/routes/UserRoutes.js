const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/UserModel");

const JWT_SECRET =
  "9f2b4e0e5e2c9f4a2b4d6e5a7f4d9e0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6";

router.post("/register", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  const lowercasedEmail = email.toLowerCase();
  const processedEmail = lowercasedEmail.trim();

  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!processedEmail || !password || !confirmPassword) {
      return res.status(400).json({ message: "Please fill in all fields!" });
    }

    if (!emailRegex.test(processedEmail)) {
      return res
        .status(400)
        .json({ message: "Please enter a valid email address!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match!" });
    }

    const userExists = await User.findOne({ email: processedEmail });
    if (userExists) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email: processedEmail,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully!", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error!" });
  }
});
