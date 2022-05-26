import React, { Suspense } from 'react';
import { Route, Link, Route, Routes } from 'react-router-dom';
import Allmovies from './allmovies.js';
import MovieDetail from './moviedetail';
import Addmovie from './addmovie.js';
import { withRouter } from './hoc.js';

const Routing = () => (
  <div>
    <h2> ASSIGNMENT 9 : </h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/addMovie">Add Movies</Link>
      </li>
    </ul>
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" exact element={<Allmovies />} />
        <Route path="/:id" exact element={<MovieDetail />} />
        <Route path="/addMovie" exact element={<Addmovie />} />
      </Routes>
    </Suspense>
  </div>
);

export default withRouter(Routing);
