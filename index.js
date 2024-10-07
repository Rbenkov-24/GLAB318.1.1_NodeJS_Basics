//import the http module to create a server
const http = require("http");

//define the host and port for the server
const hostname = "127.0.0.1"; //this is the local address for the server
const PORT = 3000; //this is the port number where the server will listen for requests

//create the server that will handle incoming requests
const server = http.createServer((req, res) => {
    res.statusCode = 200; //set the response code to 200 to indicate success
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello Friends");
});

//start the server to listen for incoming requests
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`); 
});