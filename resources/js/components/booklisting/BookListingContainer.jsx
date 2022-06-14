import React, { useState, useEffect } from 'react';
import { BookListing } from './BookListing'


const BookListingContainer = () => {
    const [books, setBooks] = useState(null)

    useEffect(() => {
        fetch('/api/books')
            .then(res => res.json())
            .then(json => setBooks(json))
    }, [])

    return (
        <section className="py-5">
            <div className="container px-5 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    {!books ? 'Loading...' : books.map(book => <BookListing key={book.id} {...book}/>)}

                </div>
            </div>
        </section>
    )
}

export default BookListingContainer