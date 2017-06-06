"use strict";
const express       = require('express');
const router        = express.Router();
let fs              = require('fs');
let User            = require('../models/users.model'), user = new User();
let middleware      = require('../middlewares/middleware');
let bunyan          = require('bunyan');
let wrap = fn => (...args) => fn(...args).catch(args[2]);

router.post('', middleware(), wrap(async(req, res) => {
    let a = await user.addUser(req.body);
    console.log('!!!',a);
    res.send(a);

}));


module.exports = router;
