//imports http module with standard node.js installs
//modules are like javascript libraries
//require == import
const http = require("http");
const app = require('./app');
const path = require('path');

const host = "localhost";

//process.env.PORT is the environment variable of the web server you deploy it on
//if PORT is empty, just set port to 3000
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);