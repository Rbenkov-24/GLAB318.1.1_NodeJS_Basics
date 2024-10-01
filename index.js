//import the http module to create a server
const http = require("http");

//define the host and port for the server
const hostman = "127.0.0.1"; //this is the local address for the server
const PORT = 3000; //this is the port number where the server will listen for requests

//create the server that will handle incoming requests
const server = http.createServer((req, res) => {
    //inside the callback function we handle the request and response
    res.statusCode = 200; //set the response code to 200 to indicate success
    res.setHeader("Content-Type", "text/plain"); //tell the client the content type is plain text
    res.end("Hello World"); //send "Hello World" as the response message and finish the request
});

//start the server to listen for incoming requests
server.listen(PORT, hostman, () => {
    //this function runs when the server is started
    console.log(`Server running at http://${hostman}:${PORT}/`); //log a message that the server is running and show the URL to access it
});