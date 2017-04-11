module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/moviedb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};