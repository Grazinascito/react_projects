import React, {useState} from 'react';

function TodoForm({addTodo}){
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!userInput) return;
        addTodo({complete: false, task: userInput});
        setUserInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
             type="text"
             placeholder="Adicionar Tarefa"
             className="input"
             value={userInput} 
             onChange={(event) => setUserInput(event.target.value)}
            
            />

        </form>
    );
};

export default TodoForm;