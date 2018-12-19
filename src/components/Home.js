import React from 'react';
import Axios from 'axios';
import Slider from './Slider'
import './App.css';


import FlipCard from './FlipCard';
import Footer from './Footer';
import Video from './Video';






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
                <h1>Find the Best Restaurant in Town </h1>
                    <div className="four-columns">
                        <div className="column-box">
                            <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to</p>
                            <img src="/pexels-photo-588776.jpeg"/>
                        </div>
                        <div  className="column-box">
                            <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to</p>
                            <img src="/pexels-photo-588776.jpeg"/>
                        </div>
                        <div  className="column-box">
                            <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to</p>
                            <img src="/pexels-photo-588776.jpeg"/>
                        </div>
                        <div  className="column-box">
                            <p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to</p>
                            <img src="/pexels-photo-588776.jpeg"/>
                        </div>
                    </div>
            </div>
                <div className="slider-box">
                    <Slider />
                </div>
                <div className="flip-card-box">
                <FlipCard/>
                </div> 
                {/* <div>
                    <Video/>
                </div>  */}
                <div className="vd-section">
                    <Footer/>
                </div>
            
            </div>
    );

    }
}

export default Home;