import React from 'react';
import './mains.css';

function Main(props) {
  return (
    <tr>
      <td className={'mainstd'}>{props.studentdetail.StudentId}</td>
      <td className={'mainstd'}>{props.studentdetail.StudentName}</td>
      <td className={'mainstd'}>{props.studentdetail.Marks}</td>
    </tr>
  );
}

export default Main;
