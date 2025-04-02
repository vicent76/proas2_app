"use strict";
const Dotenv = require('dotenv');
const App = require('./app');
const Winston = require('./winston');
const Pack = require('./package.json');

Dotenv.config();

var apiPort = process.env.BASE_PORT || 8089;

App.listen(apiPort, () => {
    Winston.info(Pack.name + " VRS: " + Pack.version);
    Winston.info("Listening on port " + apiPort + "...");

    // -- console message
console.log("-------------------------------------------");
console.log(" PROAS2 RUNNING ");
console.log("-------------------------------------------");
console.log(' VERSION: ' + Pack.version);
console.log(' PORT: ' + apiPort);
console.log("-------------------------------------------");
});