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

router.post("/signup", async (req, res) => {
  const { nickname, password } = req.body.data;
  if (password.length < 6) {
    res.send("1");
    return;
  }

  const allData = await db.select("*").from("users");

  for (const obj of allData) {
    if (obj.nickname === nickname) {
      console.log("same nickname");
      res.send("2");
      return;
    } else if (obj.password === password) {
      console.log("same password");
      res.send("3");
      return;
    }
  }

  await db("users").insert({ nickname, password });
  db("users")
    .where({ nickname, password })
    .select("id", "nickname")
    .then((result) => res.send(result))
    .catch((result) => res.send("サーバー側で何らかのエラーが出ました"));
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
