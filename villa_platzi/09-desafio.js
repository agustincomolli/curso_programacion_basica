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
   if (vaca.esta_cargado)
   {
        for (var i= 0; i < vaca.cant_max; i++)
        {
            /* 
                Para organizar los animales en una grilla
                ancho canvas = 500
                ancho animal = 80
                posicion = parseInt(500 / 80) --> 6
            */
            var x = num_aleatorio(0, 5); // le resto 1 para que entren
            var y = num_aleatorio(0, 5); // todos en el canvas.
            x = x * 80; // ancho del animal.
            y = y * 80; // alto del animal.
            superficie.drawImage(vaca.imagen, x, y);
        }
   }
   if (pollo.esta_cargado)
   {
    for (var i= 0; i < pollo.cant_max; i++)
    {
        var x = num_aleatorio(0, 5);
        var y = num_aleatorio(0, 5);
        x = x * 80;
        y = y * 80;
        superficie.drawImage(pollo.imagen, x, y);
    }
}
   if (cerdo.esta_cargado)
   {
    for (var i= 0; i < cerdo.cant_max; i++)
    {
        var x = num_aleatorio(0, 5);
        var y = num_aleatorio(0, 5);
        x = x * 80;
        y = y * 80;
        superficie.drawImage(cerdo.imagen, x, y);
    }
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


function cargar_cerdos()
{
    /*     
    DESCRIPCION: Indica que la imágen está lista para ser dibujada.
    */
    cerdo.esta_cargado = true;
    dibujar();
}


function cargar_pollos()
{
    /*     
    DESCRIPCION: Indica que la imágen está lista para ser dibujada.
    */
    pollo.esta_cargado = true;
    dibujar();
}


function cargar_vacas()
{
    /*     
    DESCRIPCION: Indica que la imágen está lista para ser dibujada.
    */
    vaca.esta_cargado = true;
    dibujar();
}


var dibujo_canvas = document.getElementById("dibujo_canvas");
var superficie = dibujo_canvas.getContext("2d");

var fondo = 
{
    url: "tile.png",
    esta_cargado: false
};
var vaca = 
{
    url: "vaca.png",
    esta_cargado: false,
    cant_max: 10
};
var pollo = 
{
    url: "pollo.png",
    esta_cargado: false,
    cant_max: 10
};
var cerdo = 
{
    url: "cerdo.png",
    esta_cargado: false,
    cant_max: 10
};

// Agregar objeto Image a las variables.
fondo.imagen = new Image(); 
vaca.imagen = new Image();
cerdo.imagen = new Image();
pollo.imagen = new Image();

fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
pollo.imagen.src = pollo.url

// Agregar manejadores de eventos.
fondo.imagen.addEventListener("load", cargar_fondo);
cerdo.imagen.addEventListener("load", cargar_cerdos);
pollo.imagen.addEventListener("load", cargar_pollos);
vaca.imagen.addEventListener("load", cargar_vacas);