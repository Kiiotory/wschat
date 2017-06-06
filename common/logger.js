'use strict';

let bunyan = require('bunyan');
let log    = bunyan.createLogger({
    name: 'wschat',
    src:true,
    streams:[
        {
            level: 'info',
            stream: process.stdout            // log INFO and above to stdout
        },
        {
            level: 'error',
            stream: process.stdout            // log INFO and above to stdout
            // path: `${__dirname}/../logs/ws_chat.log`  // log ERROR and above to a file
        }
    ]
});

module.exports = log;