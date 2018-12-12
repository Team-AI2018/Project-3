import React from 'react';

const SignUp = () => {
    return(
        
        <form className="ui form">
        <div className="field">
          <label>Username</label>
          <input type="text" name="first-name" placeholder="First Name"/>
        </div>
        <div className="field"> 
          <label>Password</label>
          <input type="password" name="password" placeholder="password"/>
        </div>
       

        <div class="ui form success">
       
        <button className="ui button" type="submit">Login</button>
        </div>

      </form>
      
    )
};

export default SignUp;