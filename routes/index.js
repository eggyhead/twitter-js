const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
// const fs = require('fs');
const path = require('path');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var currName = req.params.name; //the name requested by the client in this format: firstname-lastname
  currName = currName.split('-').join(' ');  
  var list = tweetBank.find( {name: currName} ); //returns an 
  //array with the data associated with that name from the tweetBank
  // console.dir(res);
  res.render( 'index', {tweets: list}); //
});

router.get('/tweets/:id', function(req, res) {
  var currId = req.params.id;
  var tweet = tweetBank.find({id: currId});
  res.render('index', {tweets: tweet});
})


router.use(express.static('public'));

module.exports = router;
