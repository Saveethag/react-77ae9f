import React, { Component } from 'react';
import Header from './header.js';
import Main from './main.js';
import './mains.css';

class Details extends Component {
  constructor(props) {
    super();
    this.state = {
      studentDetails: [
        { StudentId: '100', StudentName: 'Savee', Marks: '89' },
        { StudentId: '101', StudentName: 'Max', Marks: '92' },
        { StudentId: '102', StudentName: 'Bob', Marks: '93' },
        { StudentId: '103', StudentName: 'Leo', Marks: '95' },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2> ASSIGNMENT 3 : </h2>
        <Header />
        <table>
          <tbody>
            <tr>
              {Object.keys(this.state.studentDetails[0]).map((value) => {
                return <th key={value.toString()} className={'mainsth'}>{value}</th>;
              })}
            </tr>
            {this.state.studentDetails.map((val, index) => (
              <Main key={index.toString()} studentdetail={val} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Details;
