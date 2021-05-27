import React,{ useState, useEffect } from 'react'
import firebase from '../utils/firebase'
import Todo from './Todo'
import Form_editar from './Form_editar'

function TodoList(){

    const [todoList, setTodoList] = useState();

    //consulta o resultado 
    useEffect(() =>{
        const todoRef = firebase.database().ref('Todo');

        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }
            setTodoList(todoList);
        })
    }, [])

// retorna o resultado que foi consultado com os botões excluir e editar
    return (
        <div className="TodoList">
            {todoList
                 ? todoList.map((todo, index) => <Todo todo={todo} key={index} />) 
                 : ""}
        </div>
    )
}

export default TodoList