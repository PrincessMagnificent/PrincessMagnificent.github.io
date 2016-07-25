//http://blog.modulus.io/build-your-first-http-server-in-nodejs

//My First HTTP Server in Node.js

/*Now to see Node’s magic simply start the server by running the file. In the terminal you can follow the below command to run your program:

> node myFirstHTTPServer.js

#output
Server listening on: http://localhost:8080

Hurray! now open up the url http://localhost:8080 on your browser and it should serve you the text returned from our program. Play with the path of the URL and see the message displayed.*/

//let's import the HTTP module

var http = require("http");

//define a port

const PORT = 8080;

//a function which handles requests and sends response

function handleRequest(request, response) {
	response.end("it WORKZ!! path HIT: " + request.url);
}

//create a SERVER
var server = http.createServer(handleRequest);

//start our server, shall we
server.listen(PORT, function() {
	//callback triggered when server is successfully listening, which means all is right with the world
	console.log("Server listening on: http://localhost:%s", PORT);
});
