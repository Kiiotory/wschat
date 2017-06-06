"use strict";
const express       = require('express');
const mongoose      = require('mongoose');
const userSchema    = require('../db/schemas/user.dbSchema');
let log             = require(`../common/logger`);
// const common        = require('../db/schemas/user.dbSchema');

const Users = function () {};

Users.prototype.addUser = (data) => {
    let user = mongoose.model('Users', userSchema);
    let newUser = new user(data);

    return new user(data).save({}).then(result => result).catch(err => {
        log.error({name:'asdas'}, 'err');
        return Object.values(err.errors)[0].message;
    });
};

module.exports = Users;