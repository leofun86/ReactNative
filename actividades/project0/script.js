const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
	const count = Number(itemCountSpan.textContent)+1;
	
	crearElementoLi(count);
	
	uncheckedCountSpan.textContent=String(Number(uncheckedCountSpan.textContent)+1);
	itemCountSpan.textContent = String(count);
	//alert('New TODO button clicked!')
	
	return itemCountSpan;
}

list.addEventListener('click', (e) => {
	//console.log(e.target);
	const id = conseguirID(e.target.id);
	if(e.target.id === `btn${id}`) {
		if (!document.getElementById(`check${id}`).checked) {
			uncheckedCountSpan.textContent=String(Number(uncheckedCountSpan.textContent)-1);
		}
		itemCountSpan.textContent=String(Number(itemCountSpan.textContent)-1);
		document.getElementById(`item${id}`).remove();
	} else if (e.target.id === `check${id}`) {
		if (document.getElementById(`check${id}`).checked) { uncheckedCountSpan.textContent=String(Number(uncheckedCountSpan.textContent)-1);
		} else { uncheckedCountSpan.textContent=String(Number(uncheckedCountSpan.textContent)+1); }
	}
})

function crearElementoLi(count) {
	const fragment = document.createDocumentFragment();
	const elemLi = document.createElement('li');
	elemLi.setAttribute('id', `item${count}`);
	
	for (let i in classNames) {
		switch (classNames[i]) {
			case 'todo-container':
			elemLi.innerHTML=`Item ${count} &nbsp;&nbsp;`;
			break;
			case 'todo-checkbox':
			elemLi.innerHTML+="<input type='checkbox' id='check"+String(count)+"' value='Check "+String(count)+"'>&nbsp;&nbsp;";
			break;
			case 'todo-text':
			elemLi.innerHTML+="Este es el item "+String(count)+"&nbsp;&nbsp;";
			break;
			case 'todo-delete':
			elemLi.innerHTML+="<button style='background:red;color:white;' id='btn"+String(count)+"'>Eliminar</button>";
			break;
		}
	}

	fragment.appendChild(elemLi);
	list.appendChild(fragment);
	
	return list;
}

function conseguirID(id) {
	let num='';
	for (let i=0; i < id.length; i++) {
		if( Number(id.charAt(i)) == id.charAt(i) ) { num = num + id.charAt(i); }
	}
	return num;
}