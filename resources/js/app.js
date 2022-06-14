require('./bootstrap');

import * as React from 'react';
import ReactDOM from 'react-dom';

import BookListingContainer from './components/booklisting/BookListingContainer'
import Header from './components/header/Header';
import Navbar from './components/nav/Navbar';

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <BookListingContainer></BookListingContainer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

