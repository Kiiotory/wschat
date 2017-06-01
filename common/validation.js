'use strict';
const Joi = require('joi');

let Validator = () => {

};

Validator.prototype.isValidData = () => {
    Joi.validate(objToValidate, schema,{stripUnknown:true, convert:true}, (err, value) => {
        if(!err){
            return value;
        } else {
            return false;
        }
    })
};

Validator.prototype.email = (data) => data.test(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

module.exports = Validator;