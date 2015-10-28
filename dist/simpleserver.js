#!/usr/bin/env node
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _myserver = require('./myserver');

var _myserver2 = _interopRequireDefault(_myserver);

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

_commander2['default'].version('0.1.0').usage('<keywords> [options]').option('-p, --port [Port number]', 'Port number running the server').option('-d, --directory [directory serving]', 'The path being served').on('--help', function () {
  return _help2['default'].print();
}).parse(process.argv);

var anyArgs = function anyArgs() {
  return !!_commander2['default'].args.length;
};

if (!anyArgs()) {
  _commander2['default'].help();
} else {
  if (_commander2['default'].args[0] === "serve") {
    _myserver2['default'].listen(_commander2['default'].port, _commander2['default'].directory);
  } else {
    _commander2['default'].help();
  }
}