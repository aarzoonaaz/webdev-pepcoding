let singleQuotes = 'Arsalan is battery and also khadoos'
let doubleQuotes ="Arsalan aaj kl bht busy rhte h"
console.log(singleQuotes);
console.log(doubleQuotes);
//charAt ka use strings me jo index number pr jo string aata h charAt usi ko show krta h. example - charAt(3) h usme "a" aa jayega 
let char = singleQuotes.charAt(3);
console.log(char);
// substring ka use jo string chahiye wo la kr deta h
let substr = singleQuotes.substring(1,5);
console.log(substr);
//charcodeAt ka use ascii value nikaalne ke liye krte h
let ascii = singleQuotes.charCodeAt(3)
console.log(ascii);
//split ka use strings me elements ko alg krna hota h
let arraystr = singleQuotes.split(" ")
console.log(arraystr);
// join ka use split kiya hua element ko jorne me use hota h
let str = arraystr.join("+")
console.log(str);
// trim ka use first or last ke white spaces ko remove kr deta h
singleQuotes=singleQuotes.trim();