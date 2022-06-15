require('./bootstrap');

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import BookListingContainer from './components/booklisting/BookListingContainer'
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import ShoppingCart from './components/shoppingcart/ShoppingCart';

function App() {
    const [isShoppingCartShown, showShoppingCart] = useState(false)
    const [booksInCart, editBooksInCart] = useState([])

    const toggleShop = (show) => {
        showShoppingCart(show)
    }

    const editBookCart = (book) => {
        editBooksInCart(oldArray => [...oldArray, { count: booksInCart.length + 1, ...book }])
    }

    return (
        <div>
            <Navbar toggleShop={toggleShop} booksInCart={booksInCart.length} />
            <ShoppingCart booksInCart={booksInCart} toggleShop={toggleShop} isShown={isShoppingCartShown} />
            <Header />
            <BookListingContainer editBookCart={editBookCart} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

