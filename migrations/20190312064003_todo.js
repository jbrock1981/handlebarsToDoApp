exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo', table => {
    table.increments();
    table.text('title').notNullable();
    table.integer('priority').notNullable();
    table.text('description');
    table
      .boolean('done')
      .defaultTo(false)
      .notNullable();
    table.datetime('date').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo');
};
