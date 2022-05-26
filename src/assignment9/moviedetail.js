import React from 'react';
import MovieCard from './moviecard.js';
import { withRouter } from './hoc.js';

// A simple component that shows the pathname of the current location
class MovieDetail extends React.Component {
  render() {
    const { state } = this.props.location;
    console.log(state);

    return (
      <div>
        {state.map((val, index) => (
          <MovieCard moviedetails={val} key={index.toString()} />
        ))}
      </div>
    );
  }
}

export default withRouter(MovieDetail);
