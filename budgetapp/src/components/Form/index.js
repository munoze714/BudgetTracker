import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    transactionList: [],
    currentTransaction: 0,
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    this.setState({
      currentTransaction: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
  };

  render() {
    return <input onChange={this.handleTying}></input>;
  }
}

export default Form;
