import React, { Component } from "react";
import "./ShowUsers.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      dataP: [],
      dataE: [],
      searchBox: ""
    };
  }

  /*Function initialize a DOM of React*/
  componentDidMount = () => {
    fetch("http://localhost:8000/showProf")
      .then(res => res.json())
      .then(resultP => this.setState({ dataP: resultP }));
    fetch("http://localhost:8000/showEtd")
      .then(res => res.json())
      .then(resultE => this.setState({ dataE: resultE }));
  };

  render() {
    let stl = { float: "right" };
    let styles = { width: "18rem" };
    return (
      <div>
        <div className="userType">
          <h3 align="center">Professors list</h3>
          <div className="cards">
            {this.state.dataP.map(member => {
              let card = (
                <div
                  className="card"
                  align="center"
                  style={styles}
                  key={member._id}
                >
                  <div className="card-body">
                    <h5 className="card-text">name : {member.nom}</h5>
                    <p className="card-text">email : {member.email}</p>
                    <p className="card-text">language : {member.language}</p>
                    <label
                      className="btn btn-primary"
                      onClick={() => this.props.DeleteProf(member._id)}
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
        </div>
        <div className="userType">
          <h3 align="center">Students list</h3>
          <div className="cards">
            {this.state.dataE.map(member => {
              let card = (
                <div
                  className="card"
                  align="center"
                  style={styles}
                  key={member._id}
                >
                  <div className="card-body">
                    <h5 className="card-text">name : {member.nom}</h5>
                    <p className="card-text">email : {member.email}</p>
                    <p className="card-text">language : {member.language}</p>
                    <label
                      className="btn btn-primary"
                      onClick={() => this.props.DeleteEtd(member._id)}
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
        </div>
      </div>
    );
  }
}

export default Home;
