import React, {Component} from 'react';
import Axios from 'axios';


class AddNewProject extends Component {
    state={
        nameInput: '',
        descriptionInput: '',
        locationInput: '',
        foodType: '',
        avgPrice: null,
        rating: null,
        review: [],
        owner: null

    }

    updateInput = (e) => {
        this.setState({[e.target.id]: e.target.value })
    }

    createNewRestaurant = (e) => {
        e.preventDefault();
        const newName = this.state.nameInput;
        const newDescription = this.state.descriptionInput;
        const newLocation = this.state.locationInput;
        const newfoodType = this.state.foodType;
        const avgPrice = this.state.avgPrice;
        const rating = this.state.rating;
        const review = this.state.review;
        const owner = this.state.owner;
        Axios.post(`${process.env.REACT_APP_API_URL}/restaurants/add-new`,
         {name: newName, description: newDescription, location: newLocation, foodType: newfoodType, avgPrice: avgPrice,
         rating: rating, review: review, owner : owner},
         {withCredentials: true})
         .then((responeFromOurAPI)=>{
             this.props.history.push('/profile')
            this.props.addAllRestaurants(responeFromOurAPI);
            this.props.history.push('/restaurants');
            this.props.history.push('/profile')
         })
         .catch((err)=>{
            // console.log('error creating task', err)
         })
    }

    render(){
        return(
            <div className="add-new">
                <h1>Add New Restaurant</h1>
                <form onSubmit={this.createNewRestaurant}>
                    <div className="ui form">
                        <div className="field">
                            <label>Restaurant</label>
                            <div className="fields">
                                <div className="ten wide field">
                                    <input value={this.state.nameInput} id="nameInput" onChange={this.updateInput} placeholder="Name"/>
                                </div>
                                <div className="six wide field">
                                <input value={this.state.foodType} id="foodType" onChange={this.updateInput} placeholder="Food Type"/>
                                </div>
                            </div>
                        </div>
                        <div className="fields">
                        <div className="three wide field">
                        <input type="number" placeholder="Avg Price" value={this.state.avgPrice} id="avgPrice" onChange={this.updateInput}/>
                        </div>
                        <div className="three wide field">
                        <input type="number" placeholder="Rating" value={this.state.rating} id="rating" onChange={this.updateInput}/>
                        </div>
                        </div>
                        <div className="field">
                        <label>Restaurant Address</label>
                        <input type="text" placeholder="Street Address" value={this.state.locationInput} onChange={this.updateInput} id="locationInput"/>
                        </div>
                        <div className="field">
                        <label>Image URL</label>
                        <input type="text" placeholder="Image" />
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <textarea rows="4" value={this.state.descriptionInput} id="descriptionInput" onChange={this.updateInput} placeholder="Describe the restaurant"></textarea>
                        </div>
                        <button className="positive ui button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default AddNewProject;