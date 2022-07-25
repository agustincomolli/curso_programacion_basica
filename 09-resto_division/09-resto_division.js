function es_divisible(dividendo, divisor)
{
    /*
        DESCRIPCIÓN: Devuelve true si un número es divisible por otro.
    */
   if (dividendo % divisor == 0)
   {
        return true;
   }
   else
   {
        return false;
   }
}


function escribir_numeros(inicio, fin)
{
    /*
        DESCRIPCIÓN: Escribir una lista de números desde inicio a fin. Si el
                     número es divisible por 3 y por 5 tiene que decir
                     "Fizz Buzz"; si solo es divisible por 3 tiene que
                     decir "Fizz" y si solo es divisible por 5 decir
                     "Buzz".
        PARÁMETROS:  inicio = número que empieza la lista.
                     fin = número final de la lista.
    */

    var numeros = "";
    for (var i = inicio; i <= fin; i++)
    {
        if ((es_divisible(i, 3)) && (es_divisible(i, 5)))
        {
            numeros += "Fizz Buzz";
        }
        else if(es_divisible(i, 3))
        {
            numeros += "Fizz";
        }
        else if (es_divisible(i, 5))
        {
            numeros += "Buzz";
        }
        else
        {
            numeros += i;
        }
        numeros += " <br />";
    }
    return numeros
}


var resultado = document.getElementById("resultado");
// Cambiar el HTML del párrafo por el creado con la lista de números.
resultado.innerHTML = escribir_numeros(100);