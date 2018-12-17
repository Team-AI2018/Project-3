
import React from 'react';
import UserService from '../service/UserService';



class SignUp extends React.Component {

    state = { 
        usernameInput: '',
        passwordInput: '',
        firstNameInput: '',
        lastNameInput: '',
        emailInput: '',
     };
      service = new UserService();
    
  
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }


    handleFormSubmit = (e) =>{
        e.preventDefault();
        this.service.signup(this.state.usernameInput, this.state.passwordInput, this.state.firstNameInput, this.state.lastNameInput, this.state.emailInput)
        .then((userFromDB)=>{
            console.log('------------------------', userFromDB)
            this.props.logTheUserIntoAppComponent(userFromDB)
            this.setState({
                usernameInput: '',
                passwordInput: '',
                firstNameInput: '',
                lastNameInput: '',
                emailInput: '',
            })
            this.props.history.push('/profile');
        })
        .catch((err)=>{
            console.log('sorry something went wrong', err)

        })

    }

  render(){
    return(
        <div className="sign-up">

        <div className="ui attached message ">
            <div className="header">
            Welcome to Yeeeelp!
            </div>
            <p>Fill out the form below to sign-up for a new account</p>
        </div>
        <form className="ui form attached fluid segment" onSubmit={this.handleFormSubmit}>
            <div className="two fields">
            <div className="field">
                <label>First Name</label>
                <input placeholder="First Name" type="text" name="firstNameInput" value={this.state.firstNameInput} onChange={e => this.handleChange(e)}/>
            </div>
            <div className="field">
                <label>Last Name</label>
                <input placeholder="Last Name" type="text" name="lastNameInput" value={this.state.lastNameInput} onChange={ e => this.handleChange(e)}/>
            </div>
            </div>
            <div className="field">
            <label>Username</label>
            <input type="text" name="usernameInput" value={this.state.usernameInput} onChange={ e => this.handleChange(e)}/>
            </div>
                <div className="field">
                <label>Password</label>
                <input type="password" name="passwordInput" value={this.state.passwordInput} onChange={ e => this.handleChange(e)}/>
            </div>
            <div className="field">
             <label>E-mail</label>
             <input type="email" placeholder="joe@schmoe.com" name="emailInput" value={this.state.valueInput} onChange={e => this.handleChange(e)}/>
            </div>
            <div className="inline field">
                <div className="ui checkbox">
                    <input type="checkbox" id="terms"/>
                    <label for="terms">I agree to the terms and conditions</label>
                </div>
            </div>
            <input type="submit" className="ui green submit button" value="submit"/>
        </form>
            <div className="ui bottom attached warning message">
            <i className="icon help"></i>
            Already signed up? <a href="#">Login here</a> instead.
        </div>
    </div>
    )
  }
}


export default SignUp;