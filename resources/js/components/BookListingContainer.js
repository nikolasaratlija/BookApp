import * as React from 'react'
import { BookListing } from './BookListing'


export class BookListingContainer extends React.Component{
    render() {
        return <div className="row gy-5">
            {[1,2,3,4,5].map(() => <BookListing></BookListing>)}
        </div>
    }
}