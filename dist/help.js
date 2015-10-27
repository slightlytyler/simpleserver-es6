'use strict';

var chalk = require('chalk'); // used for pretty printing to the console.
var _log = require('chip')(); // helper for logging.
var colors = require('colors'); // add colors to the console.

var help = {
  print: function print() {
    console.log('  Keywords:\n');
    console.log('    serve: spins up a server \n');
    console.log('  Description:\n');
    console.log('    A simple http server with the connect middleware for serving static websites. \n');
    console.log('  Examples:\n'.inverse.green);
    console.log('    Running a server at port 9000');
    console.log('        simpleServer serve -p 9000\n'.white);
    console.log('    Running a server at port 9000 serving the site folder');
    console.log('        simpleServer serve -p 9000 -d site\n'.white);
  },
  // helpers for printing to the console.
  log: function log(msg) {
    _log.info(chalk.green(msg));
  },
  info: function info(msg) {
    _log.debug(chalk.magenta(msg));
  },
  warn: function warn(msg) {
    _log.warn(chalk.yellow(msg));
  },
  error: function error(msg) {
    _log.error(chalk.red(msg));
  }
};

module.exports = help;