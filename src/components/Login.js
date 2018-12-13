import React, {Component} from 'react';
import Axios from 'axios';
import UserService from '../service/UserService';
import {Link} from 'react-router-dom'

class Login extends Component {
  state = { usernameInput: '', passwordInput: '' };
  userService = new UserService();


handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
}


handleFormSubmit = (e) =>{
    e.preventDefault();
    this.userService.login(this.state.usernameInput, this.state.passwordInput)
    .then((userFromDB)=>{
        this.setState({usernameInput: '', passwordInput: ''})
        console.log(userFromDB)
        this.props.logTheUserIntoAppComponent(userFromDB)


    })
    .catch((err)=>{
        console.log('sorry something went wrong', err)

    })

}

render(){
  return(
    <div>
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
       
        <button className="ui button" type="submit">Login</button>
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