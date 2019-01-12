import * as http from 'http' ;
import * as os from 'os';

console.log('Kubi server starting ...');

const handler = function(request, response) {
  console.log('Received Request from ' + request.connection.remoteAddress);
  response.writeHead(200);
  response.end('Hit!' + os.hostname() + '\n');
};

const www = http.createServer(handler);
www.listen(8000);