import React, { Component } from "react";
import Container from "./components/Container";
import Navbar from "./navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Container />
      </div>
    );
  }
}

export default App;
