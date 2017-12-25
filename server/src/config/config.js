module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'moodey',
    user: process.env.DB_USER || 'moodey',
    password: process.env.DB_PASS || 'moodey',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './moodey.sqlite'
    }
  }
}