#!/usr/bin/env node

import server from './myserver';
import help from './help';
import program from 'commander';

program
  .version('0.1.0')
  .usage('<keywords> [options]')
  .option('-p, --port [Port number]', 'Port number running the server')
  .option('-d, --directory [directory serving]', 'The path being served')
  .on('--help', () => help.print())
  .parse(process.argv);

const anyArgs = () => !!program.args.length;

if(!anyArgs()) {
  program.help();
} else {
  if (program.args[0] === "serve") {
    server.listen(program.port, program.directory)
  } else {
    program.help();
  }
}