import React from 'react';
class Child extends React.Component {
  onTrigger = (event) => {
    this.props.parentCallback([
      event.target.myname.value,
      event.target.mylocation.value,
    ]);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2> ASSIGNMENT 4 : </h2>
        <form onSubmit={this.onTrigger}>
          <label> CompanyName : </label>
          <input type="text" name="myname" placeholder="Enter CompanyName" />
          <br></br>
          <br></br>
          <label> CompanyLocation : </label>
          <input
            type="text"
            name="mylocation"
            placeholder="Enter CompanyLocation"
          />
          <br></br>
          <br></br>
          <input type="submit" value="Submit" />
          <br></br>
          <br></br>
        </form>
      </div>
    );
  }
}
export default Child;
