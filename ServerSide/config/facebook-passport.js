const passport = require('../config/passport-serialize');
const FacebookStrategy = require('passport-facebook').Strategy;
const config = require('config');
const User = require('../models/User');

passport.use(
  new FacebookStrategy(
    {
      clientID: config.get('facebook-keys.clientID'),
      clientSecret: config.get('facebook-keys.clientSecret'),
      callbackURL: config.get('facebook-keys.callbackURL'),
      profileFields: ['id', 'emails', 'name']
    },
    function(accessToken, refreshToken, profile, done) {
      let resp = profile._json;
      User.findOne({ facebookID: profile.id })
        .then(currentUser => {
          if (currentUser) {
            // User already exists and appears now in session
            console.log('current is: ' + currentUser);
            currentUser.password = undefined;
            done(null, currentUser);
          } else {
            // if not, create user in our db
            return done(null, resp);
          }
        })
        .catch(err => {
          console.error(err);
        });
    }
  )
);

module.exports = passport;
