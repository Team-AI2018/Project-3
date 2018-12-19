import React from 'react';
import Slider from './Slider'
import './App.css';

const Home = () => {

    return(
        <div>
        <div className="search-bar-box">
            <input className="search-bar" placeholder="Sushi, Burgers, Italian, American"/>
            <a><i className="fas fa-search-location"></i></a>
        </div>
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
    </div>
    );
}

export default Home;