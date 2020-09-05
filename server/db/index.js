const mongoose = require('mongoose')

//. connect creates a database 
mongoose
    .connect('mongodb://127.0.0.1:27017/food', { useNewUrlParser: true }, () => console.log('connected to DB again!'))
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db 