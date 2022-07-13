// Guardar la ubicación del archivo html actual.
var ruta_archivo = window.location;

document.write("<p>¡Hola estudiante!</p>");
// Escribir un mensaje en la consola de depuración del navegador.
console.log("Este es un mensaje para la consola:");
console.log(ruta_archivo);

document.write("<p>Estás en " + ruta_archivo.pathname + "</p>");