// Crear una función que dibuje una línea.
function dibujar_linea(color, x_inicio, y_inicio, x_fin, y_fin)
/*
    color = string - color de la línea (red,  green, blue, etc)
    x_inicio = int - posición inicial de la línea en el eje X
    y_inicio = int - posición inicial de la línea en el eje Y
    x_fin = int - posición final de la línea en el eje X
    y_fin = int - posicón final de la línea en el eje Y
*/
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicio, y_inicio);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();
}


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
lienzo.moveTo(100, 102);
// Establecer el punto final del trazo.
lienzo.lineTo(200, 202);
// Dibujar una línea.
lienzo.stroke();
// Levantar el lápiz.
lienzo.closePath();

// Dibujar una segunda línea.
lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(200, 202);
lienzo.lineTo(100, 202);
lienzo.stroke();
lienzo.closePath();

// Dibujar una tercer línea.
lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.moveTo(100, 202);
lienzo.lineTo(100, 102);
lienzo.stroke();
lienzo.closePath();

// Usar funcion.
dibujar_linea("darkcyan", 100, 102, 200, 102)
dibujar_linea("darkcyan", 200, 102, 200, 2)
dibujar_linea("darkcyan", 200, 2, 100, 2)
dibujar_linea("darkcyan", 100, 2, 100, 102)
