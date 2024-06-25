import express from "express"; // to use this add "type":"module" in pacakge.json
// const express = require("express");
const app = express();

// //middleware
// app.use("/", (req, res, next) => {
//   return res.send("Hi"); //peints Hi on web
// });

import dotenv from "dotenv"; // secure place to store credentials
dotenv.config({ path: "backend/config.env" });

//connection to cloud mongodb online!! create new project, create cluster, copy password, copy link.
import mongoose from "mongoose";
mongoose
  .connect(
    `mongodb+srv://brunivdev:${process.env.MONGODB_PASSWORD}@cluster0.ipio6bm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log(`Mongo DB Connection Successful`))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT} `);
});
