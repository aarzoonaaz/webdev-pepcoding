//console.log("hello");
//a=10;
//let = a;
//console.log(a);
//using loop
// let number = 10;
// for(let i=1; i<=number; i++){
//     console.log("number is",i);
// }
//check prime
// let number=23;
// let flag=true;
// for(let i=2; i<number; i++){
//     if(number%i==0){
//         flag = false;
//         break;
//     }
// }
// if(flag==true){
//     console.log(number, "is prime")
// }
// else{
//     console.log(number,"is not prime")
// }
for(let i=1; i<=20; i++){
    if(i %3==0 && i%5==0){
        console.log( "fizzbuzz")
    }
    else if(i % 5==0)
    {
        console.log( "buzz");
    }
    else if(i % 3==0)
    {
        console.log( "fizz");
    }
    else{
        console.log(i)
    }
}

