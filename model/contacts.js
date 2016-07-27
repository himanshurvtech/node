var mongoose = require('mongoose');  
var blobSchema = new mongoose.Schema({  
  name: String,
  last_name: String,
  user_name: String
});
mongoose.model('User', blobSchema);