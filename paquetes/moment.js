const moment = require('moment'); //Para trabajar con fechas (Tiene un monton de validaciones)

let ahora = moment();
//console.log(ahora);
//console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:mm'));
console.log(ahora.format('YYYY/MM/DD - HH:mm:ss'));
