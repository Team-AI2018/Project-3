import React, { Component } from 'react';
import "./App.css";
import Axios from 'axios';


class Reviews extends Component{
    state={
        author: null,
        review: '',
        rating: null,
    }

    componentWillMount(){
        const theID = this.props.match.params.id;
        console.log(theID)
        Axios.get('http://localhost:5000/api/restaurants/'+theID+'/addReview')
        .then((response)=>{

            this.setState({theReviews: response.data,
                author: response.data.author,
                review: response.data.review,
                rating: response.data.rating,
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

        Axios.post('http://localhost:5000/api/restaurants/'+this.state.theReviews._id+'/edit', 
        {
            author: this.state.author,
            review: this.state.review,
            rating: this.state.rating,
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
        console.log(this)
       if(this.state.theRestaurant){
            if(this.state.editing){
                return(
                 <form onSubmit={this.editProject}>
                    <div className="ui form">
                        <div className="fields">
                        <div className="three wide field">
                        <input type="number" placeholder="Rating" value={this.state.rating} id="rating" onChange={this.updateInput}/>
                        </div>
                        </div>
                        <div className="field">
                            <label>Reviews</label>
                            <textarea rows="4" value={this.state.review} id="reviews" onChange={this.updateInput} placeholder="Describe the restaurant"></textarea>
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
                   
                    {
                    <img onClick={this.toggleForm} className="pen-pic" src="https://us.123rf.com/450wm/jemastock/jemastock1707/jemastock170717063/82921914-stock-vector-school-pen-write-supply-accessory-icon-vector-illustration.jpg?ver=6"/>
                    }
                        <br></br>
                        <br></br>
                    {/* <span>
                        {this.state.owner}
                    </span> */}


                    </div>
            )
        }
        }
    }

    deleteProject = () =>{
        Axios.post('http://localhost:5000/api/restaurants/'+this.state.theReviews._id+'/delete', {})
        .then(()=>{

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
                <h3> Reviews</h3>
                {this.showProjectDetails()}

                <br />
                <br />
            <div>
                <button onClick={this.deleteProject} className="delete">Delete This Project</button>
            </div>

            </div>
        )
    }
}

export default Reviews;