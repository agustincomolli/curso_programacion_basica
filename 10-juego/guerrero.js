class Guerrero
{
    /*
        Define a un personaje del juego.
    */
    constructor(nombre, vida, ataque, imagen)
    {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.imagen = new Image();
        this.imagen.src = imagen;
    }


    hablar()
    {
        alert(this.nombre);
    }


    mostrar()
    {
        /* 
            Muestra la imagen del personaje y sus atributos.
        */
        document.write("<p id=\"guerrero\">");
        document.write("<img src=" + this.imagen.src + "><br />");
        document.write("<strong>" + this.nombre + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque)
        document.write("</p>");
    }
}
