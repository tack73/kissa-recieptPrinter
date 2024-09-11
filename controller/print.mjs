import escpos from 'escpos';
import escposUsb from 'escpos-usb';
escpos.USB = escposUsb;
const device  = new escpos.USB("0x048b", "0x0202");
const options = { encoding: "GB18030" /* default */ }
// encoding is optional

const printer = new escpos.Printer(device, options);

export default function print(submitId){
    escpos.Image.load(`./tmp/${submitId}.png`, function(image){
        printer.align('ct').image(image, 'd24').feed(2).close();
    });
}