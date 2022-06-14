import * as React from 'react'
import { BookListing } from './BookListing'


const BookListingContainer = () => {
    return (
        <section className="py-5">
            <div className="container px-5 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    {[...Array(10).keys()].map(number => <BookListing key={number} title={"Book " + number}/>)}

                </div>
            </div>
        </section>
    )
}

export default BookListingContainer