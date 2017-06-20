/*jshint esversion: 6 */

//  stepper-gauge

//const b = require('bonescript');
const exec = require('child_process').exec;

// Motor is attached here.
//let controller = ["P9_11", "P9_13", "P9_15"]

//  Will be using these pins for motor control.
//  P8.8 P8.10 P8.12 P8.14 P8.16
//  P8.8 step
//  P8.10 direction

//  First use config-pin to set mode to GPIO output

//  This function sets the header pin to GPIO mode, state=low and with pull-down.
    function setGpio(headerPin) {
        const exec = require('child_process').exec;
        console.log(`Setting header pin ${headerPin} to GPIO mode.`);
        exec(`config-pin ${headerPin} low_pd`);
    }

setGpio('P8.8');
setGpio('P8.10');

function step() {
    console.log("Changing state");
    setTimeout(() => {exec(`echo 0 > /sys/class/gpio/gpio67/value`)}, 1000);
    setTimeout(() => {exec(`echo 1 > /sys/class/gpio/gpio67/value`)}, 1000);
}

/*for(let i = 0; i < 100; i++) {
//setTimeout(() => {step()}, 100);
    step();
};*/

exec(`echo 1 > /sys/class/gpio/gpio68/value`);

let i = 0;
polarity = 0;
const intervalid = setInterval(function() {
    console.log(`The value of polarity is ${polarity}.`);
    exec(`echo 1 > /sys/class/gpio/gpio68/value`);
    switch(polarity) {
        case 0: exec(`echo 1 > /sys/class/gpio/gpio67/value`);
            break;
        case 1: 
            exec(`echo 0 > /sys/class/gpio/gpio67/value`)
                   }
                               polarity = polarity ? 0 : 1;
    if(i++>100) return clearInterval(intervalid);
                               }, 10);