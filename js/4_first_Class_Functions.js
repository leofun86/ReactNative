//FUNCIONES DE ORDEN SUPERIOR: Funciones que toman como parámetro funciones.

	//Preparación
	const x = [1, 2, 3, 4];
	
	//Con MAP: Asigna a cada valor del array una función y devuelve el nuevo valor.
		function addOne(number) { return number + 1; }
		/*Forma21*/ x.map(num => addOne(num));
		/*Forma 2*/ x.map(addOne);
	//Con FILTER
		function esMasGrande(num) { return num > 2; }
		/*Forma21*/ x.filter(num => esMasGrande(num))
		/*Forma 2*/ x.filter(esMasGrande);
	//Con REDUCE
		function add(num1, num2) { return num1 + num2; }
		x.reduce(add);
		
	//Ejemplo detallado de funcionamiento simulando un MAP o REDUCE
	function map(array, funcion) {
		const newArr = [];
		array.forEach(num => newArr.push(funcion(num)));
	 	return newArr;
	}
	function sumar(num) { return num+1; }
	const arr = [1, 2, 3, 4];
		//Ejecución
		map(arr, sumar);
			//Se esperaría => 2, 3, 4, 5