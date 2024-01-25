QAP 1: Full Stack JavaScript
1.	How many hours did it take you to complete this assessment? (Please keep try to keep track of how many hours you have spent working on each individual part of this assessment as best you can - an estimation is fine; we just want a rough idea.)<br />
Task 1: 2h<br />
Task 2: 2h<br />
<br />
3.	What online resources you have used? (My lectures, YouTube, Stack overflow etc.)<br />
-	https://expressjs.com/<br />
-	W3 schools<br />
-	Tutorials point<br />
-	Npm js<br />
-	Lodash.com<br />
-	https://www.npmjs.com/package/uuid<br />
<br />
3.	Did you need to ask any of your friends in solving the problems. (If yes, please mention name of the friend. They must be amongst your class fellows.)<br />
-	No.<br />
<br />
4.	Did you need to ask questions to any of your instructors? If so, how many questions did you ask (or how many help sessions did you require)?
- No.<br />
<br />
5.	Rate (subjectively) the difficulty of each question from your own perspective, and whether you feel confident that you can solve a similar but different problem requiring some of the same techniques in the future now that you’ve completed this one.<br />
Task 1: Medium – Not difficult, but hard to show unique examples in small amount of code.<br />
Task 2: Medium – Easy to download, medium to find libraries that have short examples showing what it can do.<br />
<br />
Tasks #1: Understanding core global objects<br />
•	http, events, filesystem, console, buffer, globals, stream, url, path, os, process<br />
<br />
Write a few sentences or paragraph describing each object and how it would be used:<br />
<br />
•	http module:<br />
o	Node.js has a http module that can create a Web Server which handles HTTP requests sent by the HTTP client and returns web pages in response. Web servers usually deliver html documents along with images, style sheets, and scripts. This is often the first step in a Node.js application. This server can be used to access information, display information and more.<br />
o	See http.js<br />
<br />
•	file system module:<br />
o	The file system module from Node.js allows you to be able to access various files on your computer. All file system operations/functions have synchronous, asynchronous, callback, and promise-based forms, and are accessible using both Common JavaScript syntax and ES6 Modules. Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error. It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.<br />
o	See filesystem.js<br />
<br />
•	Stream module:<br />
o	Streams are entities designed to facilitate the continuous reading of data from a source or the writing of data to a destination. They offer an interface for implementing this streaming functionality and are integral to Node.js. Node.js provides various stream objects, such as those for handling HTTP server requests or managing standard output (process.stdout). Streams can possess characteristics of being readable, writable, or both, and they are all instances of EventEmitter.<br />
o	In Node.js, there are four types of streams −<br />
	Readable − Stream which is used for read operation.<br />
	Writable − Stream which is used for write operation.<br />
	Duplex − Stream which can be used for both read and write operation.<br />
	Transform − A type of duplex stream where the output is computed based on input.<br />
o	Due to Streams being EventEmitters, they often throw events, such as: <br />
	data − This event is fired when there is data available to read.<br />
	end − This event is fired when there is no more data to read.<br />
	error − This event is fired when there is an error receiving or writing data.<br />
	finish − This event is fired when all the data has been successfully flushed (written) to the underlying system.<br />
•	Piping the Streams - Piping is a mechanism where we provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another stream. There is no limit on piping operations. <br />
•	See stream.js<br />
<br />
Task 2:<br />
See tester_lodash.js, express,js, and UUID.js.<br />
![image](https://github.com/malerie-earle/FullStack-QAP1/assets/141525464/54321cc7-9a99-4e74-a7ff-54f8f7e79241)
