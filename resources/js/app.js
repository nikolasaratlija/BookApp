require('./bootstrap');

import * as React from 'react';
import ReactDOM from 'react-dom';

import { BookListingContainer } from './components/BookListingContainer'

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <h1>Hello World!</h1>
                <BookListingContainer></BookListingContainer>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

