import * as React from 'react'

export class BookListing extends React.Component {
    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Book Title</h5>
                        <p className="card-text">Lorem Ipsum</p>
                        <a href="#" className="btn btn-primary">Order</a>
                    </div>
                </div>
            </div>
        )
    }
}