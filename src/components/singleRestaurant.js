import React, { Component } from 'react';
import "./App.css";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Reviews from './Reviews'


class SingleRestaurant extends Component{
    state={
        nameInput: '',
        descriptionInput: '',
        locationInput: '',
        foodType: '',
        avgPrice: null,
        rating: null,
        review: [],
        phone: '',
        img: '',
        owner: null,
        editing: false,
        theRestaurant: true
        
    }

    componentWillMount(){
        const theID = this.props.match.params.id;

        Axios.get(`${process.env.REACT_APP_API_URL}/restaurants/details/`+theID)
        .then((response)=>{


            this.setState({theRestaurant: response.data,
                nameInput: response.data.theRestaurant.name,
                descriptionInput: response.data.theRestaurant.description,
                locationInput: response.data.theRestaurant.location,
                foodType: response.data.theRestaurant.foodType,
                avgPrice: response.data.theRestaurant.avgPrice,
                phone: response.data.theRestaurant.phone,
                img: response.data.theRestaurant.img,
                rating: response.data.theRestaurant.rating,
                review: response.data.reviews,
                owner: response.data.theRestaurant.owner
            })
            
        }).catch((err)=>{
            // console.log(err)
        })
    }

    updateInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    editProject = (e) => {
        e.preventDefault();

        Axios.post(`${process.env.REACT_APP_API_URL}/restaurants/edit/`+this.state.theRestaurant._id, 
        {
            name: this.state.nameInput, 
            description: this.state.descriptionInput, 
            location: this.state.locationInput, 
            foodType: this.state.foodType, 
            avgPrice: this.state.avgPrice,
            img: this.state.img
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
                    <h1>
                    {this.state.nameInput}
                    </h1>
                    <img src={this.state.img}/>

                    <h5>
                        {this.state.descriptionInput}
                    </h5>
                    <h5>
                       Food Type: {this.state.foodType}
                   </h5>
                   <h5>
                       Average Price: {this.state.avgPrice}
                   </h5>
                    {this.props.currentUser && this.props.currentUser._id === this.state.owner ? 
                        <img onClick={this.toggleForm} className="pen-pic" src="https://us.123rf.com/450wm/jemastock/jemastock1707/jemastock170717063/82921914-stock-vector-school-pen-write-supply-accessory-icon-vector-illustration.jpg?ver=6"/>
                        : ""
                    }

                    </div>
            )
        }
        }
    }

    deleteProject = () =>{
        // router.post('/restaurants/delete/:id', (req, res, next) => {
        Axios.post(`${process.env.REACT_APP_API_URL}/restaurants/delete/`+ this.props.match.params.id, {owner: this.state.theRestaurant.owner}, {withCredentials: true})
        .then(()=>{
            
            this.props.history.push('/restaurants');

        })
        .catch((err)=>{
            // console.log('--------------------', err)
        })
    }
    

    showReviews = ()=> {

        return this.state.review.map((eachReview, i)=>{
            return(
                <div>

                <h1>{eachReview.author}</h1>
                <li key={i}>
                    {eachReview.review}
                </li>
                <li key={i}>
                Rating: {eachReview.rating}
                </li>
                {/* <Link to={`/edit/${this.props.match.params.id}`}>Edit Review</Link> */}
                </div>
            )
                
            })
         
    }
// <Reviews id={eachReview._id} click={() => this.showReviewsDetails()}>Click Me</Reviews>
    render(){


        return(
            <div>
                
                {this.showProjectDetails()}

                <br />
                <br />
                <div>
                    <button onClick={this.deleteProject} className="delete">Delete This Project</button>
                </div>

                <Link to={`/addReviews/${this.props.match.params.id}`}>Add Review</Link>


                <h1>Reviews</h1>
                <br />
                {this.showReviews()}


            </div>
        )
    }
}

export default SingleRestaurant;