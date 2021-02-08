import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

const Cats = ({ title, pics }) => {
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

export default Cats;
