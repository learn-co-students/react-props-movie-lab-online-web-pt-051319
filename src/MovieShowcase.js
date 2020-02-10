import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(datum => (<MovieCard key={datum.title} title={datum.title} poster={datum.poster} IMDBRating={datum.IMDBRating} genres={datum.genres} />))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}