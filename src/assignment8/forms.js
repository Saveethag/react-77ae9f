import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Physics: '',
      Chemistry: '',
      Biology: '',
      Mathematics: '',
    };
    this.handlePhysics = this.handlePhysics.bind(this);
    this.handleChemistry = this.handleChemistry.bind(this);
    this.handleBiology = this.handleBiology.bind(this);
    this.handleMathematics = this.handleMathematics.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form submitting logic, prevent default page refresh
  handleSubmit(event) {
    const { Physics, Chemistry, Biology, Mathematics } = this.state;
    const Average = (+Physics + +Chemistry + +Mathematics + +Biology) / 4;
    event.preventDefault();
    alert(`
      ____Your Marks Average____\n
      Physics : ${Physics}
      Chemistry : ${Chemistry}
      Biology : ${Biology}
      Mathematics : ${Mathematics}
      Average : ${Average}
    `);
  }

  handlePhysics(event) {
    this.setState({
      Physics: event.target.value,
    });
  }
  handleChemistry(event) {
    this.setState({
      Chemistry: event.target.value,
    });
  }
  handleBiology(event) {
    this.setState({
      Biology: event.target.value,
    });
  }
  handleMathematics(event) {
    this.setState({
      Mathematics: event.target.value,
    });
  }

  render() {
    return (
      <div>
      <h2> ASSIGNMENT 8 : </h2>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> Physics </label>
          <input
            name="physics"
            value={this.state.Physics}
            onChange={this.handlePhysics}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Chemistry</label>
          <input
            name="chemistry"
            value={this.state.Chemistry}
            onChange={this.handleChemistry}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Biology</label>
          <input
            name="biology"
            value={this.state.Biology}
            onChange={this.handleBiology}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Mathematics</label>
          <input
            name="mathematics"
            value={this.state.Mathematics}
            onChange={this.handleMathematics}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <button>Find Average</button>
        </div>
      </form>
      </div>
    );
  }
}

export default Form;
