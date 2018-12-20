import React from 'react';
import faker from 'faker';
import './css/People.css';

const People = () => {


    return(
       <div className="people-box">
            <div>
                <img src='pexels-photo-941693.jpeg'></img>
                <p>This is the best website I've been on !!!</p>
            </div>
            <div>
                <img src='pexels-photo-415829.jpeg'></img>
                <p>{faker.lorem.sentence()}</p>

            </div>
            <div>
                <img src='pexpexels-photo-712513els-photo-712513.jpeg'></img>
                <p>{faker.lorem.sentence()}</p>

            </div>
        </div> 
    );

}

export default People;
