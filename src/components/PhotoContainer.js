import React, { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {
    render() {
        return (
            <div className='photo-container'>
                <h2>{this.props.title}</h2>
                <ul>
                    {/* loop through to display photos */}
                    <Photo />
                </ul>
            </div>
        )
    }
}

export default PhotoContainer;
