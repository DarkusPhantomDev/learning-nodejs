function hola(nombre) {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log(`Hola ${nombre}`)
			resolve(nombre);
		},1500);
	});
}

function hablar(nombre) {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log(`${nombre}: Bla bla bla`)
			resolve(nombre);
		},1000);
	});
}

function adios(nombre) {
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			console.log(`Bye ${nombre}`)
			resolve(nombre);
		},1000)
	});
}

async function main () {
	let nombre = await hola("Dorime");
	await hablar(nombre);
	await hablar(nombre);
	await adios(nombre);
	console.log("termina el proceso");
}

console.log("Empezamos el proceso");
main();
console.log("Va a ser la segunda instruccion");