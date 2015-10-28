import connect from 'connect';
import serveStatic from 'serve-static';
import serverIndex from 'serve-index';
import pathUtil from 'path';
import http from 'http';
import help from './help';

export default {
  listen: (port, publicPath, fn) => {
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