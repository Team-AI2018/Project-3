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
import Profile from './Profile';
import AddReview from './addReviews'


class App extends React.Component {
    state = {
        user: null,
        allRestaurants : [],
        message: null
    }
    logTheUserIntoAppComponent = (user) => {
        console.log("*******************", user)
        if(user.includes("_id")){
            this.setState({
                user
            })   
        } else {
            this.setState({
                message: user.message
            })
        }
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
            <div className="cover-page">

                <BrowserRouter>
                    <div>
                        {username}
                        <Nav logOut={this.logOut} user={this.state.user}/>
                        <Switch>
                            <Route path="/" component={Home} exact />
                         <div className='ui container '>
   
                            <Route path="/login" render={(props) => <Login {...props }logTheUserIntoAppComponent={this.logTheUserIntoAppComponent} />}/>                            
                            <Route path="/signup" render={(props) => <SignUp {...props}logTheUserIntoAppComponent={this.logTheUserIntoAppComponent}/>} />
                            <Route path="/restaurants" render={(props) => <RestaurantList {...props} currentUser={this.state.user} /> } />

                            <Route path="/profile" render={(props) => <Profile {...props} currentUser={this.state.user} /> } />
                            <Route path="/details/:id" render={(props) => <SingleRestaurant {...props} currentUser={this.state.user} /> } />

                            <Route path="/add" render={(props) => <AddNewRes {...props } addAllRestaurants={this.addAllRestaurants} />} />
                            <Route path="/addReviews/:id" render={(props) => <AddReview {...props } addAllRestaurants={this.addAllRestaurants} />} />
                            {/* <Route path="/project-index" render={(props) => <ProjectIndex {...props} currentUser={this.state.loggedInUser} /> } /> */}

                        </div>
                        </Switch>
                    </div>
                    
                </BrowserRouter> 
                
            
            </div>


            
         </div>   
    )
}
};

export default App;