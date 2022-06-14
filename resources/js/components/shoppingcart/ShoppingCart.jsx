import React, { useState, useEffect } from 'react';
import CartListing from './CartListing';
import { Modal, Button } from 'react-bootstrap';

const ShoppingCart = (props) => {
    return (
        <>
            <Modal show={props.isShown} onHide={() => props.toggleShop(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="container">
                        {props.booksInCart.map(book => <CartListing key={book.id} title={book.title}/>)}
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.toggleShop(false)}>
                        Keep Shopping
                    </Button>
                    <Button variant="primary">
                        Order Now
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ShoppingCart