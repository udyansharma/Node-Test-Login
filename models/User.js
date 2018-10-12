var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ValidateSchema   = new Schema({
    uname: String,
    pass: String,
    email: String
});
module.exports = mongoose.model('User', ValidateSchema);