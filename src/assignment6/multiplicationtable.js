import React, { Component } from 'react';

class Multiplicationtable extends Component {
  constructor(props) {
    super();
    this.state = {
      number: 5,
      multiplier: 1,
      output: [],
    };
  }

  sayHello = () => {
    const number = this.state.number;
    const multiplier = this.state.multiplier;
    const result = this.state.output;
    var answer = '';
    var table = [];
    answer += number + '*' + multiplier + '=' + number * multiplier;
    table = result.concat(answer);
    this.setState({
      output: table,
      multiplier: multiplier + 1,
    });
  };

  render() {
    return (
      <div>
        <h2> ASSIGNMENT 6 : </h2>
        <button onClick={this.sayHello}>
          Click to generate a Multiplication tables of 5
        </button>
        {this.state.output.map((val, index) => (
          <div key={index.toString()}>{val}</div>
        ))}
      </div>
    );
  }
}
export default Multiplicationtable;
