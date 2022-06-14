import * as React from 'react'

export const BookListing = (props) => {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.title}</h5>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <a onClick={() => console.log(props.id)} className="btn btn-outline-dark mt-auto" href="#">Add To Cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}