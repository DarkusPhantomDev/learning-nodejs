const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

const direction = __dirname + '/input.txt';

let readableStream = fs.createReadStream(direction);

readableStream.setEncoding('UTF8');
/*
readableStream.on('data', function(chunk) {
  //console.log(chunk);
  //console.log(chunk.toString());
})
*/

/*
//Si es un archivo enorme, usar...
readableStream.on('data', function(chunk) {
  data += chunk;
})

readableStream.on('end', function() {
  console.log(data);
})
*/


//Para escritura...
/*
process.stdout.write("Hello")
process.stdout.write("It's me")
process.stdout.write("are you looking for?")
//Respuesta: HelloIt's meare you looking for?
*/

//Crea un stream de transformacion que permite leer y escribir
const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codificacion, callback) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
}

let mayus = new Mayus();

readableStream
  .pipe(mayus)
  .pipe(process.stdout);
