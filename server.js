const express = require('express')
const { join } = require('path')
const { syncIndexes } = require('./models/Workout')
const syncDB = require('./db')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./Routes'))

syncDB()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))