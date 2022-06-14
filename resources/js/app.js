require('./bootstrap');

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import BookListingContainer from './components/booklisting/BookListingContainer'
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import ShoppingCart from './components/shoppingcart/ShoppingCart';

function App() {
    const [isShoppingCartShown, showShoppingCart] = useState(false)

    const toggleShop = (show) => {
        showShoppingCart(show)
    }

    return (
        <div>
            <Navbar toggleShop={toggleShop}></Navbar>
            <ShoppingCart toggleShop={toggleShop} isShown={isShoppingCartShown}></ShoppingCart>
            <Header></Header>
            <BookListingContainer></BookListingContainer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

