import SearchForm from './SearchForm';
import Nav from './Nav';
import PhotoContainer from './PhotoContainer';
import NotFound from './NotFound';

const Home = () => {
    return (
        <>
            <SearchForm />
            <Nav />
            <PhotoContainer />
            <NotFound />
        </>
    )
}

export default Home;
