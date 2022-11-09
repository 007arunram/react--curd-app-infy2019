import React from 'react';
import data from './UserData.json';
class Login extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            userNameError: false,
            passwordError: false,
            invalidCredentials: false,
            UserInfo: data

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(e) {
        e.target.name === 'userName' ? this.setState({ userName: e.target.value }): this.setState({ userName: this.state.userName });
        e.target.name === 'password'? this.setState({ password: e.target.value }): this.setState({ password: this.state.password });

    }

    handleLogin(e) {
        this.state.userName === ''
            ? this.setState({ userNameError: true })
            : this.setState({ userNameError: false });

        this.state.password === '' ? this.setState({ passwordError: true })
            : this.setState({ passwordError: false });

        if (!this.state.userNameError && !this.state.passwordError) {
            var udata = data.User.filter((el) => {
                return (el.Name.toLocaleLowerCase === this.state.userName.toLocaleLowerCase &&
                    el.Password === this.state.password);
            });
            if (udata.length > 0) {
                this.props.history.push('/Crud/' + this.state.userName);
            } else {
                this.setState({ invalidCredentials: true });
            }
        }
    }
  render() {
    return (
<form>
<div class="box">
<h1>Login</h1>

<input type="email" name="userName" class="email" placeholder="Enter userName"  onChange={this.handleChange}/>
{this.state.userNameError? <span style={{ color: 'red' }}>UserName cannot be empty</span> : ''}
<br/><br/>
<input type="password" name="password" class="password" placeholder="Enter password" onChange={this.handleChange}/>
{this.state.passwordError? <span style={{color: 'red'}}> Password cannot be empty </span> :''}
<br/>
<br/>
  <input type="button"  class="smit" value="Submit" onClick={this.handleLogin}/><br/>
{this.state.invalidCredentials? <span style={{color:'red'}}> Invalid Creadentials, Give the valid Users</span>:''}

</div> 
  
</form>
    );
  }
}
export default Login;
    