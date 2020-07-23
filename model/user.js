const express = require("express");
const router = express.Router();
const db = require("./index");

router.post("/login", (req, res) => {
  const { nickname, password } = req.body.data;
  db("users")
    .where({ nickname, password })
    .select("id", "nickname")
    .then((result) => res.send(result))
    .catch((result) => res.send("passwordかnicknameが間違っています"));
});

router.post("/post/artist", (req, res) => {
  const { artist_name, user_id } = req.body.data;
  console.log("post_artist");
  db("favorite_artist")
    .insert({ user_id, artist_name })
    .then((result) =>
      db("favorite_artist")
        .where({ user_id, artist_name })
        .select("artist_name")
        .then((result) => res.send(result))
    )
    .catch((result) => {
      console.log(result);
      res.send("失敗");
    });
});

router.delete("/delete/artist", (req, res) => {
  const { artist_name, user_id } = req.body;

  db("favorite_artist")
    .where({ user_id, artist_name })
    .del()
    .then((result) => {
      res.send(artist_name);
    })
    .catch((result) => res.send("失敗"));
});

module.exports = router;
