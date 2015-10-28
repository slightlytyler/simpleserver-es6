import chalk from 'chalk';
import chip from 'chip';
import colors from 'colors';

const log = chip();

export default {
  print: () => {
    console.log('Keywords:\n');
    console.log('serve: spins up a server \n');
    console.log('Description:\n');
    console.log('A simple http server with the connect middleware for serving static websites. \n');
    console.log('Examples:\n'.inverse.green);
    console.log('Running a server at port 9000');
    console.log('simpleserver serve -p 9000\n'.white);
    console.log('Running a server at port 9000 serving the site folder');
    console.log('simpleserver serve -p 9000 -d site\n'.white);
  },
  // helpers for printing to the console.
  log: (msg) => log.info(chalk.green(msg)),
  info: (msg) => log.debug(chalk.magenta(msg)),
  warn: (msg) => log.warn(chalk.yellow(msg)),
  error: (msg) => log.error(chalk.red(msg))
};