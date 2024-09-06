const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/accounts");

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB"));

app.use(cors());
app.use(express.json());

const userRoutes = require("./routes/UserRoutes");
app.use("/user", userRoutes);

app.listen(3001, () => console.log("Server started on port 3001"));
