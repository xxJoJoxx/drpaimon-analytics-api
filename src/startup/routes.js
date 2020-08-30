const express = require('express')
const convos = require('../routes/convo')
const issues = require('../routes/issue')
const posts = require('../routes/post')
const commands = require('../routes/command')


// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('../api-docs/swagger.json')

const morgan = require('morgan')
const helmet = require('helmet')

module.exports = app => {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('tiny'))
  }
  // app.use(passport.initialize())
  app.use(function(req, res, next) {
    //allow cors globally
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

//   app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  app.use(helmet())
  app.use(express.json())
  app.use('/v1/command', commands)
  app.use('/v1/convo', convos)
  app.use('/v1/issue', issues)
  app.use('/v1/post', posts)
}
