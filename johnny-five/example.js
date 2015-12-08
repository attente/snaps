var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
    // Create an Led on pin 13
    var led = new five.Led(13);
    // Blink every second
    led.blink(1000);
});
