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
    console.log("u got clicked!!");
    console.log(
      "new transaction to add",
      parseInt(this.state.currentTransaction)
    );

    var oldList = this.state.transactionList;
    var newList = oldList.concat(parseInt(this.state.currentTransaction));

    this.setState({
      transactionList: newList,
    });
  };

  render() {
    return (
      <>
        <input onChange={this.handleInputChange}></input>
        <button onClick={this.handleFormSubmit}>Save</button>
      </>
    );
  }
}

export default Form;
