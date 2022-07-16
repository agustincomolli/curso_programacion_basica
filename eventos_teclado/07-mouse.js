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


function empezar_dibujo(lienzo, color, x, y)
{
/* 
    DESCRIPCION: Mientras el mouse esté presionado dibujar.
    PARAMETROS:
        lienzo = objeto - es la superficie donde se va a dibujar.
        color = string - color de la línea (red,  green, blue, etc)
        x = int - posición de la línea en el eje X
        y = int - posición de la línea en el eje Y
*/
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3
    lienzo.moveTo(x, y);
    lienzo.lineTo(x, y);
    lienzo.stroke();
    lienzo.closePath();
}


function terminar_dibujo(lienzo)
{
/*
    DESCRIPCION: Cuando se deja de apretar el botón del mouse, dejar de dibujar.
    PARAMETROS:
        lienzo = objeto - es la superficie donde se va a dibujar.
*/
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

    if (detalles_evento.button == 0 && detalles_evento.type == "mousedown")
    {
        console.log("Empezar a dibujar.")
        //empezar_dibujo(superficie, color, detalles_evento.clientX, detalles_evento.clientY);
        empezar_dibujo(superficie, color, detalles_evento.offsetX, offsetY);
    }
    else if (detalles_evento.button == 0 && detalles_evento.type == "mouseup")
    {
        console.log("Terminar de dibujar.")
        terminar_dibujo(superficie);
    }
}


// Obtener elemento html através de si Id.
var dibujo_canvas = document.getElementById("area_dibujo");
// Obtener el área de dibujo.
var superficie = dibujo_canvas.getContext("2d");

// Agregar EventListener al canvas.
dibujo_canvas.addEventListener("mousedown", dibujar);
dibujo_canvas.addEventListener("mouseup", dibujar);

