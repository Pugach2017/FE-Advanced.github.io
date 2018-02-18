const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";

console.log( alphabet.split (' '));

const newA1 = alphabet.split ('', 12);
const newA2 = alphabet.slice (12, 23);
const newA3 = alphabet.slice (23, 34);

console.log( newA1 );
console.log( newA2.split ('') );
console.log( newA3.split ('') );
console.log( newA2[5] + newA1[2] + newA2[8] + newA2[8] + newA1[8] );

console.log( newA2[6] + newA2[0] + newA3[3] + newA2[0] + newA2[1] + newA3[2] + newA1[3] + newA1[7] + newA1[9] + newA1[4] );
console.log( newA1[4] + newA1[3] + newA2[0] + newA1[7] + newA3[5] + newA1[2] + newA1[3] );
