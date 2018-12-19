import React from 'react';


const Yelp = (props) => {

    console.log(props)
    let Restaurants = 'No businesses avaialable' 
    if(props.res){ //make sure it's not undefined 
        Restaurants = props.res.businesses.map(business => {
            return (
                <img src={business.image_url}/>
            )
        })
    }

    return (
        <div>
            {Restaurants}
        </div> 
    )
}

export default Yelp;