//Para trabajar con sistemas operativos 
const os = require('os');

//Muestra la arquitectura del Sistema Operativo
//console.log(os.arch());

//Muestra el tipo de dispositivo del SO (Windows, Mac, Linux, Android...)
//console.log(os.platform());

//Muestra el CPU
//console.log(os.cpus());
//Muestra la cantidad de procesos que puede realizar
//console.log(os.cpus().length);

//Muestra los errores
//console.log(os.constants);

//Muestra la cantidad de memoria libre
/*
const SIZE = 1024;
const kb = bytes => bytes / SIZE;
const mb = bytes => kb(bytes) / SIZE;
const gb = bytes => mb(bytes) / SIZE;

console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
*/

//paraver la memoria total 
//console.log(gb(os.totalmem()));


//Para saber la direccion del usuario
//console.log(os.homedir());
//Para saber la capeta temporal
//console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());
