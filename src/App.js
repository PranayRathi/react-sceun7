import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }
  update() {
    this.setState({
      time: new Date()
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.update(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">
          {this.state.time.getHours().toString() +
            ":" +
            this.state.time.getMinutes().toString() +
            ":" +
            this.state.time.getSeconds().toString() +
            " " +
            (this.state.time.getHours() > 11 ? "PM" : "AM")}
        </h3>
      </div>
    );
  }
}

export default App;
