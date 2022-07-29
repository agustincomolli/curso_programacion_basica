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


function calcular_entrega(cant_pedida)
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
    return cant_pedida;
}


function entregar_dinero()
{
    /* 
        DESCRIPCION: Genera la cantidad de billetes que se deberá entregar
                     al usuario en caso de que haya disponibilidad.
    */

    var cant_pedida = 0; // Cantidad que pide el usuario.
    var caja_backup = [];
    var dinero_no_entregado = 0;
    var cantidad = document.getElementById("cantidad");
    // Tomar el valor de la caja de texto.
    cant_pedida = parseInt(cantidad.value);
    dinero_entregado = [];

    // Comprobar si hay dinero disponible para entregar.
    if (cant_pedida > calcular_saldo())
    {
        resultado.innerHTML = "<p id=alerta>No hay suficiente dinero para " +
                              "entregar</p>";
    }
    else
    {
        /*  
            Hacer un respaldo del contenido actual de la caja. Calcular el
            dinero a entregar y en caso de que no se haya podido entregar
            el dinero requerido, informar al usuario y restaurar los valores
            del cajero.
        */
        caja_backup = dinero_caja;
        dinero_no_entregado = calcular_entrega(cant_pedida);
        if (dinero_no_entregado == 0)
        {
            mostrar_resultado(cant_pedida);
        }
        else
        {
            resultado.innerHTML = "<p id=alerta>No se puede entregar esa " +
            "cantidad de dinero.<br />Pruebe con otros valores.</p>";
            dinero_caja = caja_backup;
        }
    }
    
}

var dinero_caja = []; // Lista de billetes y sus cantidades
var dinero_entregado = [];
var boton_extraer = document.getElementById("extraer");
var resultado = document.getElementById("resultado");

dinero_caja.push(new billete(50, 3, "imagenes/50_euros.png"));
dinero_caja.push(new billete(20, 2, "imagenes/20_euros.png"));
dinero_caja.push(new billete(10, 2, "imagenes/10_euros.png"));

boton_extraer.addEventListener("click", entregar_dinero);
mostrar_saldo();