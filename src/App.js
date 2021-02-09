import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

// Import Components
import Home from './components/Home';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav'
import Computers from './components/Computers';
import SearchResults from './components/SearchResults';
import NotFound from './components/NotFound';

// Flickr API
import apiKey from './config';


class App extends Component {

  constructor() {
    super();
    this.state = {
      searchResults: [],
      home: [],
      cats: [],
      dogs: [],
      computers: [],
      loading: true,
      pathname: ''
    }
  }

  // Fetch Data and setState function
  fetchData = (string, topic) => {
    fetch(string)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          [topic]: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }

  componentDidMount() {
    // home
    this.fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=nature&per_page=24&format=json&nojsoncallback=1`, 'home');

    // cats
    this.fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`, 'cats')

    // dogs
    this.fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`, 'dogs')

    // computers
    this.fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`, 'computers')
  }

  // Search Function
  searchFlickr = (query) => {
    this.fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`, 'searchResults');
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.loading
          ? <h1>Loading...</h1>
          :
          <div className='container'>
            <Switch>
              <Route exact path='/' render={() =>
                <>
                  <SearchForm onSearch={this.searchFlickr} />
                  <Home pics={this.state.home} />
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
              <Route path='/searchresults' render={() =>
                <>
                  <SearchForm onSearch={this.searchFlickr} />
                  <Nav />
                  <SearchResults title='Search Results' pics={this.state.searchResults} />
                </>
              } />
              <Route render={() => <NotFound onSearch={this.searchFlickr} />} />
            </Switch>

          </div>}
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
