import React, { Component } from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
import { withRouter } from 'react-router';

// ({ pageTitle, pics, match, query, onSearch, location })

class PhotoContainer extends Component {
    // loop through to display photos

    // Change state dynamically to rener photos from history
    // state = {
    //     results: [],
    //     pics: []
    // }
    
    render() {
        // let locationUrl = this.props.location.pathname;
        const searchQuery = this.props.match.params.query;
        let pictures;
        
        (this.props.pics.length > 0)
            ? pictures = this.props.pics.map((pic, i) =>
                <Photo key={i} server={pic.server} id={pic.id} secret={pic.secret} />)
            : pictures = <NotFound searchQuery={searchQuery}/>

        return (
            <div className='photo-container'>
                <h2>{searchQuery ? searchQuery : this.props.pageTitle}</h2>
                <ul>
                    {pictures}
                </ul>
            </div>
        )
    }

}

export default withRouter(PhotoContainer);
