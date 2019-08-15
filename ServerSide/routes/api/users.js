const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// Used as middleware
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route  POST api/users
// @desc   Register user
// @access Public
router.post(
  '/add',
  [
    check('displayName', 'First name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
    check('language', 'Please choose a language')
      .not()
      .isEmpty(),
    check('dateOfBirth', 'Please include a valid date')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors.errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { displayName, email, password, language } = req.body;
    const dateOfBirth = new Date(req.body.dateOfBirth);
    try {
      // See if user exists
      let user = await User.findOne({ email: email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      // Create a new User instance
      user = new User({
        displayName,
        email,
        password,
        language,
        dateOfBirth
      });
      console.log(user);

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Create a user in DB
      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id // no need of _id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }

    console.log(req.body);
  }
);

module.exports = router;
