import React,{ useState } from 'react'
import firebase from '../utils/firebase'



function Form({todo}){

    //input começa vazio
    const [title, setTitle ] = useState('');

    const handleOnCharge = (e) => {
        setTitle(e.target.value);
    }
    //click e acessa o banco de dados para adicionar o que for excrito no input
    const createTodo = () =>{
        const todoRef = firebase.database().ref('Todo');
        const todo = {
            title,
        }
        //retorna o usuario para a pagina inicial
        window.open('/','_self')
        todoRef.push(todo)

    }
    
// criação do input e do botão 
    return(
        <div>
            <input type="text" placeholder="Editar Produto" onChange={handleOnCharge} value={title}/>
            <button className="add-btn" onClick={createTodo}>Editar</button>
        </div>
    )
}

export default Form