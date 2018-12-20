import React from 'react';
import './css/FlipCard.css'
import Faker from 'faker';
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
                        <img src={Faker.image.food()}></img>
                        <h2>{}</h2>
                        <div className="sm">
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
                        <img src={Faker.image.nightlife()}></img>
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
                        <img src={Faker.image.business()}></img>
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