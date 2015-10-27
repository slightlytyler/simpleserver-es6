#!/usr/bin/env node

var server = require("./myserver");
var help = require('./help');
var program = require('commander');

program
  .version('0.1.0')
  .usage('<keywords> [options]')
  .option('-p, --port [Port number]', 'Port number running the server')
  .option('-d, --directory [directory serving]', 'The path being served')
  .on('--help', function(){ help.print() })
  .parse(process.argv);

function anyArgs() { return !!program.args.length; }

if(!anyArgs()) {
  program.help();
} else {
  if (program.args[0] === "serve") {
    server.listen( program.port, program.directory )
  } else {
    program.help();
  }
}