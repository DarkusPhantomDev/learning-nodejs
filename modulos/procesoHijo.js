const { exec, spawn } = require('child_process');

/*exec('ls -la', (err, stdout, steer) => {
  if (err) {
    console.log(err);
    return false;
  }

  console.log(stdout);
})*/

let proceso = spawn('ls', ['-la']);

//console.log(proceso);
//console.log(proceso.pid);
//console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
  console.log("¿Esta muerto el proceso?");
  console.log(proceso.killed);
  console.log(dato.toString());
})

proceso.on('exit', function() {
  console.log("El proceso termino");
  console.log(proceso.killed);
})
