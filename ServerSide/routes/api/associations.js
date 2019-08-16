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
    let association_text = req.body.association_text || req.query.association_text;
    let langID = req.body.langID;
    let wordID = req.body.wordID;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    let mysql = new MySQL(config_mysql);
    let rows = await mysql.runQuery(`CALL addAssociation("${association_text}","${userID}",${langID},${wordID})`);
    rows = rows[0][0][0];
    if(rows.STATUS === "OK") {
        return res.status(201).json(rows);
    }
    else {
        return res.status(400).json(rows);
    }
});

router.all('/Update', auth ,async (req, res) => {
    let userID = req.userID;
    let associationID = req.body.associationID;
    let associationText = req.body.associationText;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    let mysql = new MySQL(config_mysql);
    let rows = await mysql.runQuery(`CALL updateAssociation("${associationText}",${associationID}),"${userID}"`);
    rows = rows[0][0][0];
    if(rows.STATUS === "OK") {
        return res.status(200).json(rows);
    }
    else {
        return res.status(400).json(rows);
    }
});

router.all('/Delete',auth, async (req, res) => {
    let userID = req.userID;
    let associationID = req.body.associationID;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    let mysql = new MySQL(config_mysql);
    let rows = await mysql.runQuery(`CALL deleteAssociation(${associationID}),"${userID}"`);
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
    let rows = await mysql.runQuery(`CALL getAssociations(${wordID})`);
    let result = rows[0][0][0];
    if(result.STATUS === "OK") {
        return res.status(200).json(resp);
    }
    else {
        return res.status(400).json(rows);
    }
});

router.all('/Like',auth, async (req, res) => {
    let userID = req.userID;
    let assoID = req.body.assoID || req.query.assoID;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    let mysql = new MySQL(config_mysql);
    let rows = await mysql.runQuery(`CALL LikeAssociations(${assoID},${userID})`);
    let result = rows[0][0][0];
    if(result.STATUS === "OK") {
        return res.status(200).json(resp);
    }
    else {
        return res.status(400).json(rows);
    }
});

router.all('/UnLike',auth, async (req, res) => {
    let userID = req.userID;
    let assoID = req.body.assoID || req.query.assoID;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    let mysql = new MySQL(config_mysql);
    let rows = await mysql.runQuery(`CALL UnlikeAssociations(${assoID},${userID})`);
    let result = rows[0][0][0];
    if(result.STATUS === "OK") {
        return res.status(200).json(resp);
    }
    else {
        return res.status(400).json(rows);
    }
});


module.exports = router;
