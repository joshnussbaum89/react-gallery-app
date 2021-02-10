import React from 'react';

const NotFound = ({ searchQuery }) => {
    console.log(searchQuery)
    return (
        <>
            <li className="not-found">
                <h3>{searchQuery ? searchQuery : 'Your search'} didn't yield any results</h3>
                <p>Please try again.</p>
            </li>
        </>
    )
}

export default NotFound
