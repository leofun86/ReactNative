function hacerFuncionHola() {
	var msj = '¡Hola!';
	
	function decirHola() {
		console.log(msj);
	}
	
	return decirHola;
}

const decirHola = hacerFuncionHola();

//console.log(`typeof msj: ${typeof msj}`);
//console.log(decirHola.toString());
//decirHola();

function hacerFuncionArray() {
	const arr = [];
	
	//Bucle for con declaración i de tipo var
	for (var i=0; i < 5; i++) { arr.push(i); }
	//Bucle for con declaración i de tipo let
	for (let i=0; i < 5; i++) { arr.push(i); }
	
	return arr;
}

const functionArr = hacerFuncionArray();

/* Si al querer ver alguno de los valores del array con la declaración VAR de i,
veremos el mismo valor "5" ya que la variable termina cuando la función finaliza.*/

/* En cambio si queremos ver alguno de los valores del array con la declaración LET de i
veremos el valor respecto del indice porque i termina cuando el bloque de código finaliza ( for () {} )*/

console.log(functionArr[2]());