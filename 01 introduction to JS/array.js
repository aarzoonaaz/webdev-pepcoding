let array = [1,2,3,4,5]
 console.log(array)
 console.log(array.length);
 let i=0;
while(i<array.length){
    console.log("element at index ", i , "is", array[i]);
    i++;
}
// last element insert krne ke liye puch use krte h
array.push("last value")
// first element insert krne ke liye unshift use krte h
array.unshift("first value")
console.log("'''''''''''''''''''''''''''''''''''''''");
console.log(array);
// pop ka use last element remove krne ke liye krte h
array.pop()
// shift ka use first element remove krne ke liye krte h
array.shift()
console.log("''''''''''''''''''''''''''''''''''''''''''''''");
console.log(array);
//sclice ka use element ka copy dena h for example:- agr scice me 1 denge to wo print 2,3,4,5 krega
let partOfArray = array.slice(1);
console.log("'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''");
console.log(partOfArray);
console.log(array);
console.log("##########################################################");
//splice ka use delete krne ke liye hota h
array.splice(4,5)
console.log(array);