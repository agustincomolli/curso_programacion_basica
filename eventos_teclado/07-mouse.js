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

    var color = "darkcyan";
    var es_dibujo = false;
    var x = detalles_evento.offsetX;
    var y = detalles_evento.offsetY;

    if (detalles_evento.button == 0 && detalles_evento.type == "mousedown")
    {
        console.log("Empezar a dibujar.")
        es_dibujo = true;
        dibujar_linea(superficie, color, x, y, x, y)
    }
    else if (es_dibujo)
    {
        dibujar_linea(superficie, color, x, y, x, y)
    }
    else if (detalles_evento.button == 0 && detalles_evento.type == "mouseup")
    {
        console.log("Terminar de dibujar.")
        es_dibujo = false;
    }
}


// Obtener elemento html através de si Id.
var dibujo_canvas = document.getElementById("area_dibujo");
// Obtener el área de dibujo.
var superficie = dibujo_canvas.getContext("2d");

// Agregar EventListener al canvas.
dibujo_canvas.addEventListener("mousedown", dibujar);
dibujo_canvas.addEventListener("mouseup", dibujar);
dibujo_canvas.addEventListener("mousemove", dibujar)
