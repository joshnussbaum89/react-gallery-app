/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                {/* add router links */}
                <li><a href='#'>Cats</a></li>
                <li><a href='#'>Dogs</a></li>
                <li><a href='#'>Computers</a></li>
            </ul>
        </nav>
    )
}

export default Nav
