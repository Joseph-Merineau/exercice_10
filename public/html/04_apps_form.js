var express = require('express');
var app = express();


app.use(express.static('public'));
app.get('______________', function (req, res) {
   console.log(__dirname);
   res.sendFile( __dirname + "______________" + "04_form.htm" );
})

app.get('___________', (req, res) => {
   console.log('accueil')
   res.end('<h1>Accueil</h1>')
})

app.get('_________________', function (req, res) {
   // Preparer l'output en format JSON 

   console.log('la route /traiter_get')

   // on utilise l'objet req.query pour récupérer les données GET
   reponse = {
      prenom:req._______._________,
      nom:req.________.______________
   };


   console.log(reponse);

   
   res.end(JSON._______________(_____________));
})




var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Exemple l'application écoute sur http://%s:%s", host, port)

})