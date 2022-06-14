import * as React from 'react'
import { BookListing } from './BookListing'


export const BookListingContainer = () => {
    return (
        <div className="row gy-5">
            {[1, 2, 3, 4, 5].forEach(() => <BookListing></BookListing>)}
        </div>
    )
}