const passport = require('../config/passport-serialize');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const config = require('config');
const User = require('../models/User');

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID: config.get('google-keys.clientID'),
      clientSecret: config.get('google-keys.clientSecret'),
      callbackURL: config.get('google-keys.callbackURL')
    },
    function(accessToken, refreshToken, profile, done) {
      let resp = profile._json;
      User.findOne({ googleID: profile.id })
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
