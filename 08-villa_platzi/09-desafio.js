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
   if (vacas.esta_cargado)
   {
        // Dibujar las vacas en las posiciones previamente guardadas.
        for (var i= 0; i < vacas.cant_max; i++)
        {
            superficie.drawImage(vacas.imagen, vacas.x[i], vacas.y[i]);
        }
   }
   if (granjero.esta_cargado)
   {
        superficie.drawImage(granjero.imagen, x, y);
   }
}


function mover_granjero(detalles_evento)
{
    /*     
    DESCRIPCION: Cambia las variables de las coordenadas X,Y según la 
                 tecla presionada y dibuja al granjero en esa ubicación.
    PARÁMETROS: detalles_evento = devuelve la tecla presionada.
    */

    var teclas = 
    {
        IZQUIERDA: 37,  // Flecha izquierda
        ARRIBA: 38,     // Flecha arriba
        DERECHA: 39,    // Flecha abajo
        ABAJO: 40       // Flecha derecha
    };

    if (detalles_evento.keyCode == teclas.IZQUIERDA && x > 0)
    {
         x -= 20;
    }
    else if (detalles_evento.keyCode == teclas.DERECHA 
             && x < (dibujo_canvas.clientWidth - 80))
    {
         x += 20;
    }
    else if (detalles_evento.keyCode == teclas.ABAJO 
             && y < dibujo_canvas.clientHeight - 90)
    {
         y += 20;
    }
    else if (detalles_evento.keyCode == teclas.ARRIBA && y > 10)
    {
         y -= 20;
    }
    dibujar();

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


function cargar_vacas()
{
    /*     
    DESCRIPCION: Indica que la imágen está lista para ser dibujada.
    */
    vacas.esta_cargado = true;
    for (var i= 0; i < vacas.cant_max; i++)
    {
        /* 
            Para organizar los animales en una grilla
            ancho canvas = 500
            ancho animal = 80
            posicion = parseInt(500 / 80) --> 6
        */
        var vacas_x = num_aleatorio(0, 5); // le resto 1 para que entren
        var vacas_y = num_aleatorio(0, 5); // todos en el canvas.
        // Guardar la posición de las vacas en las listas.
        vacas.x[i] = vacas_x * 80; // ancho del animal.
        vacas.y[i] = vacas_y * 80; // alto del animal.
    }
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
var vacas = 
{
    url: "vaca.png",
    esta_cargado: false,
    cant_max: 10,
    x: [], // Crear dos listas para guardar las posiciones X, Y de las
    y: []  // vacas.
};

// Coordenadas del granjero, predeterminadas en el centro del canvas.
var x = 210;
var y = 210;

// Agregar objeto Image a las variables.
fondo.imagen = new Image(); 
granjero.imagen = new Image();
vacas.imagen = new Image();

fondo.imagen.src = fondo.url;
granjero.imagen.src = granjero.url;
vacas.imagen.src = vacas.url;

// Agregar manejadores de eventos.
fondo.imagen.addEventListener("load", cargar_fondo);
granjero.imagen.addEventListener("load", cargar_granjero);
vacas.imagen.addEventListener("load", cargar_vacas)
document.addEventListener("keydown", mover_granjero)