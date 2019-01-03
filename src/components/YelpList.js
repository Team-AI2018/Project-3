import React from 'react';
import './css/Yelp.css'

const Yelp = (props) => {

    // console.log(props)
    let Restaurants = 'No businesses available' 
    if(props.res){ //make sure it's not undefined 
        Restaurants = props.res.businesses.map(business => {
            return (
            <div className="yelp">
                
                <a href={business.url}><img src={business.image_url}/></a>
                <div className='content'>
                    <h2>{business.name}</h2>
                    <p>{business.price}</p>
                    <p>Rating: {business.rating}</p>
                    <p>{business.display_phone}</p>
                    <p>{business.location.display_address}</p>
                   
                </div>
            </div> 
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