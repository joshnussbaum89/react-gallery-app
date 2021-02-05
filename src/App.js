import React, { Component } from 'react';

// Import Components
// import PhotoGallery from './components/PhotoGallery';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


// Flickr API
import apiKey from './config';
const flickrApiKey = apiKey;
// 8ceb864b741e17a22cd6f8b8292b1a00

class App extends Component {

  constructor() {
    super();
    this.state = {
      cats: [],
      dogs: [],
      computers: []
    }
  }

  componentDidMount() {
    // cats
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ cats: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })

    // dogs
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ dogs: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })

    // computers
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ computers: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }


  render() {
    return (
      <div className='container'>
        <SearchForm />
        <Nav />
        <PhotoContainer />
        <NotFound />
      </div>
    );
  }
}

export default App;



/* NOTES */

// https://live.staticflickr.com/{server - id}/{id}_{secret}_{size - suffix}.jpg
// https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg

// let serverId = this.state.pics.server;
// let id = this.state.pics.id;
// let secret = this.state.pics.secret;