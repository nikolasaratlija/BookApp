import * as React from 'react'
import Button from 'react-bootstrap/Button';


const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container d-flex px-4 px-lg-5">

                <a className="navbar-brand" href="#!">Cool Library App</a>

                <Button onClick={() => props.toggleShop(true)} variant="outline-dark" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    Your Cart
                    <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </Button>

            </div>
        </nav>
    )
}

export default Navbar