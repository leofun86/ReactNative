const person = {
	name: 'Leo',
	greet: function () { console.log(`Hola, ${this.name}`) }
}
console.log(person.greet())
const person2 = {
	name:'Magiver',
	greet: function() { console.log(`Hola, ${this.name}`) }
}
const greet = person.greet;
this.name=person2.name;
greet()

console.log(person.greet());

const amigo = { name: 'Cachila', }
amigo.greet = person.greet;

console.log(amigo.greet());
