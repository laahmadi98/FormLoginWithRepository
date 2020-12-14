
import React , { Component } from "react";
import axios from 'axios';
import { HOST } from "../constants/otherConstant";
import {
   Link, withRouter
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
      redirect: false

    }
  }

  handleChange = (event) => {
    console.log("login")
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    const { login, password, } = this.state;
console.log(login,password)

    axios.post(`${HOST}/users/login`, {
    
        login: login,
        password: password,
    },
    {
     headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        

        console.log(response);
        console.log(response.status);
        if (response.status == '200') {

          this.props.history.push("dashboard");
          console.log("SUCCESSS");

         }
       

      }).catch(error => {

        console.log('Error: ', error.response)

      })


    event.preventDefault();
  }



  render() {
    const { login, password, redirect } = this.state;

    console.log(redirect);

    return (
      <div className="base-container" >
        <div className="container-right">
          <div className="header">فرم ورود</div>
          <form onSubmit={this.handleSubmit}>
            <div className="content">
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">ایمیل</label>
                  <input type="text" name="login" value={login} onChange={this.handleChange} placeholder="ایمیل" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">کلمه عبور</label>
                  <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="پسورد" />
                </div>
              </div>
            </div>
            <div className="footer">
              <button type="submit" className="btn">
                ورود
          </button>
            </div>
          </form>
        </div>
        <div className="container-left">
          <Link to="/register">قبلا ثبت نام نکرده اید؟</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);