const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')
const postsRoute = require('./routes/posts')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
//Middlewares

//Routes
app.use('/posts', postsRoute)

app.get('/', (req, res) => {
    res.send('We are on home.')
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION , { useUnifiedTopology: true, useNewUrlParser: true }, ()=> console.log('Connected to DB...'))

//How to start listening to the server
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
