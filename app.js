let express         = require('express');
const session       = require('express-session');
const passport      = require('passport');
let nconf           = require('nconf');
const helmet        = require('helmet');
let bodyParser      = require('body-parser');
const mongoose      = require('mongoose');
const pug           = require('pug');
const device        = require('express-device');
const fs            = require('fs');

express.NODE_ENV = process.env.NODE_ENV || 'development';
express.IS_DEBUG = (process.env.IS_DEBUG == 'true') || false;

nconf.argv().env().file({ file: `${__dirname}/private/config_${express.NODE_ENV}.json` });

var app = express();
app.disable('x-powered-by');
app.use(helmet());

app.use(bodyParser.urlencoded({ limit: '20mb', extended: true, parameterLimit: 10000 }));
app.use(bodyParser.json({limit: '20mb'}));
app.use(device.capture());

app.engine('pug', require('pug').__express);


mongoose.connect('mongodb://localhost:27017/ws_chat');
mongoose.Promise = global.Promise;




let users = require('./routes/users');
app.use('/users', users);


module.exports = app;