function dibujar(detalles_evento)
{
    /* 
        DESCRIPCION:
        PARAMETROS: detelles_evento: tiene todos los datos del evento ocurrido, en
        este caso el más importante es el keyCode para saber la tecla oprimida.
    */

    var teclas = 
    {
        IZQUIERDA: 37,  // Flecha izquierda
        ARRIBA: 38,     // Flecha arriba
        ABAJO: 39,      // Flecha derecha
        DERECHA: 40     // Flecha abajo
    };

    if (detalles_evento.keyCode == teclas.IZQUIERDA)
    {
        console.log("Tecla presionada: " + detalles_evento.key);
    }
    else if (detalles_evento.keyCode == teclas.ARRIBA)
    {
        console.log("Tecla presionada: " + detalles_evento.key);
    }
    else if (detalles_evento.keyCode == teclas.ABAJO)
    {
        console.log("Tecla presionada: " + detalles_evento.key);
    }
    else if (detalles_evento.keyCode == teclas.DERECHA)
    {
        console.log("Tecla presionada: " + detalles_evento.key);
    }
    else
    {
        console.log("Otra tecla presionada.");
    }

}


document.addEventListener("keyup", dibujar);