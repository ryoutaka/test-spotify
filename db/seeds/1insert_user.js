exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        { nickname: "testuser", email: "test@aa.com", password: "testtest" },
      ]);
    });
};
