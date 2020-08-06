"use strict";

//1. display in the console the numbers from 1 to 20

console.log('Afiseaza toate numerele de la 1 la 20: ');
var x = 1;
while (x < 21) {
console.log(x);
x++;
}


//2. display in the console the odd numbers from 1 to 20

console.log('Afiseaza numerele impare de la 1 la 20: ');
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

//3. compute the sum of the elements of an array and display it in the console

let arr = [4, 7, 12, 0, 15, 44, 82, 5];
let sum = 0;
for (var i = 0; i < arr.length; i++) {
     sum = sum + arr[i];
}
console.log('Suma elementelor din sir este: ' + sum);

//4. compute the maximum of the elements of an array and display it in the console

let arr1 = [4, 7, 12, 0, 15, 44, 82, 5];
let max = arr[0];
for (var i = 0; i < arr1.length; i++) {
     if (arr1[i] < arr1[i + 1]){
        max = arr1[i+1];
     }
}
console.log('Elementul cel mai mare din sir este: ' + max);