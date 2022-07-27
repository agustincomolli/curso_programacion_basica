class billete
{
    /* Define un billete moneda. */

    constructor(valor, cantidad, imagen)
    {
        this.valor = valor;
        this.cantidad = cantidad;
        this.imagen = new Image();
        this.imagen.src = imagen;
    }
}