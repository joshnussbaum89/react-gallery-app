import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Import Components
import Clock from './components/Clock';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav'
import PhotoContainer from './components/PhotoContainer';

// Flickr API
import apiKey from './config';
import NotFound from './components/NotFound';


class App extends Component {

  state = {
    searchResults: [],
    music: [],
    art: [],
    science: [],
    isLoading: true
  }

  // Fetch Data and setState function
  fetchData = (string, topic) => {
    fetch(string)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          [topic]: responseData.photos.photo,
          isLoading: false
        });
      })
      .then(
        this.setState({
          isLoading: true
        })
      )
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      })
  }

  componentDidMount() {
    // music
    this.fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=music&per_page=24&safe_search=3&format=json&nojsoncallback=1`, 'music')

    // art
    this.fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=art&per_page=24&safe_search=3&format=json&nojsoncallback=1`, 'art')

    // science
    this.fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=science&per_page=24&safe_search=3&format=json&nojsoncallback=1`, 'science')
  }

  // Search Function
  searchFlickr = (query) => {
    this.fetchData(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&safe_search=3&format=json&nojsoncallback=1`, 'searchResults');
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Clock />
          <SearchForm onSearch={this.searchFlickr} />
          <Nav />
          {
            (this.state.isLoading)
              ? <h1>Loading...</h1>
              :
              <Switch>
                <Route exact path='/' >
                  <Redirect to='/music' />
                </Route>
                <Route path='/music/' render={() =>
                  <PhotoContainer
                    pageTitle='Music'
                    pics={this.state.music}
                    isLoading={this.state.isLoading}
                  />}
                />
                <Route path='/art/' render={() =>
                  <PhotoContainer
                    pageTitle='art'
                    pics={this.state.art}
                    isLoading={this.state.isLoading}
                  />}
                />
                <Route path='/science/' render={() =>
                  <PhotoContainer
                    pageTitle='science'
                    pics={this.state.science}
                    isLoading={this.state.isLoading}
                  />}
                />
                <Route path='/searchresults/:query' render={() =>
                  <PhotoContainer
                    pics={this.state.searchResults}
                    onSearch={this.searchFlickr}
                    isLoading={this.state.isLoading}
                  />}
                />
                <Route component={NotFound} />
              </Switch>
          }
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
