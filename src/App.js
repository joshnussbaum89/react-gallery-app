import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';


// Import Components
import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Computers from './components/Computers';


// import SearchForm from './components/SearchForm';
// import Nav from './components/Nav';
// import PhotoContainer from './components/PhotoContainer';
// import NotFound from './components/NotFound';


// Flickr API
import apiKey from './config';
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
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ cats: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })

    // dogs
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ dogs: responseData.photos.photo });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })

    // computers
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
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
      <BrowserRouter>
        <div className='container'>
          <Route exact path='/' component={Home} />
          {/* use 'render' instead of 'component' if you want to pass props to component */}
          <Route path='/cats' render={() => <Cats title='Cats' />} />
          <Route path='/dogs' render={() => <Dogs title='Dogs' />} />
          <Route path='/computers' render={() => <Computers title='Computers' />} />
        </div>
      </BrowserRouter>
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