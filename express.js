// Title: Full Stack JavaScript - QAP 1
// Program Description: QAP 1, Sem 3, Full Stack JavaScript
// Written By Malerie Earle
// Date Submitted - January 26, 2024

// import express js module
const express = require('express');
const app = express()

// display Hello World on local host 3000
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// set the port to 3000
app.listen(3000)
console.log('Hello World!')

// Solution: localhost:3000 shows Hello World