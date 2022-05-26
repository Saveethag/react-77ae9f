import React from 'react';
import './main.css';

function MovieCard(props) {
  return (
    <div className={'movies'}>
      <h3 className={'movies'}>Movie Name: {props.moviedetails.MovieName}</h3>
      <div>Movie ID: {props.moviedetails.MovieId}</div>
      <div>Lead Actor: {props.moviedetails.LeadActor}</div>
      <div>Lead Actress: {props.moviedetails.LeadActress}</div>
      <div>Year of Release: {props.moviedetails.YearofRelease}</div>
      <div>Language: {props.moviedetails.Language}</div>
      <div>Collections: {props.moviedetails.Collections}</div>
    </div>
  );
}

export default MovieCard;
