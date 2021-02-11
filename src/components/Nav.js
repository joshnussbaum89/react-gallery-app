import { NavLink } from 'react-router-dom';

// Navigation with <NavLink> to track browser history
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/music'>Music</NavLink></li>
                <li><NavLink to='/art'>Art</NavLink></li>
                <li><NavLink to='/science'>Science</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav
