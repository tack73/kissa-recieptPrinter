import gpio from "array-gpio"
// Connect a momentary switch button to pin 11 and an led to pin 33.
const ledRed = gpio.out(40);
 
/* Pressing the sw button will turn on the led,
 * releasing the sw button will turn off the led.
 */
// sw.watch((state) => {
//   	if(state){
//   		led.on();
//   	}
// 	else{
// 		led.off();
//   	}
// }); 

ledRed.off();