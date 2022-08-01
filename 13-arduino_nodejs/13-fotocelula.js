function ondear_bandera();
{
    var luz = fotocelula.value;
    var turno = 0;

    if (luz > 800)
    {
        if (turno == 0)
        {
            turno = 1;
            servo_bandera.to(110);
        }
        else
        {
            turno = 0;
            servo_bandera.to(70);
        }
    }
    else
    {
        servo_bandera.to(150);
    }
    setTimeout(ondear_bandera, 1000); // Llama a la función cada segundo.
}


function encender()
{
    led_rojo.on();
    servo_bandera.to(0); // Mover el servo a 0°.
    ondear_bandera();
}


var johnny_five = require("johnny-five");
var circuito = new johnny_five.Board();
var led_rojo = new johnny_five.Led(13);
var servo_bandera = new johnny_five.Servo(9);
var configuracion = {pin: "A0", freq: 50};
var fotocelula = new johnny_five.Sensor(configuracion);

circuito.on("ready", encender);