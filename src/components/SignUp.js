import React from 'react';

const SignUp = () => {
    return(
        
    //     <form className="ui form">
    //     <div className="field">
    //       <label>First Name</label>
    //       <input type="text" name="first-name" placeholder="First Name"/>
    //     </div>
    //     <div className="field">
    //       <label>Password</label>
    //       <input type="password" name="password" placeholder="password"/>
    //     </div>
       

    //     <div class="ui form success">
    //     <div class="field">
    //         <label>E-mail</label>
    //         <input type="email" placeholder="joe@schmoe.com"/>
    //     </div>
        
    //     <div className="ui success message">
    //         <div className="header">Form Completed</div>
    //         <p>You're all signed up for the newsletter.</p>
    //     </div>
    //     <div className="field">
    //       <div className="ui checkbox">
    //         <input type="checkbox" tabindex="0" className="hidden"/>
    //         <label>I agree to the Terms and Conditions</label>
    //       </div>
    //     </div>
    //     <button className="ui button" type="submit">Submit</button>
    //     </div>

    //   </form>

        <div className="sign-up">

        <div class="ui attached message">
            <div class="header">
            Welcome to Yeeeelp!
            </div>
            <p>Fill out the form below to sign-up for a new account</p>
        </div>
        <form class="ui form attached fluid segment">
            <div class="two fields">
            <div class="field">
                <label>First Name</label>
                <input placeholder="First Name" type="text"/>
            </div>
            <div class="field">
                <label>Last Name</label>
                <input placeholder="Last Name" type="text"/>
            </div>
            </div>
            <div class="field">
            <label>Username</label>
            <input placeholder="Username" type="text"/>
            </div>
                <div class="field">
                <label>Password</label>
                <input type="password"/>
            </div>
            <div class="field">
             <label>E-mail</label>
             <input type="email" placeholder="joe@schmoe.com"/>
            </div>
            <div class="inline field">
                <div class="ui checkbox">
                    <input type="checkbox" id="terms"/>
                    <label for="terms">I agree to the terms and conditions</label>
                </div>
            </div>
            <div class="ui blue submit button">Submit</div>
        </form>
            <div class="ui bottom attached warning message">
            <i class="icon help"></i>
            Already signed up? <a href="#">Login here</a> instead.
        </div>
    </div>
    
    )
};

export default SignUp;