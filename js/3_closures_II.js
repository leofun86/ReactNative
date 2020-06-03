// IIFE => Inmediatly Invoked Function Expression (Función invocada de inmediato)
/* 
	- Es una función sin nombre.
	- Se invoca en el momento de invocación.
	- Crea cierres.
	- No agrega o modifica objetos globales.
*/

// EJEMPLOS
	// #1
	const msjHola = (function () {
		var mensaje = '¡Hola!';
		function decirHola() { console.log(mensaje); }
		return decirHola;
	})()
	// #2
	const contador = ( ()=> {
		let contador = 0;
		// Esto restringe únicamente al acceso a los retornos de las funciones,
		// quedando denegado el acceso a las variables declaradas.
		return {
			sumar: () => contador = contador +1,
			mostrar: () => console.log(contador)
		}
	} )()
	// #3
	function hacerArray () {
		const arr = [];
		for (var i=0; i<5; i++) {
			arr.push( ((x) => {
				return () => console.log(x);
			})(i));
		}
		return arr;
	}

	
	
	
	
	