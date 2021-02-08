import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

const Home = ({ pics }) => {
    return (
        <>
            <SearchForm />
            <Nav />
            <PhotoContainer pics={pics} />
        </>
    )
}

export default Home;
