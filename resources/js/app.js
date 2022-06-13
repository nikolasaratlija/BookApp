require('./bootstrap');

import * as React from 'react';
import ReactDOM from 'react-dom';

import { Component } from './components/Component'

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <h1>Hello World!</h1>
                        <Component></Component>
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

