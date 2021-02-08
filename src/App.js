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
      computers: [],
      loading: true
    }
  }

  componentDidMount() {
    // cats
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          cats: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })

    // dogs
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          dogs: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })

    // computers
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          computers: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }

  render() {
    return (
      <BrowserRouter>
        {
          this.state.loading
            ? <h1>Loading...</h1>
            :
            <div className='container'>
              <Route exact path='/' render={() =>
                <Home pics={this.state.cats} />
              } />
              <Route path='/cats' render={() =>
                <Cats title='Cats' pics={this.state.cats} />
              } />
              <Route path='/dogs' render={() =>
                <Dogs title='Dogs' pics={this.state.dogs} />
              } />
              <Route path='/computers' render={() =>
                <Computers title='Computers' pics={this.state.computers} />
              } />
            </div>
        }
      </BrowserRouter>
    );
  }
}

export default App;



/* NOTES */

// https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg

// let serverId = this.state.pics.server; 65535
// let id = this.state.pics.id; 50922672946
// let secret = this.state.cats.secret; ef4512a18d
