const mongoose = require('mongoose')

const options = {
  dbName: process.env.BOTDB,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  auth: {
    user: process.env.BOT_DB_USER,
    password: process.env.BOT_DB_PASSWORD
  }
}

module.exports = () => {
  mongoose
    .connect(
      'mongodb://' +
        process.env.BOT_DB_HOST +
        '?authSource=' +
        process.env.BOT_AUTHDB,
      options
    )
    
  mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${process.env.NODE_ENV} environment`)
  })

  mongoose.connection.on('disconnected', function() {
    console.log('MongoDB disconnected')
  })

  mongoose.connection.on('reconnected', function() {
    console.log('MongoDB reconnected')
  })
  mongoose.connection.on('error', err => {
    console.log('Mongoose default connection error: ' + err)
  })
}
