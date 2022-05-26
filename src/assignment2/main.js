import React from 'react';
import './main1.css';

function Main(props) {
  return (
    <tr>
      <td>{props.employeedetail.EmployeeId}</td>
      <td>{props.employeedetail.EmployeeName}</td>
      <td>{props.employeedetail.EmployeeEmaild}</td>
    </tr>
  );
}

export default Main;
