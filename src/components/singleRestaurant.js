import React, { Component } from 'react';
import "./App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';

class SingleRestaurant extends Component{
    state={
        nameInput: '',
        descriptionInput: '',
        locationInput: '',
        foodType: '',
        avgPrice: null,
        rating: null,
        review: [],
        owner: null,
        editing: false,
        theActualProject: true
        
    }

    componentWillMount(){
        const theID = this.props.match.params.id;
        // console.log(theID)
        Axios.get('http://localhost:5000/api/restaurants/details/'+theID)
        .then((response)=>{

            console.log(response)
            this.setState({theRestaurant: response.data.obj.theRestaurant,
                nameInput: response.data.obj.theRestaurant.name,
                descriptionInput: response.data.obj.theRestaurant.description,
                locationInput: response.data.obj.theRestaurant.location,
                foodType: response.data.obj.theRestaurant.foodType,
                avgPrice: response.data.obj.theRestaurant.avgPrice,
                rating: response.data.obj.theRestaurant.rating,
                review: response.data.obj.theRestaurant.review,
                owner: response.data.obj.theRestaurant.owner
            })
            
        }).catch(()=>{
        })
    }

    updateInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    editProject = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:5000/api/restaurants/edit/'+this.state.theRestaurant._id, 
        {
            name: this.state.nameInput, 
            description: this.state.descriptionInput, 
            location: this.state.locationInput, 
            foodType: this.state.foodType, 
            avgPrice: this.state.avgPrice,
        })
        .then(()=>{
            this.setState({editing: false});
        })
        .catch(()=>{
        })
    }

    toggleForm = () =>{
        this.setState({editing: true})
    }

    showProjectDetails = () =>{
        // console.log(this)
       if(this.state.theRestaurant){
            if(this.state.editing){

                return(
                 <form onSubmit={this.editProject}>
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
                        <input type="number" placeholder="Rating" value={this.state.rating} id="foodType" onChange={this.updateInput}/>
                        </div>
                        </div>
                        
                        <div className="field">
                        <label>Restaurant Address</label>
                        <input type="text" placeholder="Street Address" value={this.state.locationInput} onChange={this.updateInput} id="locationInput"/>
                        </div>
                        
                        <div className="field">
                            <label>Description</label>
                            <textarea rows="4" value={this.state.descriptionInput} id="descriptionInput" onChange={this.updateInput} placeholder="Describe the restaurant"></textarea>
                        </div>
                        <button className="positive ui button">Submit</button>
                    </div>
                </form>



            )

        }  else{

            return(
                <div>
                    <span>
                    {this.state.nameInput}
                    </span>

                    <span>
                        {this.state.descriptionInput}
                    </span>
                   
                    { this.props.currentUser && this.props.currentUser._id === this.state.owner ? 
                        <img onClick={this.toggleForm} className="pen-pic" src="https://us.123rf.com/450wm/jemastock/jemastock1707/jemastock170717063/82921914-stock-vector-school-pen-write-supply-accessory-icon-vector-illustration.jpg?ver=6"/>
                        : ""
                    }
                    {/* <span>
                        {this.state.owner}
                    </span> */}
                    <span>
                    Reviews: {this.state.review}
                    </span>

                    </div>
            )
        }
        }
    }

    deleteProject = () =>{
        Axios.post('http://localhost:5000/api/restaurants/delete/'+this.state.theRestaurant._id, {owner: this.state.theRestaurant.owner}, {withCredentials: true})
        .then(()=>{
            
            this.props.history.push('/restaurants');

            // this.props.history.push('/profile');
        })
        .catch(()=>{

        })
    }

    render(){
         console.log(this.props)
         console.log(this.state)

        
        return(
            <div>
                <h1> Project Details Page!</h1>
                {this.showProjectDetails()}

                <br />
                <br />
                <div>
                    <button onClick={this.deleteProject} className="delete">Delete This Project</button>
                </div>

                <Link to={`/addReviews/${this.props.match.params.id}`}>Add Review</Link>


            </div>
        )
    }
}

export default SingleRestaurant;