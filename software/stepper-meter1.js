/*jshint esversion: 6 */

//  stepper-gauge

const b = require('bonescript');
const exec = require('child_process').exec;

// Motor is attached here.
//let controller = ["P9_11", "P9_13", "P9_15"]

//  Will be using these pins for motor control.
//  P8.8 P8.10 P8.12 P8.14 P8.16
//  P8.8 step
//  P8.10 direction

//  First use config-pin to set mode to GPIO output

//  This function sets the header pin to GPIO mode, state=low and with pull-down.
    setGpio(headerPin) {
        const exec = require('child_process').exec;
        console.log(`Setting header pin ${headerPin} to GPIO mode.`);
        exec(`config-pin ${headerPin} low_pd`);
    }

setGpio('P9.8');
setGpio('P9.10');

step() => {
    
    setTimeout(exec(`echo 0 > /sys/class/gpio/gpio67/value`), 100);
    setTimeout(exec(`echo 1 > /sys/class/gpio/gpio67/value`), 100);
}

for(let i = 0; i < 100; i++) {
setTimeout(step(), 100);
};