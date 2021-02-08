/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                {/* style NavLinks with .active class */}
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/cats'>Cats</NavLink></li>
                <li><NavLink to='/dogs'>Dogs</NavLink></li>
                <li><NavLink to='/computers'>Computers</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
