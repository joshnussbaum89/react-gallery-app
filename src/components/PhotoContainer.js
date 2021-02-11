import React, { Component } from 'react';
import Photo from './Photo';
import NoMatches from './NoMatches';
import { withRouter } from 'react-router';

// Container to hold photo rendering logic 
class PhotoContainer extends Component {

    // Track user navigation via < and > browser arrows 
    componentDidUpdate(prevProps) {
        const locationIsASearch = this.props.location.pathname.includes('searchresults');
        if (locationIsASearch) {
            const prevQuery = prevProps.match.params.query;
            const query = this.props.match.params.query;
            if (prevQuery !== query) this.props.onSearch(query);
        }
    }

    render() {
        const searchQuery = this.props.match.params.query;
        // Test if there are photos to return
        let photoContainerDisplay = (this.props.pics.length > 0);
        // Loop through to display photos
        let pictures = this.props.pics.map((pic, i) =>
            <Photo key={i} server={pic.server} id={pic.id} secret={pic.secret} />)
        // If search returns results, print to page. Otherwise, display NotFound page
        if (photoContainerDisplay) {
            return (
                <div className='photo-container'>
                    <h2>{searchQuery ? searchQuery : this.props.pageTitle}</h2>
                    <ul>
                        {pictures}
                    </ul>
                </div>
            )
        } else {
            return <NoMatches searchQuery={searchQuery} />
        }
    }
}

export default withRouter(PhotoContainer);
