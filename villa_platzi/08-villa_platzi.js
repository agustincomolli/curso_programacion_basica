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
    DESCRIPCION: Muestra en el canvas la imagen de archivo_fondo.
    */

    superficie.drawImage(img_fondo, 0, 0);
}


function dibujar_cerdos();
{
    /*     
    DESCRIPCION: Muestra en el canvas la imagen de cerdo.png.
    */

}


function dibujar_pollos();
{
    /*     
    DESCRIPCION: Muestra en el canvas la imagen de pollo.png.
    */

}


function dibujar_vacas();
{
    /*     
    DESCRIPCION: Muestra en el canvas la imagen de vaca.png.
    */

}


var dibujo_canvas = document.getElementById("dibujo_canvas");
var superficie = dibujo_canvas.getContext("2d");

var archivo_fondo = "tile.png";
var img_fondo = new Image(); // Declarar variable de objeto Image.
var img_vaca = new Image();
var img_cerdo = new Image();
var img_pollo = new Image();

img_fondo.src = archivo_fondo;
img_vaca.src = "vaca.png";
img_cerdo.src = "cerdo.png";
img_pollo.src = "pollo.png"

// Agregar manejadores de eventos.
img_fondo.addEventListener("load", dibujar_mapa);
img_cerdo.addEventListener("load", dibujar_cerdos);
img_pollo.addEventListener("load", dibujar_pollos);
img_vaca.addEventListener("load", dibujar_pollos);