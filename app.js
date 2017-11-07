const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
// const template = nunjucks();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html', nunjucksTitle, nunjucksLogic);
})

const nunjucksTitle = {
    title: "An Example"
}
    
    
const nunjucksLogic = {
    people: {
        person1: {name: "Gandalf"} ,
        person2: {name: "Frodo"},
        person3: {name: "Hermione"}
    }
}    

app.listen(3000, function() {
    console.log('your server is running on localhost:3000')
})

app.use('/', function(req,res,next) {
  console.log('path: ',req.path);
  console.log('method: ', req.method);
  next();
})

app.get('/news', function(req, res, next) {
    res.send('<h1>Welcome to fake twitter news!!!</h1>')
})

app.get('/', function(req, res, next) {
    res.send('<h1>Welcome to fake twitter</h1>')
})


