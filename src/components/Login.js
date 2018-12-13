import React, {Component} from 'react';
import UserService from '../service/UserService';

class Login extends Component {
  state = { usernameInput: '', passwordInput: '' };
  userService = new UserService();


handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
}


handleFormSubmit = (e) =>{
    e.preventDefault();
    // you could just do axios.post('http://localhost:5000/api/signup, {username: this.state.userNameInput, password: this.state.passWordInput}, {withCredentials: true})
    this.userService.login(this.state.usernameInput, this.state.passwordInput)
    .then((userFromDB)=>{
        // here we wait for the API to give us the user object back after logging in
        this.setState({usernameInput: '', passwordInput: ''})
        
        console.log(userFromDB)
        // then we pass that user object back to app component
        this.props.logTheUserIntoAppComponent(userFromDB)
        // here, we are getting the user object from the DB
        // and we're setting AppComponent.state.loggedinuser equal to it


        //this.props.history.push('/project-index');
        // then we redirect
        


    })
    .catch((err)=>{
        console.log('sorry something went wrong', err)

    })

}

render(){
  return(
    <div className="log-in">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
        <div className="field">
          <label>Username</label>
          <input type="text" name="usernameInput" value={this.state.usernameInput} onChange={ e => this.handleChange(e)}/>
        </div>
        <div className="field"> 
          <label>Password</label>
          <input type="password" name="passwordInput" value={this.state.passwordInput} onChange={ e => this.handleChange(e)}/>
        </div>
       

        <div class="ui form success">
       
        <button class="positive ui button">Login</button>

        </div>

      </form>

</div>
  )
}
}



// const Login = () => {
//     return(
        
      //   <form className="ui form" onSubmit={this.handleFormSubmit}>
      //   <div className="field">
      //     <label>Username</label>
      //     <input type="text" name="usernameInput" value={this.state.usernameInput} onChange={ e => this.handleChange(e)}/>
      //   </div>
      //   <div className="field"> 
      //     <label>Password</label>
      //     <input type="password" name="passwordInput" value={this.state.passwordInput} onChange={ e => this.handleChange(e)}/>
      //   </div>
       

      //   <div class="ui form success">
       
      //   <button className="ui button" type="submit">Login</button>
      //   </div>

      // </form>
      
//     )
// };

export default Login;