class Set {
	constructor(arr) {
		this.arr = arr;
	}
	add(val) {
	if(!this.has(val)) this.arr.push(val); 
}

	del(val) {
		this.arr = this.arr.filter(x => x !== val);
	}

	has(val) {
		return this.arr.includes(val);
	}
	get size() { return this.arr.length; }
}


const s = new Set([1, 2, 3, 4, 5]);

//Intentando agregar el mismo valor (no funciona)
s.add(1); s.add(1); s.add(1);
console.log('s debería tener 5 valores y tiene: ', s.size);
console.log('s debería contener 5: ', s.has(5));

//Intentando agregar un nuevo valor diferente
s.add(6);
console.log('s debería contener 6: ', s.has(6));
console.log('s debería tener 6 valores y actualmente tiene: ', s.size);

//Intentando eliminar un valor
s.del(6);
console.log('s no debería tener 6: ', !s.has(6));
console.log('s debería tener 5 valores y tiene: ', s.size);

class MySet extends Set {
	constructor(arr) {
		super(arr);
		this.originalArr = arr;
	}
	
	add(val) {
		super.add(val);
		console.log(`Agregado ${val} a la clase Set`);
	}
	toArray() { return Array.from(this); }
	res() { return new MySet(this.originalArr); }
	get mostrar() { return this.originalArr; }
}

const d = new MySet();

console.log('da debería mostrar un array: ', d.mostrar);