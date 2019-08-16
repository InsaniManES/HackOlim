const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const config = require('config');
const config_mysql = config.get('mysql_words');
const MySQL = require('../../config/mysql');
// const auth = require('../../')

// Used as middleware
const { check, validationResult } = require('express-validator');

router.all('/Add',auth, async (req, res) => {
    let userID = req.userID;
    let wordName = req.body.word || req.query.word;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    let mysql = new MySQL(config_mysql);
    let rows = await mysql.runQuery(`CALL addWord("${userID}","${wordName}")`);
    rows = rows[0][0][0];
    if(rows.STATUS === "OK") {
        return res.status(201).json(rows);
    }
    else {
        return res.status(400).json(rows);
    }
});

router.all('/Delete', auth ,async (req, res) => {
    let userID = req.userID;
    let wordID = req.body.wordID || req.query.wordID;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    let mysql = new MySQL(config_mysql);
    let rows = await mysql.runQuery(`CALL deleteWord(${wordID},"${userID}")`);
    rows = rows[0][0][0];
    if(rows.STATUS === "OK") {
        return res.status(200).json(rows);
    }
    else {
        return res.status(400).json(rows);
    }
});

router.all('/Get',auth, async (req, res) => {
    let userID = req.userID;
    let wordID = req.body.wordID || req.query.wordID;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    let mysql = new MySQL(config_mysql);
    let rows = await mysql.runQuery(`CALL getWords("${userID}")`);
    let result = rows[0][0][0];
    let resp = rows[0][1];
    if(result.STATUS === "OK") {
        return res.status(200).json(resp);
    }
    else {
        return res.status(400).json(rows);
    }
});

module.exports = router;
