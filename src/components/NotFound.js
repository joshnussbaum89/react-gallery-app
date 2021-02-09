import SearchForm from './SearchForm';
import Nav from './Nav';

const NotFound = ({ onSearch }) => {
    return (
        <>
            <SearchForm onSearch={onSearch} />
            <Nav />
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
        </>
    )
}

export default NotFound
