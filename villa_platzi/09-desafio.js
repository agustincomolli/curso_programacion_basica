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


function dibujar()
{
    /*     
    DESCRIPCION: dibuja las imágenes en el canvas en el orden correcto.
    */
   if (fondo.esta_cargado)
   {
        superficie.drawImage(fondo.imagen, 0, 0);
   }
   if (granjero.esta_cargado)
   {
        superficie.drawImage(granjero.imagen, 210, 210);
   }
}


function cargar_fondo()
{
    /*     
    DESCRIPCION: Indica que la imágen está lista para ser dibujada.
    */

    fondo.esta_cargado = true;
    dibujar();
}


function cargar_granjero()
{
    /*     
    DESCRIPCION: Indica que la imágen está lista para ser dibujada.
    */
    granjero.esta_cargado = true;
    dibujar();
}


var dibujo_canvas = document.getElementById("dibujo_canvas");
var superficie = dibujo_canvas.getContext("2d");

var fondo = 
{
    url: "tile.png",
    esta_cargado: false
};
var granjero = 
{
    url: "granjero.png",
    esta_cargado: false,
};

// Agregar objeto Image a las variables.
fondo.imagen = new Image(); 
granjero.imagen = new Image();

fondo.imagen.src = fondo.url;
granjero.imagen.src = granjero.url;

// Agregar manejadores de eventos.
fondo.imagen.addEventListener("load", cargar_fondo);
granjero.imagen.addEventListener("load", cargar_granjero);
document.addEventListener("keydown", dibujar)