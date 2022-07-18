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


document.write("Generar 10 números aleatorios: ");
for (i = 0; i < 10; i++)
{
    var un_número = num_aleatorio(1, 10);
    document.write(un_número + " ");
}
