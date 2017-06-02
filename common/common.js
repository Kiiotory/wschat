'use strict';

const Common = function() {
};

Common.prototype.log = (x) => {if(express.IS_DEBUG) console.log(x)};


module.exports = Common;
