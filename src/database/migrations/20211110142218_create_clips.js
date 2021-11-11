
exports.up = function(knex) {
  return knex.schema.createTable('clips', function (table) {
      table.string("id").primary()
      table.integer("idade").notNullable()
      table.string("nome").notNullable()


  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('clips')
};
