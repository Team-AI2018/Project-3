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
import FlipCard from './FlipCard';
import Footer from './Footer';
import Profile from './Profile'

class App extends React.Component {
    state = {
        user: null,
        allRestaurants : [],
        restaurantPage: false
    }

    toggleRestaurantPage = () => {
        this.setState({
            restaurantPage: !this.state.restaurantPage
        })
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
        })``
    }

    render() {
        let username; 
    if(this.state.user){
        username = this.state.user.username
    }
    return(
    
        <div className="home-page-body">    
            {/* <div className="cover-page"> */}
            <div className={"cover-page " + (this.state.restaurantPage ? 'hidden' : 'show')}>

                <BrowserRouter>
                    <div>
                        {username}
                        <Nav logOut={this.logOut} user={this.state.user}/>
                        <Switch>
                            <Route path="/" component={Home} exact />
                         <div className='ui container '>
   
                            <Route path="/login" render={(props) => <Login {...props }logTheUserIntoAppComponent={this.logTheUserIntoAppComponent} />}/>                            
                            <Route path="/signup" render={(props) => <SignUp {...props}logTheUserIntoAppComponent={this.logTheUserIntoAppComponent}/>} />
                            <Route path="/restaurants" render={(props) => <RestaurantList {...props} toggleRestaurantPage={this.toggleRestaurantPage} currentUser={this.state.user} /> } />
                            <Route path="/details/:id" component = {SingleRestaurant} /> 
                            {/* <Route component={Error} /> */}
                            <Route path="/add" render={(props) => <AddNewRes {...props } addAllRestaurants={this.addAllRestaurants} />} />
                            <Route path="/profile" render={(props) => <Profile {...props} currentUser={this.state.user} /> } />

                        </div>
                        </Switch>
                    </div>
                    
                </BrowserRouter> 
                
            
            </div>
            {/* <div className='ui container flip-card-box'>
                 <FlipCard/>
            </div> */}
            {/* <Footer/> */}
         </div>   
    )
}
};

export default App;