function soyAsincrona(callback) {
  console.log("Hello, its me you looking for asyncronism");
  setTimeout(() => {
    console.log("Soy una asincronia")
    callback();
  }, 2000);
}

console.log("Inicio del proceso");
soyAsincrona(() => console.log("Final del proceso") );
