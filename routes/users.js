"use strict";
const express       = require('express');
const router        = express.Router();
let wrap            = require('co-express');
let fs              = require('fs');
let User            = require('../models/users.model'), user = new User();
let middleware      = require('../middlewares/middleware');

router.post('', middleware(), (req, res) => {
    console.log(req);
    res.send('post used');
return;
    async function wrap(req) {
        let params = req.body;
        let a = await user.addUser(params).then(res => {
            console.log('!222',req);
            return res;
        }).catch(err => console.log('err',err));
        res.send(a);
    }

    wrap(req).catch(err => console.log('error', err));

});

router.get('', (req,res) => {
console.log(req.device);
if(req.device.type === 'phone'){
    res.render('../views/index.pug');
} else {
    res.render('../views/desktop.pug');
}

});

module.exports = router;
