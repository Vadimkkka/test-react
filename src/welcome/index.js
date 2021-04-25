import React from 'react'
import './welcome.css'

import MailIcon from '../icons/mail'
import PasswordIcon from '../icons/password'
import SignInIcon from '../icons/sign-in'

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      username: '', 
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  handleChange(event, state) {
    this.setState({[state]: event.target.value});
    this.setState({ result: '' })
  }
  
  handleSubmit() {
    console.log('handleSubmit', this.state)
    const { username, password } = this.state;
    let result = ''
    if (username && password) {
      result = 'success'
    } else {
      result = 'error';
    }
    this.setState({ result })
  } 

  render() {
    return (    
      <div className="welcome">
        <h1> Welcome page 👋 </h1>
        <div className="auth-block">
          <div className="auth-username">
            <MailIcon status={this.state.result}/>
            <input 
              type="username" 
              placeholder="username"
              value={this.state.username} 
              onChange={(e) => this.handleChange(e, 'username')} 
            />
          </div>
          <div className="auth-password">
            <PasswordIcon status={this.state.result}/>
            <input 
              type="password" 
              placeholder="password"
              value={this.state.password} 
              onChange={(e) => this.handleChange(e, 'password')} 
            />
          </div>
          <div className="auth-button">
            <button onClick={this.handleSubmit}>
              <div className="btn-content">
                <div className="btn-icon">
                  <SignInIcon status={this.state.result}/>
                </div>
                <div className="btn-text">
                  Lets go
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome;