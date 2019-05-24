import React, { Component } from "react";
import "./SigninForm.css";

class SigninForm2 extends Component {
  render() {
    return (
      <div className="main">
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <img
                  src={require("../../images/signin-image.jpg")}
                  alt="sing up image"
                />
                <a
                  href="#"
                  className="signup-image-link"
                  onClick={this.props.onRegister}
                >
                  Create a new account
                </a>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Sign in</h2>
                <form className="register-form">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={this.props.setEmail}
                      id="exampleInputEmail1"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      type="password"
                      name="passwd"
                      onChange={this.props.setPass}
                      placeholder="Password"
                      id="exampleInputPassword1"
                    />
                  </div>
                  {/* <div className="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label for="remember-me" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      Remember me
                    </label>
                  </div> */}
                  <div className="form-group ">
                    <a
                      onClick={this.props.OnSubmit}
                      className="btn btn-light buttonForm"
                    >
                      SignIn
                    </a>
                  </div>
                </form>
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-google" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SigninForm2;
