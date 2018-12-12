import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import 'bulma/css/bulma.css';

import Home from './Home';
import Login from './Login';
import Error from './Error';
import SignUp from './SignUp';
import Nav from './Nav'



const App = () => {
    return(
           
            <div className='ui container'>
                <BrowserRouter>
                    <div>
                        <Nav/>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/login" component={Login} />
                            <Route path="/signup" component={SignUp} />
                            <Route component={Error} />
                        </Switch>
                    </div>
                    
                </BrowserRouter> 
            </div>
       
    )
};

export default App;