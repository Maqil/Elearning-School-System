import React, { Component } from "react";
import "./RegisterForm.css";
import "../../fonts/material-icon/css/material-design-iconic-font.min.css";

class RegisterForm2 extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <section className="signup">
          <div className="container">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>
                <form className="register-form" id="register-form">
                  <div className="form-group">
                    <label for="name">
                      <i className="zmdi zmdi-account material-icons-name" />
                    </label>
                    <input
                      type="text"
                      name="name"
                      onChange={this.props.setName}
                      id="exampleInputName"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="email">
                      <i className="zmdi zmdi-email" />
                    </label>
                    <input
                      type="email"
                      onChange={this.props.setEmailRegister}
                      id="exampleInputEmail1"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="pass">
                      <i className="zmdi zmdi-lock" />
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                      onChange={this.props.setPasswdRegister}
                    />
                  </div>
                  <div className="form-group">
                    <label for="re-pass">
                      <i className="zmdi zmdi-lock-outline" />
                    </label>
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Repeat your password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label for="agree-term" className="label-agree-term">
                      <span>
                        <span />
                      </span>
                      I agree all statements in{" "}
                      <a href="#" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                      onClick={this.props.OnSubmitRegister}
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <img
                  src={require("../../images/signup-image.jpg")}
                  alt="sing up image"
                />

                <a
                  href="#"
                  className="signup-image-link"
                  onClick={this.props.onChangePageSign}
                >
                  I am already member
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default RegisterForm2;
