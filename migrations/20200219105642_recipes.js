
exports.up = function(knex) {
    return knex.schema.createTable('recipes', (table) => {
        table.increments('id')
        table.string('name')
        table.integer('serves')
        table.string('ingredients')
        table.string('method')
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes')
};
