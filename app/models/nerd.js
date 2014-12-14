// app/models/nerds.js
// grab the mongoose module

var mongoose = require('mongoose');

// define our nerd models
// module.exports allows us to pass this to other files
//when it's called

module.exports = mongoose.model('Nerd',{
  name:{type:String,defaul:''}
});