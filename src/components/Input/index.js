import React from "react";

function Input(props) {
    return (
        <>
            <input
                name="transactionDescription"
                onChange={props.handleInputDes}
                type="text"
                value={props.transactionDescription}
                placeholder="Description"
            />
            <input
                name="currentTransaction"
                onChange={props.handleInputAmt}
                type="text"
                value={props.currentTransaction}
                placeholder="$0.00"
            />
            <button onClick={props.handleFormSubmit} className="btn btn-success">
                Save
            </button>
            <button onClick={props.handleErase} className="btn btn-danger">
                Clear
            </button>
        </>
    )
}
export default Input