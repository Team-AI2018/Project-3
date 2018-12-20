import React from 'react';
import './css/Slider.css'
import Faker from 'faker';

class Slider extends React.Component{

    render(){
        return(
            <div className="slider">
                <ul>
                    <li>
                        <div className="content">
                        <h2>{Faker.lorem.sentence()}</h2>
                        <p>{Faker.lorem.paragraph()}</p>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                        <h2>{Faker.lorem.sentence()}</h2>
                        <p>{Faker.lorem.paragraph()}</p>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                        <h2>{Faker.lorem.sentence()}</h2>
                        <p>{Faker.lorem.paragraph()}</p>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                        <h2>{Faker.lorem.sentence()}</h2>
                        <p>{Faker.lorem.paragraph()}</p>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                        <h2>{Faker.lorem.sentence()}</h2>
                        <p>{Faker.lorem.paragraph()}</p>
                        </div>
                    </li>

                </ul>
            </div>

        );
    }

}

export default Slider;