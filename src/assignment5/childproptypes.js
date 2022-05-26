import React from 'react';
class Child extends React.Component {
  onTrigger = (event) => {
    this.props.callback([
      event.target.myname.value,
      event.target.mycity.value,
      event.target.myage.value,
    ]);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h2> ASSIGNMENT 5 : </h2>
        <form onSubmit={this.onTrigger}>
          <label> Name : </label>
          <input type="text" name="myname" placeholder="Enter Name" />
          <br></br>
          <br></br>
          <label> Preferred City: </label>
          <input type="text" name="mycity" placeholder="Enter Preferred CIty" />
          <br></br>
          <br></br>
          <label> Age: </label>
          <input type="text" name="myage" placeholder="Enter Age" />
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
