// Title: Full Stack JavaScript - QAP 1
// Program Description: QAP 1, Sem 3, Full Stack JavaScript
// Written By Malerie Earle
// Date Submitted - January 26, 2024

// Importing http module
var http = require('http');

// creating http server with a function with request and response attributes
// create a server object
http.createServer(function (req, res) {
  console.log("Server created.");
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!'); // write response to the client
  console.log("Hello World! Response sent.");
  res.end(); // end the response
  console.log("Response ended.");
}).listen(8080); //the server object listens on port 8080

console.log("HTTP Server Created. Go to localhost:8080")