/** let's imprts everything that the http packacge has specified */
var http = require('http');

const PORT1 = 7000;   //captitalize them because CONSTANTS = don't change
const PORT2 = 7500;


function handleRequest(req, res){

    if(req.socket.localPort === 7000){
        res.end("you're good");
    }
    else{
        res.end("you'll get there");
    }
}

var serverONE = http.createServer(handleRequest);
var serverTWO = http.createServer(handleRequest);

serverONE.listen(PORT1, function(){
    console.log("listening on http://localhost:" + PORT1);

});

serverTWO.listen(PORT2, function(){
    console.log("listening on http://localhost:" + PORT2);

});
