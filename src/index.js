const express = require('express')
const app = express()

require('dotenv').config()

require('./startup/routes')(app)
// require('./startup/validation')()
require('./config/db')()


const port = process.env.PORT || 3300
app.listen(port, () => console.log(`Listening on port ${port}`) )