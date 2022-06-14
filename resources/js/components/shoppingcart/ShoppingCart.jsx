import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ShoppingCart = (props) => {
    return (
        <>
            <Modal show={props.isShown} onHide={() => props.toggleShop(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
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