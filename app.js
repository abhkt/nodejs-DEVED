const express = require('express');

const app = express();
const mongoose = require('mongoose');

// Middlewares
/**
 * whenever we hit any specific routes we can execute a fuction
 * we can authenticate a user
 */
// app.use('/posts', () => {
//     console.log('callback of posts');
// })

// Routes
app.get('/', (req, res) => {
    res.send('we are on home');
})

app.get('/posts', (req, res) => {
    res.send('we are on posts');
})

// connect to DB
mongoose.connect('mongodb+srv://abhkt:Abh@123456@cluster0-mnlt3.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true },
()=>{
    console.log('connected to db')
});

// How to we start to listening the server
const PORT = 3000;
app.listen(PORT);