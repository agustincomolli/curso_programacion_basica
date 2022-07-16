function dibujar_linea(lienzo, color, x_inicio, y_inicio, x_fin, y_fin)
/*
    DESCRIPCION: Dibuja una línea.
    PARAMETROS:
        lienzo = objeto - es la superficie donde se va a dibujar.
        color = string - color de la línea (red,  green, blue, etc)
        x_inicio = int - posición inicial de la línea en el eje X
        y_inicio = int - posición inicial de la línea en el eje Y
        x_fin = int - posición final de la línea en el eje X
        y_fin = int - posicón final de la línea en el eje Y
*/
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3
    lienzo.moveTo(x_inicio, y_inicio);
    lienzo.lineTo(x_fin, y_fin);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujar(detalles_evento)
{
    /* 
        DESCRIPCION:
        PARAMETROS: detelles_evento = tiene todos los datos del evento ocurrido, en
        este caso el más importante es el keyCode para saber la tecla oprimida.
    */

    var teclas = 
    {
        IZQUIERDA: 37,  // Flecha izquierda
        ARRIBA: 38,     // Flecha arriba
        DERECHA: 39,    // Flecha abajo
        ABAJO: 40       // Flecha derecha
    };
    var color = "darkcyan";
    var movimiento = 3;

    if (detalles_evento.keyCode == teclas.IZQUIERDA)
    {
        dibujar_linea(superficie, color, x, y, x - movimiento, y);
        x -= movimiento;
    }
    else if (detalles_evento.keyCode == teclas.ARRIBA)
    {
        dibujar_linea(superficie, color, x, y, x, y - movimiento);
        y -= movimiento;
    }
    else if (detalles_evento.keyCode == teclas.ABAJO)
    {
        dibujar_linea(superficie, color, x, y, x, y + movimiento);
        y += movimiento;
    }
    else if (detalles_evento.keyCode == teclas.DERECHA)
    {
        dibujar_linea(superficie, color, x, y, x + movimiento, y);
        x += movimiento;
    }
    else
    {
        console.log("Otra tecla presionada.");
    }

}


// Agregar EventListener
document.addEventListener("keydown", dibujar);
// Obtener elemento html através de si Id.
var dibujo_canvas = document.getElementById("area_dibujo");
// Obtener el área de dibujo.
var superficie = dibujo_canvas.getContext("2d");
var x = 150;
var y = 150;

dibujar_linea(superficie, "blue", x - 1,  y - 1, x + 1, y + 1);