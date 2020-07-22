const express = require("express");
const router = express.Router();
const db = require("./index");
console.log("aarrr");

router.post("/login", (req, res) => {
  const { nickname, password } = req.body;
  db("users")
    .where({ nickname, password })
    .select("*")
    .then((result) => res.send(result))
    .catch((result) => res.send("passwordかnicknameが間違っています"));
});

module.exports = router;
