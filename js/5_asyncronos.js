//EXECUTION STACK / CALL STACK / Pila de ejecución/llamada

function a(secs) {
	setTimeout(()=>{return console.log('Hola');})
}
function b(secs){
	setTimeout(()=>{return console.log('Que tal')}, 1000)
}
function c(secs){
	setTimeout(()=>{return console.log('Chau')}, 2000)
}