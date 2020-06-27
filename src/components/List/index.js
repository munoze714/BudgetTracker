import React from "react";

function List(props) {
    return (
        <>
            <div>

                <div className="col-4">
                    <h3>Amount</h3>
                    {props.transactionList.map((singleTrans, i) => {
                        return <ul className="list-group list-group-flush"
                            key={i}>
                            <li className="list-group-item"
                                key={i}>$ {singleTrans}</li>
                        </ul>;
                    })}
                </div>
                {/* <div className="col-4">
                <h3>Description</h3>
                    {props.descriptionlist.map((singleTrans, i) => {
                        return <ul className="list-group list-group-flush"
                            key={i}>
                            <li className="list-group-item"
                                key={i}>$ {singleTrans}</li>
                        </ul>;
                    })}
                </div> */}
            </div>
            <h3>Balance: {props.total} </h3>
        </>
    )
};

export default List;