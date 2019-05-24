import React, { Component } from "react";
import "./AddCourseForm.css";
class AddCourseForm extends Component {
  constructor(props) {
    super(props);

    this.state = { type: "", label: "" };

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div className="main">
        <section className="sign-in">
          <div className="container">
            <div className="signin-content">
              <div className="">
                <img
                  src={require("../../images/weebly-publish.jpg")}
                  alt="sing up image"
                  className="publish-image"
                />
              </div>

              <div className="signin-form">
                <h4 className="form-title">Add a new course</h4>
                <form className="register-form">
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-account zmdi-text-format" />
                    </label>
                    <input
                      type="text"
                      name="cours"
                      onChange={this.props.setCours}
                      placeholder="Course name"
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-file" />
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      onChange={this.props.setModule}
                      placeholder="Module"
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-attachment-alt" />
                    </label>
                    <input
                      type="file"
                      name="file"
                      required
                      onChange={this.props.setFile}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-chevron-down" />
                    </label>
                    <select
                      value={"ItemType"}
                      onChange={this.props.setType}
                      value={this.state.value}
                      required
                      id="selectType"
                    >
                      <option disabled>Select post type</option>
                      <option value="course">Course</option>
                      <option value="exercice">Exercice</option>
                      <option value="tptd">TP / TD</option>
                      <option value="exam">Exam</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>
                      <i class="zmdi zmdi-plus" />
                    </label>
                    <a
                      onClick={this.props.SubmitPublication}
                      className="btn btn-light buttonForm offset-1"
                    >
                      Add
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AddCourseForm;
