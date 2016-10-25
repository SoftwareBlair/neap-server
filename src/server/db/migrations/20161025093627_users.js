exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments();
    t.string('username').notNullable().unique();
    t.string('password').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
