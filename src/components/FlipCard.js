import React from 'react';
import './css/FlipCard.css'

class FlipCard extends React.Component{

    render(){
        return(
        <div className="ui container">
           <div className="flip-card-box">
            <div className="card ">
                <div className="front">
                    <img src="/pexels-photo-1437566.jpeg"></img>
                </div>
            `   
                <div className="back">
                    <div className="back-content middle">
                        <h2>Dark Code</h2>
                        <span>Youtube Channel</span>
                        <div className="sm">
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card ">
                <div className="front">
                    <img src="/food-salad-dinner-eating.jpg"></img>
                </div>
            `   
                <div className="back">
                    <div className="back-content middle">
                        <h2>Dark Code</h2>
                        <span>Youtube Channel</span>
                        <div className="sm">
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card ">
                <div className="front">
                    <img src="/pexels-photo-541216.jpeg"></img>
                </div>
            `   
                <div className="back">
                    <div className="back-content middle">
                        <h2>Dark Code</h2>
                        <span>Youtube Channel</span>
                        <div className="sm">
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                            <a href="#"><i class="fab fa-apple"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
        </div>

        );
    }

}

export default FlipCard;