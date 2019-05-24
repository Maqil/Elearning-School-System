import React, { Component } from "react";

class ManageCourses extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchBox: ""
    };
  }
  /*Function initialize a DOM of React*/
  componentDidMount = () => {
    fetch("http://localhost:8000/showCourses")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  };

  render() {
    let stl = { float: "right" };
    let styles = { width: "18rem" };
    return (
      // <div className="userType">
      //   <div className="cards">
      //     {this.state.data.map(member => {
      //       let card = (
      //         <div
      //           className="card"
      //           align="center"
      //           style={styles}
      //           key={member._id}
      //         >
      //           <div className="card-body">
      //             <h5 className="card-text">name : {member.nomeCours}</h5>
      //             <p className="card-text">email : {member.Module}</p>
      //             <p className="card-text">language : {member.Type}</p>
      //             <label
      //               className="btn btn-primary"
      //               onClick={() => this.props.DeleteUser(member._id)}
      //             >
      //               Delete{" "}
      //             </label>
      //           </div>
      //         </div>
      //       );
      //       if (this.state.searchBox === "") {
      //         return card;
      //       }
      //       if (
      //         member.email
      //           .toLocaleLowerCase()
      //           .indexOf(this.state.searchBox.toLocaleLowerCase()) >= 0
      //       ) {
      //         return card;
      //       }
      //     })}
      //   </div>
      // </div>
      <div className="box">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center" />

              {this.state.data.map(member => {
                let card = (
                  <div
                    className="card"
                    align="center"
                    style={styles}
                    key={member._id}
                  >
                    <div className="card-body ">
                      <h5 className="card-text">Cours : {member.nameCours}</h5>
                      <p className="card-text">Module : {member.Module}</p>
                      <p className="card-text">Type : {member.Type}</p>
                      <label
                        className="btn btn-primary"
                        onClick={() => this.props.deleteCourse(member._id)}
                      >
                        Delete{" "}
                      </label>
                    </div>
                  </div>
                );
                if (this.state.searchBox === "") {
                  return card;
                }
                if (
                  member.email
                    .toLocaleLowerCase()
                    .indexOf(this.state.searchBox.toLocaleLowerCase()) >= 0
                ) {
                  return card;
                }
              })}
            </div>

            {/* <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fa fa-twitter fa-3x" aria-hidden="true" />

                <div className="title">
                  <h4>Twitter</h4>
                </div>

                <div className="text">
                  <span>Lorem</span>
                </div>

                <a href="#">Learn More</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fa fa-facebook fa-3x" aria-hidden="true" />

                <div className="title">
                  <h4>Facebook</h4>
                </div>

                <div className="text">
                  <span>Lorem</span>
                </div>

                <a href="#">Learn More</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ManageCourses;
