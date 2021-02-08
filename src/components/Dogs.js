import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

const Dogs = ({ title, pics }) => {
    return (
        <>
            <SearchForm />
            <Nav />
            <PhotoContainer
                title={title}
                pics={pics}
            />
        </>
    )
}

export default Dogs;