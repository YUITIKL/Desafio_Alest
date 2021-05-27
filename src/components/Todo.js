import React from 'react'
import firebase from '../utils/firebase'
import {Link} from 'react-router-dom';

function Todo({todo}) {
    // deletar a informação do banco de dados apos o click
    const deleteTodo = () => {
        const todoRef = firebase.database().ref('Todo').child(todo.id)
        todoRef.remove();
    }

    const editarTodo = () => {
        window.open('/editar','_self')
    }
    // criar botão deletar e editar
    return(
        <div>
            <h1>{todo.title}</h1>
            <button className="delete-btn" onClick={deleteTodo}>Excluir</button>
            <button className="editar-btn" onClick={editarTodo}>Editar</button>
        </div>
    )
}

export default Todo