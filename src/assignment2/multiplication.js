import React, { Component } from 'react';

class Multiplication extends Component {
  constructor(props) {
    super();
    this.state = {
      number: 5,
    };
  }
  render() {
    return (
      <div>
        <h2>Multiplication of 5</h2>
        {Array.from({ length: 10 }, (v, i) => (
          <div className={'multiply'}>
            {this.state.number} X {i + 1} = {this.state.number * (i + 1)}
          </div>
        ))}
      </div>
    );
  }
}
export default Multiplication;
