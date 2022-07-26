var imagenes = [];
imagenes["arquero"] = "arquero.png";
imagenes["caballero"] = "caballero.png";
imagenes["mago"] = "mago.png";

/* 
var arquero = new Guerrero("Legolas", 100, 30);
var caballero = new Guerrero("Aragorn", 120, 40);
var mago = new Guerrero("Gandalf", 80, 50);

arquero.imagen.src = imagenes["arquero"];
caballero.imagen.src = imagenes["caballero"];
mago.imagen.src = imagenes["mago"];

arquero.mostrar();
caballero.mostrar();
mago.mostrar();
*/

// Crear una lista con los objetos guerrero.
var guerreros = [];
guerreros.push(new Guerrero("Legolas", 100, 30, imagenes["arquero"]));
guerreros.push(new Guerrero("Aragorn", 120, 40, imagenes["caballero"]));
guerreros.push(new Guerrero("Gandalf", 80, 50, imagenes["mago"]));

// Recorrer objeto por objeto y mostrarlo en la página.
for (guerrero of guerreros)
{
    guerrero.mostrar();
}