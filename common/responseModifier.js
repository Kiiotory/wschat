'use strict';

class responseModifier {
     constructor() {
         this.dcCode = dcCode;
         this.res.myStatus = httpCode;
     }

     success() {
         res.myResponse = responseBody;
         return res;
     }
};


function setStatuses(dcCode, httpCode) {
    res.dcCode = dcCode;
    res.myStatus = httpCode;

    return res;
}

function success(responseBody, httpCode, dcCode) {
    res.dcCode = dcCode;
    res.myStatus = httpCode;
    res.myResponse = responseBody;

    return res;
}

module.exports = responseModifier;