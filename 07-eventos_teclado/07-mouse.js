function establecer_grosor()
{
    /* 
        DESCRIPCION: Establecer el grosor del pixel a dibujar.
    */
        grosor_linea = rango_grosor.value;
}


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
    var antialiasing = (grosor_linea - 1) / 2;
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineCap = "round";
    lienzo.lineWidth = grosor_linea;
    lienzo.moveTo(x_inicio - antialiasing, y_inicio + antialiasing);
    lienzo.lineTo(x_fin + antialiasing, y_fin + antialiasing);
    lienzo.stroke();
    lienzo.closePath();
}


function empezar_dibujo(detalles_evento)
{
    /* 
        DESCRIPCION: Cambia a true "esta_dibujando" para indicar que empiece 
                     a dibujar.
        PARAMETROS: detelles_evento = tiene todos los datos del evento 
                    ocurrido.
    */
    
    // button == 0 es el botón izquierdo del mouse.
    if (detalles_evento.button == 0 && detalles_evento.type == "mousedown")
    {
        esta_dibujando = true;
        dibujar(detalles_evento);
    }

}


function terminar_dibujo()
{
    /* 
        DESCRIPCION: Cambiar a false "esta_dibujando" para indicar que deje 
                     de dibujar.
    */
    
    esta_dibujando = false;
}


function dibujar(detalles_evento)
{
    /* 
        DESCRIPCION: Dibujar un pixel en las coordenas del canvas si está en 
                     true la variable "esta_dibujando".
        PARAMETROS: detelles_evento = tiene todos los datos del evento ocurrido.
    */

    var color = "darkcyan";
    var x = detalles_evento.offsetX;
    var y = detalles_evento.offsetY;

    if (esta_dibujando)
    {
        dibujar_linea(superficie, color, x, y, x, y);
    }
}


function limpiar_canva()
{
    /* 
        DESCRIPCION: Limpia el recuadro del canvas.
    */
        superficie.clearRect(0, 0, dibujo_canvas.width, dibujo_canvas.height);
}


// Obtener elemento html através de su Id.
var dibujo_canvas = document.getElementById("area_dibujo");
var rango_grosor = document.getElementById("grosor")
var boton_limpiar = document.getElementById("limpiar")
// Obtener el área de dibujo.
var superficie = dibujo_canvas.getContext("2d");

var esta_dibujando = false;
var grosor_linea = 3;

// Agregar EventListener al canvas.
dibujo_canvas.addEventListener("mousedown", empezar_dibujo);
dibujo_canvas.addEventListener("mouseup", terminar_dibujo);
dibujo_canvas.addEventListener("mousemove", dibujar);
dibujo_canvas.addEventListener("mouseleave", terminar_dibujo)
// Agregar EventListener al botón y al selector de grosor.
rango_grosor.addEventListener("change", establecer_grosor);
boton_limpiar.addEventListener("click", limpiar_canva);
