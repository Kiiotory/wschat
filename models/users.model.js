"use strict";
const express       = require('express');
const mongoose      = require('mongoose');
const userSchema    = require('../db/schemas/user.dbSchema');
let beautifyUnique  = require('mongoose-beautiful-unique-validation');
let log             = require(`../common/logger`);
let response        = require('../common/responseModifier');
userSchema.plugin(beautifyUnique);
const Users = function () {};

Users.prototype.addUser = (data) => {
    let user = mongoose.model('Users', userSchema);
    return new user(data).save({}).then(result => result).catch(err => {
        // log.error({name:'addUser'}, 'err');
        log.info(err);
        // console.log(mongoose)
        return Object.values(err.errors)[0].message;
    });

    // try {
    //     let result = new user(data).save({});
    //     return response.success({},'a1212sd','sdf','asd');
    // } catch (err) {
    //     return response.setStatuses({},2127,201);
    // }

};

module.exports = Users;