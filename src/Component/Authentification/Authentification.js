import React, { Component } from "react";
import "./Authentification.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Authentification extends Component {
  render() {
    return (
      <div>
        <div className="main">
          {/* <img src={require("../../images/backtoschool.jpg")} /> */}
          <section>
            <div className="container">
              <div className="signin-content">
                <div className="user-image">
                  <img
                    src={require("../../images/Student.jpg")}
                    alt="sing up image"
                    onClick={this.props.EtdSignIn}
                  />
                  <h3
                    onClick={this.props.EtdSignIn}
                    href="#"
                    className="userLink"
                  >
                    Student
                  </h3>
                </div>
                {/* <div className="vl" /> */}
                <div className="user-image">
                  <img
                    src={require("../../images/Professor.png")}
                    alt="sing up image"
                    onClick={this.props.ProfSignIn}
                  />
                  <h3
                    onClick={this.props.ProfSignIn}
                    href="#"
                    className="userLink"
                  >
                    Professor
                  </h3>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Authentification;
