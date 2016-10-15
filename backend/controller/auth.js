/**
 * Created by SeyerOpup on 10/13/2016.
 */
var User = require('../models/user');
module.exports = {
  register : function (req, res) {
    console.log(req.body)
    User.findOne({ email : req.body.email }, function (err, existingUser) {
      if ( existingUser ) {
        return res.status(409).send({ message : 'Email is already registered' });
      }
      var user = new User(req.body);
      user.save(function (err, result) {
        if ( err ) {
          res.status(500).send({
            message : err.message
          })
        }
        res.status(200);
      })
    });

  }
};
