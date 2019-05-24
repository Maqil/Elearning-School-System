import React, { Component } from "react";
import "./App.css";

// Sign up & Sign in
import Authentification from "./Component/Authentification/Authentification";
import SigninForm from "./Component/SigninForm/SigninForm";
import RegisterForm from "./Component/RegisterForm/RegisterForm";

// Users Home
import ShowUsers from "./Component/Home/ShowUsers";
import ProfHome from "./Component/Home/ProfHome";
import EtdHome from "./Component/Home/EtdHome";
import AdminHome from "./Component/Home/AdminHome";

// Users Navigation
import AdminNavigation from "./Component/Navigation/AdminNavigation";
import Navigation from "./Component/Navigation/Navigation";

// Form for adding a course or an exercices
import AddCourseForm from "./Component/AddCourseForm/AddCourseForm";
import ManageCourses from "./Component/Courses/ManageCourses";
import ShowCourses from "./Component/Courses/ShowCourses";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: "authentification"
    };
  }

  // Sign in & Sign up
  onAuthentification = () => {
    this.setState({ page: "authentification" });
  };
  onRegister = () => {
    this.setState({ page: "register" });
  };
  onSignIn = () => {
    this.setState({ page: "signin" });
  };

  onEtdSignIn = () => {
    this.setState({ page: "signin", usertype: "Student" });
  };
  onProfSignIn = () => {
    this.setState({ page: "signin", usertype: "Professor" });
  };

  onAdminHome = () => {
    this.setState({ page: "adminhome" });
  };

  onHome = () => {
    var userType = this.state.usertype;
    if (userType === "Student") {
      this.setState({ page: "etdhome" });
    } else if (userType === "Professor") {
      this.setState({ page: "profhome" });
    }
  };

  // For sign in
  handelEmail = e => {
    this.setState({ email: e.target.value });
  };
  handelPass = e => {
    this.setState({ passwd: e.target.value });
  };
  handleSignin = () => {
    let data = JSON.stringify({
      email: this.state.email,
      passwd: this.state.passwd,
      usertype: this.state.usertype
    });
    fetch("http://localhost:8000/signin", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: data
    })
      .then(res => res.json())
      .then(result => {
        if (result.success === false) {
          alert("Invalid email or password \nGo to Sign up page");
          this.setState({ page: "register" });
        } else if (
          result.success === true &&
          this.state.usertype === "Professor"
        ) {
          // alert("Bienvenue \n" + this.state.email);
          this.setState({ page: "profhome" });
        } else if (
          result.success === true &&
          this.state.usertype === "Student" &&
          this.state.email === "admin"
        ) {
          // alert("Welcome \n" + this.state.email);
          this.setState({ page: "adminhome" });
        } else if (
          result.success === true &&
          this.state.usertype === "Student" &&
          this.state.email !== "admin"
        ) {
          // alert("Bienvenue \n" + this.state.email);
          this.setState({ page: "etdhome" });
        }
      });
  };

  // For sign up
  handelNameRegister = e => {
    this.setState({ nom: e.target.value });
  };
  handelEmailRegister = e => {
    this.setState({ emaill: e.target.value });
  };
  handelPasswdRegister = e => {
    this.setState({ passwdd: e.target.value });
  };
  handelLanguage = e => {
    this.setState({ lang: e.target.value });
  };
  handelSubmitRegister = () => {
    let data = JSON.stringify({
      nom: this.state.nom,
      email: this.state.emaill,
      passwd: this.state.passwdd,
      language: this.state.lang,
      usertype: this.state.usertype
    });
    console.log("User before send data : \n" + data);
    fetch("http://localhost:8000/register", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: data
    })
      .then(res => res.json())
      .then(result => {
        if (result.success === false) {
          alert(result.msg);
        } else {
          alert(result.msg);
          this.setState({ page: "signin" });
        }
      });
  };

  onShowCourses = () => {
    this.setState({ page: "showcourses" });
  };

  // Showing users by admin
  handleShowUsers = () => {
    this.setState({ page: "showusers" });
  };
  onAdminShowCourses = () => {
    this.setState({ page: "adminshowcourses" });
  };

  // Delete Professor profile by admin
  onDeleteProf = iid => {
    let data = JSON.stringify({ id: iid, usertype: this.state.usertype });
    fetch("http://localhost:8000/removeProf/" + iid, {
      method: "delete",
      headers: { "content-Type": "application/json" },
      body: data
    })
      .then(res => res.json())
      .then(result => {
        if (result.success === false) {
          alert("User not removed");
        } else {
          alert("User removed succesfuly");
          this.setState({ page: "home" });
        }
      });
  };

  // Delete Student profile by admin
  onDeleteEtd = iid => {
    let data = JSON.stringify({ id: iid });
    fetch("http://localhost:8000/removeEtd/" + iid, {
      method: "delete",
      headers: { "content-Type": "application/json" },
      body: data
    })
      .then(res => res.json())
      .then(result => {
        if (result.success === false) {
          alert("User not removed");
        } else {
          alert("User removed succesfuly");
          this.setState({ page: "home" });
        }
      });
  };

  //for adding a course or an exercices
  onAdminPublier = () => {
    this.setState({ page: "postadmin" });
  };
  onPublier = () => {
    this.setState({ page: "post" });
  };
  handleCours = e => {
    this.setState({ cours: e.target.value });
  };
  handleModule = e => {
    this.setState({ module: e.target.value });
  };
  handleCoursType = e => {
    this.setState({ type: e.target.value });
  };
  handleFile = e => {
    this.setState({ file: e.target.value });
  };
  onSubmitPublication = () => {
    alert(this.state.file);
    let data = JSON.stringify({
      cours: this.state.cours,
      module: this.state.module,
      type: this.state.type,
      file: this.state.file
    });
    console.log("Sending course : \n" + data);
    fetch("http://localhost:8000/addcours", {
      method: "post",
      headers: { "content-Type": "application/json" },
      body: data
    })
      .then(res => res.json())
      .then(result => {
        if (result.success === false) {
          alert(result.msg);
        } else {
          alert("Post added succesfully");
        }
      });
  };

  handleDeleteCourse = iid => {
    let data = JSON.stringify({ id: iid });
    fetch("http://localhost:8000/deletecourse/" + iid, {
      method: "delete",
      headers: { "content-Type": "application/json" },
      body: data
    })
      .then(res => res.json())
      .then(result => {
        if (result.success === false) {
          alert("User not removed");
        } else {
          alert("User removed succesfuly");
          this.setState({ page: "home" });
        }
      });
  };

  render() {
    // UserEmail
    var getUserEmail = this.state.email;
    var content = "";

    // First page
    if (this.state.page === "authentification") {
      this.content = (
        <Authentification
          EtdSignIn={this.onEtdSignIn}
          ProfSignIn={this.onProfSignIn}
        />
      );
    }

    // Sign in & Register
    else if (this.state.page === "signin") {
      this.content = (
        <SigninForm
          setEmail={this.handelEmail}
          setPass={this.handelPass}
          OnSubmit={this.handleSignin}
          onRegister={this.onRegister}
        />
      );
    } else if (this.state.page === "register") {
      this.content = (
        <RegisterForm
          getState={this.state.page}
          setName={this.handelNameRegister}
          setEmailRegister={this.handelEmailRegister}
          setPasswdRegister={this.handelPasswdRegister}
          setLanguage={this.handelLanguage}
          OnSubmitRegister={this.handelSubmitRegister}
          onChangePageSign={this.onSignIn}
        />
      );
    }

    // Admin Home and Operations
    else if (this.state.page === "adminhome") {
      this.content = (
        <div>
          <AdminNavigation
            userEmail={getUserEmail}
            adminHome={this.onAdminHome}
            adminPublierCours={this.onAdminPublier}
            showUsers={this.handleShowUsers}
            adminShowCourses={this.onAdminShowCourses}
            Logout={this.onAuthentification}
          />
          <AdminHome />
        </div>
      );
    } else if (this.state.page === "postadmin") {
      this.content = (
        <div>
          <AdminNavigation
            userEmail={getUserEmail}
            adminHome={this.onAdminHome}
            adminPublierCours={this.onAdminPublier}
            showUsers={this.handleShowUsers}
            adminShowCourses={this.onAdminShowCourses}
            Logout={this.onAuthentification}
          />
          <AddCourseForm
            setCours={this.handleCours}
            setModule={this.handleModule}
            setType={this.handleCoursType}
            setFile={this.handleFile}
            SubmitPublication={this.onSubmitPublication}
          />
        </div>
      );
    } else if (this.state.page === "showusers") {
      this.content = (
        <div>
          <AdminNavigation
            userEmail={getUserEmail}
            adminHome={this.onAdminHome}
            adminPublierCours={this.onAdminPublier}
            showUsers={this.handleShowUsers}
            adminShowCourses={this.onAdminShowCourses}
            Logout={this.onAuthentification}
          />
          <ShowUsers
            publierCours={this.onPublier}
            DeleteProf={this.onDeleteProf}
            DeleteEtd={this.onDeleteEtd}
          />
        </div>
      );
    } else if (this.state.page === "adminshowcourses") {
      this.content = (
        <div>
          <AdminNavigation
            userEmail={getUserEmail}
            adminHome={this.onAdminHome}
            adminPublierCours={this.onAdminPublier}
            showUsers={this.handleShowUsers}
            adminShowCourses={this.onAdminShowCourses}
            Logout={this.onAuthentification}
          />
          <ManageCourses deleteCourse={this.handleDeleteCourse} />
        </div>
      );
    }

    // Prof , Etd => Home and Navigation
    else if (this.state.page === "profhome") {
      this.content = (
        <div>
          <Navigation
            userEmail={getUserEmail}
            Home={this.onHome}
            publierCours={this.onPublier}
            showCourses={this.onShowCourses}
            Logout={this.onAuthentification}
          />
          <ProfHome />
          />
        </div>
      );
    } else if (this.state.page === "etdhome") {
      this.content = (
        <div>
          <Navigation
            userEmail={getUserEmail}
            Home={this.onHome}
            publierCours={this.onPublier}
            showCourses={this.onShowCourses}
            Logout={this.onAuthentification}
          />
          <EtdHome />;
        </div>
      );
    }

    // Prof & Etd operations
    else if (this.state.page === "post") {
      this.content = (
        <div>
          <Navigation
            userEmail={getUserEmail}
            Home={this.onHome}
            publierCours={this.onPublier}
            showCourses={this.onShowCourses}
            Logout={this.onAuthentification}
          />
          <AddCourseForm
            setCours={this.handleCours}
            setModule={this.handleModule}
            setType={this.handleCoursType}
            setFile={this.handleFile}
            SubmitPublication={this.onSubmitPublication}
          />
        </div>
      );
    } else if (this.state.page === "showcourses") {
      this.content = (
        <div>
          <Navigation
            userEmail={getUserEmail}
            Home={this.onHome}
            publierCours={this.onPublier}
            showCourses={this.onShowCourses}
            Logout={this.onAuthentification}
          />
          <ShowCourses deleteCourse={this.handleDeleteCourse} />
        </div>
      );
    }

    return <div>{this.content}</div>;
  }
}

export default App;
