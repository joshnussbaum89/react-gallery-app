import PhotoContainer from './PhotoContainer';

const SearchResults = ({ title, pics }) => {
    return (
        <>
            <PhotoContainer
                title={title}
                pics={pics}
            />
        </>
    )
}

export default SearchResults;