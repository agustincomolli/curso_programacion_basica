function calcular_saldo()
{
    /* 
        DESCRIPCION: Devuelve el saldo disponible en el cajero.
    */
    var saldo = 0;
    for (var dinero of dinero_caja)
    {
        saldo += dinero.valor * dinero.cantidad;
    }
    return saldo;
}


function mostrar_saldo()
{
    /* 
        DESCRIPCION: Muestra el saldo disponible.
    */
    var operaciones = document.getElementById("operaciones")
    operaciones.innerHTML = "Saldo disponible: $ " + calcular_saldo();
}


function mostrar_resultado()
{
    /* 
        DESCRIPCION: Muestra el resultado de la extracción.
    */

    resultado.innerHTML = "Entregados:";
    resultado.innerHTML += "<br />".repeat(2)
    for (var billete_entregado of dinero_entregado)
    {
        if (billete_entregado.cantidad > 0)
        {
            // Crear una etiqueta con la imagen del billete correspondiente.
            img_billete = "<img src=";
            img_billete += billete_entregado.imagen;
            img_billete += " id=billete > ";
            // Multiplicar la imagen por la cantidad de billetes a entregar.
            resultado.innerHTML += img_billete.repeat(
                                    billete_entregado.cantidad);
            resultado.innerHTML += "<br />"
        }
    }
    mostrar_saldo();
}


function calcular_entrega()
{
    /* 
        DESCRIPCION: Genera la cantidad de billetes que se deberá entregar
                     al usuario en caso de que haya disponibilidad.
    */

    var cant_billetes = 0; // Cantidad de billetes a entregar.

    for (var billete_actual of dinero_caja)
    {
        if (cant_pedida > 0)
        {
            /* 
                Para saber cuántos billetes de un valor tengo que entregar
                divido la cantidad de billetes pedidos por el usuario, por
                el valor del billete que hay en el cajero; y solo me quedo
                con la parte entera de ese resultado.
            */
            cant_billetes = Math.floor(cant_pedida / billete_actual.valor);
            if (cant_billetes > billete_actual.cantidad)
            {
                cant_billetes = billete_actual.cantidad;
            }
            
            dinero_entregado.push(new billete(billete_actual.valor, 
                                              cant_billetes, 
                                              billete_actual.imagen));
            
            cant_pedida -= billete_actual.valor * cant_billetes;
            // Descontar lo entregado del total del cajero.
            billete_actual.cantidad -= cant_billetes; 
        }
    }
}


function entregar_dinero()
{
    /* 
        DESCRIPCION: Genera la cantidad de billetes que se deberá entregar
                     al usuario en caso de que haya disponibilidad.
    */

    dinero_entregado = [];
    // Tomar el valor de la caja de texto.
    cant_pedida = parseInt(cantidad.value);

    // Comprobar si hay dinero disponible para entregar.
    if (cant_pedida > calcular_saldo())
    {
        resultado.innerHTML = "<p id=alerta>No hay suficiente dinero para " +
                              "entregar</p>";
    }
    else
    {
        calcular_entrega();
        mostrar_resultado(cant_pedida);
    }
    
}

var dinero_caja = []; // Lista de billetes y sus cantidades
var dinero_entregado = [];
var cant_pedida = 0; // Cantidad que pide el usuario.
var boton_extraer = document.getElementById("extraer");
var cantidad = document.getElementById("cantidad");
var resultado = document.getElementById("resultado");

dinero_caja.push(new billete(50, 3, "imagenes/50_euros.png"));
dinero_caja.push(new billete(20, 2, "imagenes/20_euros.png"));
dinero_caja.push(new billete(10, 2, "imagenes/10_euros.png"));

boton_extraer.addEventListener("click", entregar_dinero);
mostrar_saldo();