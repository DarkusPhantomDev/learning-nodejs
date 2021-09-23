const fs = require('fs');

function leer(ruta,callback) {
  fs.readFile(ruta, (error, data) => {
    console.log(data.toString());
  });
}

//leer(__dirname + '/texto.txt', console.log);

function escribir(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      console.log("No he podido escribir en el archivo" , error);
    } else {
      console.log("Se ha escito correcto");
    }
  });
}

//escribir(__dirname + '/textito.txt', "Dorime", console.log);

function borrar(ruta, callback) {
  fs.unlink(ruta, callback);
}
borrar(__dirname + '/textito.txt', console.log);
