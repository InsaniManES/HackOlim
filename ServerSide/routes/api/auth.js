const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const sign = require('../../config/jwt');
const { check, validationResult } = require('express-validator');
const googlePassport = require('../../config/google-passport');
const facebookPassport = require('../../config/facebook-passport');

const User = require('../../models/User');

// @route  GET api/auth
// @desc   get the currently authenticated user
// @access Public
router.get('/', auth, async (req, res) => {
  try {
    // Get user without password
    const user = await User.findById(req.userID).select('-password');
    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/auth
// @desc   Authenticate user & get token - login
// @access Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);

    const { email, password } = req.body;
    try {
      // See if user exists
      let user = await User.findOne({ email: email }).populate(
        'user',
        '-password'
      );
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // user.password is encrypted in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id // no need of _id
        }
      };

      // jwt.sign(
      //   payload,
      //   config.get('jwtSecret'),
      //   { expiresIn: 360000 },
      //   (err, token) => {
      //     if (err) throw err;
      //     user.password = undefined;
      //     res.json({ token, user });
      //   }
      // );
      sign(payload).then(token => {
        res.status(201).json({ token, user });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// auth with google+
router.get(
  '/google',
  googlePassport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/plus.login'
    ]
  })
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/callback', googlePassport.authenticate('google'), function(
  req,
  res
) {
  let user = req.session.passport.user;
  res.json({ STATUS: 'OK', user });
});

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
router.get(
  '/facebook',
  facebookPassport.authenticate('facebook', {
    scope: 'email'
  })
);

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get(
  '/facebook/callback',
  facebookPassport.authenticate('facebook'),
  (req, res) => {
    let user = req.session.passport.user;
    res.json({ STATUS: 'OK', user });
  }
);

module.exports = router;
