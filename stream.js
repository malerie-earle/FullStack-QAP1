// Title: Full Stack JavaScript - QAP 1
// Program Description: QAP 1, Sem 3, Full Stack JavaScript
// Written By Malerie Earle
// Date Submitted - January 26, 2024

// stream.pipeline() method
// import fs and zlib
var fs = require('fs');
var zlib = require('zlib');

// constructing finished from stream
var { pipeline } = require('stream');

// constructing promisify from util
var { promisify } = require('util');

// define pipelineAsync method
var pipelineAsync = promisify(pipeline);

// constructing readable stream
var readable = fs.createReadStream("input.txt");

// constructing writable stream
var writable = fs.createWriteStream("output.txt");

// creating transform stream
var transform = zlib.createGzip();

// Async function
(async function run() {
  try {
    // pipelining three streams
    await pipelineAsync (
      readable,
      transform,
      writable
    );
    console.log("pipeline accomplished.");
  }
  // shows error
  catch (err) {
    console.error('pipeline failed with error: ', err);
  }
}) ();
