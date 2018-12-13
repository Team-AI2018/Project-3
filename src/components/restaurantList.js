import React, {
    Component
} from 'react';
import "./App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import AddNewRestaurant from './AddNewRestaurant';



class RestaurantIndex extends Component {
    state = {
        allTheRestaurants: [],
        myRestaurants: []
        
    }
    componentWillMount() {
        this.fetchRestaurants()
        console.log(this.props.currentUser)
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
        // console.log(this.props.currentUser._id)
        if (this.state.allTheRestaurants && this.props.currentUser) {
            console.log('there is a restaurant and a current user')
            const theRestaurants = this.state.allTheRestaurants.filter((eachRestaurant) => {
                // console.log(this.state.allTheRestaurants)
                return eachRestaurant.owner === this.props.currentUser._id
            })
            return theRestaurants.map((eachRestaurant) => {
                return ( 
                <div key={eachRestaurant._id}>
                    <h3>{eachRestaurant.name}</h3>
                    <h6>{eachRestaurant.description}</h6>
                    {/* <Link to={'/restaurant/'+ eachRestaurant._id} >See Details</Link> */}
                </div>
                )
            })
        }
    }
    render() {
        console.log('---------------------', this.state.allTheRestaurants)  
        return (  
            
            <div>

            <h1>Restaurant Index</h1>

            <div className="list-of-restaurants-container">
            {this.showAllRestaurants()}
            </div>

            {/* <div className="add-new-component-container"> */}
            {/* <AddNewRestaurant letTheIndexComponentKnowThatWeAddedARestaurant = {this.fetchRestaurants} /> */}
            {/* </div> */} 

            </div>
        )
    }
}
export default RestaurantIndex;