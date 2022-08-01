function encender()
{
    var led = new johnny_five.Led(13);
    led.blink(500);
}


var johnny_five = require("johnny-five");
var circuito = new johnny_five.Board();

circuito.on("ready", encender);