var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/bhawna', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});