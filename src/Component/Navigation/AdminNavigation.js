import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavItem, Nav } from "reactstrap";

class AdminNavigation extends Component {
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
            href="#"
            onClick={this.props.adminHome}
            style={NavBarBrand}
          >
            Home
          </a>
          <a
            onClick={this.props.adminPublierCours}
            className="navbar-brand"
            href="#"
            style={NavBarBrand}
          >
            Post
          </a>
          <a
            onClick={this.props.showUsers}
            className="navbar-brand"
            href="#"
            id="NavBarBrand"
            style={NavBarBrand}
          >
            Show all users
          </a>
          <a
            onClick={this.props.adminShowCourses}
            className="navbar-brand"
            href="#"
            id="NavBarBrand"
            style={NavBarBrand}
          >
            Manage courses
          </a>

          <a
            className="navbar-brand float-right"
            onClick={this.props.Logout}
            href="#"
            style={NavBarBrand}
          >
            <i class="zmdi zmdi-sign-in" style={zmdi} />
            Logout
          </a>
        </nav>
      </div>
    );
  }
}

export default AdminNavigation;
