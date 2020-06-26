import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    transactionList: [],
    transactionDescription: "",
    currentTransaction: 0,
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    this.setState({
      transactionDescription: event.target.value,
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
              name="transactionDescription"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Description"
            />
            <input
              // value={this.state.currentTransaction}
              name="currentTransaction"
              onChange={this.handleInputChange}
              type="text"
              placeholder="$0.00"
            />
            <button onClick={this.handleFormSubmit} className="btn btn-success">
              Save
            </button>
            <listdata>
              <h4>History</h4>
              {this.state.transactionList.map((singleTrans) => {
                return <p>$ {singleTrans}</p>;
              })}
            </listdata>

            <span>Total: {total} </span>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
