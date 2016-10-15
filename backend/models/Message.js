/**
 * Created by SeyerOpup on 10/13/2016.
 */

var mongoose = require('mongoose')
module.exports = mongoose.model('Message', {
  msg : String
});
