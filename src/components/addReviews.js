import React, {Component} from 'react';
import Axios from 'axios';


class AddReview extends Component {
    state={
        author: null,
        review: '',
        rating: null,
    }

    updateInput = (e) => {
        this.setState({[e.target.id]: e.target.value })
    }

    createNewReview = (e) => {
        e.preventDefault();
        const author = this.state.author;
        const review = this.state.review;
        const rating = this.state.rating;
        Axios.post(`${process.env.REACT_APP_API_URL}/restaurants/${this.props.match.params.id}/addReview`,
         {author: author, review: review, rating: rating},
         {withCredentials: true})
         .then((responeFromOurAPI)=>{
             this.props.history.push(`/details/${this.props.match.params.id}`)
            this.props.addAllRestaurants(responeFromOurAPI);
            //this.props.history.push('/details');
         })
         .catch((err)=>{
            // console.log('error creating task', err)
         })
    }

    render(){
        return(
            <div className="add-new">
                <h1>Add New Restaurant</h1>
                <form onSubmit={this.createNewReview}>
                <div className="ui form">
                        <div className="fields">
                        <div className="three wide field">
                        <input type="number" placeholder="Rating" value={this.state.rating} id="rating" onChange={this.updateInput}/>
                        </div>
                        </div>
                        <div className="field">
                            <label>Reviews</label>
                            <textarea type="text" rows="4" value={this.state.review} id="review" onChange={this.updateInput} placeholder="What do you think of this place"></textarea>
                        </div>
                        <button className="positive ui button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default AddReview;