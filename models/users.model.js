"use strict";
const express       = require('express');
const mongoose      = require('mongoose');
const userSchema    = require('../db/schemas/user.dbSchema');
// const common        = require('../db/schemas/user.dbSchema');

const Users = function () {};

Users.prototype.addUser = (data) => {
    let user = mongoose.model('Users', userSchema);
    let newUser = new user(data);
    console.log(userSchema);
    return new user(data).save({}).then(result => result).catch(err => {
        console.log(err);
        return err;
    });
};

module.exports = Users;