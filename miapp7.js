//Formulario GET con hidden
//Preguntas y respuestas.
var express = require('express');

var app = express();

app.get('/preguntas',function(req,res,next){
	res.send(
		'<html><body>'
		+'<form method="get" action="/respuestas">'
		+'<input type="hidden" name="tipo" value="preg1" /><br>'
		+'¿Quien descubrio América?: <br>'
		+'<input type="text" name="preg1" /><br>'
		+'<input type="submit" value="Enviar"/><br>'
		+'</form><br>'
		+'<form method="get" action="/respuestas">'
		+'<input type="hidden" name="tipo" value="preg2" /><br>'
		+'¿Capital de Portugal?: <br>'
		+'<input type="text" name="preg2" /><br>'
		+'<input type="submit" value="Enviar"/><br>'
		+'</form><br>'
	+'</body></html>');	
});

app.get('/respuestas',function (req,res) {	
	
switch(req.query.tipo){
	case 'preg1':
	if (req.query.preg1==='Colón') {
		res.send(
		'<html><body>'
		+'<h1>Respuesta correcta</h1>'
		+'<p>'+req.query.preg1+' decubrió América</p>'
		+'<a href="http://localhost:8000/preguntas">Atrás</a>'
		+'</body></html>');
	} else {
		res.send(
		'<html><body>'
		+'<h1>Respuesta incorrecta</h1>'
		+'<p>Colón fue quien decubrió América</p>'
		+'<a href="http://localhost:8000/preguntas">Atrás</a>'
		+'</body></html>');
	}; break;
	res.send("Respuesta "+req.query.preg1);
	
	case 'preg2':
	if (req.query.preg2==='Lisboa') {
		res.send(
		'<html><body>'
		+'<h1>Respuesta correcta</h1>'
		+'<p>'+req.query.preg2+' es la capital de Portugal</p>'
		+'<a href="http://localhost:8000/preguntas">Atrás</a>'
		+'</body></html>');
		
	} else {
		res.send(
		'<html><body>'
		+'<h1>Respuesta incorrecta!</h1>'
		+'<p> Lisboa es la capital de Portugal</p>'
		+'<a href="http://localhost:8000/preguntas">Atrás</a>'
		+'</body></html>');
	}; break;
}	
});

app.listen(8000);
console.log("Escuchando por el puerto 8000"); 