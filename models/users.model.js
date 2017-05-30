"use strict";
const express       = require('express');
const mongoose      = require('mongoose');
const userSchema    = require('../db/schemas/user.dbSchema');

const Users = function () {};

Users.prototype.addUser = (data) => {
    let user = mongoose.model('Users', userSchema);
    let newUser = data.user;
    return  newUser.save({});
    // user.save(newUser).then((res) => console.log(res)).catch(err => console.log(err));
};

module.exports = Users;