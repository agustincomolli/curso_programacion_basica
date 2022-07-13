// Gravedades de los planetas del sistema solar
var gravedad_mercurio = 3.7;
var gravedad_venus = 8.87;
var gravedad_tierra = 9.8;
var gravedad_marte = 3.711;
var gravedad_jupiter = 24.8;
var gravedad_saturno = 10.44;
var gravedad_urano = 8.7;
var gravedad_neptuno = 11.15;
var gravedad_pluton = 0.62;

var planeta_elegido;
var planeta;
var peso;
var peso_final;
var mensaje;

// Preguntar al usuario su peso actual.
peso = prompt("¿Cuál es tu peso?");
// Convertir el valor ingresado a número.
peso = parseFloat(peso);

// Preguntar al usuario qué planeta quiere.
mensaje = "Elige tu planeta: \n" + 
          "1 - Mercurio.\n" +
          "2 - Venus.\n" +
          "3 - Marte.\n" +
          "4 - Júpiter.\n" +
          "5 - Saturno.\n" +
          "6 - Urano.\n" +
          "7 - Neptuno.\n" +
          "8 - Plutón.\n";
planeta_elegido = parseInt(prompt(mensaje));

// Verificar la opción elegida.
if (planeta_elegido == 1)
{
    // Calcular el peso en Mercurio.
    peso_final = (peso * gravedad_mercurio) / gravedad_tierra;
    planeta = "Mercurio";
}
else if (planeta_elegido == 2)
{
    // Calcular el peso en Venus.
    peso_final = (peso * gravedad_venus) / gravedad_tierra;
    planeta = "Venus";
}
else if (planeta_elegido == 3)
{
    // Calcular el peso en Marte.
    peso_final = (peso * gravedad_marte) / gravedad_tierra;
    planeta = "Marte";
}
else if (planeta_elegido == 4)
{
    // Calcular el peso en Júpiter.
    peso_final = (peso * gravedad_jupiter) / gravedad_tierra;
    planeta = "Júpiter";
}
else if (planeta_elegido == 5)
{
    // Calcular el peso en Saturno.
    peso_final = (peso * gravedad_saturno) / gravedad_tierra;
    planeta = "Saturno";
}
else if (planeta_elegido == 6)
{
    // Calcular el peso en Urano.
    peso_final = (peso * gravedad_urano) / gravedad_tierra;
    planeta = "Urano";
}
else if (planeta_elegido == 7)
{
    // Calcular el peso en Neptuno.
    peso_final = (peso * gravedad_neptuno) / gravedad_tierra;
    planeta = "Neptuno";
}
else if (planeta_elegido == 8)
{
    // Calcular el peso en Plutón.
    peso_final = (peso * gravedad_pluton) / gravedad_tierra;
    planeta = "Plutón";
}
else
{
    alert("ERROR: No ingresó un valor correcto.")
    planeta = "el planeta del ERROR"
    peso_final = 0
}

// Redondear decimales.
// peso_final = parseInt(peso_final)
peso_final = peso_final.toFixed(2); // Deja solo dos decimales.

// Escribir dentro del html.
document.writeln("<p>Tu peso en la Tierra es de <strong>" + peso + 
                 " kgr</strong>.</p>");
document.writeln("<p>Tu peso en " + planeta + " es de <strong>" + 
                 peso_final + " kgr</strong>.</p>");