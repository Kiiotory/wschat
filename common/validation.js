'use strict';
const Joi = require('joi');

let Validator = () => {

};

Validator.prototype.email = () => {
    this.isValidData = (objToValidate, schema) => {
        Joi.validate(objToValidate, schema,{stripUnknown:true, convert:true}, (err, value) => {
            if(!err){
                return value;
            } else {
                return false;
            }
        })
    }
};

module.exports = Validator;