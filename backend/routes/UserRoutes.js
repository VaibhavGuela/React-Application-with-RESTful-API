const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/UserModel");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const JWT_SECRET =
  "9f2b4e0e5e2c9f4a2b4d6e5a7f4d9e0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6";

router.post("/register", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  const processedEmail = email.toLowerCase().trim();

  try {
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

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters long." });
    }

    if (!/[0-9]/.test(password)) {
      return res
        .status(400)
        .json({ message: "Password must contain at least one number." });
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return res.status(400).json({
        message: "Password must contain at least one special character.",
      });
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
    res.status(500).json({ message: "Server error!" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const processedEmail = email.toLowerCase().trim();

  try {
    if (!processedEmail || !password) {
      return res.status(400).json({ message: "Please fill in all fields!" });
    }

    if (!emailRegex.test(processedEmail)) {
      return res
        .status(400)
        .json({ message: "Please enter a valid email address!" });
    }

    const user = await User.findOne({ email: processedEmail });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Incorrect username or password!" });
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (!passwordsMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect username or password!" });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "User registered successfully!", token });
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
});

router.get("/user", async (req, res) => {
  const token = req.header("token");

  if (!token) {
    return res.status(400).json({ message: "No token provided!" });
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decodedToken.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User does not exist!" });
    }

    res.status(200).json({ message: "User retrieved successfully!", user });
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
});

module.exports = router;
