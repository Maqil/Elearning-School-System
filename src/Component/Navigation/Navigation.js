import React, { Component } from "react";
import "./Navigation.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Navigation extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const NavBarBg = { backgroundColor: "steelblue" };
    const NavBarBrand = {
      color: "white",
      fontFamily: "Comic Sans MS",
      paddingLeft: "10px"
    };
    const zmdi = {
      paddingRight: "10px"
    };

    return (
      <div>
        <nav className="navbar navbar-inverse d-block " style={NavBarBg}>
          <a className="navbar-brand" href="#" style={NavBarBrand}>
            <i class="zmdi zmdi-account" style={zmdi} />
            {this.props.userEmail}
          </a>
          <a
            className="navbar-brand active"
            onClick={this.props.Home}
            href="#"
            style={NavBarBrand}
          >
            Home
          </a>
          <a
            onClick={this.props.publierCours}
            className="navbar-brand"
            href="#"
            style={NavBarBrand}
          >
            Post
          </a>
          <a
            onClick={this.props.showCourses}
            className="navbar-brand"
            href="#"
            style={NavBarBrand}
          >
            Available Courses
          </a>
          <a
            className="navbar-brand float-right"
            onClick={this.props.Logout}
            style={NavBarBrand}
            href="#"
          >
            <i class="zmdi zmdi-sign-in" style={zmdi} />
            Logout
          </a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
