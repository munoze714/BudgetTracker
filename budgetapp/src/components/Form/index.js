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
    console.log("this is our state", this.state);
    var total = 0;
    for (var i = 0; i < this.state.transactionList.length; i++) {
      total += this.state.transactionList[i];
    }

    return (
      <>
        <div>
          <form className="form">
            <input
              value={this.state.currentTransaction}
              name="currentTransaction"
              onChange={this.handleInputChange}
              type="text"
              placeholder="New Transaction"
            />
            <button onClick={this.handleFormSubmit} className="btn btn-success">
              Save
            </button>
            {this.state.transactionList.map((singleTrans) => {
              return <p>{singleTrans}</p>;
            })}

            <span>Total: {total} </span>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
