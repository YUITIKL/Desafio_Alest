import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Routes from './routes'

// iniciando a pagina inicial e a editar
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
   <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();