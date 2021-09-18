import React from 'react';
import './App.css';
import {useState} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState([
    {complete: false, task: "olá, mundo"},
    {complete: false, task: "olá, mundo DOIS"},
    {complete: false, task: "olá, mundo TRES"}
  ]);

  return (
    <div className="App">

      <TodoForm addTodo={(todo) => {
        if(todo.task.trim().length > 0){
          setTodos([...todos, todo]);
        }
      }}>

      </TodoForm>

       <TodoList todos={todos}>

       </TodoList>
    </div>
  );
}

export default App;
