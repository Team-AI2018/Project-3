import React from 'react';
import {NavLink} from 'react-router-dom';



const Nav = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
            <NavLink to="/login">Log in</NavLink>
            <NavLink to="/restaurants">Restaurants</NavLink>

        </div>
    )

}

export default Nav;