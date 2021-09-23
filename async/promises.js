function hola(nombre) {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log(`Hola ${nombre}`)
			resolve(nombre);
		},1000);
	})
}

function hablar(nombre) {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log(`${nombre}: Bla bla bla`)
			resolve(nombre);
		},1000);
	})
}

function adios(nombre) {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log(`Bye ${nombre}`)
			resolve(nombre);
		},1000)
	})
}

console.log("iniciando proceso");
hola("Alejandro")
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(hablar)
	.then(adios)
	.catch(error => {
		console.log("Error");
	})