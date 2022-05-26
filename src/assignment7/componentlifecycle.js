import React, { Component } from 'react';

class Componentlifecycle extends Component {
  constructor(props) {
    super();
    this.state = {
      thought: '',
      explanation: '',
    };
    this.unmountHandler = this.unmountHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      thought: 'THOUGHT OF THE DAY',
      explanation: 'One small positive thought can change your whole day.',
    });
  }

  unmountHandler() {
    console.log('clicked');
    this.setState({
      thought: '',
      explanation: '',
    });
  }

  render() {
    return (
      <div>
        <h2> ASSIGNMENT 7 : </h2>
        <div onClick={this.unmountHandler}>
          <div> {this.state.thought} </div>
          <p> {this.state.explanation} </p>
        </div>
      </div>
    );
  }
}
export default Componentlifecycle;
