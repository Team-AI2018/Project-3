import React from 'react';
import Axios from 'axios';
import Slider from './Slider'
import './App.css';


import FlipCard from './FlipCard';
import Footer from './Footer';
import People from './people';
import Symbol from './Symbol'



class Home extends React.Component{

    state={
        searchterm:'',
        restaurants: []
    }

    onFormSubmit= (event)=>{ 
        event.preventDefault(); 
        this.props.history.push(`/restaurants?q=${this.state.searchterm}`)
  
    } 
   

    render(){
    
            return(
                <div>
                <form onSubmit={this.onFormSubmit}>
                <div className="search-bar-box">
                        <input className="search-bar" placeholder="Sushi, Burgers, Italian, American" value={this.state.searchterm} onChange={(e)=>this.setState({searchterm:e.target.value})}/>
                        <a><i class="fas fa-search-location"></i></a>
                </div>
                </form>
                <div className='ui container'>
                <h1>Find the Best Restaurants in Town </h1>
                    <div className="four-columns">
                        <div className="column-box">
                            <p>fuga ad magnam quas. Dolorum nostrum assumenda aut. Cumque dolor commodi aut. Repudiandae quis qui quisquam nisi. Cupiditate veniam eum dolorem tenetur sunt.</p>
                            <img src="/pexels-photo-1546039.jpeg"/>
                        </div>
                        <div  className="column-box">
                            <p>fuga ad magnam quas. Dolorum nostrum assumenda aut. Cumque dolor commodi aut. Repudiandae quis qui quisquam nisi. Cupiditate veniam eum dolorem tenetur sunt.</p>
                            <img src="/pexels-photo-588776.jpeg"/>
                        </div>
                        <div  className="column-box">
                            <p>fuga ad magnam quas. Dolorum nostrum assumenda aut. Cumque dolor commodi aut. Repudiandae quis qui quisquam nisi. Cupiditate veniam eum dolorem tenetur sunt.</p>
                            <img src="/pexels-photo-1528013.jpeg"/>
                        </div>
                        <div  className="column-box">
                            <p> uga ad magnam quas. Dolorum nostrum assumenda aut. Cumque dolor commodi aut. Repudiandae quis qui quisquam nisi. Cupiditate veniam eum dolorem tenetur sunt.</p>
                            <img src="/pexels-photo-315755.jpeg"/>
                        </div>
                    </div>
            </div>
                <div className="slider-box">
                    <Slider />
                </div>
                <div className="flip-card-box">
                <FlipCard/>
                </div> 
        
                <div>
                    <People/>
                </div>
                <div>
                    <Symbol/>
                </div>
                <div className="vd-section">
                    <Footer/>
                </div>
            
            </div>
    );

    }
}

export default Home;