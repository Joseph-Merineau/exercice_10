var express = require('express');
var app = express();
/* on utilise le module «body-parser» pour traiter le formulaire transmis  par POST */
var bodyParser = require('_____________');

// Créer le parser « application/x-www-form-urlencoded » 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('_____________________', function (req, res) {
   res.sendFile( __dirname + "____________" + "05_form.htm" );
})

app.post('______________', urlencodedParser, function (req, res) {
   // Preparer l'output en format JSON 
   reponse = {
      prenom:req.body._________,
      nom:req.body._________,
      lamethode: "____________"
   };
   console.log('reponse');
   res.end(JSON.stringify(reponse));
})

	var server = app.listen(8081, function () {
   	var host = server.address().address
   	var port = server.address().port
   
   	console.log("Exemple l'application écoute sur http://%s:%s", host, port)

})