import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import 'bulma/css/bulma.css';

import Home from './Home';
import Login from './Login';
import Error from './Error';
import SignUp from './SignUp';
import Nav from './Nav'



class App extends React.Component {
    state = {
        user: null
    }
    logTheUserIntoAppComponent = (user) => {
        this.setState({
            user
        })   
    }
    render() {
        let username; 
    if(this.state.user){
        username = this.state.user.username
    }
    return(
           
            <div className='ui container'>
                <BrowserRouter>
                    <div>
                        {username}
                        <Nav/>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/login" 
                            render={() => <Login {...this.props }logTheUserIntoAppComponent={this.logTheUserIntoAppComponent} />} 
                             />                            
                            <Route path="/signup" component={SignUp} />
                            <Route component={Error} />
                        </Switch>
                    </div>
                    
                </BrowserRouter> 
            </div>
       
    )
}
};

export default App;