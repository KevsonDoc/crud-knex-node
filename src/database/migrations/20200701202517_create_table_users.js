
exports.up = knex => knex.schema.createTable('users', table => {
        table.increments('id')
        table.text('name').notNullable()
        table.string('email').unique().notNullable()
        table.string('senha', [250]).notNullable()
        table.timestamp('create_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
});

exports.down = knex => knex.schema.dropTable('users');
