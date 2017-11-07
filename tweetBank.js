const _ = require('lodash');

const data = [];
// const fakeData = [{name: 'Erika', tweet: 'Hey hey!'}, {name: 'Hannah', tweet: 'Sup'}]

function add (name, content) {
    data.push({ name: name, content: content });
  }
  
  function list () {
    return _.cloneDeep(data);
  }
  
  function find (properties) { //when called, it makes a deep clone of the filtered data based on 
    //the given properties
    return _.cloneDeep(_.filter(data, properties)); //_.filter accepts an array of data objects and 
    //the properties we are looking for eg. data[]
    //_.filter is iterating through the data and returning the items that match the "properties" => returns an array of objects
    //_.cloneDeep is making a deep clone of the filtered array => returns an array of objects
  }
  
  module.exports = { add: add, list: list, find: find };


  const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  
  const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
  };
  
  const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
  };
  
  for (let i = 0; i < 10; i++) {
    module.exports.add( getFakeName(), getFakeTweet() );
  }

//   const props = {name: 'Erika'};
//   console.log(find(props));