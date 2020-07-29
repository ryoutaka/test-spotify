const express = require("express");
const router = express.Router();
const db = require("./index");
const { insert } = require("./index");

router.post("/login", (req, res) => {
  const { nickname, password } = req.body.data;
  db("users")
    .where({ nickname, password })
    .select("id", "nickname")
    .then((result) => res.send(result))
    .catch((result) => res.send("passwordかnicknameが間違っています"));
});

router.post("/signup", async (req, res) => {
  const { nickname, password } = req.body.data;
  if (nickname.length < 2 && password.length < 2) {
    res.send("短すぎです");
  }

  const allData = await db.select("*").from("users");
  allData.forEach((obj) => {
    if (obj.nickname === nickname) {
      res.send("そのnicknameは登録済で使う事が出来ません");
    } else if (obj.password === password) {
      res.send("そのpasswordは登録済で使う事が出来ません");
    }
  });
  await db("users").insert({ nickname, password });

  db("users")
    .where({ nickname, password })
    .select("id", "nickname")
    .then((result) => res.send(result))
    .catch((result) => res.send("passwordかnicknameが間違っています"));
});

router.post("/post/artist", (req, res) => {
  const { artist_name, user_id } = req.body.data;
  console.log("id", user_id);
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

router.post("/favorite/artist", (req, res) => {
  const { user_id } = req.body.data;
  console.log("id", user_id);
  db("favorite_artist")
    .where({ user_id })
    .select("artist_name")
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.status(500);
      res.send("fail");
    });
});

module.exports = router;
