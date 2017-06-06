'use strict';
function setStatuses(res, dcCode, httpCode) {
    res.dcCode = dcCode;
    res.myStatus = httpCode;
    return res
}

function success(res, responseBody, httpCode, dcCode) {
    res.dcCode = dcCode;
    res.myStatus = httpCode;
    res.myResponse = responseBody;
    return res
}

module.exports = {
    setStatuses,
    success
};