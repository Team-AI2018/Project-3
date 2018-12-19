import React, {
    Component
} from 'react';
import "./App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';


class Profile extends Component {
    state = {
        allTheRestaurants: [],
    }
    componentWillMount() {
        this.fetchRestaurants()
    }
    fetchRestaurants = () => {
        Axios.get('http://localhost:5000/api/restaurants')
            .then((responseFromApi) => {

                this.setState({
                    allTheRestaurants: responseFromApi.data
                    })
            })
            .catch((err) => {})
    }
    showAllRestaurants = () => {
        if (this.state.allTheRestaurants && this.props.currentUser) {
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
            <Link to="/add">New Restaurant</Link>
            </div>
        )
    }
}
export default Profile;