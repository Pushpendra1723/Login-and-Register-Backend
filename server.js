const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const router = require("./routes/userRoute.js");

//Connecting With Database

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connected To Database Successfully");
    app.listen(process.env.PORT || 8000, (error) => {
      if (error) console.log(error);
      console.log("Success", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("error", error);
  });
app.use(router);
