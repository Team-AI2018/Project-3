import React from 'react';
import faker from 'faker';
import './css/Symbol.css';

const Symbol = () => {


    return(
       <div className="symbol-box">
            <div>
                 
                 {/* <i class="fa fa-cog fa-spin fa-3x fa-fw"></i> */}
                 <img src='animat-lightbulb-color.gif'></img>
                 <p>We’re passionate about connecting people with great local restaurants. We’re bringing together world-class talent from different experiences, disciplines, and areas of study to produce a world-class product.</p>
            </div>
            <div>
                <img src="animat-rocket-color.gif"></img>
                 <p>Restaurant discovery platform to turn to for trustworthy, efficient, and fun-to-read guides and reviews in major cities around the US. </p>
            </div>
            <div>
                 <img src="animat-diamond-color.gif"></img>
                 <p>{faker.lorem.paragraph()}</p>

            </div>
        </div> 
    );

}

export default Symbol;