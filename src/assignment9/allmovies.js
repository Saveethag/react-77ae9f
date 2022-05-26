import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './moviedetails.js';
import MovieDetail from './moviedetail.js';
import Addmovie from './addmovie.js';
import { withRouter } from './hoc.js';
import './main.css';

class Allmovies extends Component {
  state = {
    movieDetails: [
      {
        MovieId: '100',
        MovieName: 'Friends',
        LeadActor: 'Joey',
        LeadActress: 'Pheobe',
        YearofRelease: '2000',
        Language: 'English',
        Collections: '10M',
      },
      {
        MovieId: '101',
        MovieName: 'Breaking Bad',
        LeadActor: 'Ajay',
        LeadActress: 'Leo',
        YearofRelease: '2010',
        Language: 'German',
        Collections: '20M',
      },
      {
        MovieId: '102',
        MovieName: 'Wreck',
        LeadActor: 'Bob',
        LeadActress: 'Jil',
        YearofRelease: '2020',
        Language: 'Spanish',
        Collections: '50M',
      },
      {
        MovieId: '103',
        MovieName: 'Hello',
        LeadActor: 'Kim',
        LeadActress: 'Kris',
        YearofRelease: '2005',
        Language: 'Hindi',
        Collections: '2M',
      },
    ],
  };

  removeMovie(movie) {
    const MovieList = this.state.movieDetails.filter(
      (movies) => movies.MovieId !== movie
    );
    this.setState({
      movieDetails: MovieList,
    });
  }

  detailsPageHandler(id) {
    const MovieList = this.state.movieDetails.filter(
      (movies) => movies.MovieId === id
    );
    // console.log(this.props);
    this.props.navigate(`${id}`, { state: MovieList });
    //console.log([MovieList]);
  }

  handleCallback = (childData) => {
    const MovieList = this.state.movieDetails;
    const AddedMovie = MovieList.concat(childData);
    console.log(AddedMovie);
    this.setState({
      movieDetails: AddedMovie,
    });
  };

  render() {
    return (
      <div>
        <h3> Movie Details Management </h3>

        <div>
          {this.state.movieDetails.map((val, index) => (
            <MovieDetails
              moviedetails={val}
              key={index.toString()}
              clicked={() => this.removeMovie(val.MovieId)}
              details={() => this.detailsPageHandler(val.MovieId)}
            />
          ))}
        </div>

        <div className={'movies'}>
          <Addmovie parentCallback={this.handleCallback} />
        </div>
      </div>
    );
  }
}

export default withRouter(Allmovies);
