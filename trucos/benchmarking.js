let suma = 0;
console.time('bucle');
for (let i = 0; i < 1000000000 ; i++) {
  suma +=1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle 2'); //inicio
for (let j = 0; j < 1000000000 ; j++) {
  suma2 +=1;
}
console.timeEnd('bucle 2'); //fin

//Este tip es super util para ver cuanto mide el tiempo de ejecucion de cada proceso

function asincrona() {
  return new Promise( (resolve) => {
    setTimeout(() => {
      console.log("Termina proceso asincrono");
      resolve();
    })
  })
}

console.time("asincrono");
console.log("Empieza el proceso async");

asincrona()
  .then( () => {
    console.timeEnd("asincrono");
  });
