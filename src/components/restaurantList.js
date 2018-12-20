import React, { Component } from 'react';
import "./App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Yelp from './YelpList'

class RestaurantIndex extends Component {
    state = {
        allTheRestaurants: [],
    }
    componentWillMount() {
        this.fetchRestaurants()
        this.props.toggleRestaurantPage()
    }

    fetchRestaurants = () => {
        Axios.get(`${process.env.REACT_APP_API_URL}/restaurants`)
            .then((responseFromApi) => {
                console.log(responseFromApi.data.obj.allTheRestaurants)
                this.setState({
                    allTheRestaurants: responseFromApi.data.obj.allTheRestaurants,
                    yelp:responseFromApi.data.obj.yelp
                })
            })
            .catch((err) => {})
    }

    showYelpRestaurants = () => {
        // console.log(this.state.allTheRestaurants)
    }


    showAllRestaurants = () => {
        console.log(this.state)
        if (this.state.allTheRestaurants) {
            return this.state.allTheRestaurants.map((eachRestaurant) => {
                return ( 

                <div className="yelp">
                                
                <div href='#'><img src={eachRestaurant.img}/></div>
                <div className='content'>
                    <h2>{eachRestaurant.name}</h2>
                    <p>{eachRestaurant.avgPrice}</p>
                    <p>Rating: {eachRestaurant.avgRating}</p>
                    <p>{eachRestaurant.phone}</p>
                    <p>{eachRestaurant.location}</p>
                    <Link to={'/details/'+ eachRestaurant._id} >See Details</Link>
                </div>
                </div> 
                )
            })
        }
    }
    render() {
        console.log(this.state.allTheRestaurants)
        return (  
            
            <div id="restaurants-list">


            <div className="list-of-restaurants-container">
            {this.showAllRestaurants()}

            </div>

            {/* <Yelp res={this.state.yelp}/> */}
            
            </div>
        )
    }
}
export default RestaurantIndex;