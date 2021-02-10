const NoMatches = ({searchQuery}) => {
    return (
        <li className="not-found">
            <h3>{searchQuery} didn't yield any results 😢</h3>
            <p>Please try again!</p>
        </li>
    )
}

export default NoMatches;
