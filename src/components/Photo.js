const Photo = ({ server, id, secret }) => {
    return (
        <li>
            <img src={`https://farm5.staticflickr.com/${server}/${id}_${secret}.jpg`}
                alt='' />
        </li>
    )
}

export default Photo
