import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContentPage from './pages/ContentPage';
import FavouritesPage from './pages/FavouritesPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/:request?" component={ContentPage} />   
          <Route exact path="/saved/favourites" component={FavouritesPage} />      
        </Switch>
      </BrowserRouter>
    );
  }
}