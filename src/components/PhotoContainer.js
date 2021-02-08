import Photo from './Photo';

const PhotoContainer = ({ title, pics }) => {
    // loop through to display photos
    let pictures = pics.map((pic, i) =>
        <Photo
            key={i}
            server={pic.server}
            id={pic.id}
            secret={pic.secret}
        />
    )

    return (
        <div className='photo-container'>
            <h2>{title ? title : 'Results'}</h2>
            <ul>
                {pictures}
            </ul>
        </div>
    )
}

export default PhotoContainer;
