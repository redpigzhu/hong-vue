const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const enforce = require('express-sslify');

//create express server
const app = express();

// configuration Heruko will provide certs
app.use(enforce.HTTPS({ trustProtoHeader: true }));
//Heruko will call npm build 
app.use(serveStatic(__dirname + '/dist'));
app.use(history());

app.listen(process.env.PORT || 5000);