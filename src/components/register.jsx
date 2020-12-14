
import React , { Component } from "react";
import {
  Redirect, Link, withRouter
} from "react-router-dom";
import axios from 'axios';
import { HOST } from "../constants/otherConstant";


class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      phone: "",
      redirect: false,
      error : ""
    }

  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    const { username, password, phone, email } = this.state;


    axios.post(`${HOST}/users/register`, {
    
        email: email,
        username: username,
        password: password,
        phone: phone
      
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
          this.setState({ redirect : true});
          this.props.history.push("/");
         }
       

      }).catch(error => {

        console.log('Error: ', error.response)

      })

      this.setState({
        email : "",
        username:"",
        password: "",
        phone:""
      })

    event.preventDefault();
  }



  render() {
    

    const { username, password, phone, email, redirect } = this.state;

    console.log(redirect);


    return (
      <div className="base-container" >
        <div className="container-right">
          <div className="header">فرم ثبت نام</div>
          <form onSubmit={this.handleSubmit}>
            <div className="content">
              <div className="form">
                <div className="form-group">
                  <label htmlFor="username">ایمیل</label>
                  <input type="text" name="email" value={email} onChange={this.handleChange} placeholder="ایمیل" />
                </div>
                <div className="form-group">
                  <label htmlFor="username">کدملی</label>
                  <input type="text" name="username" value={username} onChange={this.handleChange} placeholder="کدملی" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">کلمه عبور</label>
                  <input type="password" name="password" value={password} onChange={this.handleChange} placeholder="پسورد" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">شماره موبایل</label>
                  <input type="text" name="phone" value={phone} onChange={this.handleChange} placeholder="موبایل" />
                </div>
              </div>
            </div>
            <div className="footer">
              <button type="submit" className="btn">
                ثبت نام
          </button>
         { redirect &&  <div className="message"> <Link className="message" to="/login">ثبت نام با موفقیت انجام شد.</Link> </div> } 
            </div>
          </form>
        </div>
        <div className="container-left">
          <Link to="/login">قبلا ثبت نام کرده اید؟</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Register);