import React, { Component } from "react";
import Form from "./components/Form";
import Navbar from "./navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container my-5">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
