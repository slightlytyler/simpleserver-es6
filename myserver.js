var connect = require('connect');
var serveStatic = require('serve-static');
var serverIndex = require('serve-index');
var pathUtil = require('path');
var http = require('http');
var help = require('./help');

var myserver = {
  listen: function (port, publicPath, fn) {
    port = port || 8228; // default 8228
    publicPath = pathUtil.resolve(publicPath || '.') // serve current directory by default.
    // instantiate middleware
    var app = connect()
        .use(serverIndex(publicPath))
        .use(serveStatic(publicPath));
    // Instantiate server
    var server = http.createServer(app).listen(port, fn);
    help.log("Server running at port " + port + " ...");
  }
};

module.exports = myserver