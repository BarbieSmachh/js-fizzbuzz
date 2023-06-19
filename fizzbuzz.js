//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';
// console.log('v1')
// var fizzbuzz = function (x) {
// if((x%3===0)&&(x%5===0)){
//     console.log('fizzbuzz');
// };
// if((x%3===0)&&(x%5!==0)){
//     console.log('fizz');
// };
// if((x%5===0)&&(x%3!==0)){
//     console.log('buzz');
// };
// if((x%3!=0)&&(x%5!==0)){
//     console.log(x);
// };
// };
// fizzbuzz(15);
// console.log('v2')
// var fizzbuzz = function (x) {
//     if((x%3===0)&&(x%5===0)){
//         console.log('fizzbuzz');
//     }else if((x%3===0)&&(x%5!==0)){
//         console.log('fizz')
//     }else if((x%5===0)&&(x%3!==0)){
//         console.log('buzz');
//     }else{
//         console.log(x);
//     };
    
// }
// fizzbuzz(15);

// for (let c = 0; c<11; c++){
//     console.log(c);
// };
// let tablec = [0,1,2,3,4,5,6,7,8,9,10]
// tablec.forEach(chiffre => {
//     console.log(chiffre);
// })
let  alphabetFrancais = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 's', 'm', 'n', 'o', 'p', 'q', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
let a=''
let i = -1
while (a!=='s'){
    if (a==='s'){
        break;
    }else{ i++, a = alphabetFrancais[i]; 
        console.log(a,i+1);
}
};
