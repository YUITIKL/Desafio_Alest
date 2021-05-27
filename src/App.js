import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
//import route from './routes'
import { Route } from 'react-router';

//organização da pagina inicial
function App() {
  return (
    <div className="App">
      <h1>Desafio Alest</h1>       
      <Form />
     <TodoList />
     <route />
    </div>
  );
}
//Form = input e btn-add
//TodoList = btn-delete, btn-editar e resultado do banco


export default App;
