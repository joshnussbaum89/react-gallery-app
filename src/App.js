import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// Import Components
import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav'
import Computers from './components/Computers';

// Flickr API
import apiKey from './config';


class App extends Component {

  constructor() {
    super();
    this.state = {
      searchResults: [],
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

  /*
    This works, but now you need to create a SearchResults route + Component.
    This includes React Router and building a new component called <SearchResults />
  */
  searchFlickr = (query) => {
    // get tags
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          searchResults: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }

  render() {
    console.log(this.state.cats)
    return (
      <BrowserRouter>
        {
          this.state.loading
            ? <h1>Loading...</h1>
            :
            <div className='container'>
              <Route exact path='/' render={() =>
                <>
                  <SearchForm onSearch={this.searchFlickr} />
                  <Home pics={this.state.cats} />
                </>
              } />
              <Route path='/cats' render={() =>
                <>
                  <SearchForm onSearch={this.searchFlickr} />
                  <Nav />
                  <Cats title='Cats' pics={this.state.cats} />
                </>
              } />
              <Route path='/dogs' render={() =>
                <>
                  <SearchForm onSearch={this.searchFlickr} />
                  <Nav />
                  <Dogs title='Dogs' pics={this.state.dogs} />
                </>
              } />
              <Route path='/computers' render={() =>
                <>
                  <SearchForm onSearch={this.searchFlickr} />
                  <Nav />
                  <Computers title='Computers' pics={this.state.computers} />
                </>
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
