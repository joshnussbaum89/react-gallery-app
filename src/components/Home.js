import Nav from './Nav';
import PhotoContainer from './PhotoContainer';

const Home = ({ pics }) => {
    return (
        <>
            <Nav />
            <PhotoContainer pics={pics} />
        </>
    )
}

export default Home;
