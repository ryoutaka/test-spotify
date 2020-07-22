exports.up = function (knex) {
  return knex.schema.createTable("favorite_artist", (t) => {
    t.integer("user_id").references("id").inTable("users");
    t.text("artist_name").notNullable().unique();
    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};
//table.foreign(columns).references(columns).inTable(table)
exports.down = function (knex) {
  return knex.schema.dropTable("favorite_artist");
};
