
///////////////////////////////////
// DEPENDENCIES
///////////////////////////////////
//Server 
const express = require('express')
//MongoDB 
const mongoose = require('mongoose')



///////////////////////////////////
// CONFIG
///////////////////////////////////
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI



///////////////////////////////////
// MIDDLEWARE
///////////////////////////////////
app.use(express.json()) // use .json(), not .urlencoded()


///////////////////////////////////
// CONTROLLERS 
//////////////////////////////////
const animalController = require('./controllers/animals.js');
app.use('/animals', animalController);


///////////////////////////////////
// DATABASE
//////////////////////////////////
mongoose.connect(
    MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
    () => {
      console.log('the connection with mongod is established at', MONGODB_URI)
    }
  )

  mongoose.connection.on('error', err => console.log(err.message + ' is mongod not running?'))
  mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
///////////////////////////////////
// LISTENER
//////////////////////////////////
app.listen(PORT, () => {
    console.log('🎉🎊', 'Up and running on', PORT, '🎉🎊')
  })



