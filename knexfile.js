require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/knex_fail'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
