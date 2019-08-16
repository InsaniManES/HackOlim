const express = require('express');
const router = express.Router();
const Language = require('../../models/Language');

// @route  GET api/languages
// @desc   get all the languages available in Google Translate
// @access Public
router.get('/', async (req, res) => {
  try {
    // Get all languages
    const languages = await Language.find({}).select('-_id');
    res.json(languages);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
