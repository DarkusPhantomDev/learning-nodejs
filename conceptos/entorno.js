let nombre = process.env.NOMBRE || 'usuario';
let web = process.env.WEB || 'no tengo web';

console.log("Hello " + nombre);
console.log("Mi web es: " + web);
