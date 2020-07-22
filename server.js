const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const users = require("./model/user");
app.use("/user", users);

const port = process.env.PORT || 3000;
app.use(express.static(path.resolve(__dirname + "/build")));

app.listen(port, () => {
  console.log("port", port);
  console.log("start");
});
