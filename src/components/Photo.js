// Photo with dynamically inputed data to display search results
const Photo = ({ server, id, secret }) => {
    return (
        <li>
            <img src={`https://farm5.staticflickr.com/${server}/${id}_${secret}.jpg`}
                alt='' />
        </li>
    )
}

export default Photo
