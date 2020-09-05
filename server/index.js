const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// Connect to DB
const db = require('./db')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//Import routes
const mealRouter = require('./routes/meal-router');
app.use('/api', mealRouter)


//How we Listen to Server
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))