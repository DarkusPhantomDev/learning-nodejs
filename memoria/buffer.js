//let buffer = Buffer.alloc(1);
//console.log(buffer); //<Buffer 00>

//let buffer = Buffer.alloc(4);
//console.log(buffer); //<Buffer 00 00 00 00>

//let buffer = Buffer.from([1,2,5]);
//console.log(buffer); //<Buffer 01 02 05>

/*
let buffer = Buffer.from('Hola');
console.log(buffer); //<Buffer 48 6f 6c 61>
console.log(buffer.toString()); //Hola
*/

let abc = Buffer.alloc(26);
console.log(abc); 

for (let i = 0; i < 26; i++) {
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());
