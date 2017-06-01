'use strict';
const mongoose  = require('mongoose');
const Schema = mongoose.Schema();
const Validator = require('Validator');
const validator = new Validator;

let userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: `First Name is required`
    },
    last_name:  {
        type: String,
        required: `Last Name is required`
    },
    sex_id:     Number,
    is_active: {
        type: Number,
        default: 1
    },
    email:{
        type: String,
        unique: true,
        validate: [validator.email, 'Email is not correct']
    },
    password:{

    },
    phone_number:{

    },
    type_id:{

    },
    is_email_confirmed:{

    },
    reset_passwd_key:{

    },
    avatar_content_id:{

    }
});


module.exports = userSchema;