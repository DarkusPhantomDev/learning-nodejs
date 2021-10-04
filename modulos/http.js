const http = require('http');

http.createServer(router).listen(3000);

function router(req,res) {
  console.log("Nueva peticion!");
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, ¿que tal?');
      res.end();
      break;

    default:
      res.write('Error 404: No se lo que quieres');
      res.end();
  }

  //201 cunado creamos un archivo
  res.writeHead(201, {'Content Type': 'text/plain'});

  //Escribir respuesta al usuario
  res.write('Hola, ya se usar HTTP de NodeJS');


  res.end();
};

//Buena practica: Decirle al usuario en que puerto esta escuchando nuestro servidor
console.log("Escuchando en el puerto 3000");



//Otra forma de hacerlo
//const { createServer } = require('http');
//const port = 3000;
/*
function router(req, res) {
  switch (req.url) {
    case '/':
      res.end('<h1>Holaaaa</h1>');
      break;
    default:
      res.write('404 ! Esa url no existe');
      res.end();
  }
}

const server = createServer(router);

server.listen(port, (err) => {
  if (err) {
    console.info('Could not establish a connection to the server');
    console.error(err.message);
  }
  console.info(`> Ready On http://localhost:${port}`);
})

*/
