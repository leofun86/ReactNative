import React from 'react';
import './App.css';

let id = 0;

const Todo = props => (
  <li>
    {props.todo.id})
    &nbsp;&nbsp;
    {props.todo.text}
    &nbsp;&nbsp;
    <input type="checkbox" checked={props.todo.checked} onChange={props.toggleCheck} value="check" />
    &nbsp;&nbsp;
    <button class="btn btn-danger" onClick={props.removeTodo}>eliminar</button>
  </li>
);

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
    }
  }

  addTodo() {
    const text = prompt('TODO texto por favor!')
    this.setState({
      todos: [...this.state.todos, {id: (id++)+1, text: text, checked: false}]
    });
  }

  removeTodo(id, check) {
    this.setState({
      todos:this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleCheck(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }  
      })
    });
  }
  
  render() {
    return (
      <div>
        <button class="btn btn-success" onClick={()=> this.addTodo()}>Agregar TODO</button>
        <p>
          <span>Todos: {this.state.todos.length}</span>
          &nbsp;&nbsp;
          <span>No chequeados: {this.state.todos.filter(todo => !todo.checked).length}</span>
        </p>
        <ul>
          {this.state.todos.map((todo) =><Todo toggleCheck={()=>this.toggleCheck(todo.id)} removeTodo={()=>this.removeTodo(todo.id, todo.checked)} todo={todo} /> )}
        </ul>
      </div>
    );
  }
}

export default App;