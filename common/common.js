'use strict';

const Common = () => {};
Common.prototype.log = (x) => {if(express.IS_DEBUG) console.log(x)};

module.exports = Common;
