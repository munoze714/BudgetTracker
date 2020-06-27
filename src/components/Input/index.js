import React from "react";

function Input(props) {
    return (
        <>
            <input
                name="transactionDescription"
                onChange={props.handleInputDes}
                type="text"
                placeholder="Description"
            />
            <input
                name="currentTransaction"
                onChange={props.handleInputAmt}
                type="text"
                placeholder="$0.00"
            />
            <button onClick={props.handleFormSubmit} className="btn btn-success">
                Save
            </button>
        </>
    )
}
export default Input