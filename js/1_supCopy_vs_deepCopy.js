//INTRODUCCIÓN
const c = [
	{
		nombre:'Leo',
		apellido:'Funes',
		edad:33
	},
	{
		nombre:'Ana',
		apellido:'Silveira',
		edad:31
	}
];

const mostrar = () => {
	for (let i in c) {
		for (let i2 in c[i]) {
			console.log(`${i2}: ${c[i][i2]}`)
		}
	}
}

//COPIA SUPERFICIAL DE OBJETO
	//Creación de objeto a copiar
	const o = {nombre: 'Caty', apellido:'Mayers', edad:31};
	//Creación de objeto que copiará el objeto "o"
	const o2 = Object.assign({}, o);

//COPIA PROFUNDA DE OBJETO
	//Creación de array de objetos
	const o3 = {nombre:'Pepe', apellido:'Marquez', edad:40, calle: {direccion:'Anzani', numero:'2129'},};
	//Función que evaluará si el valor de cada clave es un objeto.
		//Si lo es, copiará las claves y valores de ese objeto del par clave-valor de la capa superior.
		//Si no lo es, hace la copia del par clave-valor de la capa inicial.
		function copiaProfunda (obj) {
			const claves = Object.keys(obj);
			const nuevObjeto={};
			
			for (let i=0; i < claves.length; i++) {
				const clave = claves[i];
				if (typeof obj[clave] === 'object') {
					nuevObjeto[clave]=copiaProfunda(obj[clave]); 
				} else {
					nuevObjeto[clave]=obj[clave];
				}
			}
			return nuevObjeto;
		}
		
		//Intento personal
		function edad() {
			const edad = new Date().getFullYear()-1986;
			return edad;
		};
		
		const ob = {nombre:'Leo', apellido:'Funes', edad:edad(), calle: {direccion:'Anzani', numero:'2129'} };
		
		function deepCopy2(obj) {
			const keys = Object.keys(obj);
			const newObject = {};
			
			for (let i=0; i < keys.length; i++) {
				const key = keys[i];
				if (typeof obj[key] === 'object') {
					newObject[key] = deepCopy2(obj[key]);
				} else {
					newObject[key]=obj[key];
				}
			}
			
			return newObject;
		}