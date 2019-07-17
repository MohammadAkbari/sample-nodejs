const http = require('http');
const os = require('os');
console.log("app server starting ...");
var handler = function (request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    
    response.end("hostname: " + os.hostname() + "\n" + 
                 "type: " + os.type() + "\n" + 
                 "platform: " + os.platform() + "\n"+
                 "uptime: " + os.uptime() + "\n"+
                 "arch: " + os.arch() + "\n"+
                 "release: " + os.release() + "\n"+
                 "totalmem: " + os.totalmem() + "\n"+
                 "freemem: " + os.freemem() + "\n"+
                 "loadavg: " + os.loadavg() + "\n");
};
var www = http.createServer(handler);
www.listen(8080);
