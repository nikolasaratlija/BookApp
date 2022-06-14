require('./bootstrap');

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import BookListingContainer from './components/booklisting/BookListingContainer'
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';
import ShoppingCart from './components/shoppingcart/ShoppingCart';

function App() {
    const [isShoppingCartShown, showShoppingCart] = useState(false)
    const [booksInCart, editBooksInCart] = useState([{ id: 1, title: 'test' }])

    const toggleShop = (show) => {
        showShoppingCart(show)
    }

    const editBookCart = (book) => {
        editBooksInCart(oldArray => [...oldArray, book])
    }

    return (
        <div>
            <Navbar toggleShop={toggleShop} />
            <ShoppingCart booksInCart={booksInCart} toggleShop={toggleShop} isShown={isShoppingCartShown} />
            <Header />
            <BookListingContainer editBookCart={editBookCart} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

