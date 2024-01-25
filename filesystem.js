// Title: Full Stack JavaScript - QAP 1
// Program Description: QAP 1, Sem 3, Full Stack JavaScript
// Written By Malerie Earle
// Date Submitted - January 26, 2024

// import node file system  module
var fs = require("fs");

// asynchronous read
fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("Async read: " + data.toString());
});

// sync read
var data = fs.readFileSync('input.txt');
console.log("Sync read: ");
console.log(data.toString());

console.log("Problem Ended.");
