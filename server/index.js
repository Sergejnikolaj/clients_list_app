let express = require('express');
let cors = require('cors');
let clients = require('./clients.json');

let app = express();

app.get("/", cors(), function(req, res){
	//console.log(req.body);
	//console.log(req.route);
	res.send(clients);
	console.log(typeof(clients));
});

app.listen(3020);


