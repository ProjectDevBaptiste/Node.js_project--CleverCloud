//imports
var express = require('express');
var app = express();
var http = require('http').Server(app);
var parser = require('body-parser');

//variables 
var port = 8080;
var team = [];

//partie 1
/*http.createServer(function(req, res) {
	console.log('Lancement du serveur HTTP sur le port ' + port + ' ! ');
	res.write('Hello Tonio44 ! \n');
	res.write('Hello Vab ! \n');
	res.write('Hello Manzuc ! \n');
	res.write('Hello Mils ! \n');
	res.end();
}).listen(port);

//partie 2
/*
app.get('/', function(req, res) {
	console.log('demande de l url : / ' )
	res.send('Hello World ! \n');
	res.end();
})

app.get('/team', function(req, res) {
	console.log('demande de l url : /team ' );
	res.write('Hello Tonio44 ! \n');
	res.write('Hello Vab ! \n');
	res.write('Hello Manzuc ! \n');
	res.write('Hello Mils ! \n');
	res.end();
})

app.listen(port, function() {
	console.log('écoute sur le port ' + port + ' ! \n');
})
*/

//partie 3 
/**/
app.use(parser.json()); //autorisation parsing json
app.use(parser.urlencoded({ //
	extended : true
}));

app.post('/team_member', function(req, res) {
	var personne = {
		surname : req.body.surname,
		image : req.body.image
	}
	team.push(personne);
	res.status(200);
	res.send();
});

app.get('/team', function(req, res){
	res.status(200);
	//res.send(JSON.stringify(team));
	//res.json(team);

	/*for (var i = 0; i<team.length; i++){
		res.send("Membre numéro : "+ i +"\n");
	}
*/
	//res.send(team);
	res.send(team.length);
});
 
http.listen(port, function(){
	console.log('écoute sur le port ' + port + ' ! \n');
});