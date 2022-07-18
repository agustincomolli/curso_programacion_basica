function num_aleatorio(min, max)
{
    /* 
        DESCRIPCION: Devuelve un número aleatorio entre los valores min y max
        PARAMETROS:
            min = int - número mínimo que puede devolver la función.
            max = int - número máximo que puede devolver la función.
    */

    var resultado;
    resultado = Math.floor(Math.random() * ((max - min) + 1)) + min;
    return resultado;
}


function dibujar_mapa()
{
    /*     
    DESCRIPCION: Muestra en el canvas la imagen de fondo.
    */

    superficie.drawImage(imagen, 0, 0);
}


var dibujo_canvas = document.getElementById("dibujo_canvas");
var superficie = dibujo_canvas.getContext("2d");

var fondo = "tile.png";
var imagen = new Image(); // Declarar variable de objeto Image.

imagen.src = fondo;

imagen.addEventListener("load", dibujar_mapa)