import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.css';
import 'bulma/css/bulma.css';

import Home from './Home';      
import Login from './Login';
import Error from './Error';
import SignUp from './SignUp';

import Nav from './Nav';
import AddNewRes from './AddNewRes';
import RestaurantList from './restaurantList';
import SingleRestaurant from './singleRestaurant';


class App extends React.Component {
    state = {
        user: null,
        allRestaurants : []
    }
    logTheUserIntoAppComponent = (user) => {
        this.setState({
            user
        })   
    }
    logOut = () => {
        this.setState({
            user:null
        })
    }
    addAllRestaurants = (oneRestaurant) => {
        let allRestaurants = [...this.state.allRestaurants]
        allRestaurants.push(oneRestaurant.data)
        this.setState({
            allRestaurants
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
                        <Nav logOut={this.logOut} user={this.state.user}/>
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/login" render={(props) => <Login {...props }logTheUserIntoAppComponent={this.logTheUserIntoAppComponent} />}/>                            
                            <Route path="/signup" render={(props) => <SignUp {...props}logTheUserIntoAppComponent={this.logTheUserIntoAppComponent}/>} />
                            <Route path="/restaurants" render={(props) => <RestaurantList {...props} currentUser={this.state.user} /> } />
                            <Route path="/details/:id" component = {SingleRestaurant} /> } 

                            <Route path="/add" render={(props) => <AddNewRes {...props } addAllRestaurants={this.addAllRestaurants} />} />
                            {/* <Route path="/project-index" render={(props) => <ProjectIndex {...props} currentUser={this.state.loggedInUser} /> } /> */}

                            <Route component={Error} />

                        </Switch>
                    </div>
                    
                </BrowserRouter> 
            </div>
       
    )
}
};

export default App;