import React, {Component} from 'react';
import "./App.css";
import Axios from 'axios';


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
        console.log(theID)
        Axios.get('http://localhost:5000/api/restaurants/details/'+theID)
        .then((response)=>{

            console.log('------___---__-_-_--_-_-__-_-_-_-_-___-_-----',response)

            this.setState({theRestaurant: response.data,
                nameInput: response.data.name,
                descriptionInput: response.data.description,
                locationInput: response.data.location,
                foodType: response.data.foodType,
                avgPrice: response.data.avgPrice,
                rating: response.data.rating,
                review: response.data.review,
                owner: response.data.owner
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
            // after we submit the form and the Axios request is complete, we set this.state.editing
            // back to false so that the form dissappears and looks all fancy
        })
        .catch(()=>{
        })
    }

    toggleForm = () =>{
        this.setState({editing: true})
    }

    showProjectDetails = () =>{
        console.log(this)
       if(this.state.theRestaurant){
            if(this.state.editing){
                // if this.state.editing is set to true, we will show a form

                return(
                    // <form onSubmit={this.editProject}>
                    // <input className="input" value={this.state.nameInput} onChange={this.updateInput} id="nameInput"/>
                    // <input className="input" value={this.state.descriptionInput} onChange={this.updateInput} id="descriptionInput"/>
                    // <button>submit changes</button>
                    // </form>

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
                    {/* we put this little image of a pen here, and add an on click function */}
                    {/* the on click function changes this.state.editing to true */}
                    {/*  therefore, when we change this.state.editing to true, we show a form instead of just the info */}
                    <img onClick={this.toggleForm} className="pen-pic" src="https://us.123rf.com/450wm/jemastock/jemastock1707/jemastock170717063/82921914-stock-vector-school-pen-write-supply-accessory-icon-vector-illustration.jpg?ver=6"/>
                </div>
            )
        }
        }
    }

    deleteProject = () =>{
        Axios.post('http://localhost:5000/api/restaurants/delete/'+this.state.theRestaurant._id, {})
        .then(()=>{
            
            this.props.history.push('/restaurants');
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
                <br />
                <br />
            <div>
                <button onClick={this.deleteProject} className="delete">Delete This Project</button>
            </div>
                </div>
        )
    }
}

export default SingleRestaurant;