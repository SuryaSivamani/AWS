import React, { Component } from "react";

class Assign extends Component {
  state = {
    newUser: { TotalAmount:100,Insurance: "", Mortgage: "",ChildCare: "", Grocery: ""}
  };
  handleInsurance(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        Insurance: value
      }
    }));
  }
  handleMortgage(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        Mortgage: value
      }
    }));
}

handleChildCare(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        ChildCare: value
      }
    }));
}
handleGrocery(e) {
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser,
        Grocery: value
      }
    }));
}


getTotal() {
  return parseInt(this.state.newUser.TotalAmount)-(parseInt(this.state.newUser.Insurance) + parseInt(this.state.newUser.Mortgage) +parseInt(this.state.newUser.Grocery) +parseInt(this.state.newUser.ChildCare));
}

render() {
  return (
    <div>
        <label>React Assignment</label>
        <p>Total Amount is :{this.state.newUser.TotalAmount}
        </p>
        <br>
        </br>
        Balance: {this.getTotal()}
        <br></br>
        <label>Insurance:</label>
      <input
        type="text"
        onChange={this.handleInsurance.bind(this)}
        placeholder="Enter Insurance"
      />
      <br>
      </br>
      <label>Mortgage:</label>
      <input
        type="text"
        onChange={this.handleMortgage.bind(this)}
        placeholder="Enter Mortgage"
      />
      <br>
      </br>
      <label>ChildCare:</label>
       <input
        type="text"
        onChange={this.handleChildCare.bind(this)}
        placeholder="Enter ChildCare"
      />
      <br>
      </br>
      <label>Grocery:</label>
       <input
        type="text"
        onChange={this.handleGrocery.bind(this)}
        placeholder="Enter Grocery"
      />

      
    </div>
  );
}
}
export default Assign;
