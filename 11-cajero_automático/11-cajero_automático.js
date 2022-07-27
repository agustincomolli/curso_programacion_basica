function mostrar_resultado(cant_restante)
{
    /* 
        DESCRIPCION: Muestra el resultado de la extracción.
        PARAMETROS: cant_restante = indica si hay billetes sin entregar.
    */

    // Limpiar la <p id="resultado"> para agregar los nuevos resultados.
    resultado.innerHTML = "";

    if (cant_restante > 0)
    {
        resultado.innerHTML = "No hay suficiente dinero para entregar";
    }
    else
    {
        resultado.innerHTML = "Entregados: <br />";
        for (var billete_entregado of dinero_entregado)
        {
            if (billete_entregado.cantidad > 0)
            {
                resultado.innerHTML += "<img src=" + billete_entregado.imagen.src + ">";
                resultado.innerHTML += billete_entregado.cantidad;
                resultado.innerHTML += " billetes de $ " + billete_entregado.valor;
                resultado.innerHTML += "<br />";
            }
        }
    }
}


function entregar_dinero()
{
    // Tomar el valor de la caja de texto.
    cant_pedida = parseInt(cantidad.value);
    dinero_entregado = [];
    
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
                                              cant_billetes));
            cant_pedida -= billete_actual.valor * cant_billetes;
        }
    }
    mostrar_resultado(cant_pedida);
}

var dinero_caja = []; // Lista de billetes y sus cantidades
var dinero_entregado = [];
var cant_pedida = 0; // Cantidad que pide el usuario.
var cant_billetes = 0; // Cantidad de billetes a entregar.
var boton_extraer = document.getElementById("extraer");
var cantidad = document.getElementById("cantidad")
var resultado = document.getElementById("resultado")

dinero_caja.push(new billete(50, 3, "imagenes/50_euros.png"));
dinero_caja.push(new billete(20, 2, "imagenes/20_euros.png"));
dinero_caja.push(new billete(10, 2, "10_euros.png"));

boton_extraer.addEventListener("click", entregar_dinero);