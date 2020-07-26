// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "database",
      user: "postgres",
      password: "200274",
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  },
};
