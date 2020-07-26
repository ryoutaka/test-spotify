exports.up = function (knex) {
  return knex.schema.createTable("users", (t) => {
    t.increments().index().primary();
    t.text("nickname").notNullable().unique();
    t.text("password").notNullable().unique();

    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
