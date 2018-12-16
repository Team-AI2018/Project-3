import React, {
    Component
} from 'react';
import "./App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';


class RestaurantIndex extends Component {
    state = {
        allTheRestaurants: [],
        myRestaurants: []
        
    }
    componentWillMount() {
        this.fetchRestaurants()
    }
    fetchRestaurants = () => {
        Axios.get('http://localhost:5000/api/restaurants')
            .then((responseFromApi) => {
                 console.log(responseFromApi.data)
                this.setState({
                    allTheRestaurants: responseFromApi.data
                    })
            })
            .catch((err) => {})
    }
    showAllRestaurants = () => {
        if (this.state.allTheRestaurants && this.props.currentUser) {
            // console.log('there is a restaurant and a current user')
            const theRestaurants = this.state.allTheRestaurants.filter((eachRestaurant) => {
                return eachRestaurant.owner === this.props.currentUser._id
            })
            return theRestaurants.map((eachRestaurant) => {
                return ( 
                <div key={eachRestaurant._id}>
                    <h3>{eachRestaurant.name}</h3>
                    <h6>{eachRestaurant.description}</h6>
                    <Link to={'/details/'+ eachRestaurant._id} >See Details</Link>
                </div>
                )
            })
        }
    }
    render() {
        return (  
            
            <div>

            <h1>Restaurant Index</h1>

            <div className="list-of-restaurants-container">
            {this.showAllRestaurants()}
            </div>
            </div>
        )
    }
}
export default RestaurantIndex;