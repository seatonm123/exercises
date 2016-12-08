
exports.up = function(knex, Promise) {
  return knex.schema.createTable('exercises', function(table) {
    table.increments();
    table.string('name');
    table.string('muscle_group');
    table.integer('intensity_scale_1-5');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('exercises');
};
