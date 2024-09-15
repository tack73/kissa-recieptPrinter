import gpio from "array-gpio"

const ledWhite = gpio.out(38);
const ledYellow = gpio.out(36);

export default function ledOnOff(color,bool){
    let led;
    if(color == "white"){led = ledWhite;}
    if(color == "yellow"){led = ledYellow;}

    bool ? led.on() : led.off();
}