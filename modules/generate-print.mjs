import createReceipt from "../controller/createReciept.mjs";
import pdf2png from "../controller/pdf2png.mjs";
import print from "../controller/print.mjs";
import * as fs from "node:fs/promises";
import ledOnOff from "../controller/led.mjs";

export default async function generatePrint(order){
    ledOnOff("white",true);
    await createReceipt(order);
    await pdf2png(order.submitId);
    print(order.submitId);
    await fs.rm(`./tmp/${order.submitId}.pdf`);
    await fs.rm(`./tmp/${order.submitId}.png`);
    ledOnOff("white",false);
}

// generatePrint({
//     "_id": {
//       "$oid": "66e30bb09e0d22569f462ee2"
//     },
//     "persons": 1,
//     "payment": "cash",
//     "orderItems": [
//       {
//         "itemId": 10,
//         "area": "Parfait",
//         "quantity": 1,
//         "orderId": "191e6e5468d362",
//         "isCompleted": true,
//         "_id": {
//           "$oid": "66e30bb09e0d22569f462ee3"
//         }
//       },
//       {
//         "itemId": 6,
//         "area": "Waffle",
//         "quantity": 1,
//         "orderId": "191e6e5523e4",
//         "isCompleted": true,
//         "_id": {
//           "$oid": "66e30bb09e0d22569f462ee4"
//         }
//       },
//       {
//         "itemId": 12,
//         "area": "Consomme_Soup",
//         "quantity": 1,
//         "orderId": "191e6e559202a3",
//         "isCompleted": true,
//         "_id": {
//           "$oid": "66e30bb09e0d22569f462ee5"
//         }
//       },
//       {
//         "itemId": 3,
//         "area": "Coffee",
//         "quantity": 1,
//         "orderId": "191e6e5651c239",
//         "isCompleted": true,
//         "_id": {
//           "$oid": "66e30bb09e0d22569f462ee6"
//         }
//       },
//       {
//         "itemId": 4,
//         "area": "Drink",
//         "quantity": 1,
//         "orderId": "191e6e56c853de",
//         "isCompleted": true,
//         "_id": {
//           "$oid": "66e30bb09e0d22569f462ee7"
//         }
//       },
//       {
//         "itemId": 1,
//         "area": "Ginger",
//         "quantity": 1,
//         "orderId": "191e6e576ec306",
//         "isCompleted": true,
//         "_id": {
//           "$oid": "66e30bb09e0d22569f462ee8"
//         }
//       }
//     ],
//     "total": 1500,
//     "submitId": "191e6e59f4b3a0",
//     "isServed": false,
//     "tableNum": 23,
//     "isEatIn": true,
//     "createdAt": {
//       "$date": "2024-09-12T15:41:36.435Z"
//     },
//     "updatedAt": {
//       "$date": "2024-09-12T15:41:36.435Z"
//     },
//     "__v": 0
//   });