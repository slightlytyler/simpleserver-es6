'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _connect = require('connect');

var _connect2 = _interopRequireDefault(_connect);

var _serveStatic = require('serve-static');

var _serveStatic2 = _interopRequireDefault(_serveStatic);

var _serveIndex = require('serve-index');

var _serveIndex2 = _interopRequireDefault(_serveIndex);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

exports['default'] = {
  listen: function listen(port, publicPath, fn) {
    port = port || 8228; // default 8228
    publicPath = _path2['default'].resolve(publicPath || '.'); // serve current directory by default.

    // instantiate middleware
    var app = (0, _connect2['default'])().use((0, _serveIndex2['default'])(publicPath)).use((0, _serveStatic2['default'])(publicPath));

    // Instantiate server
    var server = _http2['default'].createServer(app).listen(port, fn);
    _help2['default'].log("Server running at port " + port + " ...");
  }
};
module.exports = exports['default'];