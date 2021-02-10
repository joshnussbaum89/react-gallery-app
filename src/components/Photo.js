import React from 'react';

const Photo = ({ server, id, secret }) => {
    return (
        <li>
            {/* https://live.staticflickr.com/{server}/{id}_{secret}_{size - suffix}.jpg */}
            <img src={`https://farm5.staticflickr.com/${server}/${id}_${secret}.jpg`}
                alt='' />
        </li>
    )
}

export default Photo
