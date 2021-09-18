
import React from 'react';
import {useState} from 'react';
import deleteImg from './assets/delete.svg';
import background from './assets/background.jpg';

function TaskCompo(props){

  return(
    <li className="task-list" >
      <span onClick={() => props.onComplete(props.id)}>
        {props.complete ? <s>{props.title}</s>:props.title} 
      </span>
        <img onClick={() => props.onDelete(props.id)} src={deleteImg} alt="" />
        
    </li>
  )
}

function App() {

  const [tasks, setTasks] = useState([]);
 
  const [filtros, setFiltros] = useState([]);

  function handleGetAllComplete(){
    setFiltros(tasks.filter(item => item.complete))  
  }

  function handleAllRest(){
    
    setFiltros(tasks.filter(item => !item.complete))
  }

  function handleDeleteAllComplete(){

    setTasks(prevState => prevState.filter(item => item.complete === false));
    setFiltros(prevState => prevState.filter(item => item.complete === false));
  }

  function handleAllTasks(){
    setFiltros([])
  }

  console.log(tasks)
  
  function handleKeyDown(event){

    if(event.key !== "Enter") return;
    if(event.target.value === '') return;

    console.log(event.target.value)
    setTasks([ ...tasks, {id: Math.random(), text: event.target.value, complete: false}])

    event.target.value = ''

  }

  function handleDelete(id){
    const newTasks = tasks.filter((taskFilter) => {
      return taskFilter.id !== id
    })

    setTasks(newTasks)
  }

  function handleComplete(id){
    setTasks(prevState => prevState.map((item) => {
      if(item.id === id){
        return{
          ...item,
          complete: item.complete ? false: true
        }
      }else{
        return item;
      }
    }))
  }

  return (
    <div className="App">
      
        <header style={{backgroundImage: `url(${background})`}}>
            
            <h1>TAREFAS</h1>
        </header>

        <div className="todo">
            <input type="text" onKeyDown={handleKeyDown} placeholder="Adicionar tarefa" />

            <ul className="">

            {
              filtros.length > 0 ? (
                filtros.map(task => {
                  return( 
                    
                    <TaskCompo 
                      key={task.id}
                      title={task.text}
                      id={task.id}
                      onDelete={handleDelete}
                      complete={task.complete}
                      onComplete={handleComplete}
  
                    />
                  )  
                })
              ):(
                tasks.map((task) => {
                  return( 
                    
                    <TaskCompo 
                      key={task.id}
                      title={task.text}
                      id={task.id}
                      onDelete={handleDelete}
                      complete={task.complete}
                      onComplete={handleComplete}
  
                    />
                  )   
                
                })
              )
            }  
            <li className="task-info">              
              <a href="#" onClick={handleAllTasks}> Todas: {tasks.length} </a>   
              {console.log(tasks.map(item => item.id))}
                     
              <a href="#" onClick={handleAllRest}> restantes: {filtros.length} </a>             
              <a href="#" onClick={handleGetAllComplete}> completas: { filtros.length } </a>
                     
              <a href="#" onClick={handleDeleteAllComplete}> limpar completas </a>             
            </li>

          </ul>
        </div>
  
    </div>
  );
}

export default App;
