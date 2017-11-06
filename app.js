const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('your server is running on localhost:3000')
})

app.get('/', function(req, res, next) {
    res.send('<h1>Welcome to fake twitter</h1>')
})