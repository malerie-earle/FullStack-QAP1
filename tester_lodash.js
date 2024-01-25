// Title: Full Stack JavaScript - QAP 1
// Program Description: QAP 1, Sem 3, Full Stack JavaScript
// Written By Malerie Earle
// Date Submitted - January 26, 2024

// import lodash
var _ = require('lodash');

// example of lodash
var numbers = [1, 2, 3, 4];
var listOfNumbers = '';
_.each(numbers, function(x) { listOfNumbers += x + ' ' });

// print to console
console.log(listOfNumbers);

// solution:
// 1 2 3 4