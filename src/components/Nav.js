import { NavLink } from 'react-router-dom';

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
