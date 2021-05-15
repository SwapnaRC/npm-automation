"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = process.env.npm_package_config_port || 5000;
var runningMessage = 'Server is running on port ' + port;
app.get('/', function (req, res) {
    console.log('API was successfully requested');
    res.send(runningMessage);
});
var server = app.listen(port, function () {
    console.log(runningMessage);
});
module.exports = server;
