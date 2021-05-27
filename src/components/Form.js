import React,{ useState } from 'react'
import firebase from '../utils/firebase'

function Form(){
    //input começa vazio
    const [title, setTitle ] = useState('');

    const handleOnCharge = (e) => {
        setTitle(e.target.value);
    }
    //click e acessa o banco de dados para adicionar o input
    const createTodo = () =>{
        const todoRef = firebase.database().ref('Todo');
        const todo = {
            title,
        }

        todoRef.push(todo)

    }
    
// criação do input e do botão adicionar
    return(
        <div>
            <input type="text" placeholder="Adicionar Produto" onChange={handleOnCharge} value={title}/>
            <button className="add-btn" onClick={createTodo}>Adicionar</button>
        </div>
    )
}

export default Form