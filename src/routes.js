import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import App from './App';
import Editar from './Editar';

function Routes(){
    return(
        <BrowserRouter>
           <Switch>
               
           <Route path = "/" exact component={App}/>
               <Route path = "/editar"  component={Editar}/>
           </Switch>
        </BrowserRouter>
    );
};

export default Routes;