const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
// const template = nunjucks();
// env.express(app);




app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates




const locals = {
    title: "An Example",
    people: [
        {name: "Gandalf"},
        {name: "Frodo"},
        {name: "Hermione"}
    ]
}




app.get('/', function(req, res) {
    res.render('index',locals);
})


nunjucks.render('index.html',locals, function(err,output) {
    console.log(output);

})




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


