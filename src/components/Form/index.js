import React, { Component } from "react";
import Input from "../Input"
import List from "../List"
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    transactionList: [],
    currentTransaction: 0,
    transactionDescription: [],
    descriptionlist: []
  };

  handleInputDes = (event) => {
    // Getting the value and name of the input which triggered the change
    this.setState({
      transactionDescription: event.target.value,
    });
  };

  handleInputAmt = (event) => {
    // Getting the value and name of the input which triggered the change
    this.setState({
      currentTransaction: event.target.value,
    });

  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // console.log("u got clicked!!");
    // console.log(
    //   "new transaction to add",
    //   parseInt(this.state.currentTransaction)
    // );

    let oldList = this.state.transactionList;
    let newList = oldList.concat(parseInt(this.state.currentTransaction));
    let descriptionInput = this.state.transactionDescription


    this.setState({
      transactionList: newList,
      descriptionlist: descriptionInput
    });
  };

  render() {

    var total = 0;
    for (var i = 0; i < this.state.transactionList.length; i++) {
      total += this.state.transactionList[i];
    }

    return (
      <>
        <div>
          <form className="form">
            <Input
              handleInputDes={this.handleInputDes}
              handleInputAmt={this.handleInputAmt}
              handleFormSubmit={this.handleFormSubmit} />
            <List
              transactionList={this.state.transactionList}
              // descriptionlist={this.state.descriptionlist}
              total={total} />
          </form>
        </div>
      </>
    );
  }
}

export default Form;
