import React, { Component } from "react";
import Input from "../Input"
import List from "../List"
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    transactionList: [],
    currentTransaction: "",
    transactionDescription: "",
  };

  handleInputDes = (event) => {
    // Getting the value of the input which triggered the change
    this.setState({
      transactionDescription: event.target.value,
    });
  };

  handleInputAmt = (event) => {
    // Getting the value of the input which triggered the change
    this.setState({
      currentTransaction: event.target.value,
    });

  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (this.state.currentTransaction) {
      var newTransaction = {
        amount: parseFloat(this.state.currentTransaction),
        description: this.state.transactionDescription,
        id: this.state.transactionList.length + 1
      }
      let oldList = this.state.transactionList;
      let newList = oldList.concat(newTransaction);

      this.setState({
        transactionList: newList,
      }, function () {
        this.setState({
          transactionDescription: "",
          currentTransaction: ""
        });
      });
    }
  };

  handleErase = (event) => {
    event.preventDefault()
    this.setState({
      transactionDescription: "",
      currentTransaction: ""
    });
  }

  handleIdDelete = (id, event) => {
    event.preventDefault()
    var newTransactions = this.state.transactionList.filter((singleTrans) => {
      if (singleTrans.id != id) {
        return singleTrans
      }
    })
    this.setState({
      transactionList: newTransactions,
    });
  }

  render() {
    var total = 0;
    for (var i = 0; i < this.state.transactionList.length; i++) {
      total += this.state.transactionList[i].amount;
    }

    return (
      <>
        <div>
          <form className="form">
            <Input
              handleInputDes={this.handleInputDes}
              handleInputAmt={this.handleInputAmt}
              handleFormSubmit={this.handleFormSubmit}
              handleErase={this.handleErase}

              transactionDescription={this.state.transactionDescription}
              currentTransaction={this.state.currentTransaction}
            />
            <List
              handleIdDelete={this.handleIdDelete}
              transactionList={this.state.transactionList}
              total={total} />
          </form>
        </div>
      </>
    );
  }
}

export default Form;
