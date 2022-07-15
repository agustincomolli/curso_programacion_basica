function dibujar_linea(color, x_inicio, y_inicio, x_fin, y_fin)
/*
    DESCRIPCION: Dibuja una línea.
    PARAMETROS:
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


function dibujar_recuadro()
{
    /* DESCRIPCION: Dibuja un recuadro alrededor del canvas. */

    var ancho = dibujo_canvas.width - 1; // Le resto 1 para que se vea bien
    var alto = dibujo_canvas.height - 1; // por el antialiasing.

    dibujar_linea("#AAF", 1, 1, 1, alto);
    dibujar_linea("#AAF", 0, alto, ancho, alto);
    dibujar_linea("#AAF", 1, 1, ancho, 1);
    dibujar_linea("#AAF", ancho, 1, ancho, alto);
}


function dibujar_patrones(lineas_por_patron)
{
    /* 
    DESCRIPCION:
        Dibuja 4 patrones en las esquinas del canvas con un ciclo for.
    PARAMETROS:
        lineas_por_patron: es la cantidad de líneas con las que se va a
        dibujar cada patrón.
    */
    var linea = 0;
    var suma_x = 0;
    var suma_y = 0;
    var resta_x = 0;
    var resta_y = 0;
    var separacion = 0; // separación entre líneas.
    var ancho_canvas = dibujo_canvas.width;

    separacion = ancho_canvas / lineas_por_patron;
    console.log("Espacio entre líneas: " + separacion);

    // Limpiar el espacio del canvas.
    lienzo.clearRect(0, 0, dibujo_canvas.width, dibujo_canvas.height);
    dibujar_recuadro();

    for (linea = 0; linea < lineas_por_patron; linea++)
    {
        suma_x = (linea + 1) * separacion;
        suma_y = linea * separacion;
        resta_x = 300 - suma_x; // -> ((linea + 1) * 10)
        resta_y = 300 - suma_x; // -> ((linea + 1) * 10)

        // Dibujar empezando en la esquina superior izquierda.
        dibujar_linea("red", 0, suma_y, suma_x, 300);
        // Dibujar empezando en la esquina inferior derecha.
        dibujar_linea("green", 300, resta_y, resta_x, 0);
        // Dibujar empezando en la esquina inferior izquierda.
        dibujar_linea("blue", 0, resta_y, suma_x, 0);
        // Dibujar empezando en la esquina superior derecha.
        dibujar_linea("yellow", 300, suma_y, resta_x, 300);
    }    
}


function dibujar_clic()
{
    dibujar_patrones(parseInt(texto_lineas.value));
}


// Obtener elemento html através de si Id.
var dibujo_canvas = document.getElementById("dibujo");
var texto_lineas = document.getElementById("texto_lineas");
var boton_dibujar = document.getElementById("boton_dibujar");

// Obtener el área de dibujo.
var lienzo = dibujo_canvas.getContext("2d");

// Agregar EventListener
boton_dibujar.addEventListener("click", dibujar_clic);

