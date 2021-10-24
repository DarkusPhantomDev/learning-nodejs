const bcrypt = require('bcrypt'); //Sirve para cifrar

const password = "Dorime3 Ameno1!";

//No se recomienda usar la funcion sincrona
//.hash(contraseña, cantidad_de_veces_a_hashear, function)
bcrypt.hash(password, 5, function(err, hash) {
  console.log(hash);

  bcrypt.compare(password, hash, function(err, res) {
    //console.log(err);
    console.log("Soy la contraseña correcta:");
    console.log(res);
  })
  bcrypt.compare("Password", hash, function(err, res) {
    //console.log(err);
    console.log("Soy la contraseña equivacada:");
    console.log(res);
  })

});
