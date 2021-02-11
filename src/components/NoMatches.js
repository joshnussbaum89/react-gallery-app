// Error - If user search doesn't return anything 
const NoMatches = ({searchQuery}) => {
    return (
        <li className="not-found">
            <h3>{searchQuery} didn't yield any results 😢</h3>
            <h4>404</h4>
            <p>Please try again!</p>
        </li>
    )
}

export default NoMatches;
