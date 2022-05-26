import React, { Component } from 'react';
import Header from './header.js';
import Main from './main.js';
import Multiplication from './multiplication.js';
import './main1.css';

class Details extends Component {
  constructor(props) {
    super();
    this.state = {
      employeeDetails: [
        {
          EmployeeId: 'ABS100',
          EmployeeName: 'Savee',
          EmployeeEmaild: 'Savee@abc.com',
        },
        {
          EmployeeId: 'AXS101',
          EmployeeName: 'Max',
          EmployeeEmaild: 'Max@abc.com',
        },
        {
          EmployeeId: 'WAS102',
          EmployeeName: 'Bob',
          EmployeeEmaild: 'Bob@abc.com',
        },
        {
          EmployeeId: 'TEF103',
          EmployeeName: 'Leo',
          EmployeeEmaild: 'Leo@abc.com',
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2> ASSIGNMENT 2 : </h2>
        <Header />
        <table>
          <tbody>
            <tr>
              {Object.keys(this.state.employeeDetails[0]).map((value) => {
                return <th key={value.toString()}>{value}</th>;
              })}
            </tr>
            {this.state.employeeDetails.map((val, index) => (
              <Main key={index.toString()} employeedetail={val} />
            ))}
          </tbody>
        </table>
        <Multiplication />
      </div>
    );
  }
}

export default Details;
