import React from 'react';
import { Button } from 'react-bootstrap'

const CartListing = (props) => {
    return (
        <div className="row mt-2 pb-2 border-bottom">

            <div className="col-sm d-flex align-items-center">
                <span>{props.count}.</span>
            </div>

            <div className="col-sm d-flex align-items-center">
                <span><b>{props.title}</b></span>
            </div>

            <div className="col-auto">
                <Button variant="danger">Delete</Button>
            </div>

        </div>
    )
}

export default CartListing