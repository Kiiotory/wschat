#!/usr/bin/env node
const app = require('../app');

const https = require("https");
const fs = require( 'fs' );
const debug = require( 'debug' )('ws_chat');
const privateKey = '';
const certificate = '';

var options = (typeof privateKey == "string" && privateKey.length) ? {key: privateKey, cert: certificate} : {};

https.createServer( options, function(req,res) {
    app.handle( req, res );
}).listen( parseInt(process.env.PORT)+100 || 3100 );

app.set('port', process.env.PORT || 36000);
let server = app.listen(app.get('port'), function() {
    debug('Express server listening on port ' + server.address().port);
});