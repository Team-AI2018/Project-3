import React, {
    Component
} from 'react';
import "./App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Faker from 'faker';
import './css/Profile.css';
class Profile extends Component {
    state = {
        allTheRestaurants: [],
    }
    componentWillMount() {
        this.fetchRestaurants()
    }
    fetchRestaurants = () => {
        Axios.get(`${process.env.REACT_APP_API_URL}/restaurants`)
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
            
            <div className='profile-box'>

            <h1>Profile Page</h1>
            {/* <img src={Faker.image.avatar()}></img>
            <h2>{Faker.name.firstName()} {Faker.name.lastName()}</h2>
            <h2>{Faker.name.jobTitle()}</h2>
            <h2>{Faker.internet.email()}</h2>
            <h2>{Faker.phone.phoneNumberFormat()}</h2>
            <p>{Faker.name.jobDescriptor()}</p> */}
            <div className="list-of-restaurants-container">
                {this.showAllRestaurants()}
            </div>
            <Link to="/add">New Restaurant</Link>
            </div>
        )
    } 
}
export default Profile;