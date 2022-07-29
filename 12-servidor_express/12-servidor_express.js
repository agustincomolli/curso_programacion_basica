function inicio(peticion, resultado) 
{
    resultado.send('¡Hola mundo!');
}


function cursos(peticion, resultado)
{
    resultado.send("Estos son los <strong>cursos</strong>")
}

// Traer la librería express.
const lib_express = require('express');
// Crear una variable con la que se usará la librería.
const aplicacion = lib_express();
// www.platzi.com/cursos -> el get es lo que viene después del /.
aplicacion.get('/', inicio);
aplicacion.get("/cursos", cursos);
// Ejecutar la aplicación y correrla en el puerto ej: 8080
aplicacion.listen(8080);