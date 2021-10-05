//const proceso = require('process');

process.on('beforeExit', () => {
  console.log("El proceso va a terminar");
});

process.on('exit', () => {
  console.log("Ale, el proceso acabo");
  setTimeout( () => {
    console.log("Esto no va");
  }, 1500 );
})

setTimeout( () => {
    console.log("Esto no va. Estoy fuera de exit");
  }, 1500 );

process.on('uncaughtException', (err, origen) => {
  console.error("Acaba hubo un error. Revisa y captura el error");
  console.error(err);


setTimeout( () => {
    console.log("Esto viene de las excepciones");
  }, 1500 );

});

function_name(argument);
console.log("Dorime");
