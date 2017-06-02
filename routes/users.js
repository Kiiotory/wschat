"use strict";
const express       = require('express');
const router        = express.Router();
let fs              = require('fs');
let User            = require('../models/users.model'), user = new User();
let middleware      = require('../middlewares/middleware');
let wrap = fn => (...args) => fn(...args).catch(args[2]);

router.post('', middleware(), wrap(async(req, res) => {
    let a = await user.addUser(req.body);
    console.log(a);
    res.send(200, a);
}));

router.get('', (req,res) => {
console.log(req.device);
if(req.device.type === 'phone'){
    res.render('../views/index.pug');
} else {
    res.render('../views/desktop.pug');
}

});

module.exports = router;
