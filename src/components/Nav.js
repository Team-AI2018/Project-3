import React from 'react';
import {NavLink} from 'react-router-dom';






const Nav = (props) => {
    let user = props.user;
    return (
        <div className="nav-bar">
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/restaurants">Restaurant</NavLink>
            {
            user ? <NavLink to="/profile">Profile Page</NavLink> : <NavLink to="/signup">Sign up</NavLink> 
            }
            {
             user ? <NavLink onClick={props.logOut} to="/">Log out</NavLink> : <NavLink to="/login">Log in</NavLink>  
            }
            
            


        </div>
    )

}

export default Nav;