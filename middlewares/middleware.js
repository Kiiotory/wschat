'use strict';

let Users = function () {
    return function(req,res,next){
        // console.log('req',req, '====');//todo написать функции которые будут пользовать методом next от прототипа
        next();
    };
};

module.exports = Users;