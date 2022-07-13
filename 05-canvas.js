// Obtener elemento html através de si Id.
var dibujo_canvas = document.getElementById("dibujo");
// Obtener el área de dibujo.
var lienzo = dibujo_canvas.getContext("2d");

// Chequear en la consola.
console.log(lienzo);

// Inicio del dibujo.
lienzo.beginPath();
// Elegir el color.
lienzo.strokeStyle = "red";
// Establecer el punto de inicio del trazo.
lienzo.moveTo(100, 100);
// Establecer el punto final del trazo.
lienzo.lineTo(200, 200);
// Dibujar una línea.
lienzo.stroke();
// Levantar el lápiz.
lienzo.closePath();

// Dibujar una segunda línea.
lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(200, 200);
lienzo.lineTo(100, 200);
lienzo.stroke();
lienzo.closePath();

// Dibujar una tercer línea.
lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.moveTo(100, 200);
lienzo.lineTo(100, 100);
lienzo.stroke();
lienzo.closePath();