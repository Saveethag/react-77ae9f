import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Assignment1 from './assignment1/assignment1.js';
import Assignment2 from './assignment2/details.js';
import Assignment3 from './assignment3/details.js';
import Assignment4 from './assignment4/child.js';
import Assignment5 from './assignment5/childproptypes.js';
import Assignment6 from './assignment6/multiplicationtable.js';
import Assignment7 from './assignment7/componentlifecycle.js';
import Assignment8 from './assignment8/forms.js';
import Routing from './assignment9/routing.js';

class App extends React.Component {
  state = {
    CompanyName: '',
    CompanyLocation: '',
    Name: '',
    PreferredCity: '',
    Age: '',
  };

  handleCallback = (childData) => {
    if (childData[0] === '' && childData[1] === '') {
      this.setState({
        CompanyName: 'WIPRO',
        CompanyLocation: 'BANGLORE',
      });
    } else {
      this.setState({
        CompanyName: childData[0],
        CompanyLocation: childData[1],
      });
    }
  };

  handleProptypes = (childData) => {
    if (childData[0] === '' || childData[1] === '' || childData[2] === '') {
      this.setState({
        Name: 'Steve',
        PreferredCity: ['Bangalore', ' ', 'Chennai'],
        Age: '18',
      });
    } else {
      this.setState({
        Name: childData[0],
        PreferredCity: childData[1],
        Age: childData[2],
      });
    }
    console.log(childData);
  };

  render() {
    const { CompanyName, CompanyLocation, Name, PreferredCity, Age } =
      this.state;
    return (
      <div>
        <Assignment1 />
        <Assignment2 />
        <Assignment3 />

        <div>
          <Assignment4 parentCallback={this.handleCallback} />
          <div> Company Name: {CompanyName} </div>
          <div> Company Location: {CompanyLocation} </div>
        </div>

        <div>
          <Assignment5 callback={this.handleProptypes} />
          <div> Name: {Name} </div>
          <div> Preferred City: {PreferredCity} </div>
          <div> Age: {Age} </div>
        </div>

        <Assignment6 />
         <Assignment7 />
         <Assignment8 />
        <Routing />  
      </div>
    );
  }
}

App.propTypes = {
  Name: PropTypes.string.isRequired,
  PreferredCity: PropTypes.array.isRequired,
  Age: PropTypes.number.isRequired,
};

export default App;
